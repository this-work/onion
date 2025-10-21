<template>
  <span :class="partialClass">

    <slot>

      <span :class="useBem('label')" v-if="label || hasSlotContent('label')">
        <slot name="label"><span v-html="label" /><span v-if="isRequired" aria-label="required">*</span></slot>
      </span>

      <slot name="input">
        <input v-model="value" v-bind="$attrs" :class="useBem('form-element')" :id="name" :name="name" :aria-label=name
          :aria-checked="value" type="checkbox" tabindex="0" />
      </slot>

      <label role="checkbox" :for="name" :class="useBem('field')">
        <div :class="useBem('field-area')">
          <slot name="icon-true">
            <c-icon name="check" />
          </slot>
        </div>
        <div :class="useBem('field-area')">
          <slot name="icon-false">
            <c-icon name="close" />
          </slot>
        </div>
      </label>

      <span :class="useBem('instruction')" v-if="instruction || hasSlotContent('instruction')">
        <slot name="instruction"><small v-html="instruction" /></slot>
      </span>

    </slot>
  </span>
</template>

<script>

</script>

<script setup>
import { computed, normalizeClass, ref, useAttrs, useSlots, watch } from "vue";
import { useBem } from "../../../composables/useBem";
import { useColorMode } from "../../../composables/useColorMode";
import { useComponentInstance } from "../../../composables/useComponentInstance";
defineOptions({
  inheritAttrs: false
});
const emit = defineEmits(["change"]);
const properties = defineProps({
  label: { type: String, required: false },
  checked: { type: Boolean, required: false },
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
      properties.class || "",
      useColorMode().getClasses(properties)
    ]
  )
);
const value = ref(properties.checked);
watch(() => properties.checked, (newValue) => {
  value.value = newValue;
});
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

<style lang="scss" src="./C-Switch.scss">

</style>
