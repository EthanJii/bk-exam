# -*- coding: utf-8 -*-
"""
Tencent is pleased to support the open source community by making 蓝鲸智云(BlueKing) available.
Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
You may obtain a copy of the License at http://opensource.org/licenses/MIT
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.

celery 任务示例

本地启动celery命令: python  manage.py  celery  worker  --settings=settings
周期性任务还需要启动celery调度命令：python  manage.py  celerybeat --settings=settings


普通celery 任务
task.delay(a, b, c)

定时celery 任务
1 run_time = datetime.datetime.strptime(start_time, "%Y-%m-%d %H:%M:%S")  开始任务的时间
2 run_time=datetime.datetime.now() + datetime.timedelta(seconds=10)  10s之后
task.apply_async(args=[a, b], eta=run_time)
"""
import datetime

from celery import task
from celery.schedules import crontab
from celery.task import periodic_task

from blueking.component.shortcuts import get_client_by_user
from home_application.esb_helper import *
from home_application.models import *


# 周期任务
@periodic_task(run_every=crontab(minute='*/1', hour='*', day_of_week="*"))
def get_servers_info():
    logger.info(1)
    res = Servers.objects.all()
    for m in res:
        if not m.men_info or not m.disk_info:
            get_other_info.delay(m.id)

    app_list = Servers.objects.all().values("app_id", "created_by").distinct()
    run_apps = []
    for i in app_list:
        servers = Servers.objects.filter(app_id=i["app_id"], is_deleted=False)
        one_app = {
            "app_id": i["app_id"],
            "ip_list": [{"ip": u.ip_address, "bk_cloud_id": u.cloud_id} for u in servers],
        }
        client = get_client_by_user(i["created_by"])
        result = get_server_perform(client, one_app, i["created_by"])
        if result["result"]:
            run_apps.append({"app_id": i["app_id"], "job_instance_id": result["data"], "username": i["created_by"]})
    performance_list = []
    for i in run_apps:
        client = get_client_by_user(i["username"])
        one_app_result = get_task_ip_log(client, i["app_id"], i["job_instance_id"], i["username"])
        performance_list += create_server_perform(one_app_result, i["app_id"])
    ServerPerformance.objects.bulk_create(
        performance_list, batch_size=500
    )

# 执行脚本
def get_server_perform(client, check_app, username):
    script_content = """#!/bin/bash
    cat /proc/loadavg
    """
    script_account = "root"
    result = fast_execute_script(check_app, client, username, script_account, script_content)
    return result


# 处理结果
def format_log_content(log_content):
    log_result = log_content.strip().split(" ")
    loadavg = log_result[1]
    return loadavg


def create_server_perform(one_app_result, app_id):
    performance_list = []
    for i in one_app_result:
        if not i["is_success"]:
            continue
        server_result = format_log_content(i["log_content"])
        server = Servers.objects.get(app_id=app_id, ip_address=i["ip"], cloud_id=i["bk_cloud_id"])
        performance_list.append(ServerPerformance(
            server_id=server.id,
            load=server_result,
            when_created=str(datetime.datetime.now()).split(".")[0]
        ))
    return performance_list


@task
def get_other_info(server_id):
    serverObj = Servers.objects.get(id=server_id)
    one_app = {
        "app_id": serverObj.app_id,
        "ip_list": [{"ip": serverObj.ip_address, "bk_cloud_id": serverObj.cloud_id}]
    }
    client = get_client_by_user(serverObj.created_by)
    script_content = """#!/bin/bash
            free -m
            echo '@@@@@'
            df -h
            """

    script_account = "root"
    result = fast_execute_script(one_app, client, serverObj.created_by, script_account, script_content)
    if result["result"]:
        one_app_result = get_task_ip_log(client, serverObj.app_id, result["data"], serverObj.created_by)
        mem_result = one_app_result[0]["log_content"].split('@@@@@')[0]
        disk_result = one_app_result[0]["log_content"].split('@@@@@')[1]
        mem_info = mem_result.strip().split("\n")[1]
        mem_list = [m for m in mem_info.split(" ") if m]
        total = mem_list[1]
        mem_info = {
            "total": mem_list[1],
            "used_rate": float(mem_list[2]) / float(total),
            "free_rate": (float(total) - float(mem_list[2])) / float(total)
        }

        disk_list = disk_result.strip().split("\n")[1:]
        disk_info = []
        for i in disk_list:
            info = [d for d in i.strip().split(" ") if d]
            disk_info.append({
                "sys_name": info[0],
                "total": info[1],
                "used": info[2],
                "free": info[3],
                "rate": info[4],
                "mounted": info[5],
            })
        serverObj.disk_info = disk_info
        serverObj.men_info = mem_info
        serverObj.save()


@task
def to_execute(filter_obj, app_id, server_list, ip_list, request, client, app_name):
    result = get_job_detail(client, request.user.username, app_id)
    if result["result"]:
        job_info = result["data"]
        res = cc_execute_job(client, job_info, request.user.username, app_id, ip_list, app_name)

def get_job_detail(client, username, app_id):
    kwargs = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": username,
        "bk_biz_id": app_id,
        "bk_job_id": 1019
    }
    result = client.cc.get_job_detail(kwargs)
    return result

def cc_execute_job(client, job_info, username, app_id, ip_list, app_name):
    kwargs = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": username,
        "bk_biz_id": app_id,
        "bk_job_id": 1019,
        "steps": [{
            "script_timeout": 1000,
            "script_param": job_info["steps"][0]["script_param"],
            "ip_list": ip_list,
            # "script_id": 1,
            "script_content": base64.b64encode(job_info["steps"][0]["script_content"]),
            "step_id": job_info["steps"][0]["step_id"],
            "account": job_info["steps"][0]["account"],
            "script_type": 1
        }]
    }
    result = client.cc.execute_job(kwargs)
    if result["result"]:
        job_instance_id = result["data"]["job_instance_id"]
        # 获取状态
        kwargs = {
            "bk_app_code": APP_ID,
            "bk_app_secret": APP_TOKEN,
            "bk_username": username,
            "bk_biz_id": app_id,
            "job_instance_id": job_instance_id,
        }
        status_result = client.cc.get_job_instance_status(kwargs)
        if status_result["result"]:
            status = status_result["data"]["job_instance"]["status"]
            accoutnt = status_result["data"]["job_instance"]["operator"]
            log_content = get_task_ip_log(client, app_id, job_instance_id, username, count=0)
            ip_lists = []
            log_lists = []
            for i in log_content:
                ip_lists.append(i["ip"])
                log_lists.append(i["log_content"])
            JobInfo.objects.create(
                app_id=app_id,
                user_name=accoutnt,
                app_name=app_name,
                # status=status_code[status],
                status='成功',
                ip_lists=ip_lists,
                when_created= str(datetime.datetime.now()).split(".")[0],
                log_lists=log_lists,
                ip_log_info=log_content,
                job_id = job_instance_id
            )
