<template>
    <div id="cw-date-picker">
        <el-date-picker
            v-model="date"
            type="daterange"
            align="left"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            size="small"
            value-format="yyyy-MM-dd HH:mm:ss"
            :picker-options="pickerOptions"
            @change="change">
        </el-date-picker>
    </div>
</template>

<script>
    export default {
        name: 'cw-data-picker',
        components: {},
        props: {
            days: {
                default: 0
            }
        },
        data() {
            return {
                date: '',
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
                    }]
                }
            };
        },
        mounted() {
            if (this.days > 0) {
                this.date = [
                    new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * this.days),
                    new Date(new Date().getTime())
                ];
            }
        },
        methods: {
            change(date) {
                date[1] = date[1].split(' ')[0] + ' 23:59:59';
                this.$emit('change', date)
            }
        }
    }
</script>

<style scoped lang="scss">
    #cw-date-picker {
    }
</style>
<style lang="scss">
    #cw-date-picker {
        .el-range-editor--small .el-range-separator {
            width: 25px;
        }
    }
</style>
