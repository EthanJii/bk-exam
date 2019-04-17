<template>
    <div>
        <div style="margin-top: 20px">
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
            <span style="font-size: 18px;margin-left: 5px">IP:</span>
            <el-input label="Ip:" v-model="condition" style="width: 200px"></el-input>
            <el-button style="margin-bottom: 25px" type="primary" @click="search">查询</el-button>
            <el-button style="margin-bottom: 25px;float: right;margin-right: 20px" type="primary" @click="addHost">添加主机
            </el-button>
        </div>
        <div style="height: 300px">
            <CwTable ref="selection" :columns="app_table_title" :data="userList"></CwTable>
        </div>
        <div></div>
        <!--<Modal-->
        <!--v-model="status"-->
        <!--title="添加版本"-->
        <!--@on-ok="save"-->
        <!--@on-cancel="cancel">-->
        <!--<div>haha</div>-->
        <!--</Modal>-->
    </div>
</template>

<script>
    import CwTable from '@/components/cw-table'

    export default {
        components: {
            CwTable,
        },
        data() {
            return {
                msg: '我是主页',
                condition: '',
                dialogVisible: false,
                status: true,
                app_table_title: [
                    {
                        title: '主机IP',
                        key: 'ip',
                        sortable: true
                    },
                    {
                        title: '主机名称',
                        key: 'host_name',
                        sortable: true
                    },
                    {
                        title: '所属业务',
                        key: 'business_id',
                        sortable: true
                    },
                    {
                        title: '云区域',
                        key: 'cloud_region',
                        sortable: true
                    },
                    {
                        title: '操作系统类型',
                        key: 'sys_name',
                        sortable: true
                    },
                    {
                        title: '备注信息',
                        key: 'mark',
                        sortable: true
                    },
                    {
                        title: '操作',
                        width: 230,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
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
                                            this.edit(params.index, params.row)
                                        }
                                    }
                                }, '修改'),
                                h('Button', {
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
                                }, '查看主机性能'),
                                h('Button', {
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
                                }, '删除'),
                            ]);
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
            this.search()
        },
        methods: {
            change() {
                var apple = this.msg
                this.msg = apple
            },
            savehost() {
                this.dialogVisible = false
                this.$http.post('/addHost', {data: this.host, businessId: this.business}).then(res => {
                    if (res.result) {
                        this.$message('添加成功')
                        this.search()
                    }
                })
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
            search() {
                this.$http.post('search_host', {'ip': this.condition}).then(res => {
                    if (res.result) {
                        this.userList = res.data
                    } else {
                    }
                })
            },
            edit(index, row) {
                this.business = row.business_id
                this.hostid = row.id
                this.host = row.ip
                this.mark = row.mark
                this.editdialog = true
            },
            detail(index, row) {
                this.$router.push({path: '/test', query: {row: row}})
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
                this.$http.post('search_set', {business: this.business}).then(res => {
                    if (res.result) {
                        this.setList = res.data
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
                this.$http.post('/removeHost', {data: row}).then(res => {
                    if (res.result) {
                        this.$message('移除成功')
                        this.search()
                    }
                })
            },
        }
    }
</script>

<style scoped>
.container { width: 500px; height: 500px; }
    .div-1 { float:left; width: 100px; }
    .div-2 { overflow: hidden;}
</style>
