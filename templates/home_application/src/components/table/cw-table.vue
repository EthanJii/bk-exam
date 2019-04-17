<template>
    <div id="cw-table">
        <div id="cw-table-box" class="cw-table-box" :style="{height: 'calc(100% - '+cutHeight + 'px' +')' }">
            <Table
                :ellipsis="ellipsis"
                :tooltip="tooltip"
                :height="defaultTableHeight"
                :border="true"
                :columns="columnsNew"
                :data="pageData"
                :stripe="stripe"
                @on-row-click="showDrawer">
            </Table>
            <div class="cw-table-footer">
                <el-pagination v-if="showFooter"
                               :current-page="page.page_num"
                               :page-sizes="pageSizes"
                               :page-size="page.page_size"
                               :pager-count="pagerCount"
                               :layout="layout"
                               :total="page.total_num"
                               :popper-class="popperClass"
                               @size-change="sizeChange"
                               @current-change="currentChange"
                               @prev-click="prevClick"
                               @next-click="nextClick">
                </el-pagination>
            </div>
        </div>
        <Drawer :title="rightMenu.title" :closable="closable" v-model="closable" width="800">
            <ul style="margin-top: 30px">
                <li style="float: left;width: 50%;line-height: 35px;display: flex"
                    v-for="(val, key, index) of instObj" :key="index">
                    <span
                        style="width: 100px;text-align: right;padding: 0 10px;overflow: hidden;white-space: nowrap;color:#737987;">
                        {{key}}:
                    </span>
                    <span :title="val"
                          style="color:#333948;text-align: left;flex: 1;text-overflow: ellipsis;white-space: nowrap;padding: 0 10px;overflow: hidden">
                        {{val}}
                    </span>
                </li>
            </ul>
        </Drawer>
    </div>
</template>

