import zh from 'element-plus/dist/locale/zh-cn.mjs'

export default {
    ...zh,
    dict: {},
    'system': {
        'title': 'Easy-Admin',
        'icp': '备案号：粤ICP备2025413388号',
        'copyright': '版权所有 © 2024 Easy-Admin All Rights Reserved.',
        'watermark': 'Easy-Admin',
    },
    'common': {
        'back': '返回',
        'backtop': '回到顶部',
        'systemTip': '系统提示',
        'backHome': '返回首页',
        'relogin': '重新登录',
        'logout': '退出登录',
        'confirm': '确定',
        'cancel': '取消',
        'search': '搜索',
        'reset': '重置',
        'select': '选择',
        'add': '新增',
        'delete': '删除',
        'export': '导出',
        'update': '修改',
        'drag': '拖拽',
        'operation': '操作',
        'refresh': '刷新',
        'expand': '展开',
        'collapse': '折叠',
        'fullscreen': '全屏',
        'exitFullscreen': '退出全屏',
        'validate': '请完成安全验证',
        'userCenter': '个人中心',
        'configuration': '系统配置',
    },
    'placeholder': {
        "captcha": "请输入验证码",
        'enterIconName': '请输入图标名称',
        'selectIcon': '请选择图标',
        'search': '搜索'
    },
    'operation': {
        'closeCurrent': '关闭当前',
        'closeOthers': '关闭其他',
        'closeLeft': '关闭左侧',
        'closeRight': '关闭右侧',
        'closeAll': '全部关闭',
        'save': '保存配置',
        'reset': '恢复默认',
    },
    'message': {
        'loginSuccess': '登录成功',
        'operationSuccess': '操作成功',
        'addSuccess': '新增成功',
        'deleteSuccess': '删除成功',
        'updateSuccess': '修改成功',
        'validateSuccess': '验证成功',
        'validateFailed': '验证失败',
        'copied': '已复制',
        'loading': '加载中...',
        'welcomeBack': '欢迎回来',
        'captchaSliderTip': '按住左边按钮拖动完成上方拼图',
        'captchaPickTip': '请依次点击',
        'fileFormatError': '文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。',
        'loginExpired': '登录状态已过期，您可以继续留在该页面，或者重新登录',
        'invalidSession': '无效的会话，或者会话已过期，请重新登录。',
        'committing': '数据正在处理，请勿重复提交',
        'networkError': '后端接口连接异常',
        'timeout': '系统接口请求超时',
        'downloading': '正在下载数据，请稍候...',
        'downloadFailed': '下载文件失败，请联系管理员！',
        'confirmLogout': '确定要退出系统吗？',
        'unsupportFullscreen': '你的浏览器不支持全屏',
        'saving': '正在保存到本地，请稍候...',
        'reseting': '正在清除设置，请稍候...',
    },
    'state': {
        '401': '认证失败，无法访问系统资源',
        '403': '当前操作没有权限',
        '404': '访问资源不存在',
        'default': '系统未知错误'
    },
    'settings': {
        'title': {
            'system': '系统',
            'theme': '主题',
            'navbar': '顶栏',
            'navToolbar': '工具栏',
            'tabs': '标签栏',
            'sidebar': '侧边栏',
        },
        'subTitle': {
            'mode': {
                'title': '模式',
                'options': {
                    'light': '白天',
                    'dark': '黑夜',
                    'auto': '自动'
                }
            },
            'layout': {
                'options': {
                    'vertical': '左侧菜单模式',
                    'vertical-mix': '左侧菜单混合模式',
                    'horizontal': '顶部菜单模式',
                    'horizontal-mix': '顶部菜单混合模式',
                }
            },
            'language': {
                'title': '语言',
                'placeholder': '选择语言',
                'options': {
                    'en': 'English',
                    'zh': '简体中文',
                }
            },
            'pageAnimateType': {
                'title': '页面切换动画',
                'options': {
                    'fade': '淡入淡出',
                    'fade-zoom': '缩放淡入',
                    'slide-right': '向右滑动',
                    'slide-bottom': '向下滑动',
                    'flip': '翻页',
                    'none': '无',
                }
            },
            'dynamicTitle': {
                'title': '开启动态标题'
            },
            'watermark': {
                'title': '开启水印'
            },
            'grey': {
                'title': '灰色模式'
            },
            'colorWeak': {
                'title': '色弱模式'
            },
            'headerHeight': {
                'title': '头部高度'
            },
            'fixedHeader': {
                'title': '固定头部',
                'tip': '开启后，顶栏和标签栏将固定在顶部'
            },
            'showBreadcrumb': {
                'title': '显示面包屑'
            },
            'showBreadcrumbIcon': {
                'title': '显示面包屑图标'
            },
            'tabsHeight': {
                'title': '标签栏高度'
            },
            'tabsStyle': {
                'title': '标签栏风格',
                'placeholder': '',
                'options': {
                    'card': '卡片风格',
                    'button': '按钮风格',
                    'line': '线条风格',
                    'chrome': '谷歌风格',
                }
            },
            'showTabs': {
                'title': '显示标签栏'
            },
            'showTabsIcon': {
                'title': '显示标签栏图标'
            },
            'draggable': {
                'title': '开启标签拖拽'
            },
            'sidebarWidth': {
                'title': '侧边栏宽度'
            },
            'sidebarItemHeight': {
                'title': '菜单项高度'
            },
            'sidebarStyle': {
                'title': '侧边栏菜单项风格',
                'placeholder': '',
                'options': {
                    'card': '卡片风格'
                }
            },
            'darkSidebar': {
                'title': '深色侧边栏',
                'tip': '仅在白天模式生效'
            },
            'uniqueOpened': {
                'title': '手风琴模式',
                'tip': '手风琴模式下，只允许一个子菜单展开'
            },
            'theme_primary': {
                'title': '主题色'
            },
            'theme_success': {
                'title': '成功色'
            },
            'theme_info': {
                'title': '信息色'
            },
            'theme_warning': {
                'title': '警告色'
            },
            'theme_danger': {
                'title': '错误色'
            },
            'navToolbar': {
                'options': {
                    'NavbarSearch': '搜索',
                    'Screenfull': '全屏',
                    'DataScreen': '数据大屏',
                    'LangSelect': '语言切换',
                    'ModeSwitch': '模式切换',
                }
            }
        }
    }
}