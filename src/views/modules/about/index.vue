<template>
    <div class="m20">
        <div class="about app-card">
            <h4 class="title">
                <svg-icon icon="move" />
                <span>关于</span>
            </h4>
            <p class="content">
                <el-link type="primary" href="/home" style="text-indent:0">Easy-Admin</el-link>
                是一款专注于用户体验和视觉设计的高颜值后台管理系统模版，
                使用了 Vue3, Vue-Cli, Pinia 和 Element-Plus 等前端技术。
                它内置了丰富的主题配置和组件，代码规范严谨，实现了自动化的文件路由系统。
                是一个快速学习前沿技术的最佳实践。
            </p>
        </div>
        <div class="update-log app-card">
            <h4 class="title">
                <svg-icon icon="log" />
                <span>更新日志</span>
            </h4>
            <easy-table :data="updateLog">
                <el-table-column type="index" label="序号" width="60" />
                <el-table-column prop="version" label="版本号" width="120" />
                <el-table-column prop="content" label="内容" align="left" />
                <el-table-column prop="time" label="时间" width="200" />
            </easy-table>
        </div>
    </div>
</template>

<i18n locale="en" src="./locales/en.json"></i18n>
<i18n locale="zh" src="./locales/zh.json"></i18n>

<script>
import { getUpdateLog } from '@/api/modules/about'

export default {
    name: 'About',
    data() {
        return {
            updateLog: []
        }
    },
    created() {
        this.getUpdateLog()
    },
    methods: {
        getUpdateLog() {
            getUpdateLog().then(res => {
                this.updateLog = res.data
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.m20 {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .app-card {
       padding: 16px;

       .title {
           padding-bottom: 16px;
           color: var(--el-text-color-regular);
           cursor: pointer;
       }

       .content {
            text-indent: 2em;
            font-size: 14px;
            line-height: 25px;
            color: var(--el-text-color-regular);
       }
    }

    .about, .update-log {
        .title {
            padding-bottom: 12px;

            span {
                margin-left: 4px;
            }
        }
    }
}
</style>