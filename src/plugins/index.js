import cache from './modules/cache'
import modal from './modules/modal'
import * as echarts from 'echarts'

export default {
    install(app) {
        app.config.globalProperties.$cache = cache
        app.config.globalProperties.$modal = modal
        app.config.globalProperties.$echarts = echarts
    }
}