import { darkTheme } from 'naive-ui'
import { isDark } from '~/composables/dark'

export const useThemeStore = defineStore('theme', () => {
  const naiveTheme = computed(() => isDark.value ? darkTheme : undefined)

  return {
    naiveTheme,
  }
})
