# -*- coding: utf-8 -*-
"""
Tencent is pleased to support the open source community by making 蓝鲸智云(BlueKing) available.
Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
You may obtain a copy of the License at http://opensource.org/licenses/MIT
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
"""

from common.mymako import render_mako_context, render_json
from blueking.component.shortcuts import get_client_by_request
from home_application.celery_tasks import *
import datetime
status_code = {
    1: '未执行',
    2: '正在执行',
    3: '执行成功',
    4: '执行失败',
}



def test(request):
    return render_json({
        "result": "true",
        "message": "success",
        "data":{
            "user": request.user.username,
            "time": str(datetime.datetime.now()).split(".")[0]
        }
    })


def home(request):
    """
    首页
    """
    return render_mako_context(request, '/home_application/home.html')


# 获取业务列表
def get_app_list(request):
    client = get_client_by_request(request)
    result = get_business_by_user(client, request.user.username)
    return_data = []
    for i in result["data"]:
        return_data.append({
            "id": i['bk_biz_id'],
            "text": i['bk_biz_name'],
        })
    return render_json({"result": True, "data": return_data})


def get_app_server_list(request):
    try:
        app_id = request.GET["app_id"]
        if not app_id:
            return render_json({"result": True, "data": []})
        client = get_client_by_request(request)
        result = get_server_by_app(client, app_id, request.user.username)
        return render_json(result)
    except Exception, e:
        logger.exception(e)
        return render_json({"result": False, "data": [u"系统异常，请联系管理员！"]})


def search_server_by_filter(request):
    filter_ip = json.loads(request.body)["ip"]
    res = Servers.objects.filter(ip_address__icontains=filter_ip)
    return render_json({"result": True, "data": [i.to_dic() for i in res]})


def search_host(client, filter_obj):
    kwargs = {
        "condition": [
            {
                "bk_obj_id": "biz",
                "fields": [
                    "default",
                    "bk_biz_id",
                    "bk_biz_name",
                ],
                # 根据业务ID查询主机
            },
            # {
            #     "bk_obj_id": "set",
            #     "fields": [],
            #     "condition": [
            #         {
            #             "field": "bk_set_id",
            #             "operator": "$eq",
            #             "value": 33
            #         }
            #     ]
            # }
        ]
    }
    if filter_obj["set"].strip():
        kwargs = {
            "condition": [
                {
                    "bk_obj_id": "biz",
                    "fields": [
                        "default",
                        "bk_biz_id",
                        "bk_biz_name",
                    ],
                    # 根据业务ID查询主机
                },
                {
                    "bk_obj_id": "set",
                    "fields": [],
                    "condition": [
                        {
                            "field": "bk_set_id",
                            "operator": "$eq",
                            "value": int(filter_obj["set"])
                        }
                    ]
                }
            ]
        }
    result = client.cc.search_host(kwargs)
    return result


def search_server_perform(request):
    server_obj = json.loads(request.body)
    client = get_client_by_request(request)
    check_app = {
        "app_id": server_obj["app_id"],
        "ip_list": [{"ip": server_obj["ip_address"], "bk_cloud_id": server_obj["cloud_id"]}],
    }
    result = get_server_perform(client, check_app, request.user.username)
    if result["result"]:
        script_result = get_task_ip_log(client, check_app["app_id"], result["data"], request.user.username)
        if script_result:
            return_data = format_log_content(script_result[0]["log_content"])
            result["data"] = return_data
    return render_json(result)


def add_to_celery_list(request):
    server_obj = json.loads(request.body)
    Servers.objects.update_or_create(
        ip_address=server_obj["ip_address"],
        cloud_id=server_obj["cloud_id"],
        app_id=server_obj["app_id"],
        os_name=server_obj["os_name"],
        cloud_name=server_obj["cloud_name"], defaults={
            "is_deleted": False,
            "created_by": request.user.username

        }
    )
    return render_json({"result": True})


def remove_for_celery_list(request):
    server_obj = json.loads(request.body)
    Servers.objects.filter(
        ip_address=server_obj["ip_address"],
        cloud_id=server_obj["cloud_id"],
        app_id=server_obj["app_id"]
    ).update(is_deleted=True)
    return render_json({"result": True})


def search_server_perform_list(request):
    filter_obj = json.loads(request.body)
    if filter_obj["appID"] == "":
        servers = Servers.objects.filter(is_deleted=False)
    else:
        servers = Servers.objects.filter(app_id=filter_obj["appID"],is_deleted=False)
    if filter_obj["ip"].strip():
        ip_list = filter_obj["ip"].split("\n")
        servers = servers.filter(ip_address__in=ip_list,is_deleted=False)
    return_data = []
    perform_obj = {}
    for i in servers:
        key = i.ip_address.replace(".", "_")
        result = get_one_server_line_chart_data(i)
        one_obj = {
            "ip_address": i.ip_address,
            "name": 'performObj.ip%s' % key,
            "categories": result['categories']
        }
        return_data.append(one_obj)
        perform_obj["ip" + key] = result["data"]
    return render_json({"result": True, "data": return_data, "perform_obj": perform_obj})


