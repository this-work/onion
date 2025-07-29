<template>
  <div :class="partialClass">
    <div :class="useBem('tabs')">
      <ul
        :class="tabListClass"
        role="tablist"
      >
        <li
          v-for="(tabItem, index) in tabItems"
          :key="index"
          :class="useBem('tab-item')"
          role="presentation"
        >
          <button
            type="button"
            role="tab"
            :class="[
              useBem('tab-button'),
              activeTabIndex === index ? useBem('tab-button', 'active') : null,
            ]"
            :aria-selected="(activeTabIndex === index ? 'true' : 'false')"
            @click.prevent="changeActiveTab(index)"
          >
            <span
              role="presentation"
              v-html="tabItem.props?.title"
            />
          </button>
        </li>
      </ul>
    </div>
    <div :class="useBem('content')">
      <T-Replace>
        <C-Text-Tabs-Item
          v-if="activeTabItem?.hasOwnProperty('components')"
          :key="activeTabIndex + '1'"
        >
          <component
            :is="component.name"
            v-for="(component, index) in activeTabItem?.components"
            :key="index"
            v-bind="component.data"
          />
        </C-Text-Tabs-Item>
        <component
          :is="activeTabItem"
          v-else
          :key="activeTabIndex + '2'"
          v-bind="activeTabItem?.props"
        />
      </T-Replace>
    </div>
  </div>
</template>

<script lang="ts">
import type {
  Component,
  ColormodeComposableProperties,
} from '../../../types'

export interface TextTab {

  /**
   * Title of the tab
   */
  title: string

  /**
   * All components to be rendered in the tab
   */
  components: Component[]
}

export interface CTextTabs extends ColormodeComposableProperties {
  /**
   * Required array of tabs as object
   */
  tabs?: TextTab[]

  /**
   * Horizontal alignment of the components in this slot
   */
  horizontalAlignment?: string

  /**
   * Index of the default tab to open
   */
  defaultTab?: number
}
</script>

<script setup lang="ts">
import { normalizeClass, computed, useSlots, ref } from 'vue'

import { useBem } from '../../../composables/useBem'
import { useColorMode } from '../../../composables/useColorMode'
import { useComponentInstance } from '../../../composables/useComponentInstance'

const componentDefaultSlot = useSlots().default?.()

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<CTextTabs>(), {
  defaultTab: 0,
})

/**
 * Composable to get and preserve the current element
 * and instance of the component
 */
const { componentName } = useComponentInstance()

/**
 * Define the reactive active index tab with the
 * defaultTab value as initial value
 */
const activeTabIndex = ref<number>(properties.defaultTab)

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

/**
 * Standardised computed function for create
 * the class of the tab list element
 */
const tabListClass = computed(() =>
  normalizeClass([
    useBem('tab-list'),
    {
      [`flex-align-${properties.horizontalAlignment}`]: properties.horizontalAlignment,
    },
  ],
  ),
)

/**
 * Get the tab items no matter whether they come
 * from slot or the properties. Slots are passed through,
 * properties are converted to a slot-like object with
 * components
 */
const tabItems = computed<any>(() => {
  if (properties?.tabs && properties.tabs.length > 0) {
    return properties.tabs?.map((slot) => {
      return {
        props: {
          title: slot?.title,
        },
        components: slot.components,
      }
    })
  }
  if (componentDefaultSlot?.length === 1 && componentDefaultSlot[0].children?.length as number > 0) {
    return componentDefaultSlot[0].children
  }
  return componentDefaultSlot
})

/**
 * Get the active tab item based on the active tab index
 */
const activeTabItem = computed<any>(() => {
  if (!tabItems.value || activeTabIndex.value === undefined) return null
  return tabItems.value[activeTabIndex.value as number]
})

/**
 * Change the active tab based on the index by an given index
 */
const changeActiveTab = (index: number) => {
  activeTabIndex.value = index
}
</script>

<style lang="scss" src="./C-Text-Tabs.scss" />
