<template>
  <div :class="partialClass">
    <C-Image-Tabs
      :default-tab="properties.defaultTab"
      :horizontal-alignment="properties.horizontalAlignment"
    >
      <template v-if="tabs.length > 0">
        <C-Image-Tabs-Item
          v-for="(tab, index) in tabs"
          :key="index"
          :image="tab.image"
        >
          <Slot
            v-for="(slot, slotIndex) in tab.slots"
            :key="slotIndex"
            v-bind="slot.data"
            :components="slot.components"
          />
        </C-Image-Tabs-Item>
      </template>
      <slot v-else />
    </C-Image-Tabs>
  </div>
</template>

<script lang="ts">
import type {
  Slot,
  CImageTabs,
  ImageTab,
} from '../../../types'

interface MImageTabsComponentProperties extends Omit<ImageTab, 'components'> {
  /**
   * All slots inside this module
   * as Array
   */
  slots: Slot[]
}

export interface MImageTabs extends Omit<CImageTabs, 'tabs'> {
  /**
   * List of all tabs inside
   * this module as array
   */
  tabs: MImageTabsComponentProperties[]
}
</script>

<script setup lang="ts">
import { normalizeClass, computed } from 'vue'

import { useComponentInstance } from '../../../composables/useComponentInstance'

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<MImageTabs>(), {
  defaultTab: 0,
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

<style lang="scss" src="./M-Image-Tabs.scss" />
