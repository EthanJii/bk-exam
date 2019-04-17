# -*- coding: utf-8 -*-
"""
celery 任务示例

本地启动celery命令: python manage.py celery worker --settings=settings
周期性任务还需要启动celery调度命令：python manage.py celerybeat --settings=settings
"""
import datetime

from celery import task
from celery.schedules import crontab
from celery.task import periodic_task
# from __future__ import absolute_import
from celery.schedules import crontab
from conf.default import LOGOUT_URL,BK_PAAS_HOST,APP_ID,APP_TOKEN
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse, HttpRequest, HttpResponseBadRequest
from models import Hostinformation, Load, Host, HostServer,FiveLoad,FileInformation,HostMen
import datetime
import logging
import json
import base64
from common.log import logger
import time
import requests

# BK_PAAS_HOST = "http://paas.bk-dev.com"
# APP_ID = "jizhicheng-exam"
# APP_TOKEN = "25de6450-e424-4684-a6bb-e58843967e08"


# 负载脚本
def nginx_script(hostregionid, hostbusinessid, hostip):
    url = BK_PAAS_HOST + "/api/c/compapi/v2/job/fast_execute_script/"
    params = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": "admin",
        "bk_biz_id": hostbusinessid,
        "script_content": base64.b64encode('cat /proc/loadavg'),
        "account": "root",
        "script_type": 1,
        "ip_list": [
            {
                "bk_cloud_id": hostregionid,
                "ip": hostip
            }
        ],

    }
    rp = requests.post(url, json.dumps(params), verify=False)
    if rp.status_code != 200:
        print('执行脚本失败{0}'.format(rp.status_code))
    res = json.loads(rp.content)
    if not res['result']:
        print('执行脚本失败原因{0},'.format(res['sucess']))
    datalist = {'bizid': hostbusinessid, 'job_instance_id': res['data']['job_instance_id']}
    return datalist


# 进入缓冲 拿到值出方法
# 防止 result[0]['is_finished']拿不到数据 休息五秒进入进入方法进行判断
def get_result(params):
    url = BK_PAAS_HOST + "/api/c/compapi/v2/job/get_job_instance_log/"
    rp = requests.get(url, params=params, verify=False)
    if rp.status_code != 200:
        print('查询状态失败{0}'.format(rp.status_code))
    else:
        res = json.loads(rp.content)
        result = res['data']
        if not result[0]['is_finished']:
            time.sleep(5)
            get_result(params)
        else:
            return result[0]['step_results']


@periodic_task(run_every=crontab(minute='*/2', hour='*', day_of_week="*"))
def send_msg():
    logger.info('begin')
    HostData = list(Hostinformation.objects.all())
    for val in HostData:
        data = nginx_script(val.hostregionid, val.hostbusinessid, val.hostip)
        url = BK_PAAS_HOST + "/api/c/compapi/v2/job/get_job_instance_log/"
        params = {
            "bk_app_code": APP_ID,
            "bk_app_secret": APP_TOKEN,
            "bk_username": "admin",
            "bk_biz_id": val.hostbusinessid,
            "job_instance_id": data['job_instance_id']
        }
        rp = requests.get(url, params=params, verify=False)
        if rp.status_code != 200:
            print('查询状态失败{0}'.format(rp.status_code))
        res = json.loads(rp.content)
        result = res['data']
        time.sleep(5)
        step_results = get_result(params)
        for item in step_results:
            ip_log = item['ip_logs']
            num = ip_log[0]['log_content'].strip().split(' ')[1]
            datatime = ip_log[0]['start_time']
            dictdata = datatime.split(' ')
            dictdata.pop()
            aa = dictdata[0] + ' ' + dictdata[1]
            aa = aa.encode("utf-8")
            startTime = datetime.datetime.strptime(aa, '%Y-%m-%d %H:%M:%S')
            Load(num=num, datatime=startTime, server_id=val.id).save()
        logger.info("start count".format())


