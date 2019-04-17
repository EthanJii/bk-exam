<template>
    <div id="home">
        <DatePicker @on-change="changeTime" type="datetimerange" placeholder="Select date and time" style="width: 300px"></DatePicker>
        <el-form style="height: 170px;width: 100%;">
            <el-form-item label="请选择主机：">
                <el-select @change="queryall()" style="width: 90%" v-model="host" placeholder="请选择主机">
                    <el-option
                        v-for="(item, index) in hostList"
                        :key="index"
                        :label="item.ip"
                        :value="item.ip">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div class="home-content">
            <!--&lt;!&ndash;饼状图&ndash;&gt;-->
            <!--<div class="content-left">-->
            <!--<div id="panChartLeft" :style="{width: '80%', height: '100%'}"></div>-->
            <!--</div>-->
            <!--&lt;!&ndash;柱状图&ndash;&gt;-->
            <!--<div class="content-left">-->
            <!--<div id="panChartLeft" :style="{width: '80%', height: '100%'}"></div>-->
            <!--</div>-->
            <!--折线图-->
            <div class="content-right">
                <div id="panChartRight" :style="{width: '80%', height: '100%'}"></div>
            </div>
        </div>
        <!--<div style="height: 180px;margin-top: 5px">-->
        <!--<CwTable ref="selection" :columns="app_table_title" :data="userList"></CwTable>-->
        <!--</div>-->
    </div>
</template>

<script>
    import CwTable from '@/components/cw-table'

    export default {
        components: {
            CwTable,
        },
        name: 'home',
        data() {
            return {
                projectData: {
                    legendData: [],
                    seriesData: [],
                    selected: {},
                },
                app_table_title: [
                    // {
                    //     type: 'selection',
                    //     width: 60,
                    //     align: 'center'
                    // },
                    {
                        title: '文件系统',
                        key: 'system',
                        sortable: true
                    },
                    {
                        title: '总大小',
                        key: 'size',
                        sortable: true
                    },
                    {
                        title: '已用大小',
                        key: 'used',
                        sortable: true
                    },
                    {
                        title: '可用大小',
                        key: 'used',
                        sortable: true
                    },
                    {
                        title: '使用率',
                        key: 'used_rate',
                        sortable: true
                    },
                    {
                        title: '挂载点',
                        key: 'amount',
                        sortable: true,
                    },
                    {
                        title: '操作',
                        width: 230,
                        align: 'center',
                        // render: (h, params) => {
                        //     return h('div', [
                        //         h('Button', {
                        //             props: {
                        //                 type: 'info',
                        //                 size: 'small',
                        //             },
                        //             style: {
                        //                 marginRight: '5px'
                        //             },
                        //             on: {
                        //                 click: () => {
                        //                     this.add(params.index, params.row)
                        //                 }
                        //             }
                        //         }, '查看主机性能'),
                        //         h('Button', {
                        //             props: {
                        //                 type: 'success',
                        //                 size: 'small'
                        //             },
                        //             style: {
                        //                 marginRight: '5px'
                        //             },
                        //             on: {
                        //                 click: () => {
                        //                     this.remove(params.index, params.row)
                        //                 }
                        //             }
                        //         }, '删除'),
                        //     ]);
                        // }
                    }
                ],
                appData: {
                    legendData: ['QQ', 'test'],
                    seriesData: [{name: 'QQ', value: 3},
                        {name: 'test', value: 4}],
                    selected: {},
                },
                msg: 'home',
                projectNum: '',
                downloadTime: ['', ''],
                appNum: '',
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '全部',
                        onClick(picker) {
                            const end = new Date();
                            const start = '2000-01-01';
                            // start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                host: '',
                hostList: '',
                userList: '',
                business: '',
                businessList: '',
                downlodNum: '',
                Xdata: [],
                Mendata: [],
                Diskdata: [],
                CPUdata: [],
                binData: '',
            }
        },
        mounted() {
            this.search()
        },
        methods: {
            search() {
                this.$http.post('search_host', {'ip': this.host}).then(res => {
                    this.hostList = res.data
                })
                let params = this.$route.query
                this.host = this.$route.query.row.ip
                this.$http.post('search_one_hour_data', {'ip': this.$route.query.row.ip}).then(res => {
                    console.log(res.data)
                    this.Xdata = res.data.Xdata
                    this.Mendata = res.data.Mendata
                    this.Diskdata = res.data.Diskdata
                    this.CPUdata = res.data.CPUdata
                    this.drawLine()
                })
                // this.$http.post('search_all_data', {'ip': params.row.ip}).then(res => {
                //     if (res.result) {
                //         this.userList = res.data.file_list
                //         this.Xdata = res.data.five_dict.time_list
                //         this.Diskdata = res.data.five_dict.ip_list
                //         this.binData = res.data.men_dict
                //         // this.Xdata = res.data.five_dict['ip_list']
                //         // this.Diskdata = res.data.five_dict['time_list']
                //         console.log(res.data.five_dict)
                //         console.log(res.data.five_dict['time_list'])
                //         console.log(res.data.five_dict.time_list)
                //         this.drawLine()
                //     } else {
                //     }
                // })
            },
            queryall() {
                this.$http.post('search_one_hour_data', {'ip': this.host}).then(res => {
                    console.log(res.data)
                    this.Xdata = res.data.Xdata
                    this.Mendata = res.data.Mendata
                    this.Diskdata = res.data.Diskdata
                    this.CPUdata = res.data.CPUdata
                    this.drawLine()
                })
            },
            changeTime(date) {
                console.log(date)
            },
            queryHostByBusiness() {
                this.$http.post('query_host', {business: this.business}).then(res => {
                    if (res.result) {
                        this.hostList = res.data
                    } else {
                        this.$message.error(res.message);
                    }
                })
            },
            query() {
                this.$http.post('query_host_by_business', {ip: this.host, business: this.business}).then(res => {
                    if (res.result) {
                        this.Xdata = res.data.Xdata
                        this.Mendata = res.data.Mendata
                        this.Diskdata = res.data.Diskdata
                        this.CPUdata = res.data.CPUdata
                        this.drawLine()
                    } else {
                        // this.$message.error(res.message);
                    }
                })
            },
            addmonitor() {
                this.$http.post('search_one_hour_data', {'ip': this.host}).then(res => {
                    if (res.result) {
                        this.Xdata = res.data.Xdata
                        this.Mendata = res.data.Mendata
                        this.Diskdata = res.data.Diskdata
                        this.CPUdata = res.data.CPUdata
                        console.log(res)
                        this.drawLine()
                    } else {
                        this.$message.error(res.message);
                    }
                })
            },
            drawLine() {
                // let panChartLeft = this.$echarts.init(document.getElementById('panChartLeft'))
                // panChartLeft.setOption({
                //     // title: {
                //     //     text: '柱状图'
                //     // },
                //     // tooltip: {},
                //     // legend: {
                //     //     data: ['销量']
                //     // },
                //     // xAxis: {
                //     //     data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                //     // },
                //     // yAxis: {},
                //     // series: [{
                //     //     name: '销量',
                //     //     type: 'bar',
                //     //     data: [5, 20, 36, 10, 10, 20]
                //     // }]
                //     title: {
                //         text: '内存使用详情',
                //         // subtext: '纯属虚构',
                //         x: 'center'
                //     },
                //     tooltip: {
                //         trigger: 'item',
                //         formatter: '{a} <br/>{b} : {c} ({d}%)'
                //     },
                //     legend: {
                //         type: 'scroll',
                //         orient: 'vertical',
                //         right: 10,
                //         top: 20,
                //         bottom: 20,
                //         data: ['已用内存量', '剩余内存量'],
                //         selected: ['已用内存量', '剩余内存量'],
                //         // data: this.binData.legendData,
                //         // selected: this.binData.selected
                //     },
                //     series: [
                //         {
                //             name: 'APP数量',
                //             type: 'pie',
                //             radius: '55%',
                //             center: ['40%', '50%'],
                //             data: this.binData,
                //             // data: this.binData.seriesData,
                //             itemStyle: {
                //                 emphasis: {
                //                     shadowBlur: 10,
                //                     shadowOffsetX: 0,
                //                     shadowColor: 'rgba(0, 0, 0, 0.5)'
                //                 }
                //             }
                //         }
                //     ]
                // })
                let panChartRight = this.$echarts.init(document.getElementById('panChartRight'))
                panChartRight.setOption({
                    title: {
                        text: '5分钟平均负载(近一小时)'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['Men', 'Disk', 'CPU']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: this.Xdata
                        // Xdata: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: 'Men',
                            type: 'line',
                            stack: '总量',
                            data: this.Mendata
                            // Mendata: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: 'Disk',
                            type: 'line',
                            stack: '总量',
                            data: this.Diskdata
                            // data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: 'CPU',
                            type: 'line',
                            stack: '总量',
                            data: this.CPUdata
                            // CPUdata: [150, 232, 201, 154, 190, 330, 410]
                        },
                    ]
                })
            },
            exchange(time) {
                let datetime = new Date();
                datetime.setTime(time);
                let year = datetime.getFullYear();
                let month = datetime.getMonth() + 1 < 10 ? '0' + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
                let date = datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate();
                let hour = datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours()
                let minute = datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes()
                let scend = datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds()
                return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + scend
            },
        }
    }
