const Mock = require('mockjs')
const { treeToArray } = require(`${process.cwd()}/mock/utils`)

// 用户列表
module.exports.usersList = [
    { id: 1, username: 'admin', password: 'admin1234', nickname: '天命人', phoneNumber: '13736354332', gender: 0, email: '13736354332@qq.com', createTime: '2022-12-01 23:46:00', brief: '', avatar: '' },
    { id: 2, username: 'user', password: 'user1234', nickname: '路小雨', phoneNumber: '15716679049', gender: 1, email: '15716679049@126.com', createTime: '2022-12-01 16:12:00', brief: '', avatar: '' },
    { id: 3, username: 'boss', password: 'boss1234', nickname: '小奶龙', phoneNumber: '19926353908', gender: 0, email: '19926353908@163.com', createTime: '2022-12-01 14:33:00', brief: '因为你值得被值得', avatar: '' },
]

// 登录日志列表
module.exports.loginList = Mock.mock({
    "array|100": [{
        'id|+1': 1,
        'userId': Mock.Random.pick([1, 2, 3]),
        'title': () => Mock.Random.pick(['登录', '修改密码', '修改资料']),
        'time': () => Mock.Random.datetime()
    }]
}).array

// 菜单列表
module.exports.menuList = treeToArray([{
    path: 'home',
    query: null,
    component: 'home',
    icon: 'home',
    title: 'home',
    noCache: false,
    hidden: false,
    disabled: false,
    createTime: 1695284050000
}, {
    path: 'document',
    query: null,
    component: 'document',
    icon: 'book-open',
    title: 'document',
    noCache: false,
    hidden: false,
    disabled: false,
    createTime: 1695284050000,
    children: [{
        path: 'element',
        query: null,
        component: 'https://element-plus.org',
        icon: 'element-plus',
        title: 'element',
        noCache: false,
        hidden: false,
        disabled: false,
        createTime: 1695284050000
    }, {
        path: 'pinia',
        query: null,
        component: 'https://pinia.vuejs.org',
        icon: 'pinia',
        title: 'pinia',
        noCache: false,
        hidden: false,
        disabled: false,
        createTime: 1695284050000
    }]
}, {
    path: 'components',
    query: null,
    component: 'components',
    icon: 'puzzle',
    title: 'components',
    noCache: false,
    hidden: false,
    disabled: false,
    createTime: 1695284050000,
    children: [{
        path: 'dialog',
        query: null,
        component: 'components/dialog',
        icon: 'split',
        title: 'dialog',
        noCache: false,
        hidden: false,
        disabled: false,
        createTime: 1695284050000,
    }]
}, {
    path: 'auth',
    query: null,
    component: 'auth',
    icon: 'shield-right',
    title: 'auth',
    noCache: false,
    hidden: false,
    disabled: false,
    createTime: 1695284050000,
    children: [{
        path: 'menu',
        query: null,
        component: 'auth/menu',
        icon: 'menu',
        title: 'menu',
        noCache: false,
        hidden: false,
        disabled: false,
        createTime: 1695284050000,
    }, {
        path: 'role',
        query: null,
        component: 'auth/role',
        icon: 'peoples',
        title: 'role',
        noCache: false,
        hidden: false,
        disabled: false,
        createTime: 1695284050000,
    }]
}, {
    path: 'error',
    query: null,
    component: 'error',
    icon: 'caution',
    title: 'error',
    noCache: false,
    hidden: false,
    disabled: false,
    createTime: 1695284050000,
    children: [{
        path: '401',
        query: null,
        component: 'error/401',
        icon: 'dot',
        title: '401',
        noCache: false,
        hidden: false,
        disabled: false,
        createTime: 1695284050000,
    }, {
        path: '404',
        query: null,
        component: 'error/404',
        icon: 'dot',
        title: '404',
        noCache: false,
        hidden: false,
        disabled: false,
        createTime: 1695284050000,
    }]
}, {
    path: 'system',
    query: null,
    component: 'system',
    icon: 'setting',
    title: 'system',
    noCache: false,
    hidden: false,
    disabled: false,
    createTime: 1695284050000,
    children: [{
        path: 'user',
        query: null,
        component: 'system/user',
        icon: 'user',
        title: 'user',
        noCache: false,
        hidden: false,
        disabled: false,
        createTime: 1695284050000,
    }]
}, {
    path: 'systemTool',
    query: null,
    component: 'systemTool',
    icon: 'tool',
    title: 'systemTool',
    noCache: false,
    hidden: false,
    disabled: false,
    createTime: 1695284050000,
    children: [{
        path: 'gen',
        query: null,
        component: 'systemTool/gen',
        icon: 'code',
        title: 'gen',
        noCache: false,
        hidden: false,
        disabled: false,
        createTime: 1695284050000,
    }]
}, {
    path: 'about',
    query: null,
    component: 'about',
    icon: 'circle-info',
    title: 'about',
    noCache: false,
    hidden: false,
    disabled: false,
    createTime: 1695284050000
}])

// 数据表列表
module.exports.tableList = Mock.mock({
    "array|10": [{
        'id|+1': 1,
        'tableName': () => Mock.Random.pick(['teaching', 'user', 'role', 'menu', 'auth', 'system', 'systemTool', 'about']),
        'tableComment': () => Mock.Random.pick(['教学管理', '用户管理', '角色管理', '菜单管理', '权限管理', '系统管理', '系统工具', '关于我们']),
    }]
})

// 生成代码表
module.exports.genList = [{
    id: 1,
    name: '教学管理',
    remark: '',
    createTime: 1695284050000,
    frontEnd: true,
    backEnd: true,
    tableId: 1,
    tableName: 'teaching',
    locales: {},
    fields: [{
        id: 1,
        fieldName: 'id',
        fieldComment: '',
        isInsert: false,
        isEdit: true,
        isList: true,
        isQuery: false,
    }, {
        id: 2,
        fieldName: 'name',
        fieldComment: '',
        isInsert: true,
        isEdit: true,
        isList: true,
        isQuery: true,
    }, {
        id: 3,
        fieldName: 'gender',
        fieldComment: '',
        isInsert: true,
        isEdit: true,
        isList: true,
        isQuery: true,
    }, {
        id: 4,
        fieldName: 'age',
        fieldComment: '',
        isInsert: true,
        isEdit: true,
        isList: true,
        isQuery: true,
    }]
}]