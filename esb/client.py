# -*- coding: utf-8 -*-
import settings
import json
import httplib2
try:
    from conf.default import DEFAULT_BK_API_VER
except:
    DEFAULT_BK_API_VER = 'v2'

class EsbClient:
    bk_token = ''

    def __init__(self, request):
        if request:
            self.bk_token = request.COOKIES.get(settings.BK_COOKIE_NAME, None)

    def call(self, module, action, param, version=''):
        if not version:
            version = DEFAULT_BK_API_VER
        http = httplib2.Http()
        if version == '' or version == 'v1':
            param['app_code'] = settings.APP_ID
            param['app_secret'] = settings.APP_TOKEN
            if self.bk_token:
                param['bk_token'] = self.bk_token
            else:
                param['username'] = settings.APP_ID
        elif version == 'v2':
            param['bk_app_code'] = settings.APP_ID
            param['bk_app_secret'] = settings.APP_TOKEN
            if self.bk_token:
                param['bk_token'] = self.bk_token
            else:
                param['bk_username'] = settings.APP_ID
        else:
            return {'result': False, 'message': u'接口版本号"{0}"不存在'.format(version), "data": None}
        headers = {'Content-type': 'application/json'}
        url = "{0}/api/c/compapi/{1}/{2}/".format(settings.BK_PAAS_HOST, module, action)
        response, content = http.request(url, 'POST', headers=headers, body=json.dumps(param))
        if response["status"] == "200":
            return json.loads(content)
        else:
            return {"data": None, "message": u"请求出现错误，错误状态：{0}".format(response["status"]), "result": False}

def get_esb_client(request=None):
    return EsbClient(request)
