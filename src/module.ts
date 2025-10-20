import { addComponentsDir, addImports, createResolver, defineNuxtModule, extendViteConfig, installModule } from '@nuxt/kit'

export interface ModuleOptions {
  theme?: {
    config?: string
    css?: string
  }
}

export type * from './runtime/types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'onion',
    configKey: 'onion',
  },
  defaults: {},
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    await installModule('@nuxt/icon', {})
    await installModule('@nuxt/scripts', {})
    await installModule('@vueuse/nuxt', {})

    nuxt.options.vue.compilerOptions ||= {}
    nuxt.options.vue.compilerOptions.isCustomElement = tag => ['swiper-slide', 'swiper-container'].includes(tag)

    nuxt.options.css ||= []
    nuxt.options.css.push(resolver.resolve('runtime/theme/base/main.scss'))
    if (options.theme?.css) {
      nuxt.options.css.push(options.theme.css)
    }

    nuxt.options.postcss.plugins ||= {}
    nuxt.options.postcss.plugins.autoprefixer ||= {
      add: false,
      flexbox: false,
      grid: false,
    }

    extendViteConfig((config) => {
      config.css ||= {}
      config.css.preprocessorOptions ||= {}
      config.css.preprocessorOptions.scss ||= {}
      config.css.preprocessorOptions.scss.additionalData ||= ''
      config.css.preprocessorOptions.scss.additionalData += '@use "@this/scss-framework/framework" as *;';
      config.css.preprocessorOptions.scss.additionalData += '@' +
        'use "' + resolver.resolve("runtime/theme/config/variables") + '" as *;';
      if (options.theme?.config) {
        config.css.preprocessorOptions.scss.additionalData += '@use "' + options.theme.config + '" as *;'
      }
    })

    addComponentsDir({
      path: resolver.resolve('runtime/partials'),
      pathPrefix: false,
      extensions: ['vue'],
      global: true,
    })

    // Disabled because of https://github.com/SuperchupuDev/tinyglobby/issues/162
    // addImportsDir(resolver.resolve('runtime/composables'))

    addImports({
      name: 'useBackground',
      as: 'useBackground',
      from: resolver.resolve('runtime/composables/useBackground')
    })
    addImports({
      name: 'useBem',
      as: 'useBem',
      from: resolver.resolve('runtime/composables/useBem')
    })
    addImports({
      name: 'useColorMode',
      as: 'useColorMode',
      from: resolver.resolve('runtime/composables/useColorMode')
    })
    addImports({
      name: 'useComponentInstance',
      as: 'useComponentInstance',
      from: resolver.resolve('runtime/composables/useComponentInstance')
    })
    addImports({
      name: 'useCssVar',
      as: 'useCssVar',
      from: resolver.resolve('runtime/composables/useCssVar')
    })
    addImports({
      name: 'useModal',
      as: 'useModal',
      from: resolver.resolve('runtime/composables/useModal')
    })
    addImports({
      name: 'useScrollLocker',
      as: 'useScrollLocker',
      from: resolver.resolve('runtime/composables/useScrollLocker')
    })
    addImports({
      name: 'useSpacing',
      as: 'useSpacing',
      from: resolver.resolve('runtime/composables/useSpacing')
    })

  },
})
