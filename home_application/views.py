# -*- coding: utf-8 -*-
from common.mymako import render_mako_context, render_json
from conf.default import LOGOUT_URL,BK_PAAS_HOST,APP_ID,APP_TOKEN
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse, HttpRequest, HttpResponseBadRequest
from common.log import logger
import logging
import json
import requests
import base64
import time
from models import Hostinformation, Load, Host, HostServer, FiveLoad, FileInformation, HostMen
import datetime
from blueking.component.shortcuts import get_client_by_request

# BK_PAAS_HOST = "http://paas.bk-dev.com"
# APP_ID = "jizhicheng-exam"
# APP_TOKEN = "25de6450-e424-4684-a6bb-e58843967e08"


def home(request):
    # x = add_monitors()
    return render_mako_context(request, '/index.prod.html')


def login_info(request):
    from home_application.celery_tasks import add_monitor
    x = add_monitor()
    # add_monitors(request)
    resp = render_json({
        "result": True,
        "data": {
            "username": request.user.username,
            "logout_url": LOGOUT_URL
        }})
    from django.core.context_processors import csrf
    resp.set_cookie('cwcsrftoken', csrf(request)['csrf_token'])
    return resp


def test(request):
    return render_json({
        "result": "ok",
        "username": "admin"
    })


# 查询业务
def search_business(request):
    url = BK_PAAS_HOST + "/api/c/compapi/v2/cc/search_business/"
    params = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": request.user.username,
        "fields": [
            "bk_biz_id",
            "bk_biz_name"
        ],
        "page": {
            "start": 0,
            "sort": ""
        }
    }
    try:
        rp = requests.post(url, json.dumps(params), verify=False)
        if rp.status_code != 200:
            logger.exception('search_business error')
            return render_json({'result': False, 'message': '查询业务失败'})
        content = json.loads(rp.content)
        if not content['result']:
            logger.exception('search_business error{0}'.format(content['message']))
            return render_json({'result': False, 'message': '查询业务失败{0}'.format(content['message'])})
        data = content['data']['info']
        return render_json({'result': True, 'data': data})
    except Exception as e:
        logger.exception('search_business error')
        return render_json({'result': False, 'message': e.message})


# 根据业务获取主机
def search_host_by_business(request):
    url = BK_PAAS_HOST + "/api/c/compapi/v2/cc/search_host/"
    # dict_data = {
    #     'bk_biz_id': 2
    # }
    dict_data = json.loads(request.body)
    params = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": request.user.username,
        "bk_biz_id": dict_data['bk_biz_id'],
        "condition": [
        ],
        "page": {
            "start": 0,
            "limit": 100,
        }
    }
    try:
        rp = requests.post(url, json.dumps(params), verify=False)
        if rp.status_code != 200:
            logger.exception('search_host_by_business error')
            return render_json({'result': False, 'message': '查询主机失败'})
        content = json.loads(rp.content)
        if not content['result']:
            logger.exception('search_host_by_business error{0}'.format(content['message']))
            return render_json({'result': False, 'message': '查询主机失败{0}'.format(content['message'])})
        data = json.loads(rp.content)['data']['info']
        return render_json({'result': True, 'data': data})
    except Exception as e:
        logger.exception('search_host_by_business error')
        return render_json({'result': False, 'message': e.message})


# 获取所有主机ip
def InitialDataIPAll(request):
    print('***********进来主机IP--获取全部数据******************')
    url = BK_PAAS_HOST + "/api/c/compapi/v2/cc/search_host/"
    params = {
        "bk_app_code": "vm-self-v3",
        "bk_app_secret": "300fac83-854f-4e69-96d9-588b90acef80",
        "bk_username": request.user.username,
        "page": {
            "start": 0,
            "limit": 10,
        },
        "pattern": ""
    }
    try:
        rp = requests.post(url, json.dumps(params), verify=False)
        data = json.loads(rp.content)['data']['info']
        return render_json({'result': True, 'data': data})
    except Exception as e:
        return render_json({'result': False, 'data': e.message})


