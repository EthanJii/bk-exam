# -*- coding: utf-8 -*-

import base64
import time
import requests
import json
import sys
from esb.new_client import get_new_esb_client
from conf.default import APP_ID, APP_TOKEN, BK_PAAS_HOST
from common.log import logger

reload(sys)
sys.setdefaultencoding("utf8")


def fast_execute_script(check_app, client, user_name, execute_account, script_content, param_content='',
                        script_timeout=1000):
    """
    快速执行脚本
    :param check_app: 操作的对象，dict，{"app_id":1,"ip_list":[{"ip":"10.0.0.10","bk_cloud_id":0}]}
    :param client: ESB连接客户端，client class
    :param user_name:  有该业务操作权限的用户，str
    :param execute_account: 脚本执行帐号，str
    :param script_content: 脚本执行内容，str
    :param param_content: 脚本参数，str，可不传
    :param script_timeout: 超时时间，int，可不传
    :return: 脚本执行结果，list：[{"ip": '10.0.0.10', "log_content": '123', "bk_cloud_id": 0, "is_success": True}]
    """
    kwargs = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_biz_id": check_app["app_id"],
        "bk_username": user_name,
        "script_content": base64.b64encode(script_content),
        "ip_list": check_app["ip_list"],
        "script_type": 1,
        "account": execute_account,
        "script_param": base64.b64encode(param_content),
        "script_timeout": script_timeout
    }
    result = client.job.fast_execute_script(kwargs)
    if result["result"]:
        time.sleep(5)
        script_result = get_task_ip_log(client, check_app["app_id"], result["data"]["job_instance_id"], user_name)
        return {"result": True, "data": script_result}
    else:
        return {"result": False, "data": result["message"]}


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
            log_content += [{"ip": u["ip"], "log_content": u["log_content"], "bk_cloud_id": u["bk_cloud_id"],
                             "is_success": i['ip_status'] == 9} for u in
                            i["ip_logs"]]
        return log_content
    time.sleep(10)
    return get_task_ip_log(client, app_id, task_instance_id, user_name)


def send_email(receiver, title, content):
    """
    发送邮件
    :param receiver: 收件人：admin@bking.com ，多个用英文逗号隔开
    :param title: 主题
    :param content: 邮件内容
    :return:
    """
    try:
        logger.info(u"开始发送邮件")
        esb_client = get_new_esb_client()
        result = esb_client.call('cmsi', 'send_mail', receiver=receiver, title=title, content=content)
        if result["result"]:
            logger.info(u"邮件发送成功")
            return
        logger.error(u"邮件发送失败")
        logger.error(result["message"])
    except Exception, e:
        logger.exception(e)


# 通过http调用API接口
def call_api_by_http(api_path, kwargs, request_way='POST'):
    headers = {'Content-type': 'application/json'}
    url = "%s/%s" % (BK_PAAS_HOST, api_path.strip('/'))
    if request_way == 'GET':
        res = requests.get(url, params=json.dumps(kwargs), headers=headers, verify=False)
    else:
        res = requests.post(url, data=json.dumps(kwargs), headers=headers, verify=False)
    if res.status_code == 200:
        content = json.loads(res.content)
        return content
    return {"result": False, "message": res.status_code}


# 只获取具备运维人员权限的业务
def get_business_by_user(username):
    kwargs = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": username
    }
    res = call_api_by_http("/api/c/compapi/v2/cc/search_business/", kwargs)
    if res["result"]:
        user_business_list = [
            {"bk_biz_id": i["bk_biz_id"], "bk_biz_name": i["bk_biz_name"]} for i in res["data"]["info"]
            if username in i["bk_biz_maintainer"].split(",")
        ]
        return {"result": True, "data": user_business_list}
    else:
        return {"result": False, "data": res["data"]}


# 获取业务的“空闲机池”集群（空闲机、故障机模块）
def get_business_idle(business_id, username):
    url = "/api/c/compapi/v2/cc/search_set"
    kwargs = {
        'app_code': APP_ID,
        'app_secret': APP_TOKEN,
        'bk_biz_id': business_id,
        'bk_username': username,
        'condition': {"bk_set_name": "空闲机池"},
        'fields': ["bk_set_id"],
        'page': {'limit': 1, 'sort': 'bk_set_name', 'start': 0}
    }
    res = call_api_by_http(url, kwargs)
    if not res["result"]:
        return {"result": False, "data": res["data"]}
    return get_idle_modules(res["data"]["info"][0], business_id, username)


def get_idle_modules(set_obj, app_id, username):
    url = "/api/c/compapi/v2/cc/search_module"
    kwargs = {
        'app_code': APP_ID,
        'app_secret': APP_TOKEN,
        'bk_biz_id': app_id,
        'bk_set_id': set_obj["bk_set_id"],
        'bk_username': username,
        'condition': {'bk_module_name': '空闲机'},
        'fields': ['bk_module_id', 'bk_module_name'],
        'page': {'limit': 10, 'sort': 'bk_module_name', 'start': 0}
    }
    res = call_api_by_http(url, kwargs)
    if not res["result"]:
        return {"result": False, "data": u"获取空闲机异常"}
    return_data = {
        "bk_inst_id": set_obj["bk_set_id"], "bk_inst_name": '空闲机池', 'bk_biz_id': app_id,
        "bk_obj_id": "set", "bk_obj_name": u"空闲机池", 'open': False,
        'child': [{
            "bk_inst_id": i["bk_module_id"], 'bk_biz_id': app_id, "bk_inst_name": i["bk_module_name"],
            "bk_obj_id": "module", "bk_obj_name": u"模块", "child": [], "default": 0, "isParent": True, 'open': False
        } for i in res['data']['info']]
    }
    return {"result": True, "data": return_data}


