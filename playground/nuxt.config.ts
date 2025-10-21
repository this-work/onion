export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '../src/module',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  vite: {
    server: {
      fs: {
        allow: ['..'],
      },
    },
  },
  onion: {
    theme: {
      css: '@/assets/themes/default/base/main.scss',
      config: '@/assets/themes/default/config/variables',
    },
  },
})
