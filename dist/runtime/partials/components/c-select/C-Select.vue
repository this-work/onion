<template>
  <div :class="partialClass">

    <span :class="useBem('label')" v-if="label || hasSlotContent('label')">
      <slot name="label"><span v-html="label" /></slot>
    </span>

    <span :class="useBem('field')">

      <multiselect
        :class="useBem('dropdown')"
        v-model="selectedOption"
        :options="options"
        :searchable="false"
        :multiple="false"
        :show-labels="false"
        :allowEmpty="false"
        :placeholder="placeholder"
        :preselectFirst="preselectFirst"
        label="label"
        track-by="label"
        openDirection="bottom"
      >

        <template v-slot:caret="scopedSlot">
            <span :class="useBem('caret')">
              <C-Icon
                tag="span"
                name="keyboard-arrow-down"
                :class="useBem('icon')"
              />
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
          <input
            type="hidden"
            v-bind="$attrs"
            :class="useBem('form-element')"
            :id="name"
            :name="name"
            :aria-label=label
            :value="selectedValue"
          />
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
import { normalizeClass, computed, ref, useSlots } from "vue";
import Multiselect from "vue-multiselect";
import { useBem } from "../../../composables/useBem";
import { useColorMode } from "../../../composables/useColorMode";
import { useComponentInstance } from "../../../composables/useComponentInstance";
defineOptions({
  inheritAttrs: false
});
const properties = defineProps({
  options: { type: Array, required: true },
  label: { type: String, required: false },
  value: { type: [Object, null], required: false, default: null },
  class: { type: String, required: false },
  name: { type: String, required: false },
  placeholder: { type: String, required: false, default: "" },
  preselectFirst: { type: Boolean, required: false, default: false },
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
const selectedOption = ref(properties.value);
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
</script>

<style lang="scss" src="./C-Select.scss">

</style>
