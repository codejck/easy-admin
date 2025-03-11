<template>
    <easy-dialog class="gen-dialog" width="80%" min-height="532px" max-height="680px"
        @open="activeName = 'basicInfo'"
        @opened="handleOpened">
        <el-form>
            <el-tabs v-model="activeName">
                <el-tab-pane label="基本信息" name="basicInfo">
                    <el-row>
                        <el-col :span="12">
                            
                        </el-col>
                        <el-col :span="12">
                            
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="字段信息" name="fieldsInfo">
                    <easy-table ref="fields-table-ref" :data="form.fields">
                        <el-table-column width="50px">
                            <svg-icon icon="drag" class="handle-drag" />
                        </el-table-column>
                        <el-table-column type="index" label="序号" width="60px" />
                        <el-table-column label="字段列名" prop="fieldName" width="160px">
                            <template #default="scope">
                                <el-input v-model="scope.row.fieldName" />
                            </template>
                        </el-table-column>
                        <el-table-column />
                        <el-table-column label="插入" width="60px">
                            <template #default="scope">
                                <el-checkbox v-model="scope.row.isInsert" />
                            </template>
                        </el-table-column>
                        <el-table-column label="编辑" width="60px">
                            <template #default="scope">
                                <el-checkbox v-model="scope.row.isEdit" />
                            </template>
                        </el-table-column>
                        <el-table-column label="列表" width="60px">
                            <template #default="scope">
                                <el-checkbox v-model="scope.row.isList" />
                            </template>
                        </el-table-column>
                        <el-table-column label="查询" width="60px">
                            <template #default="scope">
                                <el-checkbox v-model="scope.row.isQuery" />
                            </template>
                        </el-table-column>
                        <el-table-column prop="operation" label="操作" width="200" fixed="right">
                            <template #default="scope">
                                <easy-button type="primary" i="edit" :t="$t('高级编辑')" link />
                                <easy-button type="primary" i="delete" :t="$t('common.delete')" link />
                            </template>
                        </el-table-column>
                        <template #empty>
                            <el-empty />
                        </template>
                    </easy-table>
                </el-tab-pane>
                <el-tab-pane label="生成信息" name="genInfo">
                    <el-row>
                        <el-col :span="12">

                        </el-col>
                        <el-col :span="12">

                        </el-col>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
        </el-form>
    </easy-dialog>
</template>

<script>
import { useDraggable } from "vue-draggable-plus"

export default {
    name: 'GenDialog',
    props: {
        form: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            // 当前选项卡的 name
            activeName: 'basicInfo',
            // 表单校验
            rules: {}
        }
    },
    methods: {
        handleOpened() {
            let el = this.$refs['fields-table-ref']?.$el?.querySelector(".el-table__body-wrapper table > tbody")
            if (el) {
                useDraggable(el, this.form.fields, {
                    animation: 150,
                    ghostClass: "ghost",
                    handle: '.handle-drag'
                }).start()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.gen-dialog {
    .el-tabs {
        ::v-deep .el-tabs__nav-scroll {
            display: flex;
            justify-content: center;
        }
    }
}
</style>