# 获取业务的拓扑结构
def get_business_topo(business_id, username, level=-1):
    api_path = "/api/c/compapi/v2/cc/search_biz_inst_topo/"
    kwargs = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": username,
        "bk_biz_id": business_id,
        "level": level
    }
    res = call_api_by_http(api_path, kwargs)
    if res["result"]:
        return_data = format_business_topo(res["data"], business_id)
        idle_result = get_business_idle(business_id, username)
        if idle_result["result"]:
            return_data[0]["child"].append(idle_result['data'])
        return {"result": True, "data": return_data}
    else:
        return {"result": False, "data": res["data"]}


def format_business_topo(data, bk_biz_id):
    return_data = []
    for i in data:
        tmp = dict(i, **{"isParent": True, 'bk_biz_id': bk_biz_id, 'open': False})
        tmp["child"] = format_business_topo(tmp["child"], bk_biz_id)
        if not tmp["child"]:
            tmp["isParent"] = False
        return_data.append(tmp)
    return return_data


# 获取业务、模块下的主机（windows、linux）
def get_hosts_by_business_module(business_id, module_id, username, host_type):
    business_filter = [{"field": "bk_biz_id", "operator": "$eq", "value": int(business_id)}] if business_id else []
    module_filter = [{"field": "bk_module_id", "operator": "$eq", "value": int(module_id)}] if module_id else []
    host_filter = [
        {"field": "bk_os_type", "operator": "$eq", "value": host_type}] if host_type == "1" or host_type == "2" else []
    kwargs = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": username,
        "condition": [
            {
                "bk_obj_id": "biz",
                "fields": [],
                "condition": business_filter
            },
            {
                "bk_obj_id": "host",
                "fields": [],
                "condition": host_filter
            },
            {
                "bk_obj_id": "module",
                "fields": [],
                "condition": module_filter
            }
        ]
    }
    return search_host(kwargs, username)


def get_hosts_by_apps(app_ids, username, host_type):
    business_filter = [{"field": "bk_biz_id", "operator": "$in", "value": app_ids}] if app_ids else []
    host_filter = [
        {"field": "bk_os_type", "operator": "$eq", "value": host_type}] if host_type == "1" or host_type == "2" else []
    kwargs = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": username,
        "condition": [
            {
                "bk_obj_id": "biz",
                "fields": [],
                "condition": business_filter
            },
            {
                "bk_obj_id": "host",
                "fields": [],
                "condition": host_filter
            },
            {
                "bk_obj_id": "module",
                "fields": [],
                "condition": []
            }
        ]
    }
    return search_host(kwargs, username)


def search_host(kwargs, username):
    res = call_api_by_http("/api/c/compapi/v2/cc/search_host/", kwargs)
    if not res["result"]:
        return {"result": False, "data": res["data"]}
    data = []
    for i in res['data']['info']:
        one_obj = i['host']
        one_obj["app_id"] = i["biz"][0]["bk_biz_id"]
        one_obj['bk_biz_id'] = i["biz"][0]["bk_biz_id"]
        one_obj["is_checked"] = False
        data.append(one_obj)
    return_data = filter_no_agent(data, username)
    return {"result": True, "data": return_data}


def filter_no_agent(data, username):
    kwargs = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": username,
        "bk_supplier_id": 0,
        "hosts": [
            {
                "ip": i['bk_host_innerip'],
                "bk_cloud_id": i['bk_cloud_id'][0]["bk_inst_id"]
            } for i in data
        ]
    }
    res = call_api_by_http("/api/c/compapi/v2/gse/get_agent_status/", kwargs)
    if not res["result"]:
        return []
    return_data = []
    for i in data:
        key = u"{0}:{1}".format(i['bk_cloud_id'][0]["bk_inst_id"], i["bk_host_innerip"])
        if res["data"][key]["bk_agent_alive"]:
            return_data.append(i)
    return return_data


# 获取用户业务、object、集群、模块拓扑
def get_business_topo_by_user(username):
    bus_result = get_business_by_user(username)
    if not bus_result["result"]:
        return {"result": False, "data": "get business info error"}
    return_data = []
    for bus_obj in bus_result["data"]:
        topo_result = get_business_topo(bus_obj["bk_biz_id"], username)
        if not topo_result["result"]:
            return {"result": False, "data": "get business topo info error"}
        return_data.append(topo_result["data"][0])
    return {"result": True, "data": return_data}


# 快速分发文件
def fast_push_file(data, username, bk_biz_id, account, file_target_path, file_source):
    # result
    # {
    #     "result": true,
    #     "code": 0,
    #     "message": "success",
    #     "data": {
    #         "job_instance_name": "API Quick Distribution File1521101427176",
    #         "job_instance_id": 10000
    #     }
    # }
    kwargs = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": username,
        "bk_biz_id": bk_biz_id,
        "account": account,
        "file_target_path": "/tmp/[FILESRCIP]/",
        "file_source": [
            {
                "files": ["/tmp/REGEX:[a-z]*.txt"],
                "account": "root",
                "ip_list": [
                    {
                        "bk_cloud_id": 0,
                        "ip": "10.0.0.1"
                    }
                ],
                "custom_query_id": ["3"]
            }
        ],
        "ip_list": [
            {
                "bk_cloud_id": 0,
                "ip": "10.0.0.1"
            }
        ],
    }
    res = call_api_by_http("/api/c/compapi/v2/gse/get_agent_status/", kwargs)
    if not res["result"]:
        return {}
    return_data = {
        "job_instance_name": res.data['job_instance_name'],
        "job_instance_id": res.data['job_instance_id'],
    }
    return return_data