def add_host(request):
    dict_data = json.loads(request.body)
    try:
        res = Hostinformation.objects.create(
            hostip=dict_data['host']['bk_host_innerip'],
            hostname=dict_data['host']['bk_host_name'],
            hostbusiness=dict_data['biz']['bk_biz_name'],
            hostregion=dict_data['host']['bk_cloud_id'][0]['bk_inst_name'],
            hosttype=dict_data['host']['bk_os_name'],
            hostregionid=dict_data['host']['bk_cloud_id'][0]['bk_inst_id'],
            hostbusinessid=dict_data['biz']['bk_biz_id']
        )
        return render_json({'result': True, 'data': res.id})
    except Exception as e:
        logger.exception('add_host error')
        return render_json({'result': False, 'message': '添加主机失败{0}'.format(e.message)})


def delete_user(request):
    print('正在删除')
    try:
        id = request.GET.get('ip', None)
        print id
        Hostinformation.objects.filter(id=id).delete()
        return render_json({'result': True, 'data': None})
    except Exception as e:
        return render_json({'result': False, 'data': e.message})


# 查询主机信息
def queryall(request):
    print '查询所有'
    try:
        c = json.loads(request.body)['condition']
        data = list(Hostinformation.objects.filter(hostip__icontains=c).values())
        print type(data)
        return render_json({'result': True, 'data': data})
    except Exception as e:
        return render_json({'result': False, 'data': e.message})


# 内存使用情况脚本
def execute_script(hostregionid, hostbusinessid, hostip):
    url = BK_PAAS_HOST + "/api/c/compapi/v2/job/fast_execute_script/"
    params = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": "admin",
        "bk_biz_id": hostbusinessid,
        "script_content": base64.b64encode('free -m'),
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


def MemorySituation(request):
    print "进入查询磁盘内容"
    dict_data = json.loads(request.body)
    data = execute_script(dict_data['hostregionid'], dict_data['hostbusinessid'], dict_data['hostip'])
    url = BK_PAAS_HOST + "/api/c/compapi/v2/job/get_job_instance_log/"
    params = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": request.user.username,
        "bk_biz_id": data['bizid'],
        "job_instance_id": data['job_instance_id']
    }
    try:
        rp = requests.get(url, params=params, verify=False)
        if rp.status_code != 200:
            print('查询状态失败{0}'.format(rp.status_code))
        res = json.loads(rp.content)
        result = res['data']
        print res
        time.sleep(5)
        step_results = get_result(params)
        log = []
        str = ''
        for item in step_results:
            ip_log = item['ip_logs']
            for val in ip_log:
                log.append({
                    val['ip']: val['log_content'] if step_results[0]['ip_status'] == 9 else ''
                })
                str = val['log_content']
        a = [i for i in str.split("\n")[1].strip().split(" ") if i.strip()]
        resultdata = {'total': a[1], 'used': a[2], 'free': a[3]}
        return render_json({'result': True, 'data': resultdata})
    except Exception as e:
        return render_json({'result': False, 'data': e.message})


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


# 磁盘脚本
def host_script(hostregionid, hostbusinessid, hostip):
    url = BK_PAAS_HOST + "/api/c/compapi/v2/job/fast_execute_script/"
    params = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": "admin",
        "bk_biz_id": hostbusinessid,
        "script_content": base64.b64encode('df -h'),
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


# 获取磁盘信息
def hostdisk(request):
    print "进入获取磁盘信息"
    dict_data = json.loads(request.body)
    data = host_script(dict_data['hostregionid'], dict_data['hostbusinessid'], dict_data['hostip'])
    url = BK_PAAS_HOST + "/api/c/compapi/v2/job/get_job_instance_log/"
    params = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": request.user.username,
        "bk_biz_id": data['bizid'],
        "job_instance_id": data['job_instance_id']
    }
    try:
        rp = requests.get(url, params=params, verify=False)
        if rp.status_code != 200:
            print('查询状态失败{0}'.format(rp.status_code))
        res = json.loads(rp.content)
        result = res['data']
        time.sleep(5)
        step_results = get_hostresult(params)
        log = []
        str = ''
        for item in step_results:
            ip_log = item['ip_logs']
            for val in ip_log:
                log.append({
                    val['ip']: val['log_content'] if step_results[0]['ip_status'] == 9 else ''
                })
                str = val['log_content']  # 获取val['log_content']
        dick_list = [i for i in str.strip().split('\n') if i.strip()][1:]
        dick_list.pop()  # 去掉最后一组数据
        disk_info = []
        for i in dick_list:
            info = [d for d in i.strip().split(" ") if d]
            print info
            disk_info.append({
                "sys_name": info[0],
                "total": info[1],
                "used": info[2],
                "free": info[3],
                "rate": info[4],
                "mouted": info[5]
            })
        return render_json({'result': True, 'data': disk_info})
    except Exception as e:
        return render_json({'result': False, 'data': e.message})