<script>
    export default {
        name: 'cw-table',
        props: {
            popperClass: {
                default: '条/个'
            },
            cutHeight: {
                default: 0
            },
            stripe: {
                default: false
            },
            noDataText: {
                default: '暂无数据'
            },
            tooltip: {
                default: true
            },
            ellipsis: {
                default: true
            },
            remote: {
                default: false
            },
            showFooter: {
                default: true
            },
            columns: {
                default: function () {
                    return [
                        {
                            title: '列一aaaaaaaaaaaaaaaaaa',
                            key: 'cloud_name',
                            sortable: true,
                            width: 100
                        }, {
                            title: '列二',
                            key: 'inner_ip',
                            sortable: true
                        }, {
                            title: '列三',
                            key: 'host_name',
                            sortable: true
                        }, {
                            title: '列四',
                            key: 'date',
                            sortable: true
                        }
                    ]
                }
            },
            data: {
                default: function () {
                    return []
                },
                type: Array
            },
            page: {
                default: function () {
                    return {
                        page_num: 1,
                        page_size: 10,
                        total_num: 0
                    }
                }
            },
            pagerCount: {
                default: 5
            },
            pageSizes: {
                default: function () {
                    return [10, 20, 50, 100]
                }
            },
            layout: {
                default: 'total, sizes, prev, pager, next, jumper'
            },
            rightMenu: {
                default: function () {
                    return {
                        title: '实例信息',
                        status: false
                    }
                }
            }
        },
        components: {},
        data() {
            return {
                defaultTableHeight: 100,
                columnsNew: [],
                pageData: [],
                closable: false,
                instObj: {}
            }
        },
        mounted() {
            this.defaultTableHeight = document.getElementById('cw-table-box').offsetHeight - 40;
            // this.page.page_size = parseInt((document.getElementById('cw-table-box').offsetHeight - 80) / 40);
            // this.pageSizes[0] = this.page.page_size;
            this.initColumns();
            this.initPage();
        },
        watch: {
            columns: function () {
                this.initColumns();
            },
            data: function () {
                this.initPage();
            },
            page: function () {
                this.initPage();
            }
        },
        methods: {
            initColumns() {
                let columnsNew = [];
                this.columns.forEach((item, index) => {
                    if (this.ellipsis) {
                        item['ellipsis'] = true
                    }
                    // if (this.tooltip) {
                    //     item['tooltip'] = true
                    // }
                    columnsNew.push(item);
                });
                if (columnsNew.length !== 0) {
                    this.columnsNew = columnsNew;
                } else {
                    this.columnsNew = [
                        {
                            title: '列一aaaaaaaaaaa',
                            key: 'cloud_name',
                            sortable: true,
                            width: 100
                        }, {
                            title: '列二',
                            key: 'inner_ip',
                            sortable: true
                        }, {
                            title: '列三',
                            key: 'host_name',
                            sortable: true
                        }, {
                            title: '列四',
                            key: 'date',
                            sortable: true
                        }
                    ];
                }
            },
            initPage() {
                if (!this.remote) {
                    this.page.total_num = this.data.length;
                }
                this.switchTablePage();
            },
            switchTablePage() {
                this.pageData = [];
                this.data.forEach((item, index) => {
                    let start = this.page.page_size * (this.page.page_num - 1);
                    let end = this.page.page_size * this.page.page_num;
                    if (start < (index + 1) && (index + 1) <= end) {
                        this.pageData.push(item);
                    }
                });
            },
            sizeChange(size) {
                if (!this.remote) {
                    this.page.page_size = size;
                    this.switchTablePage();
                } else {
                    this.$emit('sizeChange', size)
                }
            },
            currentChange(page_num) {
                if (!this.remote) {
                    this.page.page_num = page_num;
                    this.switchTablePage();
                } else {
                    this.$emit('currentChange', page_num)
                }
            },
            nextClick(page_num) {
                if (!this.remote) {
                    this.page.page_num = page_num;
                    this.switchTablePage();
                } else {
                    this.$emit('nextClick', page_num)
                }
            },
            prevClick(page_num) {
                if (!this.remote) {
                    this.page.page_num = page_num;
                    this.switchTablePage();
                } else {
                    this.$emit('prevClick', page_num)
                }
            },
            showDrawer(row) {
                if (this.rightMenu.status) {
                    this.closable = true;
                    let colObj = {
                        create_time: '创建时间',
                        last_time: '修改时间',
                        bk_cloud_id: '云区域ID',
                        bk_inst_id: '实例ID',
                        bk_biz_id: '业务ID',
                        bk_host_id: '主机ID',
                        bk_set_id: '集群ID',
                        bk_module_id: '模块ID',
                        bk_process_id: '进程ID'
                    };
                    this.columnsNew.forEach((item, index) => {
                        colObj[item.key] = item.title;
                    });
                    Object.keys(row).forEach((key) => {
                        if (colObj.hasOwnProperty(key)) {
                            let title = colObj[key];
                            this.instObj[title] = row[key];
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    #cw-table {
        width: 100%;
        height: 100%;
        .cw-table-box {
            position: relative;
            border-right: none;
            .cw-table-footer {
                border: 1px solid #dde4eb;
                background: #fafbfd;
                height: 40px;
                width: 100%;
                position: absolute;
                /*bottom: 5px;*/
                z-index: 9;
                text-align: right;
                padding-right: 10px;
                line-height: 40px;
                padding-top: 4px;
            }
        }
    }
</style>
<!--iview表格样式-->
<style lang="scss">
    #cw-table {
        .ivu-table {
            color: #4d5669 !important;
            .ivu-table-overflowY::-webkit-scrollbar { /*滚动条整体样式*/
                width: 7px; /*高宽分别对应横竖滚动条的尺寸*/
                height: 4px;
            }
            .ivu-table-overflowY::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
                border-radius: 5px;
                -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                background: #a5a5a5;
            }
        }

        .ivu-table td {
            height: 40px !important;
            border-bottom: 1px solid #dde4eb;
        }

        .ivu-table th {
            background: #fafbfd;
            font-size: 14px !important;
            font-weight: 200 !important;
            height: 40px !important;
            border-bottom: 1px solid #dde4eb !important;
            border-right: 1px solid #dde4eb !important;
        }

        .ivu-table-header th:nth-last-child(2) {
            border-right: none;
        }

        .ivu-table-body table {
            width: 100% !important;
        }

        .ivu-table:before {
            background: #fff;
        }
        .ivu-table:after {
            width: 0;
        }
        .ivu-table-border td {
            border-right: none;
        }

        .ivu-table th .ivu-table-cell {
            white-space: nowrap;
        }

        .ivu-table-stripe .ivu-table-body tr:nth-child(2n) td, .ivu-table-stripe .ivu-table-fixed-body tr:nth-child(2n) td {
            background: #fafbfd !important;
        }
        .ivu-table-wrapper {
            border-right: 1px solid #dde4eb;
        }
    }

    // 抽屉
    .ivu-drawer-header {
        height: 60px !important;
        line-height: 60px !important;
        padding: 0 16px !important;
        background: #f9f9f9;
    }

    .ivu-drawer-header-inner {
        height: 60px;
        line-height: 60px !important;
    }
</style>
<!--element分页样式-->
<style>
    #cw-table .el-pagination {
        color: #4d5669;
        font-weight: 200;
    }

    #cw-table .btn-prev {
        border: 1px solid #ddd !important;
        border-right: none !important;
    }

    #cw-table .btn-next {
        border: 1px solid #ddd !important;
    }

    #cw-table .el-pager li:hover {
        border: 1px solid rgb(60, 150, 255) !important;
        border-right: none;
    }

    #cw-table .el-pager li {
        border: 1px solid #ddd;
        border-right: none;
    }

    #cw-table .el-pager .active {
        background: rgb(60, 150, 255);
        border: 1px solid rgb(60, 150, 255) !important;
        color: #fff !important;
    }

    #cw-table .el-select-dropdown {
        box-shadow: none;
        max-width: 100px;
        min-width: 100px !important;
    }
</style>
