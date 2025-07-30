<template>
  <div :class="partialClass">
    <C-Text-Tabs
      :default-tab="properties.defaultTab"
      :horizontal-alignment="properties.horizontalAlignment"
    >
      <template v-if="tabs.length > 0">
        <C-Text-Tabs-Item
          v-for="(tab, index) in tabs"
          :key="index"
          :title="tab.title"
        >
          <Slot
            v-for="(slot, slotIndex) in tab.slots"
            :key="slotIndex"
            v-bind="slot.data"
            :components="slot.components"
          />
        </C-Text-Tabs-Item>
      </template>
      <slot v-else />
    </C-Text-Tabs>
  </div>
</template>

<script lang="ts">
import type {
  Slot,
  CTextTabs,
  TextTab,
} from '../../../types'

interface MTextTabsComponentProperties extends Omit<TextTab, 'components'> {
  /**
   * All slots inside this module
   * as Array
   */
  slots: Slot[]
}

export interface MTextTabs extends Omit<CTextTabs, 'tabs'> {
  /**
   * List of all tabs inside
   * this module as array
   */
  tabs: MTextTabsComponentProperties[]
}
</script>

<script setup lang="ts">
import { normalizeClass, computed } from 'vue'

import { useComponentInstance } from '../../../composables/useComponentInstance'

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<MTextTabs>(), {
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

<style lang="scss" src="./M-Text-Tabs.scss" />
