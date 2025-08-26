<template>
  <article :class="partialClass">
    <slot>
      <C-Wrapper
        :condition="typeof(properties.link) != 'undefined' && properties.link != null"
        tag="NuxtLink"
        v-bind="properties.link"
      >
        <slot name="image">
          <C-Image
            v-if="properties.image"
            v-bind="properties.image"
            :class="useBem('image')"
          />
        </slot>

        <slot name="label">
          <C-Label
            v-if="properties.label"
            tag="span"
            size="s"
            v-bind="properties.label"
            :class="useBem('label')"
          />
        </slot>

        <slot name="headline">
          <span
            v-if="overline"
            v-html="overline"
            :class="useBem('overline')"
          />
          <C-Headline
            v-if="properties.headline"
            tag="span"
            v-bind="properties.headline"
            :class="useBem('headline')"
          />
        </slot>

        <slot name="text">
          <C-Text
            v-if="properties.text"
            tag="span"
            v-bind="properties.text"
            :class="useBem('text')"
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
  image?: CImage,
  backgroundColor?: string
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
  backgroundColor: 'white'
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
      [`background-color-${properties.background}`]: properties.background,
    },
  ]),
)
</script>

<style lang="scss" src="./C-Tile.scss" />
