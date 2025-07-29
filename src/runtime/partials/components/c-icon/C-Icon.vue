<template>
  <component
    :is="tag"
    v-if="name"
    :class="partialClass"
  >
    <slot>
      <Icon
        :mode="mode"
        :size="size"
        :name="computedIconName"
      />
    </slot>
  </component>
</template>

<script lang="ts">
import type {
  ColormodeComposableProperties,
} from '../../../types'

export interface CIcon extends ColormodeComposableProperties {
  /**
   * Optional custom tag of the text
   * @default 'div'
   */
  tag?: string

  /**
   * Define the name of the icon your want to use.
   * Icons are used from https://icon-sets.iconify.design/
   */
  name: string

  /**
   * Overwrite the default icon package.
   * Packages are used from https://icon-sets.iconify.design/
   * @default 'material-symbols'
   */
  package?: string

  /**
   * Relative size of the icon in em to the font.
   * @default '1em'
   */
  size?: string

  /**
   * Import method of the icon.
   * - 'svg' creates a natives SVG
   * - 'css' creates a base64 icon
   * @default 'svg'
   */
  mode?: 'svg' | 'css'
}
</script>

<script setup lang="ts">
import { normalizeClass, computed } from 'vue'

import { useColorMode } from '../../../composables/useColorMode'
import { useComponentInstance } from '../../../composables/useComponentInstance'

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<CIcon>(), {
  tag: 'div',
  package: 'material-symbols',
  size: '1em',
  mode: 'svg',
})

/**
 * Composables to get and preserve the current element
 * and instance of the component
 */
const { componentName } = useComponentInstance()

/**
 * Standardised computed function for setting
 * classes on the root element of the component
 */
const partialClass = computed(() =>
  normalizeClass([
    componentName,
    useColorMode().getClasses(properties),
  ],
  ),
)

/**
 * Build the name of the icon with the package and icon name.
 * Icons are used from https://icon-sets.iconify.design/
 */
const computedIconName = computed(() => {
  return `${properties.package}:${properties.name}`
})
</script>

<style lang="scss" src="./C-Icon.scss" />
