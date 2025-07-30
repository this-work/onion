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

<style lang="scss" src="./M-Image-Tabs.scss">

</style>
