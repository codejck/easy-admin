import request from '@/utils/request'

// 查询列表
export function getList(params) {
    return request({
        url: '/systemTool/gen/list',
        method: 'get',
        params
    })
}

// 查询生成配置详情
export function getItem(id) {
    return request({
        url: `/systemTool/gen/getItem/${id}`,
        method: 'get'
    })
}

// 删除模块
export function deleteItem(ids) {
    return request({
        url: '/systemTool/gen/delete',
        method: 'delete',
        data: ids
    })
}

// 预览代码
export function previewCode(id) {
    return request({
        url: `/systemTool/gen/previewCode/${id}`,
        method: 'get'
    })
}