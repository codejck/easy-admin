const { menuList } = require(`${process.cwd()}/mock/data`)
const { getNextUniqueMin, pick } = require(`${process.cwd()}/mock/utils`)

module.exports = [{
    url: '/mock/auth/menu/list',
    type: 'get',
    response(req) {
        let params = req.query
        let data = menuList.filter(item => {
            return Object.keys(params).every(key => {
                return item[key]?.includes(params[key])
            })
        })
        return {
            code: 200,
            msg: '操作成功',
            data
        }
    }
}, {
    url: '/mock/auth/menu/get/:id',
    type: 'get',
    response(req) {
        let n = parseInt(req.params.id)
        return {
            code: 200,
            msg: '操作成功',
            data: menuList.find(item => item.id === n)
        }
    }
}, {
    url: '/mock/auth/menu/add',
    type: 'post',
    response(req) {
        let minId = getNextUniqueMin(menuList.map(item => item.id))
        let form = { ...req.body, id: minId, createTime: new Date().getTime() }
        let keys = ['id', 'parentId', 'order', 'hasChild', 'path', 'query', 'component', 'icon', 'title', 'noCache', 'hidden', 'disabled', 'createTime']
        let item = pick(form, keys)
        menuList.push(item)
        return {
            code: 200,
            msg: '操作成功'
        }
    }
}, {
    url: '/mock/auth/menu/delete',
    type: 'delete',
    response(req) {
        menuList.forEach((item, index) => req.body.includes(item.id) && menuList.splice(index, 1))
        return {
            code: 200,
            msg: '操作成功'
        }
    }
}, {
    url: '/mock/auth/menu/update',
    type: 'put',
    response(req) {
        for (let i = 0; i < menuList.length; i++) {
            if (menuList[i].id === req.body.id) {
                menuList[i] = { ...menuList[i], ...req.body }
                break
            }
        }
        return {
            code: 200,
            msg: '操作成功'
        }
    }
}]