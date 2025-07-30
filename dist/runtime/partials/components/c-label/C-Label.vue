<template>
  <div :class="partialClass">
    <div :class="useBem('pill')">
      <C-Icon
        tag="span"
        :name="icon"
        :class="useBem('icon')"
      />
      <span
        v-if="text"
        :class="useBem('text')"
        v-html="text"
      />
    </div>
  </div>
</template>

<script>

</script>

<script setup>
import { normalizeClass, computed } from "vue";
import { useColorMode } from "../../../composables/useColorMode";
import { useComponentInstance } from "../../../composables/useComponentInstance";
import { useBem } from "../../../composables/useBem";
const properties = defineProps({
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
