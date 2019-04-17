# -*- coding: utf-8 -*-
from common.mymako import render_mako_context, render_json
from conf.default import LOGOUT_URL
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse, HttpRequest, HttpResponseBadRequest
from common.log import logger
import logging
import json
import requests


def home(request):
    return render_mako_context(request, '/index.prod.html')



#     #初始化数据
def InitialData(request):
    print('***********进来******************')
    url = "https://paas.cwbk.com/api/c/compapi/v2/cc/search_business/"
    params = {
        "bk_app_code": "vm-self-v3",
        "bk_app_secret": "300fac83-854f-4e69-96d9-588b90acef80",
        "bk_username": "admin",
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
        data = json.loads(rp.content)['data']['info']
        return render_json({'result': True, 'data': data})
    except Exception as e:
        return render_json({'result': False, 'data': e.message})