# 进入缓冲 拿到值出方法
def get_hostresult(params):
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


# 查询负载
def queryload(request):
    try:
        c = json.loads(request.body)
        user = Load.objects.filter(server_id=c['id']).values()
        data = []
        for item in user:
            data.append({
                'year': item['datatime'].strftime("%Y-%m-%d %H:%M"),
                'value': float(item['num'])
            })
        return render_json({'result': True, 'data': data})
    except Exception as e:
        logger.exception('search_user error')
        return render_json({'result': False, 'message': e.message})


def query_entry(request):
    params = json.loads(request.body)
    if params.get('ip', False):
        info = query_host_by_business(params)
    else:
        info = query_host(params)
    host_list = []
    for item in info:
        host = {
            'ip': item['host']['bk_host_innerip'],
            'sys_name': item['host']['bk_os_name'],
            'host_name': item['host']['bk_host_name'],
            'cloud_region': item['host']['bk_cloud_id'][0]['bk_inst_name'],
            'men': item['host']['bk_mem'],
            'disk': item['host']['bk_disk'],
            'cpu': item['host']['bk_cpu'],
        }
        host_list.append(host)
    return render_json({'result': True, 'data': host_list})


def query_business(request):
    url = BK_PAAS_HOST + "/api/c/compapi/v2/cc/search_business/"
    params = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": request.user.username,
        "fields": [
            "bk_biz_id",
            "bk_biz_name"
        ],
        "page": {
            "start": 0,
            "sort": ""
        }
    }
    rp = requests.post(url=url, data=json.dumps(params), verify=False)
    data = json.loads(rp.content)['data']
    business_list = data['info']
    return render_json({'result': True, 'data': business_list})


# 根据业务查询主机
def query_host_by_business(request):
    url = BK_PAAS_HOST + "/api/c/compapi/v2/cc/search_host/"
    dict_data = json.loads(request.body)
    if dict_data.get('ip', False):
        ip = {"data": [dict_data['ip']],
              "exact": 1,
              'flag': 'bk_host_innerip'}
        params = {
            "bk_app_code": APP_ID,
            "bk_app_secret": APP_TOKEN,
            "bk_username": request.user.username,
            "bk_biz_id": dict_data['business'],
            "ip": ip,
            "condition": [],
            "page": {
                "start": 0,
                "limit": 100,
            }
        }
        rp = requests.post(url, json.dumps(params), verify=False)
        info = json.loads(rp.content)['data']['info']
        host_list = []
        for item in info:
            host = {
                'ip': item['host']['bk_host_innerip'],
                'sys_name': item['host']['bk_os_name'],
                'host_name': item['host']['bk_host_name'],
                'cloud_region': item['host']['bk_cloud_id'][0]['bk_inst_name'],
                'bk_cloud_id': item['host']['bk_cloud_id'][0]['bk_inst_id'],
                'men': item['host']['bk_mem'],
                'disk': item['host']['bk_disk'],
                'cpu': item['host']['bk_cpu'],
            }
            host_list.append(host)
        return render_json({'result': True, 'data': host_list})
    else:
        params = {
            "bk_app_code": APP_ID,
            "bk_app_secret": APP_TOKEN,
            "bk_username": request.user.username,
            "bk_biz_id": dict_data['business'],
            "page": {
                "start": 0,
                "limit": 100,
            },
            "pattern": ""
        }
        rp = requests.post(url, json.dumps(params), verify=False)
        info = json.loads(rp.content)['data']['info']
        host_list = []
        for item in info:
            host = {
                'bk_host_id': item['host']['bk_host_id'],
                'ip': item['host']['bk_host_innerip'],
                'sys_name': item['host']['bk_os_name'],
                'host_name': item['host']['bk_host_name'],
                'cloud_region': item['host']['bk_cloud_id'][0]['bk_inst_name'],
                'men': item['host']['bk_mem'],
                'disk': item['host']['bk_disk'],
                'cpu': item['host']['bk_cpu'],
            }
            host_list.append(host)
        return render_json({'result': True, 'data': host_list})


