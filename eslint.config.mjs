import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt({
  features: {
    tooling: true,
    stylistic: true,
  },
  dirs: {
    src: [
      './playground',
    ],
  },
}).overrideRules({
  'vue/no-v-html': 'off',
  'vue/multi-word-component-names': 'off',
  'import/first': 'off',
  'import/order': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
})
