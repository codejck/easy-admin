module.exports = [{
    url: '/mock/about/getUpdateLog',
    type: 'get',
    response() {
        return {
            code: 200,
            msg: '操作成功',
            data: [
                { version: 'v1.0.0', content: '基础功能开发完成', time: '2021-07-01' },
                { version: 'v1.0.1', content: '修复了侧边栏折叠动画异常', time: '2021-07-02' },
                { version: 'v1.0.1', content: '新增了标签栏刷新按钮', time: '2021-07-03' },
                { version: 'v1.0.1', content: '修复了水平混合布局模式下侧边栏溢出问题', time: '2021-07-04' },
                { version: 'v1.0.2', content: '修改了异常页的位置', time: '2021-07-05' },
                { version: 'v1.0.2', content: '添加了一些基础页面', time: '2021-07-06' },
                { version: 'v1.0.2', content: '修改了styles的位置', time: '2021-07-07' },
                { version: 'v1.0.2', content: '修复了水平布局模式下顶栏溢出问题', time: '2021-07-08' },
                { version: 'v1.0.2', content: '修改了工具栏组件位置', time: '2021-07-09' },
                { version: 'v1.0.2', content: '给 LangSelect 组件添加了选中时的钩子', time: '2021-07-10' },
                { version: 'v1.0.3', content: '给路由添加了图标和标题', time: '2021-07-11' },
                { version: 'v1.0.3', content: '新增了打印按钮', time: '2021-07-12' },
                { version: 'v1.0.4', content: '取消了打印按钮', time: '2021-07-13' },
                { version: 'v1.0.4', content: '新增了置顶按钮', time: '2021-07-13' },
                { version: 'v1.0.4', content: '优化了i18n的数据', time: '2021-07-13' },
                { version: 'v1.0.4', content: '修改了登录背景图', time: '2021-07-13' },
                { version: 'v1.0.5', content: '优化了首加载的动画', time: '2021-07-13' },
                { version: 'v1.0.5', content: '修改了404插画', time: '2021-07-13' },
                { version: 'v1.0.6', content: '登录页面新增了语言切换', time: '2021-07-13' },
                { version: 'v1.0.6', content: '登录页背景图会随着主题变化', time: '2021-07-13' },
                { version: 'v1.0.6', content: '新增灰色模式', time: '2021-07-13' },
                { version: 'v1.0.6', content: '新增了 系统工具-代码生成', time: '2021-07-13' },
                { version: 'v1.0.6', content: '新增了深色侧边栏', time: '2021-07-13' },
                { version: 'v1.0.6', content: '优化了SettingItem组件', time: '2021-07-13' },
                { version: 'v1.0.7', content: '调整了views目录下的页面模块位置', time: '2021-07-13' },
                { version: 'v1.0.7', content: 'AppTable组件名字修改为EasyTable', time: '2021-07-13' },
                { version: 'v1.0.7', content: 'AppDialog组件名字修改为EasyDialog', time: '2021-07-13' },
                { version: 'v1.0.7', content: 'ColorPick组件名字修改为EasyColorPick', time: '2021-07-13' },
                { version: 'v1.0.7', content: '新增了QueryForm组件', time: '2021-07-13' },
                { version: 'v1.0.8', content: '新增了EasyButton组件', time: '2021-07-13' },
                { version: 'v1.0.8', content: '安装了@intlify/vue-i18n-loader插件', time: '2021-07-13' },
                { version: 'v1.0.8', content: '新增了路由模式选择', time: '2021-07-13' },
                { version: 'v1.0.8', content: '验证码组件三合一', time: '2021-07-13' },
                { version: 'v1.0.9', content: '优化了RightToolbar组件', time: '2021-07-13' },
                { version: 'v1.0.9', content: '优化了EasyTable组件', time: '2021-07-13' },
                { version: 'v1.1.0', content: 'utils新增了removeIf函数', time: '2021-07-13' },
                { version: 'v1.1.0', content: '修复了EasyTable组件的bug', time: '2021-07-13' },
                { version: 'v1.1.0', content: '优化了IconSelect组件', time: '2021-07-13' },
                { version: 'v1.1.1', content: '更换了所有系统图标', time: '2021-07-13' },
                { version: 'v1.1.1', content: '升级了SvgIcon组件', time: '2021-07-13' },
            ].map((item, index) => {
                return {
                    ...item,
                    id: index + 1
                }
            })
        }
    }
}]