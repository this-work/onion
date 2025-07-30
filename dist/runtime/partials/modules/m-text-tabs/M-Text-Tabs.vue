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

<script>

</script>

<script setup>
import { normalizeClass, computed } from "vue";
import { useComponentInstance } from "../../../composables/useComponentInstance";
const properties = defineProps({
  tabs: { type: Array, required: true },
  horizontalAlignment: { type: String, required: false },
  defaultTab: { type: Number, required: false, default: 0 },
  colorMode: { type: String, required: false }
});
const { componentName } = useComponentInstance();
const partialClass = computed(
  () => normalizeClass(
    [
      componentName
    ]
  )
);
</script>

<style lang="scss" src="./M-Text-Tabs.scss">

</style>