def get_one_server_line_chart_data(i={}):
    date_now = datetime.datetime.now() + datetime.timedelta(hours=-1)

    server_performs = ServerPerformance.objects.filter(server_id=i.id, when_created__gt=str(date_now).split(".")[0]).order_by("id")
    one_obj = [
        {"name": "cpu", "data": [i.cpu_usage for i in server_performs]},
        {"name": "mem", "data": [i.mem_usage for i in server_performs]},
        {"name": "disk", "data": [i.disk_usage for i in server_performs]},
    ]
    return {"categories": [i.when_created for i in server_performs], "data": one_obj}


def add_server(request):
    ip_info = json.loads(request.body)["data"]["ip_info"]
    is_exist = Servers.objects.filter(ip_address=ip_info["ip_address"]).exists()
    if is_exist:
        return render_json({"result": False, "data": [u"该主机已经存在"]})
    serverObj = Servers.objects.create(
        ip_address= ip_info["ip_address"],
        host_name= ip_info["host_name"],
        os_name= 'Linux' if ip_info["os_type"] == '1' else 'Windows',
        app_name= ip_info["app_name"],
        cloud_name= ip_info["cloud_name"],
        app_id= ip_info["app_id"],
        cloud_id= ip_info["cloud_id"],
        created_by=request.user.username
    )
    # 可以这个时候去执行celery获取一些信息存入到数据库
    # get_other_info.delay(serverObj.id) # 启用celery 否则报错哦

    return render_json({"result": True})


def delete_server(request):
    server_id = json.loads(request.body)["id"]
    Servers.objects.filter(id=server_id).delete()
    return render_json({"result": True})


def get_server_details(request):
    server_id = json.loads(request.body)["server_id"]
    serverObj = Servers.objects.get(id=server_id)
    # one_app = {
    #     "app_id": serverObj.app_id,
    #     "ip_list": [{"ip": serverObj.ip_address, "bk_cloud_id": serverObj.cloud_id}]
    # }
    # client = get_client_by_user(serverObj.created_by)
    # script_content = """#!/bin/bash
    #     free -m
    #     echo '@@@@@'
    #     df -h
    #     """
    #
    # script_account = "root"
    # result = fast_execute_script(one_app, client, serverObj.created_by, script_account, script_content)
    # if result["result"]:
    #     one_app_result = get_task_ip_log(client, serverObj.app_id, result["data"], serverObj.created_by)
    #     mem_result = one_app_result[0]["log_content"].split('@@@@@')[0]
    #     disk_result = one_app_result[0]["log_content"].split('@@@@@')[1]
    #     mem_info = mem_result.strip().split("\n")[1]
    #     mem_list = [m for m in mem_info.split(" ") if m]
    #     total = mem_list[1]
    #     mem_info = {
    #         "total": mem_list[1],
    #         "used_rate": float(mem_list[2]) / float(total),
    #         "free_rate": (float(total)-float(mem_list[2])) / float(total)
    #     }
    #
    #     disk_list = disk_result.strip().split("\n")[1:]
    #     disk_info = []
    #     for i in disk_list:
    #         info = [d for d in i.strip().split(" ") if d]
    #         disk_info.append({
    #             "sys_name": info[0],
    #             "total": info[1],
    #             "used": info[2],
    #             "free": info[3],
    #             "rate": info[4],
    #             "mounted": info[5],
    #         })

    date_now = datetime.datetime.now() + datetime.timedelta(hours=-1)

    res = ServerPerformance.objects.filter(server_id=server_id, when_created__gt=str(date_now).split(".")[0]).order_by("id")
    # 一图多线在one_obj添加对象即可
    one_obj = [
        {"name": "load", "data": [i.load for i in res]},
        # {}
    ]

    load_info = {
        "data": one_obj,
        "categories": [i.when_created for i in res]
    }
    try:
        mem_info = eval(serverObj.men_info)
    except:
        mem_info = {}
    try:
        disk_info = eval(serverObj.disk_info)
    except:
        disk_info = {}

    return render_json({"result": True, "mem_info": mem_info, "disk_info": disk_info, "load_info": load_info})


def modify_server(request):
    server_info = json.loads(request.body)["data"]
    # 复杂版修改 需调试
    # ip_info = server_info["ip_info"]
    # is_exist = Servers.objects.filter(ip_address=ip_info["ip_address"]).exists()
    # if is_exist:
    #     return render_json({"result": False, "data": [u"该主机已经存在"]})
    # Servers.objects.filter(id=server_info["id"]).update(
    #     ip_address=ip_info["ip_address"],
    #     host_name=ip_info["host_name"],
    #     os_name='Linux' if ip_info["os_type"] == '1' else 'Windows',
    #     app_name=ip_info["app_name"],
    #     cloud_name=ip_info["cloud_name"],
    #     app_id=ip_info["app_id"],
    #     cloud_id=ip_info["cloud_id"],
    #     created_by=request.user.username
    # )
    # Serverperformance对应的删除等操作

    # 简单版
    serverObj = Servers.objects.get(id=server_info["id"])
    serverObj.note = server_info["note"]
    serverObj.save()
    return render_json({"result": True})


