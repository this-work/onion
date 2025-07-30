<template>
  <component
    :is="tag"
    v-if="name"
    :class="partialClass"
  >
    <slot>
      <Icon
        :mode="mode"
        :size="size"
        :name="computedIconName"
      />
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
  name: { type: String, required: true },
  package: { type: String, required: false, default: "material-symbols" },
  size: { type: String, required: false, default: "1em" },
  mode: { type: String, required: false, default: "svg" },
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
const computedIconName = computed(() => {
  return `${properties.package}:${properties.name}`;
});
</script>

<style lang="scss" src="./C-Icon.scss">

</style>
