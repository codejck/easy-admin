<template>
    <div class="login-log" v-loading="loading">
        <br>
        <el-timeline>
            <el-timeline-item v-for="item in list" :key="item" :timestamp="item.time">
                {{ item.title }}
            </el-timeline-item>
        </el-timeline>
        <Pagination :total="total" v-model:current-page="params.pageIndex" v-model:page-size="params.pageSize"
            layout="prev, pager, next"
            @change="getList" />
    </div>
</template>

<script>
import { getLoginLogs } from '@/api/modules/system/user'

export default {
    name: 'LoginLog',
    data() {
        return {
            loading: false,
            total: 0,
            list: [],
            params: {
                pageIndex: 1,
                pageSize: 20,
            }
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            this.loading = true
            getLoginLogs(this.params).then(res => {
                this.loading = false
                this.list = res.data.rows
                this.total = res.data.total
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.login-log {
    height: 100%;
    padding-left: 8px;
}
</style>