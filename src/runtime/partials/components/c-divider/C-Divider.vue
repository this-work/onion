<template>
  <div :class="partialClass">
    <hr v-if="properties.line">
  </div>
</template>

<script lang="ts">
import type {
  ColormodeComposableProperties,
  SpacingComposableProperties,
} from '../../../types'

export interface CDivider extends ColormodeComposableProperties, SpacingComposableProperties {
  /**
   * Optional line in them in middle of the spacings
   * @default true
   */
  line?: boolean
}
</script>

<script setup lang="ts">
import { normalizeClass, computed } from 'vue'

import { useSpacing } from '../../../composables/useSpacing'
import { useColorMode } from '../../../composables/useColorMode'
import { useComponentInstance } from '../../../composables/useComponentInstance'

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<CDivider>(), {
  line: true,
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
    useSpacing().getClasses(properties, true),
    useColorMode().getClasses(properties),
  ],
  ),
)
</script>

<style lang="scss" src="./C-Divider.scss" />
