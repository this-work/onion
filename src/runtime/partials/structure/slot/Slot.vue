<template>
  <div
    ref="slot"
    :class="partialClass"
    :style="partialStyle"
  >
    <slot>
      <component
        :is="component.name"
        v-for="(component, index) in components"
        v-bind="component.data"
        :key="index"
      />
    </slot>
  </div>
</template>

<script lang="ts">
import type {
  BackgroundComposableProperties,
  SpacingComposableProperties,
  ColormodeComposableProperties,
  ColumnWidth,
  BorderRadius,
  Spacing,
  Component,
} from '../../../types'

export interface Slot {
  data: SlotProperties
  components: Component[]
}
export interface SlotProperties extends BackgroundComposableProperties, SpacingComposableProperties, ColormodeComposableProperties {

  /**
   * Width in columns of the slot
   * @default '16'
   */
  width?: ColumnWidth

  /**
   * To set an individual border radius on this slot according
   * to the list from the border radius config.
   */
  borderRadius?: BorderRadius | null

  /**
   * Horizontal alignment of the components in this slot
   */
  horizontalAlignment?: string

  /**
   * Vertical spacing between components in this slot
   * @default 'l'
   */
  componentSpacing?: Spacing

  /**
   * All components inside this module
   * as Array
   */
  components?: Component[]
}
</script>

<script setup lang="ts">
import { normalizeClass, computed } from 'vue'

import { useBackground } from '../../../composables/useBackground'
import { useColorMode } from '../../../composables/useColorMode'
import { useSpacing } from '../../../composables/useSpacing'
import { useComponentInstance } from '../../../composables/useComponentInstance'
import {useCssVar} from "../../../composables/useCssVar";

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<SlotProperties>(), {
  width: parseInt(useCssVar('grid-columns')),
  componentSpacing: 'l',
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
      [`text-align-${properties.horizontalAlignment}`]: properties.horizontalAlignment,
    },
  ],
  ),
)

/**
 * Standardised computed function for setting
 * styles on the root element of the component
 */
const partialStyle = computed(() => {
  return {
    ...useBackground().getStyles(properties),
    '--slot-column-width': properties.width,
    '--slot-component-spacing': `var(--spacing-${properties.componentSpacing})`,
  }
})
</script>

<style lang="scss" src="./Slot.scss" />
