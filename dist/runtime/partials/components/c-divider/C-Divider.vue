<template>
  <div :class="partialClass">
    <hr v-if="properties.line">
  </div>
</template>

<script>

</script>

<script setup>
import { normalizeClass, computed } from "vue";
import { useSpacing } from "../../../composables/useSpacing";
import { useColorMode } from "../../../composables/useColorMode";
import { useComponentInstance } from "../../../composables/useComponentInstance";
const properties = defineProps({
  line: { type: Boolean, required: false, default: true },
  colorMode: { type: String, required: false },
  paddingTop: { type: String, required: false },
  paddingBottom: { type: String, required: false },
  paddingRight: { type: String, required: false },
  paddingLeft: { type: String, required: false },
  marginTop: { type: String, required: false },
  marginBottom: { type: String, required: false },
  marginRight: { type: String, required: false },
  marginLeft: { type: String, required: false }
});
const { componentName } = useComponentInstance();
const partialClass = computed(
  () => normalizeClass(
    [
      componentName,
      useSpacing().getClasses(properties, true),
      useColorMode().getClasses(properties)
    ]
  )
);
</script>

<style lang="scss" src="./C-Divider.scss">

</style>
