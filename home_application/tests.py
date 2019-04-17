# -*- coding: utf-8 -*-
import requests
import json
import base64
BK_PAAS_HOST = "https://paas.cwbk.com"
APP_ID = "vm-self-v3"
APP_TOKEN = "300fac83-854f-4e69-96d9-588b90acef80"


def execute_script():
    url = BK_PAAS_HOST + "/api/c/compapi/v2/job/fast_execute_script/"
    params = {
        "bk_app_code": APP_ID,
        "bk_app_secret": APP_TOKEN,
        "bk_username": "Andynie",
        "bk_biz_id": 2,
        "script_content": base64.b64encode('cat /proc/loadavg'),
        "account": "root",
        "script_type": 1,
        "ip_list": [
            {
                "bk_cloud_id": 0,
                "ip": "192.168.165.51"
            }
        ],

    }
    rp = requests.post(url, json.dumps(params), verify=False)
    if rp.status_code != 200:
        raise Exception('执行失败code:{0}, content: {1}'.format(rp.status_code, rp.content))
    res = json.loads(rp.content)
    if not res['result']:
        raise Exception('执行失败message:{0}'.format(res['message']))
    return res['data']['job_instance_id']


import time
import datetime



