# -*- coding: utf-8 -*-
from django.db import models


class Hostinformation(models.Model):
    hostip = models.CharField(max_length=64, null=True)
    hostname = models.CharField(max_length=64, null=True)
    hostbusiness = models.CharField(max_length=128, null=True)
    hostregion = models.CharField(max_length=128, null=True)
    hosttype = models.CharField(max_length=128, null=True)
    hostregionid = models.CharField(max_length=128, null=True)
    hostbusinessid = models.CharField(max_length=128, null=True)


class Load(models.Model):
    server = models.ForeignKey("Hostinformation")
    num = models.CharField(max_length=128, null=True)
    datatime = models.DateTimeField()


class Host(models.Model):
    business_id = models.CharField(u'业务id', max_length=128, null=True, default='')
    ip = models.CharField(u'内网ip', max_length=50)
    sys_name = models.CharField(u'系统名', max_length=100)
    host_name = models.CharField(u'主机名', max_length=100)
    cloud_region = models.CharField(u'云区域', max_length=100)
    bk_cloud_id = models.CharField(u'云区域id', max_length=100)
    men = models.CharField(u'Men', max_length=100)
    disk = models.CharField(u'Disk', max_length=100)
    cpu = models.CharField(u'CPU', max_length=100)
    mark = models.CharField(u'备注', max_length=100, default='蓝鲸服务器')


# 主机
class HostServer(models.Model):
    ip = models.CharField(u'内网ip', max_length=50)
    men = models.CharField(u'Men', max_length=100)
    disk = models.CharField(u'Disk', max_length=100)
    cpu = models.CharField(u'CPU', max_length=100)
    now_time = models.CharField(u'状态时间', max_length=100, default='')


# 主机信息
class HostInfo(models.Model):
    file_sys = models.CharField(u'文件系统', max_length=50)
    total_mem = models.CharField(u'总大小', max_length=100)
    usage = models.CharField(u'已用大小', max_length=100)
    free_mem = models.CharField(u'可用大小', max_length=100)
    usage_rate = models.CharField(u'使用率', max_length=100, default='')
    mount_addr = models.CharField(u'挂载点', max_length=100, default='')


# 5分钟负载
class FiveLoad(models.Model):
    load = models.CharField(u'5分钟负载', max_length=50)
    ip = models.CharField(u'5分钟负载', max_length=100)
    when_create = models.CharField(u'负载的时间点', max_length=100)

# 文件系统挂载信息
class FileInformation(models.Model):
    ip = models.CharField(u'内网ip', max_length=100)
    system = models.CharField(u'系统', max_length=50)
    size = models.CharField(u'总大小', max_length=50)
    used = models.CharField(u'已使用', max_length=50)
    avail = models.CharField(u'可用大小', max_length=50)
    used_rate = models.CharField(u'使用率', max_length=50)
    amount = models.CharField(u'挂载点', max_length=50)
    when_create = models.CharField(u'负载的时间点', max_length=100)

# 主机内存使用信息
class HostMen(models.Model):
    ip = models.CharField(u'内网ip', max_length=50)
    total_mem = models.CharField(u'总大小', max_length=100)
    usage = models.CharField(u'已用大小', max_length=100)
    free_mem = models.CharField(u'可用大小', max_length=100)
    usage_rate = models.CharField(u'使用率', max_length=100, default='')
