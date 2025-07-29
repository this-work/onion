<template>
  <component
    :is="tag"
    :class="partialClass"
  >
    <slot>
      <span v-html="text" />
    </slot>
  </component>
</template>

<script lang="ts">
import type {
  ColormodeComposableProperties,
} from '../../../types'

export interface CText extends ColormodeComposableProperties {
  /**
   * Optional custom tag of the text
   * @default 'div'
   */
  tag?: string

  /**
   * Optional text - The text can be filled either via a prop
   * or via the slot.
   */
  text?: string
}
</script>

<script setup lang="ts">
import { normalizeClass, computed } from 'vue'

import { useColorMode } from '../../../composables/useColorMode'
import { useComponentInstance } from '../../../composables/useComponentInstance'

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<CText>(), {
  tag: 'div',
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
</script>

<style lang="scss" src="./C-Text.scss" />