# 查询所有的主机
def query_host(request):
    url = BK_PAAS_HOST + "/api/c/compapi/v2/cc/search_host/"
    dict_data = json.loads(request.body)
    params = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": request.user.username,
        "bk_biz_id": 2,
        # "bk_biz_id": dict_data['business'],
        "page": {
            "start": 0,
            "limit": 10,
        },
        "pattern": ""
    }
    if dict_data["ip"]:
        params["ip"] = {
            "flag": "bk_host_innerip|bk_host_outerip",
            "exact": 1,
            "data": dict_data["ip"].strip().split("\n")
        }
    rp = requests.post(url, json.dumps(params), verify=False)
    info = json.loads(rp.content)['data']['info']
    host_list = []
    for item in info:
        host = {
            'bk_host_id': item['host']['bk_host_id'],
            'ip': item['host']['bk_host_innerip'],
            'sys_name': item['host']['bk_os_name'],
            'host_name': item['host']['bk_host_name'],
            'cloud_region': item['host']['bk_cloud_id'][0]['bk_inst_name'],
            'men': item['host']['bk_mem'],
            'disk': item['host']['bk_disk'],
            'cpu': item['host']['bk_cpu'],
        }
        host_list.append(host)
    return render_json({'result': True, 'data': host_list})


# 添加监控
def addHost(request):
    try:
        data = json.loads(request.body)['data']
        business_id = json.loads(request.body)['businessId']
        dict = {
            'ip': data['ip'],
            'business_id': business_id,
            'sys_name': data['sys_name'],
            'host_name': data['host_name'],
            'cloud_region': data['cloud_region'],
            'bk_cloud_id': 0,
            'men': data['men'],
            'disk': data['disk'],
            'cpu': data['cpu'],
        }
        Host.objects.create(**dict)
        return render_json({'result': True})
    except Exception as e:
        return render_json({'result': False, 'data': e.message})


# 移除监控
def removeHost(request):
    try:
        data = json.loads(request.body)['data']
        dict = {
            'ip': data['ip'],
            'sys_name': data['sys_name'],
            'host_name': data['host_name'],
            'cloud_region': data['cloud_region'],
            'men': data['men'],
            'disk': data['disk'],
            'cpu': data['cpu'],
        }
        Host.objects.filter(ip=data['ip']).delete()
        return render_json({'result': True})
    except Exception as e:
        return render_json({'result': False, 'data': e.message})


