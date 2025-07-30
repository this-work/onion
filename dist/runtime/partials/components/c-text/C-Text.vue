<template>
  <component
    :is="tag"
    :class="partialClass"
  >
    <slot>
      <span v-html="text" />
    </slot>
  </component>
</template>

<script>

</script>

<script setup>
import { normalizeClass, computed } from "vue";
import { useColorMode } from "../../../composables/useColorMode";
import { useComponentInstance } from "../../../composables/useComponentInstance";
const properties = defineProps({
  tag: { type: String, required: false, default: "div" },
  text: { type: String, required: false },
  colorMode: { type: String, required: false }
});
const { componentName } = useComponentInstance();
const partialClass = computed(
  () => normalizeClass(
    [
      componentName,
      useColorMode().getClasses(properties)
    ]
  )
);
</script>

<style lang="scss" src="./C-Text.scss">

</style>
