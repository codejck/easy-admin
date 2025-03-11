export default {
    // 文字复制剪贴
    mounted(el, { value, instance }) {
        el.addEventListener('click', () => {
            navigator.clipboard.writeText(value).then(() => {
                instance.$modal.message.success(instance.$t('message.copied'))
            })
        })
    }
}