def get_load_by_time(request):
    info = json.loads(request.body)
    server_id = info["server"]
    res = ServerPerformance.objects.filter(server_id=server_id, when_created__range=[info["begin_time"], info["end_time"]]).order_by("id")
    one_obj = [
        {"name": "load", "data": [i.load for i in res]}
    ]

    load_info = {
        "data": one_obj,
        "categories": [i.when_created for i in res]
    }
    return render_json({"result": True, "load_info": load_info})


def search_server_by_server(request):
    filter_obj = json.loads(request.body)
    client = get_client_by_request(request)
    result = search_host(client, filter_obj)
    if not result["result"]:
        return render_json({"result": False, "data": []})
    return_data = []
    for i in result["data"]["info"]:
        # 过滤掉windows
        # if i["host"]["bk_os_type"] != "1":
        #     continue
        one_obj = {
            "app_name": i["biz"][0]["bk_biz_name"],
            "ip_address": i["host"]["bk_host_innerip"],
            "host_name": i["host"]["bk_host_name"],
            "os_name": i["host"]["bk_os_name"],
            "cloud_name": i["host"]["bk_cloud_id"][0]["bk_inst_name"],
            "cloud_id": i["host"]["bk_cloud_id"][0]["bk_inst_id"],
            "app_id": i["biz"][0]["bk_biz_id"],
            # "cpu_usage": "--",
            # "mem_usage": "--",
            # "disk_usage": "--",
        }
        # one_obj["is_add"] = Servers.objects.filter(app_id=one_obj["app_id"], ip_address=one_obj["ip_address"],
        #                                            cloud_id=one_obj["cloud_id"], is_deleted=False).exists()
        return_data.append(one_obj)
    return render_json({"result": True, "data": return_data})


def search_set_by_app(request):
    filter_obj = json.loads(request.body)
    app_id = filter_obj["app_id"]
    client = get_client_by_request(request)
    result = search_set(client, request.user.username, app_id)
    if not result["result"]:
        return render_json({"result": False, "data": []})
    return_data = []
    for i in result["data"]["info"]:
        one_obj = {
            "id": i["bk_set_id"],
            "text": i["bk_set_name"],
            "info": {
                "set_id": i["bk_set_id"],
                "set_name": i["bk_set_name"],
                "app_id": i["bk_biz_id"]
            }
        }
        return_data.append(one_obj)
    return render_json({"result": True, "data": return_data})


def search_set(client, username, app_id):
    kwargs = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": username,
        "bk_biz_id": app_id
    }
    result = client.cc.search_set(kwargs)
    return result


def execute_job(request):
    try:
        filter_obj = json.loads(request.body)
        app_id = filter_obj["app_id"]["app_id"]
        server_list = filter_obj["data"]
        ip_list = []
        for i in server_list:
            ip_list.append({
                "bk_cloud_id": i["cloud_id"],
                "ip": i["ip_address"]
            })
            app_name = i["app_name"]
        client = get_client_by_request(request)
        # to_execute.delay(filter_obj, app_id, server_list, ip_list, request, client, app_name)
        # result = get_job_detail(client, request.user.username, app_id)
        # if result["result"]:
        #     job_info = result["data"]
        #     res = cc_execute_job(client, job_info, request.user.username, app_id, ip_list, app_name)
        #     if res:
        #         return render_json({"result": True})
        #     else:
        #         return render_json({"result": False})
        return render_json({"result": True})
    except Exception, e:
        print e


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
    return True


def search_history(request):
    filter_obj = json.loads(request.body)
    app_id = filter_obj["app_id"]
    if not app_id:
        res = JobInfo.objects.all()
    else:
        if filter_obj["begin_time"] == '' or filter_obj["end_time"] == '':
            res = JobInfo.objects.filter(app_id=app_id).order_by("id")
        else:
            res = JobInfo.objects.filter(app_id=app_id, when_created__range=[filter_obj["begin_time"], filter_obj["end_time"]]).order_by("id")
    # res = JobInfo.objects.filter(app_id=app_id).order_by("id")
    return_data = []
    for i in res:
        log_content = ''
        logs = eval(i.ip_log_info)
        for j in logs:
            log_content += j["ip"] + "|" + j["log_content"] + "\n\n\n\n"
        return_data.append({
            "app_id": i.app_name,
            "account": i.user_name,
            "job_id": i.job_id,
            "ip_list": "\n".join(eval(i.ip_lists)),
            "status": i.status,
            "logs": log_content,
            "when_created": i.when_created
        })
    return  render_json({"result":True, "data": return_data})
