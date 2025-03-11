const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
    devServer: {
        port: 8080,
        open: true,
        setupMiddlewares: require('./mock'),
        client: {
            overlay: false
        }
    },
    configureWebpack: {
        name: process.env.VUE_APP_TITLE
    },
    chainWebpack: config => {
        // 让 svg-sprite-loader 处理 'src/assets/svg' 目录下的 icons
        config.module
            .rule('svg')
            .exclude
            .add(path.resolve(__dirname, 'src/assets/svg'))
            .end()

        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include
            .add(path.resolve(__dirname, 'src/assets/svg'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })

        // @intlify/vue-i18n-loader
        config.module
            .rule('i18n')
            .resourceQuery(/blockType=i18n/)
            .type('javascript/auto')
            .use('i18n')
            .loader('@intlify/vue-i18n-loader')
    }
})
