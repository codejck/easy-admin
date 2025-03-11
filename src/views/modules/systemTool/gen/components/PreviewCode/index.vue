<template>
    <easy-dialog title="代码预览" class="preview-code-dialog" ref="preview-code-dialog"
        width="80%" max-height="640px" :show-footer="false">
        <div class="content" :style="{ height: contentHeight }">
            <div class="dir-panel">
                <el-scrollbar max-height="100%">
                    <el-tree :data="data" :props="treeProps" highlight-current @node-click="handleNodeClick" />
                </el-scrollbar>
            </div>
            <div class="code-panel">
                <el-scrollbar max-height="100%">
                    <code class="hljs" v-html="highlightedCode(code, lang)" />
                </el-scrollbar>
                <span class="copy-button" v-clipboard="code">
                    <svg-icon icon="copy" />
                    <span> 复制</span>
                </span>
            </div>
        </div>
    </easy-dialog>
</template>

<script>
import { findFirstLeafNode } from '@/utils/tree'
import hljs from 'highlight.js/lib/core'
import 'highlight.js/styles/atom-one-dark.css'

hljs.registerLanguage("java", require("highlight.js/lib/languages/java"))
hljs.registerLanguage("xml", require("highlight.js/lib/languages/xml"))
hljs.registerLanguage("html", require("highlight.js/lib/languages/xml"))
hljs.registerLanguage("vue", require("highlight.js/lib/languages/xml"))
hljs.registerLanguage("js", require("highlight.js/lib/languages/javascript"))
hljs.registerLanguage("ts", require("highlight.js/lib/languages/typescript"))
hljs.registerLanguage("sql", require("highlight.js/lib/languages/sql"))

export default {
    name: 'PreviewCode',
    props: {
        data: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            code: '',
            lang: '',
            treeProps: {
                children: 'children',
                label: 'name',
                class: data => data.isPenultimate ? 'is-penultimate' : ''
            }
        }
    },
    computed: {
        contentHeight() {
            return this.$refs['preview-code-dialog'].fullscreen ? 'calc(100vh - 72px)' : '600px'
        }
    },
    methods: {
        setCodeAndType(node) {
            if (node) {
                this.code = node.code || ''
                this.lang = node.name.split('.').filter(item => !item.includes('.vm')).pop()
            }
        },
        handleNodeClick(node) {
            if (!node.children) {
                this.setCodeAndType(node)
            }
        },
        // 高亮显示
        highlightedCode(code, lang) {
            try {
                return hljs.highlight(code, { language: lang || 'html' }).value || '&nbsp;'
            } catch (e) {
                return code
            }
        }
    },
    watch: {
        data: {
            immediate: true,
            handler(val) {
                this.setCodeAndType(findFirstLeafNode(val))
            },
        }
    }
}
</script>

<style lang="scss" scoped>
.preview-code-dialog {
    .content {
        border-top: 1px solid var(--el-border-color);
        display: flex;

        .dir-panel {
            width: 220px;
            height: 100%;
            border-right: 1px solid var(--el-border-color);

            ::v-deep .el-scrollbar .el-scrollbar__wrap .el-scrollbar__view {
                padding: 6px;

                .el-tree {
                    .el-tree-node__label {
                        padding-right: 8px;
                    }

                    .is-penultimate > .el-tree-node__content {
                        font-weight: bold;
                    }
                }
            }
        }

        .code-panel {
            width: 100%;
            height: 100%;
            position: relative;

            ::v-deep .el-scrollbar .el-scrollbar__wrap .el-scrollbar__view {
                padding: 8px;

                .hljs {
                    background: transparent;
                }
            }

            .copy-button {
                position: absolute;
                right: 8px;
                top: 8px;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
                user-select: none;

                &:hover {
                    color: var(--el-color-primary);
                }
            }
        }
    }
}
</style>