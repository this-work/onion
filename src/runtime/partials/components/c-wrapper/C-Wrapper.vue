<template>
  <Wrap
    :wrapper="condition && tag"
    :class="partialClass"
  >
    <slot />
  </Wrap>
</template>

<script lang="ts">
export interface CWrapper {
  /**
   * HTML element to render the button as
   * e.g., "button", "a", "div"
   */
  tag?: string

  /**
   * Decides whether the wrapper is rendered
   */
  condition?: boolean
}
</script>

<script setup lang="ts">
import { normalizeClass, computed } from 'vue'
import Wrap from '../../utilities/Wrap'

import { useComponentInstance } from '../../../composables/useComponentInstance'

/**
 * Declare all props and defaults for vue.
 */
withDefaults(defineProps<CWrapper>(), {
  tag: 'div',
  condition: true,
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
  ],
  ),
)
</script>
