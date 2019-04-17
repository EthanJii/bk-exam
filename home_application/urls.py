# -*- coding: utf-8 -*-
from django.conf.urls import patterns
from django.conf.urls import url
from django.contrib import admin
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.template.loader import get_template
from home_application import views

# return JsonResponse({'user':'lisi'})

urlpatterns = patterns(
    'home_application.views',
    (r'^$', 'home'),
    (r'^login_info$', 'login_info'),
    (r'^api/test$', views.test),
    (r'^search_business$', views.search_business),
    (r'^search_host_by_business$', views.search_host_by_business),
    (r'^InitialDataIPAll$', views.InitialDataIPAll),
    (r'^add_host$', views.add_host),
    (r'^delete_user$', views.delete_user),
    (r'^QueryAll$', views.queryall),
    (r'^MemorySituation$', views.MemorySituation),
    (r'^hostdisk$', views.hostdisk),
    (r'^queryload$', views.queryload),
    (r'^query_business$', views.query_business),
    (r'^query_host_by_business$', views.query_host_by_business),
    (r'^query_host$', views.query_host),
    (r'^query_entry$', views.query_entry),
    (r'^addHost$', views.addHost),
    (r'^removeHost$', views.removeHost),
    # (r'^add_monitor$', views.add_monitor),
    (r'^search_one_hour_data$', views.search_one_hour_data),
    (r'^search_host$', views.search_host),
    (r'^search_all_data$', views.search_all_data),
    (r'^search_set$', views.search_set),
    (r'^edit_mark$', views.edit_mark),
)
