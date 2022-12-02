import { darkTheme, lightTheme } from 'naive-ui'

export const useThemeStore = defineStore('theme', () => {
  const naiveTheme = computed(() => unref(isDark) ? darkTheme : lightTheme)

  return {
    naiveTheme,
  }
})
