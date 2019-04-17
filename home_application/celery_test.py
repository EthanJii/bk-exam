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
                        cat /proc/loadavg
                        free -m
                        df -h
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
            time.sleep(2)
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
            time.sleep(2)
            log_content = json.loads(res.content)['data'][0]['step_results'][0]['ip_logs'][0]['log_content']
            if log_content:
                log_list = log_content.split('\n')
                five_load = log_content.split('\n')[0].split(' ')
                men = log_content.split('\n')[2].split(' ')
                centos = log_content.split('\n')[5].split(' ')
                devtmpfs = log_content.split('\n')[6].split(' ')
                tmpfs = log_content.split('\n')[7].split(' ')
                load_list = []
                men_list = []
                centos_list = []
                devtmpfs_list = []
                tmpfs_list = []
                for a in five_load:
                    if a != '':
                        load_list.append(a)
                    else:
                        continue
                for a in men:
                    if a != '':
                        men_list.append(a)
                    else:
                        continue
                for a in centos:
                    if a != '':
                        centos_list.append(a)
                    else:
                        continue
                for a in devtmpfs:
                    if a != '':
                        devtmpfs_list.append(a)
                    else:
                        continue
                for a in tmpfs:
                    if a != '':
                        tmpfs_list.append(a)
                    else:
                        continue
                fiv = {
                    'ip': host['ip'],
                    'load': five_load[1],
                    'when_create': datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                }
                total_mem = men_list[1]
                used_mem = men_list[2]
                free_mem = eval(total_mem) - eval(used_mem)
                usage_rate = eval(used_mem) / eval(total_mem)
                file = {
                    'ip': host['ip'],
                    'total_mem': total_mem,
                    'usage': used_mem,
                    'free_mem': free_mem,
                    'usage_rate': usage_rate,
                }
                centos = {
                    'ip': host['ip'],
                    'system': centos_list[0],
                    'size': centos_list[1],
                    'used': centos_list[2],
                    'avail': centos_list[3],
                    'used_rate': centos_list[4],
                    'amount': centos_list[5],
                    'when_create': datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                }
                devtmpfs = {
                    'ip': host['ip'],
                    'system': devtmpfs_list[0],
                    'size': devtmpfs_list[1],
                    'used': devtmpfs_list[2],
                    'avail': devtmpfs_list[3],
                    'used_rate': devtmpfs_list[4],
                    'amount': devtmpfs_list[5],
                    'when_create': datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                }
                tmpfs = {
                    'ip': host['ip'],
                    'system': tmpfs_list[0],
                    'size': tmpfs_list[1],
                    'used': tmpfs_list[2],
                    'avail': tmpfs_list[3],
                    'used_rate': tmpfs_list[4],
                    'amount': tmpfs_list[5],
                    'when_create': datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                }
                FiveLoad.objects.create(**fiv)
                HostMen.objects.create(**file)
                FileInformation.objects.create(**centos)
                FileInformation.objects.create(**devtmpfs)
                FileInformation.objects.create(**tmpfs)
    except Exception,e :
        logger.info(e)
