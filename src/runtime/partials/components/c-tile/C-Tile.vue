<template>
  <article :class="partialClass">
    <slot>
      <C-Wrapper
        :condition="properties.link"
        tag="NuxtLink"
        v-bind="properties.link"
      >
        <slot name="image">
          <C-Image
            v-if="properties.image"
            v-bind="properties.image"
          />
        </slot>

        <slot name="label">
          <C-Label
            v-if="properties.label"
            v-bind="properties.label"
          />
        </slot>

        <slot name="headline">
          <span v-if="overline" v-html="overline" />
          <C-Headline
            v-if="properties.headline"
            v-bind="properties.headline"
          />
        </slot>

        <slot name="text">
          <C-Text
            v-if="properties.text"
            v-bind="properties.text"
          />
        </slot>
      </C-Wrapper>
    </slot>
  </article>
</template>

<script lang="ts">
import type {
  CHeadline,
  CText,
  CImage,
  CLabel,
  ColormodeComposableProperties,
} from '../../../types'

export interface CTile extends ColormodeComposableProperties {
  /**
   * Type/Appearance of the tile
   */
  type?: string
  hero?: boolean
  overline?: string
  headline?: CHeadline
  text?: CText
  image?: CImage
  label?: CLabel
  link?: object
}
</script>

<script setup lang="ts">
import { normalizeClass, computed } from 'vue'

import { useBem } from '../../../composables/useBem'
import { useColorMode } from '../../../composables/useColorMode'
import { useComponentInstance } from '../../../composables/useComponentInstance'

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<CTile>(), {
  type: 'default',
  hero: false,
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

<style lang="scss" src="./C-Tile.scss" />
