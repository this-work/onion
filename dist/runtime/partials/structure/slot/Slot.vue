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

<script>

</script>

<script setup>
import { normalizeClass, computed } from "vue";
import { useBackground } from "../../../composables/useBackground";
import { useColorMode } from "../../../composables/useColorMode";
import { useSpacing } from "../../../composables/useSpacing";
import { useComponentInstance } from "../../../composables/useComponentInstance";
const properties = defineProps({
  width: { type: Number, required: false, default: 16 },
  borderRadius: { type: [String, null], required: false },
  horizontalAlignment: { type: String, required: false },
  componentSpacing: { type: String, required: false, default: "l" },
  components: { type: Array, required: false },
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
        [`text-align-${properties.horizontalAlignment}`]: properties.horizontalAlignment
      }
    ]
  )
);
const partialStyle = computed(() => {
  return {
    ...useBackground().getStyles(properties),
    "--slot-column-width": properties.width,
    "--slot-component-spacing": `var(--spacing-${properties.componentSpacing})`
  };
});
</script>

<style lang="scss" src="./Slot.scss">

</style>
