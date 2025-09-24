<template>
  <label :for="name" :class="partialClass">

    <slot>

    <span :class="useBem('label')" v-if="label || hasSlotContent('label')">
      <slot name="label"><span v-html="label" /><span v-if="isRequired" aria-label="required">*</span></slot>
    </span>

      <span :class="useBem('field')">
      <slot name="input">
        <input
          v-model="value"
          v-bind="$attrs"
          :class="useBem('form-element')"
          :id="name"
          :name="name"
          :inputmode="inputmode"
          :aria-label=label
          :value="value"
          @keydown="validateInput"
        />
      </slot>

      <span :class="useBem('prefix')" v-if="prefix || hasSlotContent('prefix')">
      <slot name="prefix"><span v-html="prefix" /></slot>
    </span>

      <span :class="useBem('suffix')" v-if="suffix || hasSlotContent('suffix')">
      <slot name="suffix"><span v-html="suffix" /></slot>
    </span>

    </span>

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
  prefix: { type: String, required: false },
  suffix: { type: String, required: false },
  colorMode: { type: String, required: false }
});
const { componentName } = useComponentInstance();
const partialClass = computed(
  () => normalizeClass(
    [
      componentName,
      properties.class || "",
      useColorMode().getClasses(properties),
      {
        [useBem(void 0, `prefix`)]: properties.prefix || hasSlotContent("prefix"),
        [useBem(void 0, `suffix`)]: properties.suffix || hasSlotContent("suffix")
      }
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
const inputmode = computed(() => {
  const attrs = useAttrs();
  if (attrs.hasOwnProperty("inputmode")) {
    return attrs.type === "number" ? "decimal" : attrs.inputmode;
  }
  return void 0;
});
const validateInput = (event) => {
  const target = event.target;
  if (target.type === "number" && event.key.length === 1 && event.key.match(/[a-zA-Z]/i)) {
    event.preventDefault();
    return false;
  }
};
</script>

<style lang="scss" src="./C-Input.scss">

</style>
