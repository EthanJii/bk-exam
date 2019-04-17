<template>
    <div>
        <div style="margin-top: 20px">
            <el-form style="height: 170px;width: 100%;">
                <el-form-item label="请选择业务：">
                    <el-select style="width: 90%" v-model="business" placeholder="请选择业务"
                               @change="queryHostByBusiness()">
                        <el-option
                            v-for="item in businessList"
                            :key="item.bk_biz_id"
                            :label="item.bk_biz_name"
                            :value="item.bk_biz_id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="请选择主机：">
                    <el-input type="textarea" v-model="host" style="width: 90%"></el-input>
                    <!--<el-select style="width: 90%" v-model="host" placeholder="请选择主机">-->
                    <!--<el-option-->
                    <!--v-for="item in hostList"-->
                    <!--:key="item.bk_host_id"-->
                    <!--:label="item.ip"-->
                    <!--:value="item">-->
                    <!--</el-option>-->
                    <!--</el-select>-->
                </el-form-item>
                <el-button style="margin-bottom: 25px" type="primary" @click="searchHost">查询</el-button>
            </el-form>
            <el-dialog
                title="添加主机"
                :visible.sync="dialogVisible"
                width="35%"
                :before-close="handleClose">
                <el-form style="height: 170px;width: 80%;">
                    <el-form-item label="请选择业务：">
                        <el-select v-model="business" placeholder="请选择业务"
                                   @change="queryHostByBusiness()">
                            <el-option
                                v-for="item in businessList"
                                :key="item.bk_biz_id"
                                :label="item.bk_biz_name"
                                :value="item.bk_biz_id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="请选择集群：">
                        <el-select v-model="set" placeholder="请选择集群"
                                   @change="queryHostBySet()">
                            <el-option
                                v-for="item in setList"
                                :key="item.bk_set_id"
                                :label="item.bk_set_name"
                                :value="item.bk_set_id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="请选择主机：">
                        <el-select v-model="host" placeholder="请选择主机">
                            <el-option
                                v-for="item in hostList"
                                :key="item.bk_host_id"
                                :label="item.ip"
                                :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <el-button style="margin-left: 100px" @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="savehost">确 定</el-button>
            </el-dialog>
            <el-dialog
                title="添加主机"
                :visible.sync="editdialog"
                width="35%"
                :before-close="handleClose">
                <el-form style="height: 170px;width: 80%;">
                    <el-form-item label="请选择业务：">
                        <el-select disabled v-model="business" placeholder="请选择业务"
                                   @change="queryHostByBusiness()">
                            <el-option
                                v-for="item in businessList"
                                :key="item.bk_biz_id"
                                :label="item.bk_biz_name"
                                :value="item.bk_biz_id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="请选择主机：">
                        <el-select disabled v-model="host" placeholder="请选择主机">
                            <el-option
                                v-for="item in hostList"
                                :key="item.bk_host_id"
                                :label="item.ip"
                                :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="备注信息：">
                        <el-input style="width: 217px" v-model="mark"></el-input>
                    </el-form-item>
                </el-form>
                <el-button style="margin-left: 100px" @click="editdialog = false">取 消</el-button>
                <el-button type="primary" @click="edithost">确 定</el-button>
            </el-dialog>
            <!--<span style="font-size: 18px;margin-left: 5px">IP:</span>-->
            <!--<el-input label="Ip:" v-model="condition" style="width: 200px"></el-input>-->
            <!--<el-button style="margin-bottom: 25px" type="primary" @click="search">查询</el-button>-->
            <!--<el-button style="margin-bottom: 25px;float: right;margin-right: 20px" type="primary" @click="addHost">添加主机-->
            <!--</el-button>-->
        </div>
        <div style="height: 300px">
            <CwTable ref="selection" :columns="app_table_title" :data="userList"></CwTable>
        </div>
        <div>
            <Modal
                v-model="modal1"
                title="友情提示："
                @on-ok="ok"
                @on-cancel="cancel">
                <p>是否要查询系统资源使用情况</p>
            </Modal>
        </div>
        <Modal
            v-model="modal2"
            title="友情提示："
            @on-ok="ok2"
            @on-cancel="cancel">
            <p>是否加入周期检查列表</p>
        </Modal>
        <Modal
            v-model="modal3"
            title="友情提示："
            @on-ok="ok3"
            @on-cancel="cancel">
            <p>是否移除周期检查列表</p>
        </Modal>
    </div>
