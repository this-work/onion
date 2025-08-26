<template>
  <component :class="partialClass" :is="tag">
    <component
      :is="headlineTag"
      :class="headlineClass"
    >
      <slot>
        <span v-html="headline" />
      </slot>
    </component>
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
  headline: { type: String, required: true },
  headlineTag: { type: String, required: false, default: "h2" },
  headlineType: { type: String, required: false, default: "h2" },
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
const headlineClass = computed(() => [`is-typo-${properties.headlineType}`]);
</script>

<style lang="scss" src="./C-Headline.scss">

</style>
