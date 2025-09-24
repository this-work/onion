<template>
  <label :for="name" :class="partialClass">

    <slot>

    <span :class="useBem('label')" v-if="label || hasSlotContent('label')">
      <slot name="label"><span v-html="label" /><span v-if="isRequired" aria-label="required">*</span></slot>
    </span>

      <textarea
        v-model="value"
        v-bind="$attrs"
        :class="useBem('form-element')"
        :id="name"
        :name="name"
        :aria-label=label
      >{{ value }}</textarea>

      <span :class="useBem('instruction')" v-if="instruction || hasSlotContent('instruction')">
      <slot name="instruction"><small v-html="instruction" /></slot>
    </span>

    </slot>

  </label>
</template>

<script>

</script>

<script setup>
import { normalizeClass, computed, useAttrs, ref, useSlots, watch } from "vue";
import { useBem } from "../../../composables/useBem";
import { useColorMode } from "../../../composables/useColorMode";
import { useComponentInstance } from "../../../composables/useComponentInstance";
defineOptions({
  inheritAttrs: false
});
const emit = defineEmits(["change"]);
const properties = defineProps({
  label: { type: String, required: false },
  value: { type: String, required: false },
  class: { type: String, required: false },
  name: { type: String, required: false },
  instruction: { type: String, required: false },
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
const value = ref(properties.value || "");
watch(value, async (newValue) => {
  emit("change", newValue);
});
const isRequired = computed(() => {
  const attrs = useAttrs();
  if (attrs.hasOwnProperty("required")) {
    return true;
  }
  return false;
});
const hasSlotContent = (slotName) => {
  if (!slotName) {
    return !!useSlots().default;
  }
  return useSlots().hasOwnProperty(slotName);
};
</script>

<style lang="scss" src="./C-Textarea.scss">

</style>
