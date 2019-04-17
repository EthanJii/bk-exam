# -*- coding: utf-8 -*-

# import from lib
from django.contrib import admin
# import from apps here
from app_control.models import FunctionController


class FunctionControllerAdmin(admin.ModelAdmin):
    """
    功能开关表注册设置
    """
    list_display = ('func_code', 'func_name', 'enabled', 'create_time', 'func_developer')
    list_filter = ('func_code',)
    search_fields = ('func_code',)


admin.site.register(FunctionController, FunctionControllerAdmin)
