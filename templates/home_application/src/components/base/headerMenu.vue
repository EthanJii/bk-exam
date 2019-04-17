<template>
    <div id="header-menu">
        <Menu mode="horizontal" theme="light" :active-name="defaultActive">
            <MenuItem name="/home" to="/home">
                <i class="ivu-icon ivu-icon-ios-home"></i>
                主机列表
            </MenuItem>
            <MenuItem name="/test" to="/test">
                <i class="ivu-icon ivu-icon-md-analytics"></i>
                主机状态
            </MenuItem>
        </Menu>
    </div>
</template>
<script>
    export default {
        name: 'headerMenu',
        props: {
            menuOption: [
                // {title: 'test', path: '/test', name: 'test', component: Test},
                // {title: 'home', path: '/home', name: 'home', component: Home}
            ]
        },
        data() {
            return {
                defaultActive: '/home',
            };
        },
        mounted() {
            this.defaultActive = this.$route.path;
            if (this.$route.path === '/') {
                this.defaultActive = '/home'
            }
        },
        methods: {}
    }
</script>
<style lang="scss" scoped>
    $headerHeight: 60px;
    #header-menu {
        height: $headerHeight;
        width: 100%;
        margin-left: 20px;
    }
</style>
<!--iview 头部菜单-->
<style lang="scss">
    .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
        background-color: #f0faff !important;
        border-bottom: 1px solid #ddd !important;
    }

    .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu {
        border-bottom: 1px solid #ddd;
    }

    .ivu-menu-light {
        background: #fff;
    }

    .ivu-menu-horizontal {
        height: 61px;
        border-bottom-color: #fff !important;
        box-shadow: none;
    }
</style>
