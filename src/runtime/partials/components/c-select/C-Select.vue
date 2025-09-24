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

<script lang="ts">
import type {
  ColormodeComposableProperties,
} from '../../../types'

export interface CSelectOption {
  /**
   * Label of the option
   */
  label: string

  /**
   * Value of the option
   */
  value: string

  /**
   * Whether the option is disabled
   */
  $disabled?: boolean

}

export interface CSelect extends ColormodeComposableProperties {
  /**
   * Options for the select
   */
  options: CSelectOption[]

  /**
   * Label of the input
   */
  label?: string

  /**
   * Initial value of the select
   */
  value?: CSelectOption|null

  /**
   * Name of the input
   */
  class?: string

  /**
   * Name of the input
   */
  name?: string

  /**
   * Equivalent to the placeholder attribute
   */
  placeholder?: string

  /**
   * Selects the first option if initial value is empty
   */
  preselectFirst?: boolean

  /**
   * Instruction text for the input
   */
  instruction?: string
}
</script>

<script setup lang="ts">
import { normalizeClass, computed, ref, useSlots, watch } from 'vue'
import Multiselect from 'vue-multiselect'

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
const properties = withDefaults(defineProps<CSelect>(), {
  preselectFirst: false,
  placeholder: '',
  value: null,
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
 * Reactive value for the selected value
 */
const selectedOption = ref<CSelectOption|null>(properties.value);

/**
 * Watch for changes in the selected option
 */
watch(selectedOption, async (newValue) => {
  emit('change', newValue?.value)
})

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
 * Computed value for the selected option value
 */
const selectedValue = computed(() => {
  if (!selectedOption.value) {
    return null;
  }
  return selectedOption.value.value
})

</script>

<style lang="scss" src="./C-Select.scss" />
