import request from '@/utils/request'

export function getDict(keys, locales) {
    return request({
        url: '/getDict',
        method: 'post',
        data: { keys, locales },
        headers: {
            repeatSubmit: false
        }
    })
}