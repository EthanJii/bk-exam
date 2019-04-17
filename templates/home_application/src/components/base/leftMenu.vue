<template>
    <div id="left-menu">
        <el-menu
            :default-active="defaultActive"
            class="el-menu-vertical-demo"
            @open="open"
            @close="close"
            router>
            <el-menu-item index="/report/home" to="/report/home">
                <i class="ivu-icon ivu-icon-md-list-box"></i>
                <span slot="title">通用报表</span>
            </el-menu-item>
            <el-menu-item index="/report/center" to="/report/center">
                <i class="ivu-icon ivu-icon-ios-stats"></i>
                <span slot="title">报表中心</span>
            </el-menu-item>
            <el-menu-item index="/report/classification" to="/report/classification">
                <i class="el-icon-setting"></i>
                <span slot="title">报表分类</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'left-menu',
        data() {
            return {
                defaultActive: ''
            }
        },
        mounted() {
            this.defaultActive = this.$route.path;
            if (this.$route.path === '/report') {
                this.defaultActive = '/report/home'
            }
        },
        methods: {
            open() {
            },
            close() {
            }
        }
    }
</script>

<style lang="scss" scoped>
    $headerHeight: 60px;
    #left-menu {
        width: 17%;
        min-width: 240px;
        max-width: 240px;
        height: 100%;
        background-color: #fdfdfd;
        border-right: 1px solid #e3e5e8;
        box-shadow: 0 2px 8px #ddd;
        position: relative;
        .el-menu {
            border: none;
        }
        .ivu-icon {
            font-size: 20px;
            padding-right: 10px;
        }
    }
</style>
