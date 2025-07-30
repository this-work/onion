<template>
  <section
    ref="section"
    :class="partialClass"
    :style="partialStyle"
  >
    <slot>
      <Module
        v-for="(module, index) in modules"
        v-bind="moduleBind(module)"
        :key="index"
      />
    </slot>
  </section>
</template>

<script>

</script>

<script setup>
import { normalizeClass, computed } from "vue";
import { useBackground } from "../../../composables/useBackground";
import { useSpacing } from "../../../composables/useSpacing";
import { useComponentInstance } from "../../../composables/useComponentInstance";
const properties = defineProps({
  modules: { type: Array, required: false },
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
  marginLeft: { type: String, required: false }
});
const { componentName } = useComponentInstance();
const partialClass = computed(
  () => normalizeClass(
    [
      componentName,
      useSpacing().getClasses(properties, false),
      useBackground().getClasses(properties)
    ]
  )
);
const partialStyle = computed(() => useBackground().getStyles(properties));
function moduleBind(module) {
  return {
    ...module.data,
    ...module
  };
}
;
</script>

<style lang="scss" src="./Section.scss">

</style>
