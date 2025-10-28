<template>
  <div :class="partialClass" ref="selectWrapper">

    <span :class="useBem('label')" v-if="label || hasSlotContent('label')">
      <slot name="label"><span v-html="label" /></slot>
    </span>

    <span :class="useBem('field')">

      <multiselect :class="useBem('dropdown')" v-model="selectedOption" :options="options" :searchable="false"
        :multiple="false" :show-labels="false" :allowEmpty="false" :placeholder="placeholder"
        :preselectFirst="preselectFirst" label="label" track-by="label" openDirection="bottom">

        <template v-slot:caret="scopedSlot">
          <span :class="useBem('caret')">
            <C-Icon tag="span" name="keyboard-arrow-down" :class="useBem('icon')" />
          </span>
        </template>

        <template v-slot:noResult>
          <slot name="noResult">&nbsp;</slot>
        </template>

        <template v-slot:noOptions>
          <slot name="noOptions">&nbsp;</slot>
        </template>

        <template v-slot:maxElements>
          <slot name="maxElements">&nbsp;</slot>
        </template>
      </multiselect>
      <slot name="input">
        <ClientOnly>
          <input type="hidden" v-bind="$attrs" :class="useBem('form-element')" :id="name" :name="name" :aria-label=label
            :value="selectedValue" />
        </ClientOnly>
      </slot>
    </span>

    <span :class="useBem('instruction')" v-if="instruction || hasSlotContent('instruction')">
      <slot name="instruction"><small v-html="instruction" /></slot>
    </span>

  </div>
</template>

<script>

</script>

<script setup>
import { computed, normalizeClass, onMounted, onUnmounted, ref, useSlots, watch } from "vue";
import Multiselect from "vue-multiselect";
import { useBem } from "../../../composables/useBem";
import { useColorMode } from "../../../composables/useColorMode";
import { useComponentInstance } from "../../../composables/useComponentInstance";
defineOptions({
  inheritAttrs: false
});
const emit = defineEmits(["change"]);
const properties = defineProps({
  options: { type: Array, required: true },
  label: { type: String, required: false },
  value: { type: [Object, null], required: false, default: null },
  class: { type: String, required: false },
  name: { type: String, required: false },
  placeholder: { type: String, required: false, default: "" },
  preselectFirst: { type: Boolean, required: false, default: false },
  instruction: { type: String, required: false },
  navigationDirection: { type: String, required: false, default: "vertical" },
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
const selectedOption = ref(properties.value);
watch(selectedOption, async (newValue) => {
  emit("change", newValue?.value);
});
const hasSlotContent = (slotName) => {
  if (!slotName) {
    return !!useSlots().default;
  }
  return useSlots().hasOwnProperty(slotName);
};
const selectedValue = computed(() => {
  if (!selectedOption.value) {
    return null;
  }
  return selectedOption.value.value;
});
const selectWrapper = ref(null);
const handleKeydown = (event) => {
  if (!event.isTrusted) {
    return;
  }
  const isHorizontalKey = event.key === "ArrowLeft" || event.key === "ArrowRight";
  const isVerticalKey = event.key === "ArrowUp" || event.key === "ArrowDown";
  if (properties.navigationDirection === "horizontal" && isVerticalKey) {
    return;
  }
  const shouldHandle = properties.navigationDirection === "horizontal" && isHorizontalKey || properties.navigationDirection === "both" && isHorizontalKey;
  if (!shouldHandle) return;
  const syntheticKey = event.key === "ArrowRight" ? "ArrowDown" : "ArrowUp";
  const syntheticEvent = new KeyboardEvent("keydown", {
    key: syntheticKey,
    code: syntheticKey === "ArrowDown" ? "ArrowDown" : "ArrowUp",
    keyCode: syntheticKey === "ArrowDown" ? 40 : 38,
    which: syntheticKey === "ArrowDown" ? 40 : 38,
    bubbles: true,
    cancelable: true
  });
  event.target?.dispatchEvent(syntheticEvent);
  event.preventDefault();
  event.stopPropagation();
};
onMounted(() => {
  const multiselectEl = selectWrapper.value?.querySelector(".multiselect");
  if (multiselectEl && properties.navigationDirection !== "vertical") {
    multiselectEl.addEventListener("keydown", handleKeydown, true);
  }
});
onUnmounted(() => {
  const multiselectEl = selectWrapper.value?.querySelector(".multiselect");
  if (multiselectEl && properties.navigationDirection !== "vertical") {
    multiselectEl.removeEventListener("keydown", handleKeydown, true);
  }
});
</script>

<style lang="scss" src="./C-Select.scss">

</style>
