<template>
  <component :class="partialClass" :is="tag">
    <component
      :is="headlineTag"
      :class="headlineClass"
    >
      <slot>
        <span v-html="headline" />
      </slot>
    </component>
  </component>
</template>

<script lang="ts">
import type {
  ColormodeComposableProperties,
} from '../../../types'

export interface CHeadline extends ColormodeComposableProperties {
  /**
   * Optional custom tag of the text
   * @default 'div'
   */
  tag?: string

  /**
   * Headline text
   */
  headline: string

  /**
   * Optional html tag of the headline
   * @default 'h2'
   */
  headlineTag?: string

  /**
   * Optional font type of the headline
   * @default 'h2'
   */
  headlineType?: string
}
</script>

<script setup lang="ts">
import { normalizeClass, computed } from 'vue'

import { useColorMode } from '../../../composables/useColorMode'
import { useComponentInstance } from '../../../composables/useComponentInstance'

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<CHeadline>(), {
  tag: 'div',
  headlineTag: 'h2',
  headlineType: 'h2',
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

const headlineClass = computed(() => [`is-typo-${properties.headlineType}`])
</script>

<style lang="scss" src="./C-Headline.scss" />
