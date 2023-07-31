import { defineStore } from 'pinia'
import { UiError } from '@/types/error'
// OPTION + clear
export const useErrorStore = defineStore('error', {
  state: () => ({
    message: '',
    title: '',
    subtitle: '',
    description: '',
    help: '',
  }),
  getters: {
    hasError: (state) => state.message !== '',
  },
  actions: {
    updateError(error: UiError) {
      this.message = error.message
      this.title = error.title
      this.subtitle = error.subtitle
      this.description = error.description
      this.help = error.help
    },
    clearError() {
      this.$reset()
    },
  },
})
