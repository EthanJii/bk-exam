<template>
    <div id="cw-header">
        <div class="logo">
            <img src="../../assets/img/logo.png">
        </div>
        <div class="title" :title="title"><a href="/">{{title}}</a></div>
        <div class="menu">
            <HeaderMenu :menu-option="menuOption"></HeaderMenu>
        </div>
        <div class="user">
            <span class="username">{{username}}</span>
            <span >
                <a :href="logout_url" title="注销登录" class="ivu-icon ivu-icon-ios-log-out login-out"></a>
            </span>
        </div>
    </div>
</template>

<script>
    import HeaderMenu from '@/components/base/headerMenu'

    export default {
        name: 'cw-header',
        props: {
            menuOption: {},
            title: {
                default: 'Vue开发框架'
            }
        },
        components: {
            HeaderMenu
        },
        data() {
            return {
                username: '',
                logout_url: ''
            }
        },
        created() {
            this.loginUser();
        },
        methods: {
            loginUser() {
                this.$http.get('/login_info').then(res => {
                    this.username = res.data.username;
                    console.log(res)
                    console.log(this.username)
                    this.logout_url = window.siteUrl + res.data.logout_url;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    $headerHeight: 60px;
    #cw-header {
        width: 100%;
        height: $headerHeight;
        border-bottom: 1px solid #ddd;
        position: absolute;
        z-index: 999;
        background: #fff;
        display: flex;
        align-items: center;
        box-shadow: 0 2px 8px rgba(229, 229, 229, 0.5);
        .logo {
            width: 220px;
            align-items: center;
            text-align: center;
        }
        .title {
            width: 200px;
            background-color: #f9f9f9;
            background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(168, 219, 245, 0.9)), to(rgba(3, 134, 207, 1)));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 26px;
        }
        .menu {
            flex: 1;
        }
        .user {
            width: 160px;
            text-align: center;
            .photo, .login-out {
                font-size: 30px;
                margin-left: 8px;
            }
            .photo{
                color: #737987;
            }
            .login-out{
                cursor: pointer;
            }
            .login-out:hover{
                color: #4facdd;
            }
            .username{
                font-size: 16px;
                font-weight: bold;
                color: #737987;
            }
        }
    }
</style>
