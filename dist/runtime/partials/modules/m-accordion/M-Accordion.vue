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

<script>

</script>

<script setup>
import { normalizeClass, computed } from "vue";
import { useBem } from "../../../composables/useBem";
import { useComponentInstance } from "../../../composables/useComponentInstance";
import { useSpacing } from "../../../composables/useSpacing";
import { useBackground } from "../../../composables/useBackground";
import { useColorMode } from "../../../composables/useColorMode";
defineProps({
  accordions: { type: Array, required: true }
});
const { componentName } = useComponentInstance();
const partialClass = computed(
  () => normalizeClass(
    [
      componentName
    ]
  )
);
function accordionClasses(accordion) {
  return normalizeClass(
    [
      useBem("accordion"),
      useSpacing().getClasses(accordion),
      useBackground().getClasses(accordion),
      useColorMode().getClasses(accordion),
      {
        [`border-radius-${accordion.borderRadius}`]: !!accordion.borderRadius
      }
    ]
  );
}
function accordionStyles(accordion) {
  return {
    ...useBackground().getStyles(accordion)
  };
}
</script>

<style lang="scss" src="./M-Accordion.scss">

</style>
