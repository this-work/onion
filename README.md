<p align="center"><br>
<img src="https://raw.githubusercontent.com/this-work/onion/master/icon.png" width="150">
</p>

# <p align="center">Onion Framework</p>
<p align="center">Component framework for Nuxt 4+</p>


### Requirements
- Nuxt 4+


### Install

Install framework in your framework with
``` bash
$ npm install git+https://github.com/this-work/onion.git#master
```

### Add framework to Nuxt

Add the onion framework in the nuxt.config file as module
``` js
export default defineNuxtConfig({
  modules: ['@this/onion'],
})
```

### Change framework settings

Change optional the settings of the framework like colors in the nuxt.config file
``` js
export default defineNuxtConfig({
  onion: {
    theme: {
      css: '@/assets/themes/default/base/main.scss',
      config: '@/assets/themes/default/config/variables',
    },
  },
})
```