@task()
def async_task(x, y):
    """
    定义一个 celery 异步任务
    """
    logger.error(u"celery 定时任务执行成功，执行结果：{:0>2}:{:0>2}".format(x, y))
    return x + y


def execute_task():
    """
    执行 celery 异步任务

    调用celery任务方法:
        task.delay(arg1, arg2, kwarg1='x', kwarg2='y')
        task.apply_async(args=[arg1, arg2], kwargs={'kwarg1': 'x', 'kwarg2': 'y'})
        delay(): 简便方法，类似调用普通函数
        apply_async(): 设置celery的额外执行选项时必须使用该方法，如定时（eta）等
                      详见 ：http://celery.readthedocs.org/en/latest/userguide/calling.html
    """
    now = datetime.datetime.now()
    logger.error(u"celery 定时任务启动，将在60s后执行，当前时间：{}".format(now))
    # 调用定时任务
    async_task.apply_async(args=[now.hour, now.minute], eta=now + datetime.timedelta(seconds=60))


@periodic_task(run_every=crontab(minute='*/5', hour='*', day_of_week="*"))
def get_time():
    """
    celery 周期任务示例

    run_every=crontab(minute='*/5', hour='*', day_of_week="*")：每 5 分钟执行一次任务
    periodic_task：程序运行时自动触发周期任务
    """
    execute_task()
    now = datetime.datetime.now()
    logger.error(u"celery 周期任务调用成功，当前时间：{}".format(now))


@periodic_task(run_every=crontab(minute='*', hour='*', day_of_week="*"))
def add_monitor():
    try:
        logger.info('start')
        host_list = list(Host.objects.all().values())
        for host in host_list:
            url = BK_PAAS_HOST + "/api/c/compapi/v2/job/fast_execute_script/"
            params = {
                "bk_app_code": APP_ID,
                "bk_app_secret": APP_TOKEN,
                "bk_username": 'admin',
                "bk_biz_id": 2,
                "script_content": base64.b64encode("""#!/bin/bash
                    MEMORY=$(free -m | awk 'NR==2{printf "%.2f%%", $3*100/$2 }')
                    DISK=$(df -h | awk '$NF=="/"{printf "%s", $5}')
                    CPU=$(top -bn1 | grep load | awk '{printf "%.2f%%", $(NF-2)}')
                    DATE=$(date "+%Y-%m-%d %H:%M:%S")
                    echo -e "$DATE|$MEMORY|$DISK|$CPU"
                    """),
                "account": "root",
                "script_type": 1,
                "ip_list": [
                    {
                        "bk_cloud_id": host['bk_cloud_id'],
                        "ip": host['ip']
                    }
                ],
            }
            rp = requests.post(url, json.dumps(params), verify=False)
            time.sleep(8)
            # 获取磁盘信息
            if not json.loads(rp.content)['data']:
                continue
            job_instance_id = json.loads(rp.content)['data']['job_instance_id']
            url = BK_PAAS_HOST + "/api/c/compapi/v2/job/get_job_instance_log/"
            params = {
                "bk_app_code": APP_ID,
                "bk_app_secret": APP_TOKEN,
                "bk_username": 'admin',
                "bk_biz_id": host['business_id'],
                "job_instance_id": job_instance_id
            }
            res = requests.get(url, params=params, verify=False)
            # time.sleep(2)
            log_content = json.loads(res.content)['data'][0]['step_results'][0]['ip_logs'][0]['log_content']
            if log_content:
                log_list = log_content.split('|')
                params = {
                    'ip': host['ip'],
                    'now_time': log_list[0].split('%')[0].encode("utf-8"),
                    'men': eval(log_list[1].split('%')[0].encode("utf-8")),
                    'disk': eval(log_list[2].split('%')[0].encode("utf-8")),
                    'cpu': eval(log_list[3].split('%')[0].encode("utf-8")),
                }
                HostServer.objects.create(**params)
    except Exception,e :
        logger.info(e)
