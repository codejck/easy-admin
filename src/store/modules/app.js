import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        title: '',
        device: navigator.userAgent.toLowerCase(),
        collapse: false,
        showSettings: false,
        tabFullscreen: false,
        isRefresh: false,
    })
})