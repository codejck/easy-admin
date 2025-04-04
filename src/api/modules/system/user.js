import request from '@/utils/request'

// 获取基本信息
export function getBaseInfo() {
    return request({
        url: '/getBaseInfo',
        methods: 'get'
    })
}

// 修改基本信息
export function updateBaseInfo(data) {
    return request({
        url: '/updateBaseInfo',
        method: 'post',
        data: data
    })
}

// 用户头像上传
export function uploadAvatar(data) {
    return request({
        url: '/uploadAvatar',
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data
    })
}

// 修改密码
export function updatePwd(data) {
    return request({
        url: '/updatePwd',
        method: 'post',
        data: data
    })
}

// 查询登录日志
export function getLoginLogs(params) {
    return request({
        url: '/getLoginLogs',
        method: 'get',
        params
    })
}