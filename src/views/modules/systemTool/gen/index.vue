<template>
    <div class="app-card m20">
        <!-- 查询条件 -->
        <query-form :model="queryParams" :show="showSearch" @search="getList" @reset="resetQuery">
            <el-form-item label="模块名称" prop="name">
                <el-input v-model="queryParams.name" placeholder="请输入模块名称" clearable @keyup.enter="getList" />
            </el-form-item>
            <el-form-item label="创建时间" prop="createTime">
                <el-date-picker v-model="queryParams.createTime" type="daterange" start-placeholder="开始日期"
                    end-placeholder="结束日期" />
            </el-form-item>
        </query-form>

        <div class="flex-column g14 p14">
            <div class="flex">
                <easy-button type="primary" i="plus" :t="$t('common.add')" size="small" plain @click="handleAdd" />
                <easy-button type="danger" i="delete" :t="$t('common.delete')" size="small" plain @click="handleDelete(selection)" />
                <easy-button type="warning" i="to-bottom" :t="$t('生成代码')" size="small" plain />
                <right-toolbar v-model:showSearch="showSearch" v-model:columns="columns" @refresh="getList" />
            </div>

            <!-- 数据表格 -->
            <easy-table v-loading="loading" :data="list" v-model:columns="columns" @select="handleSelect">
                <el-table-column type="selection" width="40" />
                <el-table-column type="index" label="序号" width="60" />
                <el-table-column prop="name" label="模块名称" width="160" />
                <el-table-column />
                <el-table-column prop="createTime" label="创建时间" width="200">
                    <template #default="{ row: { createTime } }">
                        <span>{{ $parseTime(new Date(createTime)) }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="operation" label="操作" width="320">
                    <template #default="scope">
                        <easy-button type="primary" i="code" :t="$t('预览')" link @click="handlePreviewCode(scope.row)" />
                        <easy-button type="primary" i="edit" :t="$t('common.update')" link @click="handleUpdate(scope.row)" />
                        <easy-button type="primary" i="delete" :t="$t('common.delete')" link
                            @click="handleDelete([scope.row])" />
                        <easy-button type="primary" i="to-bottom" :t="$t('生成代码')" link />
                    </template>
                </el-table-column>
            </easy-table>
        </div>

        <!-- 新增或修改模块对话框 -->
        <GenDialog v-model="open" :title="title" :form="form" />
        <!-- 预览代码框 -->
        <PreviewCode v-model="previewCode.open" :data="previewCode.data" />
    </div>
</template>

<i18n locale="en" src="./locales/en.json"></i18n>
<i18n locale="zh" src="./locales/zh.json"></i18n>

<script>
import { getList, getItem, deleteItem, previewCode } from '@/api/modules/systemTool/gen'

import GenDialog from './components/GenDialog'
import PreviewCode from './components/PreviewCode'

export default {
    name: 'Gen',
    components: { GenDialog, PreviewCode },
    data() {
        return {
            // 遮罩层
            loading: true,
            // 显示搜索栏
            showSearch: true,
            // 列设置
            columns: [],
            // 是否显示弹出层
            open: false,
            // 弹出层标题
            title: "",
            // 表格条数
            total: 0,
            // 表格数据
            list: [],
            // 选中的数据
            selection: [],
            // 预览代码
            previewCode: {
                // 预览代码窗口是否显示
                open: false,
                // 预览代码窗口是否加载中
                loading: false,
                // 预览代码数据
                data: []
            },
            // 查询参数
            queryParams: {
                name: '',
                createTime: ''
            },
            // 表单参数
            form: {}
        }
    },
    created() {
        this.getList()
    },
    methods: {
        // 查询表格数据
        getList() {
            this.loading = true
            getList(this.queryParams).then(res => {
                this.loading = false
                this.total = res.total
                this.list = res.data
            })
        },
        // 表单重置
        reset() {
            this.$refs['form']?.resetFields()
            this.form = {}
        },
        // 重置按钮操作
        resetQuery() {
            this.queryParams.name = ''
            this.queryParams.createTime = ''
            this.getList()
        },
        // 多选框选中数据
        handleSelect(selection) {
            this.selection = selection
        },
        // 新增按钮操作
        handleAdd(row) {
            this.reset()
            this.title = "新增模块"
            this.open = true
        },
        // 修改按钮操作
        handleUpdate(row) {
            this.reset()
            getItem(row.id).then(res => {
                this.form = res.data
                this.title = "修改模块"
                this.open = true
            })
        },
        // 删除按钮操作
        handleDelete(rows) {
            if (rows.length === 0) return
            this.$modal.confirm.warning(`是否确认删除"${rows.map(({ name }) => name)}"?`).then(() => {
                return deleteItem(rows.map(({ id }) => id))
            }).then(() => {
                this.getList()
                this.$modal.message.success(this.$t('message.deleteSuccess'))
            }).catch(() => { })
        },
        // 预览代码按钮操作
        handlePreviewCode(row) {
            this.previewCode.loading = true
            this.previewCode.open = true
            previewCode(row.id).then(res => {
                this.previewCode.loading = false
                this.previewCode.data = res.data
            })
        },
        // 生成代码按钮操作
        handleGenCode() {

        }
    }
}
</script>

<style lang="scss" scoped></style>