</script>

<style scoped lang="scss">
    #home {
        height: 100%;
        width: 100%;
        .home-head {
            height: 150px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .total-data {
                width: 33.3%;
                height: 100%;
                margin: 10px;
                padding: 10px;
                font-size: 18px;
                color: #fff;
                .content-icon {
                    font-size: 60px;
                }
                .is-left {
                    float: left;
                    width: 30%;
                    height: 100%;
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                }
                .is-right {
                    float: right;
                    width: 70%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
                }
            }
            .first-color-left {
                background-color: #44B549;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .second-color-left {
                background-color: #4A9BFF;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .third-color-left {
                background-color: #7270A8;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .first-color-right {
                background-color: #54bf59;
            }
            .second-color-right {
                background-color: #64a9ff;
            }
            .third-color-right {
                background-color: #7C79B6;
            }
        }
        .home-content {
            width: 100%;
            /*overflow: auto;*/
            height: calc(100% - 200px);
            display: flex;
            align-items: center;
            justify-content: center;
            .content-left {
                float: left;
                width: 50%;
                height: 100%;
                margin: 20px;
                border: 1px solid #e5e5e5;
            }
            .content-right {
                float: right;
                width: 80%;
                height: 100%;
                margin: 20px;
                border: 1px solid #e5e5e5;
            }
        }
    }
</style>
<!--作业平台-->
<!--https://job.cwbke.com/?jobList&appId=3-->

<!--127.0.0.1 dev.canway.club-->
<!--127.0.0.1 dev.cwbke.com-->
