<template>
  <component :class="partialClass" :is="tag">
    <span :class="useBem('pill')">
      <C-Icon
        tag="span"
        v-if="icon"
        :name="icon"
        :class="useBem('icon')"
      />
      <span
        v-if="text"
        :class="useBem('text')"
        v-html="text"
      />
    </span>
  </component>
</template>

<script>

</script>

<script setup>
import { normalizeClass, computed } from "vue";
import { useColorMode } from "../../../composables/useColorMode";
import { useComponentInstance } from "../../../composables/useComponentInstance";
import { useBem } from "../../../composables/useBem";
const properties = defineProps({
  tag: { type: String, required: false, default: "div" },
  text: { type: String, required: false },
  icon: { type: String, required: false },
  background: { type: Boolean, required: false, default: true },
  size: { type: String, required: false, default: "m" },
  colorMode: { type: String, required: false }
});
const { componentName } = useComponentInstance();
const partialClass = computed(
  () => normalizeClass([
    componentName,
    useColorMode().getClasses(properties),
    {
      [useBem(void 0, "transparent")]: !properties.background,
      [useBem(void 0, `size-${properties.size}`)]: properties.size != "m"
    }
  ])
);
</script>

<style lang="scss" src="./C-Label.scss">

</style>
