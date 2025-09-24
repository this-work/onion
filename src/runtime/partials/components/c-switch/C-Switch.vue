<template>

  <span :class="partialClass">

    <slot>

      <span :class="useBem('label')" v-if="label || hasSlotContent('label')">
        <slot name="label"><span v-html="label" /><span v-if="isRequired" aria-label="required">*</span></slot>
      </span>

      <slot name="input">
        <input
          v-model="value"
          v-bind="$attrs"
          :class="useBem('form-element')"
          :id="name"
          :name="name"
          :aria-label=name
          :aria-checked="value"
          type="checkbox"
          tabindex="0"
        />
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

<script lang="ts">
import type {
  ColormodeComposableProperties,
} from '../../../types'

export interface CSwitch extends ColormodeComposableProperties {
  /**
   * Label of the input
   */
  label?: string

  /**
   * Label of the input
   */
  checked?: boolean

  /**
   * Name of the input
   */
  class?: string

  /**
   * Name of the input
   */
  name?: string

  /**
   * Instruction text for the input
   */
  instruction?: string
}
</script>

<script setup lang="ts">
import { normalizeClass, computed, useAttrs, ref, useSlots, watch } from 'vue'

import { useBem } from "../../../composables/useBem";
import { useColorMode } from '../../../composables/useColorMode'
import { useComponentInstance } from '../../../composables/useComponentInstance'

/**
 * Define options for the component. Disables inheriting
 * the attributes from the parent element.
 */
defineOptions({
  inheritAttrs: false
})

/**
 * Define emits for the component. Disables inheriting
 */
const emit = defineEmits<{(e: 'change', value: boolean|undefined|null): void}>()

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<CSwitch>(), {
})

/**
 * Composables to get and preserve the current element
 * and instance of the component
 */
const { componentName } = useComponentInstance()

/**
 * Standardised computed function for setting
 * classes on the root element of the component
 */
const partialClass = computed(() =>
  normalizeClass([
      componentName,
      properties.class || '',
      useColorMode().getClasses(properties),
    ],
  ),
)

/**
 * Check if the input is required from the given attributes
 */
const value = ref(properties.checked);

/**
 * Watch for changes in the selected option
 */
watch(value, async (newValue) => {
  emit('change', newValue)
})

/**
 * Check if the input is required from the given attributes
 */
const isRequired = computed(() => {
  const attrs = useAttrs()
  if (attrs.hasOwnProperty('required')) {
    return true;
  }
  return false;
});

/**
 * Check if the slot has content
 */
const hasSlotContent = (slotName: string) => {
  if (!slotName) {
    return !!useSlots().default;
  }
  return useSlots().hasOwnProperty(slotName);
};

</script>

<style lang="scss" src="./C-Switch.scss" />