</template>

<script>
    import CwTable from '@/components/cw-table'
    import Vue from 'vue'

    export default {
        components: {
            CwTable,
        },
        data() {
            return {
                modal1: false,
                modal2: false,
                modal3: false,
                row: '',
                msg: '我是主页',
                condition: '',
                dialogVisible: false,
                status: true,
                app_table_title: [
                    {
                        title: '内网IP',
                        key: 'ip',
                        sortable: true
                    },
                    {
                        title: '系统名称',
                        key: 'sys_name',
                        sortable: true
                    },
                    {
                        title: '主机名',
                        key: 'host_name',
                        sortable: true
                    },
                    {
                        title: '云区域',
                        key: 'cloud_region',
                        sortable: true
                    },
                    {
                        title: 'Men(%)',
                        key: 'men',
                        sortable: true
                    },
                    {
                        title: 'Disk(%)',
                        // key: 'disk',
                        sortable: true,
                        render: (h, params) => {
                            if(params.row.search) {
                                 return h('div', {}, params.row.disk)
                            } else {
                                return h('div', {}, '--')
                            }
                        }
                    },
                    {
                        title: 'Cpu(%)',
                        key: 'cpu',
                        sortable: true
                    },
                    {
                        title: '操作',
                        width: 230,
                        align: 'center',
                        render: (h, params) => {
                            let btn = []
                            btn.push(h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small',
                                    },
                                    // attrs: {
                                    //     class: 'ivu-icon ios-search'
                                    // },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.detail(params.index, params.row)
                                        }
                                    }
                                }, '查看'))
                            if(!params.row.removed) {
                                btn.push(h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index, params.row)
                                        }
                                    }
                                }, '移除监控'))
                            } else if(!params.row.added) {
                                btn.push(h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small',
                                    },
                                    // attrs: {
                                    //     class: 'ivu-icon ios-search'
                                    // },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.savehost(params.index, params.row)
                                        }
                                    }
                                }, '添加监控'))
                            }
                            return h('div', btn)
                            // return h('div', [
                            //     h('Button', {
                            //         props: {
                            //             type: 'info',
                            //             size: 'small',
                            //         },
                            //         // attrs: {
                            //         //     class: 'ivu-icon ios-search'
                            //         // },
                            //         style: {
                            //             marginRight: '5px'
                            //         },
                            //         on: {
                            //             click: () => {
                            //                 this.savehost(params.index, params.row)
                            //             }
                            //         }
                            //     }, '添加监控'),
                            //     h('Button', {
                            //         props: {
                            //             type: 'info',
                            //             size: 'small',
                            //         },
                            //         // attrs: {
                            //         //     class: 'ivu-icon ios-search'
                            //         // },
                            //         style: {
                            //             marginRight: '5px'
                            //         },
                            //         on: {
                            //             click: () => {
                            //                 this.detail(params.index, params.row)
                            //             }
                            //         }
                            //     }, '查看'),
                            //     h('Button', {
                            //         props: {
                            //             type: 'success',
                            //             size: 'small'
                            //         },
                            //         style: {
                            //             marginRight: '5px'
                            //         },
                            //         on: {
                            //             click: () => {
                            //                 this.remove(params.index, params.row)
                            //             }
                            //         }
                            //     }, '移除监控'),
                            // ]);
                        }

                    }
                ],
                userList: [],
                host: '',
                id: '',
                set: '',
                hostList: '',
                business: '',
                businessList: '',
                setList: '',
                editdialog: false,
                mark: '',
            }
        },
        mounted() {
            console.log(222)
            this.search()
        },
        methods: {
            change() {
                var apple = this.msg
                this.msg = apple
            },
            savehost(index, row) {
                this.modal2 = true
                // this.dialogVisible = false
                this.row = row
                row.removed = false
                row.added = true
                // Vue.set('row', 'added', true)
                // Vue.set('row', 'removed', false)
            },
            edithost() {
                this.$http.post('edit_mark', {'id': this.hostid, 'mark': this.mark}).then(res => {
                    if (res.result) {
                        this.$message('修改成功')
                        this.editdialog = false
                        this.search()
                    }
                })
            },
            searchHost() {
                this.hostList = []
                this.$http.post('query_host', {business: this.business, ip: this.host}).then(res => {
                    if (res.result) {
                        this.userList = res.data
                    } else {
                    }
                })
            },
            search() {
                this.$http.post('query_business', {'ip': this.condition}).then(res => {
                    if (res.result) {
                        this.businessList = res.data
                    } else {
                    }
                })
            },
            ok() {
                this.$router.push({path: '/test', query: {row: this.row}})
            },
            ok2() {
                this.$http.post('/addHost', {data: this.row, businessId: this.business}).then(res => {
                    if (res.result) {
                        this.$message('添加成功')
                        this.search()
                    }
                })
            },
            ok3() {
                this.$http.post('/removeHost', {data: this.row}).then(res => {
                    if (res.result) {
                        this.$message('移除成功')
                        this.search()
                    }
                })
            },
            cancel() {
                this.modal1 = false
                this.modal2 = false
                this.modal3 = false
            },
            edit(index, row) {
                this.business = row.business_id
                this.hostid = row.id
                this.host = row.ip
                this.mark = row.mark
                this.editdialog = true
            },
            detail(index, row) {
                // row.search = true
                Vue.set(row, 'search', true)
                // this.modal1 = true
                // this.row = row
            },
            addHost() {
                this.dialogVisible = true
                this.$http.post('query_business', {}).then(res => {
                    if (res.result) {
                        this.businessList = res.data
                        // this.$http.post('query_host_by_business', {business: this.business}).then(res => {
                        //     if (res.result) {
                        //         this.hostList = res.data
                        //     } else {
                        //     }
                        // })
                    } else {
                    }
                })
            },
            queryHostByBusiness() {
                this.hostList = []
                this.$http.post('query_host', {business: this.business, ip: this.host}).then(res => {
                    if (res.result) {
                        this.userList = res.data
                        this.userList.forEach(item => {
                            item['removed'] = true
                        })
                        console.log(this.userList)
                    } else {
                    }
                })
            },
            queryHostBySet() {
                this.hostList = []
                this.$http.post('query_host_by_business', {business: this.business, set: this.set}).then(res => {
                    if (res.result) {
                        this.hostList = res.data
                    } else {
                    }
                })
            },
            query() {
                this.$http.post('query_host_by_business', {ip: this.host, business: this.business}).then(res => {
                    if (res.result) {
                        this.userList = res.data
                    } else {
                    }
                })
            },
            add(index, row) {
                this.dialogVisible = true
                this.$http.post('/addHost', {data: row, businessId: this.business}).then(res => {
                    if (res.result) {
                        this.$message('添加成功')
                    }
                })
            },
            handleClose() {
                this.dialogVisible = false
                this.editdialog = false
            },
            remove(index, row) {
                this.modal3 = true
                this.row = row
                row.removed = true
                row.added = false
            },
        }
    }
</script>

<style scoped>
    .container {
        width: 500px;
        height: 500px;
    }

    .div-1 {
        float: left;
        width: 100px;
    }

    .div-2 {
        overflow: hidden;
    }
</style>
