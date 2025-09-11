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
          :inputmode="inputmode"
          :aria-label=label
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

<script lang="ts">
import type {
  ColormodeComposableProperties,
} from '../../../types'

export interface CInput extends ColormodeComposableProperties {
  /**
   * Label of the input
   */
  label?: string

  /**
   * Name of the input
   */
  name?: string

  /**
   * Instruction text for the input
   */
  instruction?: string

  /**
   * Instruction text for the input
   */
  prefix?: string

  /**
   * Instruction text for the input
   */
  suffix?: string
}
</script>

<script setup lang="ts">
import { normalizeClass, computed, useAttrs, ref, useSlots } from 'vue'

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
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<CInput>(), {
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
 * Check if the input is required from the givven attributes
 */
const value = ref('');

/**
 * Check if the input is required from the givven attributes
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

/**
 * Transform the inputmode attribute to the correct value
 */
const inputmode = computed(() => {
  const attrs = useAttrs()
  if (attrs.hasOwnProperty('inputmode')) {
    return attrs.type === 'number' ? 'decimal' : attrs.inputmode
  }
  return undefined
});

/**
 * Validates input for number fields to prevent letter input
 */
const validateInput = (event: KeyboardEvent) => {
  const target = event.target as HTMLInputElement;
  if (target.type === 'number' && event.key.length === 1 && event.key.match(/[a-zA-Z]/i)) {
    event.preventDefault();
    return false;
  }
};

</script>

<style lang="scss" src="./C-Input.scss" />
