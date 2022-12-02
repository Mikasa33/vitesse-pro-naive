<script setup lang="ts">
import { type GlobalThemeOverrides, dateZhCN, zhCN } from 'naive-ui'

// https://github.com/vueuse/head
useHead({
  title: 'Template Vitesse Lite',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'theme-color',
      content: computed(() => unref(isDark) ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => unref(preferredDark) ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})

const theme = useThemeStore();
const { naiveTheme } = storeToRefs(theme);
const themeOverrides: GlobalThemeOverrides = {}
</script>

<template>
  <NConfigProvider :date-locale="dateZhCN" :locale="zhCN" :theme="naiveTheme" :theme-overrides="themeOverrides">
    <NGlobalStyle />
    <NLoadingBarProvider>
      <NDialogProvider>
        <NNotificationProvider>
          <NMessageProvider>
            <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
              <RouterView />
              <Footer />
            </main>
          </NMessageProvider>
        </NNotificationProvider>
      </NDialogProvider>
    </NLoadingBarProvider>
  </NConfigProvider>
</template>
