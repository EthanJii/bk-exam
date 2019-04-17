<template>
    <div id='app'>
        <title>809ss</title>
        <Header :title="title"></Header>
        <Container :style="{height: winHeight}"></Container>
        <router-link to="test"></router-link>

    </div>
</template>

<script>
    import Header from '@/components/base/header'
    import Container from '@/components/base/container'
    import '@/assets/css/base.scss'
    export default {
        name: 'App',
        components: {
            Header,
            Container
        },
        created() {
            let headerHeight = 60;
            if (window.innerHeight) {
                this.winHeight = window.innerHeight;
            }
            if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
                this.winHeight = document.documentElement.clientHeight;
            }
            this.winHeight = this.winHeight - headerHeight + 'px'
        },
        data() {
            return {
                title: ''
            }
        }
    }
</script>
<style>
</style>
