# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FileInformation',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('ip', models.CharField(max_length=100, verbose_name='\u5185\u7f51ip')),
                ('system', models.CharField(max_length=50, verbose_name='\u7cfb\u7edf')),
                ('size', models.CharField(max_length=50, verbose_name='\u603b\u5927\u5c0f')),
                ('used', models.CharField(max_length=50, verbose_name='\u5df2\u4f7f\u7528')),
                ('avail', models.CharField(max_length=50, verbose_name='\u53ef\u7528\u5927\u5c0f')),
                ('used_rate', models.CharField(max_length=50, verbose_name='\u4f7f\u7528\u7387')),
                ('amount', models.CharField(max_length=50, verbose_name='\u6302\u8f7d\u70b9')),
                ('when_create', models.CharField(max_length=100, verbose_name='\u8d1f\u8f7d\u7684\u65f6\u95f4\u70b9')),
            ],
        ),
        migrations.CreateModel(
            name='FiveLoad',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('load', models.CharField(max_length=50, verbose_name='5\u5206\u949f\u8d1f\u8f7d')),
                ('ip', models.CharField(max_length=100, verbose_name='5\u5206\u949f\u8d1f\u8f7d')),
                ('when_create', models.CharField(max_length=100, verbose_name='\u8d1f\u8f7d\u7684\u65f6\u95f4\u70b9')),
            ],
        ),
        migrations.CreateModel(
            name='Host',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('business_id', models.CharField(default=b'', max_length=128, null=True, verbose_name='\u4e1a\u52a1id')),
                ('ip', models.CharField(max_length=50, verbose_name='\u5185\u7f51ip')),
                ('sys_name', models.CharField(max_length=100, verbose_name='\u7cfb\u7edf\u540d')),
                ('host_name', models.CharField(max_length=100, verbose_name='\u4e3b\u673a\u540d')),
                ('cloud_region', models.CharField(max_length=100, verbose_name='\u4e91\u533a\u57df')),
                ('bk_cloud_id', models.CharField(max_length=100, verbose_name='\u4e91\u533a\u57dfid')),
                ('men', models.CharField(max_length=100, verbose_name='Men')),
                ('disk', models.CharField(max_length=100, verbose_name='Disk')),
                ('cpu', models.CharField(max_length=100, verbose_name='CPU')),
                ('mark', models.CharField(default=b'\xe8\x93\x9d\xe9\xb2\xb8\xe6\x9c\x8d\xe5\x8a\xa1\xe5\x99\xa8', max_length=100, verbose_name='\u5907\u6ce8')),
            ],
        ),
        migrations.CreateModel(
            name='HostInfo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('file_sys', models.CharField(max_length=50, verbose_name='\u6587\u4ef6\u7cfb\u7edf')),
                ('total_mem', models.CharField(max_length=100, verbose_name='\u603b\u5927\u5c0f')),
                ('usage', models.CharField(max_length=100, verbose_name='\u5df2\u7528\u5927\u5c0f')),
                ('free_mem', models.CharField(max_length=100, verbose_name='\u53ef\u7528\u5927\u5c0f')),
                ('usage_rate', models.CharField(default=b'', max_length=100, verbose_name='\u4f7f\u7528\u7387')),
                ('mount_addr', models.CharField(default=b'', max_length=100, verbose_name='\u6302\u8f7d\u70b9')),
            ],
        ),
        migrations.CreateModel(
            name='Hostinformation',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('hostip', models.CharField(max_length=64, null=True)),
                ('hostname', models.CharField(max_length=64, null=True)),
                ('hostbusiness', models.CharField(max_length=128, null=True)),
                ('hostregion', models.CharField(max_length=128, null=True)),
                ('hosttype', models.CharField(max_length=128, null=True)),
                ('hostregionid', models.CharField(max_length=128, null=True)),
                ('hostbusinessid', models.CharField(max_length=128, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='HostMen',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('ip', models.CharField(max_length=50, verbose_name='\u5185\u7f51ip')),
                ('total_mem', models.CharField(max_length=100, verbose_name='\u603b\u5927\u5c0f')),
                ('usage', models.CharField(max_length=100, verbose_name='\u5df2\u7528\u5927\u5c0f')),
                ('free_mem', models.CharField(max_length=100, verbose_name='\u53ef\u7528\u5927\u5c0f')),
                ('usage_rate', models.CharField(default=b'', max_length=100, verbose_name='\u4f7f\u7528\u7387')),
            ],
        ),
        migrations.CreateModel(
            name='HostServer',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('ip', models.CharField(max_length=50, verbose_name='\u5185\u7f51ip')),
                ('men', models.CharField(max_length=100, verbose_name='Men')),
                ('disk', models.CharField(max_length=100, verbose_name='Disk')),
                ('cpu', models.CharField(max_length=100, verbose_name='CPU')),
                ('now_time', models.CharField(default=b'', max_length=100, verbose_name='\u72b6\u6001\u65f6\u95f4')),
            ],
        ),
        migrations.CreateModel(
            name='Load',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('num', models.CharField(max_length=128, null=True)),
                ('datatime', models.DateTimeField()),
                ('server', models.ForeignKey(to='home_application.Hostinformation')),
            ],
        ),
    ]
