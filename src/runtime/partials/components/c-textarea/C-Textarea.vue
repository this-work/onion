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

<script lang="ts">
import type {
  ColormodeComposableProperties,
} from '../../../types'

export interface CTextarea extends ColormodeComposableProperties {
  /**
   * Label of the textarea
   */
  label?: string

  /**
   * Name of the textarea
   */
  class?: string

  /**
   * Name of the textarea
   */
  name?: string

  /**
   * Instruction text for the textarea
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
const emit = defineEmits<{(e: 'change', value: string|undefined|null): void}>()

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<CTextarea>(), {
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
      useColorMode().getClasses(properties),
    ],
  ),
)

/**
 * Check if the textarea is required from the given attributes
 */
const value = ref('');

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

<style lang="scss" src="./C-Textarea.scss" />
