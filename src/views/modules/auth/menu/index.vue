<template>
  <div class="app-card m20">
    <!-- 查询条件 -->
    <query-form :model="queryParams" :show="showSearch" @search="getTree" @reset="resetQuery">
      <el-form-item label="菜单名称" prop="title">
        <el-input v-model="queryParams.title" placeholder="请输入菜单名称" clearable @keyup.enter="getTree" />
      </el-form-item>
      <el-form-item label="路由名称" prop="path">
        <el-input v-model="queryParams.path" placeholder="请输入路由名称" clearable @keyup.enter="getTree" />
      </el-form-item>
    </query-form>

    <div class="flex-column g14 p14">
      <div class="flex">
        <easy-button type="primary" i="plus" :t="$t('common.add')" size="small" plain @click="handleAdd" />
        <easy-button type="danger" i="delete" :t="$t('common.delete')" size="small" plain @click="handleDelete(selection)" />
        <easy-button type="info" i="sort" :t="$t(isExpandAll ? 'toolTip.collapse' : 'toolTip.expand')" size="small" plain
          @click="expandChange" />
        <right-toolbar v-model:showSearch="showSearch" v-model:columns="columns" @refresh="getTree" />
      </div>
      <!-- 菜单表格 -->
      <easy-table v-if="refreshTable" v-loading="loading" :data="tree" row-key="id"
        :default-expand-all="isExpandAll" v-model:columns="columns" @select="handleSelect">
        <el-table-column type="selection" width="40" />
        <el-table-column label="菜单名称" width="160" align="left">
          <template #default="scoped">
            {{ $t(`route.${scoped.row.title}`) }}
          </template>
        </el-table-column>
        <el-table-column prop="icon" label="图标" width="100">
          <template #default="scope">
            <svg-icon :icon="scope.row.icon" />
          </template>
        </el-table-column>
        <el-table-column prop="path" label="路由名称" align="left" />
        <el-table-column prop="status" label="状态" width="100">
          <template #default="{ row: { disabled, hidden } }">
            <el-tag :type="disabled ? 'danger' : hidden ? 'info' : 'success'" disable-transitions>
              {{ disabled ? '停用' : hidden ? '隐藏' : '正常' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="200">
          <template #default="{ row: { createTime } }">
            <span>{{ $parseTime(new Date(createTime)) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="operation" label="操作" width="240">
          <template #default="scope">
            <easy-button type="primary" i="drag" class="handle-drag" :title="$t('common.drag')" link />
            <easy-button type="primary" i="plus" :t="$t('common.add')" link @click="handleAdd(scope.row)" />
            <easy-button type="primary" i="edit" :t="$t('common.update')" link @click="handleUpdate(scope.row)" />
            <easy-button type="primary" i="delete" :t="$t('common.delete')" link @click="handleDelete([scope.row])" />
          </template>
        </el-table-column>
      </easy-table>
    </div>
    <!-- 添加或修改菜单对话框 -->
    <easy-dialog v-model="open" :title="title" width="680px" @closed="cancel" @confirm="submitForm">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="菜单名称" prop="title">
          <el-input v-model="form.title" placeholder="请输入菜单名称" />
        </el-form-item>
        <el-form-item label="菜单路由" prop="path">
          <el-input v-model="form.path" placeholder="请输入菜单路由" />
        </el-form-item>
        <el-form-item label="上级目录" prop="parentId">
          <el-tree-select v-model="form.parentId" :data="dirTree" placeholder="选择上级目录"
            :props="{ value: 'id', label: 'title', class: () => 'el-tree-select-node' }"
            :filter-node-method="(val, node) => node.hasChild && node.title.includes(val)" check-strictly filterable
            highlight-current>
            <template #default="{ data }">
              {{ data.title }}
              <span v-if="data.hasChild">({{ data.children?.length }})</span>
            </template>
          </el-tree-select>
        </el-form-item>
        <el-form-item label="菜单图标" prop="icon">
          <IconSelect v-model="form.icon" />
        </el-form-item>
        <el-form-item label="显示排序" prop="order">
          <el-input-number v-model="form.order" controls-position="right" :min="1" />
        </el-form-item>
        <div style="display:flex;flex-wrap:wrap">
          <el-form-item label="菜单类型" prop="hasChild" style="width: 50%">
            <el-radio-group v-model="form.hasChild" style="margin-left: 10px">
              <el-radio :value="true">目录</el-radio>
              <el-radio :value="false">菜单</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item prop="noCache" style="width: 50%">
            <template #label>
              <el-tooltip content="选择是则会被`keep-alive`缓存，需要匹配组件的`name`和地址保持一致" placement="top" :show-after="300">
                是否缓存
              </el-tooltip>
            </template>
            <el-radio-group v-model="form.noCache" style="margin-left: 10px">
              <el-radio :value="true">缓存</el-radio>
              <el-radio :value="false">不缓存</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item prop="hidden" style="width: 50%">
            <template #label>
              <el-tooltip content="选择隐藏则路由将不会出现在侧边栏，但仍然可以访问" placement="top" :show-after="300">
                是否隐藏
              </el-tooltip>
            </template>
            <el-radio-group v-model="form.hidden" style="margin-left: 10px">
              <el-radio :value="true">隐藏</el-radio>
              <el-radio :value="false">不隐藏</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item prop="disabled" style="width: 50%">
            <template #label>
              <el-tooltip content="选择停用则路由将不会出现在侧边栏，也不能被访问" placement="top" :show-after="300">
                菜单状态
              </el-tooltip>
            </template>
            <el-radio-group v-model="form.disabled" style="margin-left: 10px">
              <el-radio :value="false">正常</el-radio>
              <el-radio :value="true">停用</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
      </el-form>
    </easy-dialog>
  </div>
</template>

<i18n locale="en" src="./locales/en.json"></i18n>
<i18n locale="zh" src="./locales/zh.json"></i18n>

<script>
import { getList, getItem, addItem, deleteItem, updateItem } from '@/api/modules/auth/menu'
import { arrayToTree } from '@/utils/tree'

import IconSelect from '@/components/IconSelect'

export default {
  name: 'Menu',
  components: { IconSelect },
  data() {
    return {
      // 遮罩层
      loading: true,
      // 显示搜索栏
      showSearch: true,
      // 列设置
      columns: [],
      // 是否展开，默认全部折叠
      isExpandAll: false,
      // 重新渲染表格状态
      refreshTable: true,
      // 是否显示弹出层
      open: false,
      // 弹出层标题
      title: "",
      // 菜单树
      tree: [],
      // 选中的数据
      selection: [],
      // 目录树
      dirTree: [],
      // 查询参数
      queryParams: {
        title: undefined,
        path: undefined
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        title: [
          { required: true, message: "菜单名称不能为空", trigger: "blur" }
        ],
        path: [
          { required: true, message: "路由地址不能为空", trigger: "blur" }
        ]
      }
    }
  },
  created() {
    this.getTree()
  },
  methods: {
    /** 查询菜单树 */
    getTree() {
      this.loading = true
      getList(this.queryParams).then(res => {
        this.loading = false
        // 搜索条件有值时，则 this.tree = res.data
        if (Object.values(this.queryParams).some(Boolean)) {
          this.tree = res.data
        } else {
          this.tree = arrayToTree(res.data)
        }
      })
    },
    // 表单重置
    reset() {
      this.$refs['form']?.resetFields()
      this.form = {
        id: undefined,
        parentId: 0,
        order: 1,
        hasChild: false,
        path: '',
        query: null,
        icon: '',
        title: '',
        noCache: false,
        hidden: false,
        disabled: false
      }
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.$refs['queryForm']?.resetFields()
      this.queryParams.title = undefined
      this.queryParams.path = undefined
      this.getTree()
    },
    // 多选框选中数据
    handleSelect(selection) {
      this.selection = selection
    },
    // 展开/折叠操作
    expandChange() {
      this.refreshTable = false
      this.isExpandAll = !this.isExpandAll
      this.$nextTick(() => {
        this.refreshTable = true
      })
    },
    // 新增按钮操作
    handleAdd(row) {
      this.reset()
      getList().then(res => {
        this.dirTree = [{ id: 0, title: '根目录', hasChild: true, children: arrayToTree(res.data) }]
        this.form.parentId = row ? row.id : 0
        this.title = "添加菜单"
        this.open = true
      })
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset()
      getList().then(res => {
        this.dirTree = [{ id: 0, title: '根目录', hasChild: true, children: arrayToTree(res.data) }]
        getItem(row.id).then(res => {
          this.form = res.data
          this.title = "修改菜单"
          this.open = true
        })
      })
    },
    /** 删除按钮操作 */
    handleDelete(rows) {
      if (rows.length === 0) return
      this.$modal.confirm.warning(`是否确认删除"${rows.map(({ title }) => title)}"?`).then(() => {
        return deleteItem(rows.map(({ id }) => id))
      }).then(() => {
        this.getTree()
        this.$modal.message.success(this.$t('message.deleteSuccess'))
      }).catch(() => { })
    },
    // 取消按钮
    cancel() {
      this.reset()
      this.open = false
    },
    // 提交按钮
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id === undefined) {
            // 新增
            addItem(this.form).then(() => {
              this.$modal.message.success('message.addSuccess')
              this.open = false
              this.getTree()
            })
          } else {
            // 修改
            updateItem(this.form).then(() => {
              this.$modal.message.success("message.updateSuccess")
              this.open = false
              this.getTree()
            })
          }
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.el-tree-select-node {
  .el-select-dropdown__item {
    span {
      opacity: 0.6;
    }
  }
}
</style>