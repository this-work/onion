<template>
  <div :class="partialClass">
    <C-Accordion
      v-for="(accordion, index) in accordions"
      :key="index"
      :class="accordionClasses(accordion)"
      :styles="accordionStyles(accordion)"
      v-bind="accordion"
    >
      <slot>
        <Slot
          v-for="(slot, slotIndex) in accordion.slots"
          :key="slotIndex"
          v-bind="slot.data"
          :components="slot.components"
        />
      </slot>
    </C-Accordion>
  </div>
</template>

<script lang="ts">
import type {
  BackgroundComposableProperties,
  SpacingComposableProperties,
  ColormodeComposableProperties,
  Slot,
  CAccordion,
  BorderRadius,
} from '../../../types'

interface MAccordionComponentProperties extends CAccordion, BackgroundComposableProperties, SpacingComposableProperties, ColormodeComposableProperties {
  /**
   * To set an individual border radius on this slot according
   * to the list from the border radius config.
   */
  borderRadius?: BorderRadius | null
  /**
   * All slots inside this module
   * as Array
   */
  slots: Slot[]
}

export interface MAccordion {
  /**
   * List of all accordions inside
   * this module as array
   */
  accordions: MAccordionComponentProperties[]
}
</script>

<script setup lang="ts">
import { normalizeClass, computed } from 'vue'

import { useBem } from '../../../composables/useBem'
import { useComponentInstance } from '../../../composables/useComponentInstance'
import { useSpacing } from '../../../composables/useSpacing'
import { useBackground } from '../../../composables/useBackground'
import { useColorMode } from '../../../composables/useColorMode'

/**
 * Declare all props and defaults for vue.
 */
withDefaults(defineProps<MAccordion>(), {})

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

/**
 * Dynamic function to set kernel slot properties
 * classes on the accordion element too
 */
function accordionClasses(accordion: MAccordionComponentProperties) {
  return normalizeClass([
    useBem('accordion'),
    useSpacing().getClasses(accordion),
    useBackground().getClasses(accordion),
    useColorMode().getClasses(accordion),
    {
      [`border-radius-${accordion.borderRadius}`]: !!accordion.borderRadius,
    },
  ],
  )
}

/**
 * Dynamic function to set kernel slot properties
 * styles on the accordion element too
 */
function accordionStyles(accordion: MAccordionComponentProperties) {
  return {
    ...useBackground().getStyles(accordion),
  }
}
</script>

<style lang="scss" src="./M-Accordion.scss" />
