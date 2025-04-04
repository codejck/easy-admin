<template>
    <div class="fc-designer-container m12">
        <FcDesigner class="fc-designer" />
    </div>
</template>

<script>
import FcDesigner from '@form-create/designer'

export default {
    name: 'formDesign',
    components: { FcDesigner },
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.fc-designer-container {
    height: calc(var(--main-height) - 24px);

    :deep(.fc-designer) {
        border: 1px solid var(--el-border-color-light);
        background: var(--el-bg-color);
        --fc-tool-border-color: var(--el-color-primary);

        .el-main .el-container {
            &>* {
                border: none;
            }

            ._fc-l-menu {
                ._fc-l-menu-item {
                    &.active {
                        color: var(--el-color-primary);
                    }

                    &:hover,
                    .fc-icon:hover {
                        color: var(--el-color-primary);
                    }
                }
            }

            ._fc-m {
                .el-header {
                    padding: 0 12px;
                    border-bottom: 1px solid var(--el-border-color-light);

                    ._fc-m-tools-l {
                        .devices {
                            .fc-icon {
                                &.active {
                                    color: var(--el-color-primary);
                                }
                            }
                        }

                        .line {
                            background: var(--el-border-color-light);
                        }
                    }

                    ._fc-m-tools-r {
                        .line {
                            background: var(--el-border-color-light);
                        }

                        .el-switch.is-checked {
                            .el-switch__action {
                                background: var(--el-color-primary);
                            }
                        }
                    }
                }

                .el-main {
                    padding: 12px;
                    background: var(--base-bg);

                    a {
                        transform: translateY(-3px);
                    }

                    ._fc-m-drag {
                        border: 1px solid var(--el-border-color-light);
                        background: var(--el-bg-color);

                        .el-form {
                            ._fd-drag-item {
                                ._fd-drag-tool.active {
                                    outline-color: var(--el-color-primary);

                                    ._fd-drag-l {
                                        ._fd-drag-btn {
                                            background: var(--el-color-primary);
                                        }
                                    }

                                    ._fd-drag-r {
                                        ._fd-drag-btn:first-child {
                                            background: var(--el-color-primary);
                                        }
                                    }
                                }
                            }

                            ._fd-draggable-drag.drag-holder {
                                background: transparent;
                            }
                        }
                    }

                    ._fc-m-input-handle {
                        background: transparent;
                    }
                }
            }

            ._fc-l {
                border-left: 1px solid var(--el-border-color-light);
                border-right: 1px solid var(--el-border-color-light);

                .el-header {
                    border-bottom: 1px solid var(--el-border-color-light);

                    ._fc-l-tab {
                        color: var(--el-text-color-primary);

                        &.active {
                            border-color: var(--el-color-primary);
                            color: var(--el-color-primary);
                        }
                    }
                }

                .el-main {
                    ._fc-l-group {
                        margin-right: 6px;
                        border-color: var(--el-border-color-light);

                        ._fc-l-list {
                            ._fc-l-item {
                                background: transparent;
                                color: var(--el-text-color-primary);

                                &:hover {
                                    background: var(--el-color-primary);
                                    color: white;
                                }
                            }
                        }
                    }

                    .el-tree {
                        ._fc-tree-node.active {
                            color: var(--el-color-primary);
                        }
                        ._fc-tree-more {
                            .icon-more {
                                color: var(--el-color-primary);
                            }
                        }
                    }
                }

                ._fd-language-config {
                    ._fc-l-label {
                        color: var(--el-text-color-primary);
                    }
                }
            }

            ._fc-r {
                border-left: 1px solid var(--el-border-color-light);
                --el-color-primary: var(--fc-tool-border-color);

                .el-header {
                    border-bottom: 1px solid var(--el-border-color-light);

                    ._fc-r-tab {
                        color: var(--el-text-color-primary);

                        &.active {
                            border-color: var(--el-color-primary);
                            color: var(--el-color-primary);
                        }
                    }
                }

                .el-main {
                    padding: 12px;

                    .el-form {
                        .el-form-item {
                            .el-form-item__label {
                                color: var(--el-text-color-primary);
                            }
                        }
                    }

                    .el-button {
                        border-color: var(--el-color-primary);
                        color: var(--el-color-primary);
                    }
                }
            }

            ._fc-l,
            ._fc-r {
                .el-main {
                    &:hover::-webkit-scrollbar-thumb {
                        visibility: visible;
                    }

                    &::-webkit-scrollbar {
                        width: 6px;
                    }

                    &::-webkit-scrollbar-thumb {
                        border-radius: 3px;
                        background: rgba(136, 136, 136, 0.3);
                        visibility: hidden;
                        cursor: pointer;

                        &:hover {
                            background: rgba(136, 136, 136, 0.5);
                        }
                    }
                }
            }
        }
    }
}
</style>