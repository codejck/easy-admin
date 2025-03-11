import clipboard from './modules/clipboard'
import hasPermi from './modules/hasPermi'
import preventReclick from './modules/preventReclick'
import onClickRotate from './modules/onClickRotate'

export default {
    install(app) {
        app.directive('clipboard', clipboard)
        app.directive('hasPermi', hasPermi)
        app.directive('preventReclick', preventReclick)
        app.directive('onClickRotate', onClickRotate)
    }
}
