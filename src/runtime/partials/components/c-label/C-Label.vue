<template>
  <component :class="partialClass" :is="tag">
    <span :class="useBem('pill')">
      <C-Icon
        tag="span"
        :name="icon"
        :class="useBem('icon')"
      />
      <span
        v-if="text"
        :class="useBem('text')"
        v-html="text"
      />
    </span>
  </component>
</template>

<script lang="ts">
import type {
  ColormodeComposableProperties,
} from '../../../types'

export interface CLabel extends ColormodeComposableProperties {
  /**
   * Optional custom tag of the text
   * @default 'div'
   */
  tag?: string

  /**
   * Optional text of the label
   */
  text?: string

  /**
   * Define an optional icon for the label
   * Any icon from the Material Design icons set can be used.
   */
  icon?: string

  /**
   * Decides whether the label has a background with inner spacing
   */
  background?: boolean

  /**
   * Define the size of the complete label.
   */
  size?: 's' | 'm' | 'l'
}
</script>

<script setup lang="ts">
import { normalizeClass, computed } from 'vue'

import { useColorMode } from '../../../composables/useColorMode'
import { useComponentInstance } from '../../../composables/useComponentInstance'
import { useBem } from '../../../composables/useBem'

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<CLabel>(), {
  tag: 'div',
  background: true,
  size: 'm',
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
    {
      [useBem(undefined, 'transparent')]: !properties.background,
      [useBem(undefined, `size-${properties.size}`)]: properties.size != 'm',
    },
  ]),
)
</script>

<style lang="scss" src="./C-Label.scss" />
