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

<script>

</script>

<script setup>
import { normalizeClass, computed, useAttrs } from "vue";
import { useBackground } from "../../../composables/useBackground";
import { useColorMode } from "../../../composables/useColorMode";
import { useSpacing } from "../../../composables/useSpacing";
import { useComponentInstance } from "../../../composables/useComponentInstance";
const properties = defineProps({
  start: { type: Number, required: false, default: 1 },
  width: { type: Number, required: false },
  borderRadius: { type: [String, null], required: false },
  type: { type: String, required: false, default: "stacked" },
  verticalAlignment: { type: String, required: false, default: "stretch" },
  slots: { type: Array, required: false },
  background: { type: [String, null], required: false },
  backgroundImage: { type: [String, null], required: false },
  backgroundPosition: { type: [String, null], required: false },
  paddingTop: { type: String, required: false },
  paddingBottom: { type: String, required: false },
  paddingRight: { type: String, required: false },
  paddingLeft: { type: String, required: false },
  marginTop: { type: String, required: false },
  marginBottom: { type: String, required: false },
  marginRight: { type: String, required: false },
  marginLeft: { type: String, required: false },
  colorMode: { type: String, required: false }
});
const { componentName } = useComponentInstance();
const partialClass = computed(
  () => normalizeClass(
    [
      componentName,
      useSpacing().getClasses(properties, true),
      useBackground().getClasses(properties),
      useColorMode().getClasses(properties),
      {
        [`offset-right-${properties.paddingRight}`]: properties.paddingRight,
        [`offset-left-${properties.paddingLeft}`]: properties.paddingLeft,
        [`border-radius-${properties.borderRadius}`]: properties.borderRadius,
        [`vertical-alignment-${properties.verticalAlignment}`]: properties.verticalAlignment
      }
    ]
  )
);
const partialStyle = computed(() => ({
  ...useBackground().getStyles(properties),
  "--module-column-start": properties.start,
  "--module-column-width": properties.width ? properties.width : 16 - 2 * (properties.start - 1)
}));
const partialType = computed(() => {
  if (properties.type === "stacked") {
    return "div";
  }
  return `m-${properties.type}`;
});
const partialBind = computed(() => {
  const attrs = useAttrs();
  if (properties.type !== "stacked") {
    return { attrs };
  }
  return void 0;
});
</script>

<style lang="scss" src="./Module.scss">

</style>
