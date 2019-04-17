<template>
    <div id="main-container">
        <!--<LeftMenu ></LeftMenu>-->
        <router-view/>
    </div>
</template>

<script>
    import LeftMenu from '@/components/base/leftMenu'

    export default {
        name: 'main-container',
        components: {
            LeftMenu
        },
        data() {
            return {
                // showLeftMenu: false
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    $headerHeight: 60px;
    #main-container {
        width: 100%;
        background: #fff;
        top: $headerHeight;
        position: absolute;
        /*display: flex;*/
        overflow: hidden;
    }
</style>
