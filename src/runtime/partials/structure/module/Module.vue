<template>
  <component
    :is="partialType"
    v-bind="partialBind"
    ref="module"
    :class="partialClass"
    :style="partialStyle"
  >
    <slot>
      <Slot
        v-for="(slot, index) in properties.slots"
        v-bind="slot.data"
        :key="index"
        :components="slot.components"
      />
    </slot>
  </component>
</template>

<script lang="ts">
import type {
  BackgroundComposableProperties,
  SpacingComposableProperties,
  ColormodeComposableProperties,
  ColumnWidth,
  BorderRadius,
  Slot,
} from '../../../types'

export interface Module {
  data?: ModuleProperties
  slots?: Slot[]
}

export interface ModuleProperties extends BackgroundComposableProperties, SpacingComposableProperties, ColormodeComposableProperties {
  /**
   * Start column of the module in the section
   * @default '1'
   */
  start?: ColumnWidth

  /**
   * Width in columns of the module
   * @default '16'
   */
  width?: ColumnWidth

  /**
   * To set an individual border radius on this image according
   * to the list from the border radius config.
   */
  borderRadius?: BorderRadius | null

  /**
   * Type of the module
   * @default 'stacked'
   */
  type?: string

  /**
   * Vertical alignment of the slots in this module
   * @default 'stretch'
   */
  verticalAlignment?: string

  /**
   * All slots inside this module
   * as Array
   */
  slots?: Slot[]
}
</script>

<script setup lang="ts">
import { normalizeClass, computed, useAttrs } from 'vue'

import { useBackground } from '../../../composables/useBackground'
import { useColorMode } from '../../../composables/useColorMode'
import { useSpacing } from '../../../composables/useSpacing'
import { useCssVar } from '../../../composables/useCssVar'
import { useComponentInstance } from '../../../composables/useComponentInstance'

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<ModuleProperties>(), {
  start: 1,
  type: 'stacked',
  verticalAlignment: 'stretch',
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
    useBackground().getClasses(properties),
    useColorMode().getClasses(properties),
    {
      [`offset-right-${properties.paddingRight}`]: properties.paddingRight,
      [`offset-left-${properties.paddingLeft}`]: properties.paddingLeft,
      [`border-radius-${properties.borderRadius}`]: properties.borderRadius,
      [`vertical-alignment-${properties.verticalAlignment}`]: properties.verticalAlignment,
    },
  ],
  ),
)

/**
 * Standardised computed function for setting
 * styles on the root element of the component
 */
const partialStyle = computed(() => ({
  ...useBackground().getStyles(properties),
  '--module-column-start': properties.start,
  '--module-column-width': properties.width ? properties.width : useCssVar('grid-columns') - 2 * (properties.start - 1),
}))

const partialType = computed(() => {
  if (properties.type === 'stacked') {
    return 'div'
  }
  return `m-${properties.type}`
})
const partialBind = computed(() => {
  const attrs = useAttrs()
  if (properties.type !== 'stacked') {
    return { attrs }
  }
  return undefined
})
</script>

<style lang="scss" src="./Module.scss" />
