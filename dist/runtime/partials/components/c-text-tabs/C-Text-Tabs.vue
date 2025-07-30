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
  activeTabIndex === index ? useBem('tab-button', 'active') : null
]"
            :aria-selected="activeTabIndex === index ? 'true' : 'false'"
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

<script>

</script>

<script setup>
import { normalizeClass, computed, useSlots, ref } from "vue";
import { useBem } from "../../../composables/useBem";
import { useColorMode } from "../../../composables/useColorMode";
import { useComponentInstance } from "../../../composables/useComponentInstance";
const componentDefaultSlot = useSlots().default?.();
const properties = defineProps({
  tabs: { type: Array, required: false },
  horizontalAlignment: { type: String, required: false },
  defaultTab: { type: Number, required: false, default: 0 },
  colorMode: { type: String, required: false }
});
const { componentName } = useComponentInstance();
const activeTabIndex = ref(properties.defaultTab);
const partialClass = computed(
  () => normalizeClass(
    [
      componentName,
      useColorMode().getClasses(properties)
    ]
  )
);
const tabListClass = computed(
  () => normalizeClass(
    [
      useBem("tab-list"),
      {
        [`flex-align-${properties.horizontalAlignment}`]: properties.horizontalAlignment
      }
    ]
  )
);
const tabItems = computed(() => {
  if (properties?.tabs && properties.tabs.length > 0) {
    return properties.tabs?.map((slot) => {
      return {
        props: {
          title: slot?.title
        },
        components: slot.components
      };
    });
  }
  if (componentDefaultSlot?.length === 1 && componentDefaultSlot[0].children?.length > 0) {
    return componentDefaultSlot[0].children;
  }
  return componentDefaultSlot;
});
const activeTabItem = computed(() => {
  if (!tabItems.value || activeTabIndex.value === void 0) return null;
  return tabItems.value[activeTabIndex.value];
});
const changeActiveTab = (index) => {
  activeTabIndex.value = index;
};
</script>

<style lang="scss" src="./C-Text-Tabs.scss">

</style>