def add_monitors(request):
    host_list = list(Host.objects.all().values())
    for host in host_list:
        url = BK_PAAS_HOST + "/api/c/compapi/v2/job/fast_execute_script/"
        params = {
            "bk_app_code": APP_ID,
            "bk_app_secret": APP_TOKEN,
            "bk_username": 'admin',
            "bk_biz_id": host['business_id'],
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
    return render_json({'result': True})


def search_one_hour_data(request):
    try:
        ip = json.loads(request.body)['ip']
        now = datetime.datetime.now() - datetime.timedelta(hours=1)
        servers = list(HostServer.objects.filter(ip=ip).filter(now_time__gt=now).values())
        Xdata = []
        Mendata = []
        Diskdata = []
        CPUdata = []
        servers_data = {}
        if servers:
            for server in servers:
                Xdata.append(server['now_time'].encode("utf-8"))
                Mendata.append(server['men'])
                Diskdata.append(eval(server['disk'].encode("utf-8")))
                CPUdata.append(server['cpu'])
            servers_data = {
                'Xdata': Xdata,
                'Mendata': Mendata,
                'Diskdata': Diskdata,
                'CPUdata': CPUdata,
            }
        return render_json({'result': True, 'data': servers_data})
    except Exception as e:
        return render_json({'result': False, 'data': ''})


def search_host(request):
    try:
        data = json.loads(request.body)
        if data['ip']:
            hosts = list(Host.objects.filter(ip__icontains=data['ip']).values())
        else:
            hosts = list(Host.objects.all().values())
        return render_json({'result': True, 'data': hosts})
    except Exception as e:
        return render_json({'result': False})


# 查询主机状态页面
def search_all_data(request):
    try:
        data = json.loads(request.body)
        now = datetime.datetime.now() - datetime.timedelta(hours=18)
        five_list = list(FiveLoad.objects.filter(ip=data['ip']).filter(when_create__gt=now).values())
        # five_list = list(FiveLoad.objects.filter(ip=data['ip']).values())
        load_list = [i['load'] for i in five_list]
        time_list = [i['when_create'] for i in five_list]
        five_dict = {
            'ip_list': load_list,
            'time_list': time_list,
        }
        men_list = list(HostMen.objects.filter(ip=data['ip']).values())
        men_dict = [{'value': men_list[0]['usage'], 'name': '已使用'}, {'value': men_list[0]['free_mem'], 'name': '剩余'}]
        file_list = list(FileInformation.objects.filter(ip=data['ip']).values())[0:3]
        data = {
            'five_dict': five_dict,
            'men_dict': men_dict,
            'file_list': file_list,
        }
        return render_json({'result': True, 'data': data})
    except Exception as e:
        return render_json({'result': False})


# 查询集群
def search_set(request):
    try:
        url = BK_PAAS_HOST + "/api/c/compapi/v2/cc/search_set/"
        params = {
            "bk_app_code": APP_ID,
            "bk_app_secret": APP_TOKEN,
            "bk_biz_id": 2,
            "bk_username": 'admin',
        }
        rp = requests.post(url=url, data=json.dumps(params), verify=False)
        data = json.loads(rp.content)['data']
        set_list = data['info']
        return render_json({'result': True, 'data': set_list})
    except Exception as e:
        return render_json({'result': False, 'data': e})

# 修改备注
def edit_mark(request):
    data = json.loads(request.body)
    Host.objects.filter(id=data['id']).update(mark = data['mark'])
    return render_json({'result': True})


# execute_job接口
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

def get_task_ip_log(client, app_id, task_instance_id, user_name, count=0):
    """
    获取脚本执行结果
    :param client: ESB连接客户端，client class
    :param app_id: 业务ID，int
    :param task_instance_id: 作业实例ID，int
    :param user_name: 有查看该脚本执行结果权限的用户 ,str
    :param count: 已重试的次数，直接调用不传
    :return: 脚本执行结果，list：[{"ip": '10.0.0.10', "log_content": '123', "bk_cloud_id": 0, "is_success": True}]
    """
    kwargs = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": user_name,
        "bk_biz_id": app_id,
        "job_instance_id": int(task_instance_id)
    }
    result = client.job.get_job_instance_log(kwargs)
    if not result["result"]:
        count += 1
        if count > 5:
            logger.error(result["message"])
            return []
        time.sleep(10)
        return get_task_ip_log(client, app_id, task_instance_id, user_name, count)
    if result["data"][0]["is_finished"]:
        log_content = []
        for i in result["data"][0]["step_results"]:
            log_content += [{"ip": u["ip"], "log_content": u["log_content"], "bk_cloud_id": u["bk_cloud_id"], "is_success": i['ip_status'] == 9} for u in
                            i["ip_logs"]]
        return log_content
    time.sleep(10)
    return get_task_ip_log(client, app_id, task_instance_id, user_name)

def get_job_detail(request):
    data = json.loads(request.body)['data']
    kwargs = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": request.user.username,
        "bk_biz_id": data['bk_biz_id'],
        "bk_job_id": 1019
    }
    client = get_client_by_request(request)
    result = client.cc.get_job_detail(kwargs)
    return result
