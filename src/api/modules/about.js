import request from '@/utils/request'

export function getUpdateLog() {
    return request({
        url: '/about/getUpdateLog',
        methods: 'get'
    })
}