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

<script lang="ts">
import type {
  ColormodeComposableProperties,
} from '../../../types';

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
  value?: CSelectOption | null

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

  /**
   * Navigation direction for keyboard arrow keys
   * - 'vertical': up/down arrows
   * - 'horizontal': left/right arrows  
   * - 'both': both vertical and horizontal arrows
   */
  navigationDirection?: 'vertical' | 'horizontal' | 'both'
}
</script>

<script setup lang="ts">
import { computed, normalizeClass, onMounted, onUnmounted, ref, useSlots, watch } from 'vue';
import Multiselect from 'vue-multiselect';

import { useBem } from "../../../composables/useBem";
import { useColorMode } from '../../../composables/useColorMode';
import { useComponentInstance } from '../../../composables/useComponentInstance';

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
const emit = defineEmits<{ (e: 'change', value: string | undefined | null): void }>()

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<CSelect>(), {
  preselectFirst: false,
  placeholder: '',
  value: null,
  navigationDirection: 'vertical',
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
const selectedOption = ref<CSelectOption | null>(properties.value);

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

/**
 * Reference to the multiselect wrapper element
 */
const selectWrapper = ref<HTMLElement | null>(null);

/**
 * Handle keyboard navigation with arrow keys
 * Note: vue-multiselect handles up/down by default, so we translate left/right to up/down
 */
const handleKeydown = (event: KeyboardEvent) => {
  // Ignore synthetic events we created (they have isTrusted: false)
  if (!event.isTrusted) {
    return;
  }

  const isHorizontalKey = event.key === 'ArrowLeft' || event.key === 'ArrowRight';
  const isVerticalKey = event.key === 'ArrowUp' || event.key === 'ArrowDown';

  // In horizontal mode, NEVER block up/down - they're used for answer navigation
  // Only handle left/right for option navigation
  if (properties.navigationDirection === 'horizontal' && isVerticalKey) {
    return;
  }

  // Check if this key should be handled (translate horizontal to vertical)
  const shouldHandle = (
    (properties.navigationDirection === 'horizontal' && isHorizontalKey) ||
    (properties.navigationDirection === 'both' && isHorizontalKey)
  );

  // For 'vertical' mode (default), let vue-multiselect handle everything
  if (!shouldHandle) return;

  // Dispatch a synthetic ArrowUp or ArrowDown event that vue-multiselect will handle
  const syntheticKey = event.key === 'ArrowRight' ? 'ArrowDown' : 'ArrowUp';

  const syntheticEvent = new KeyboardEvent('keydown', {
    key: syntheticKey,
    code: syntheticKey === 'ArrowDown' ? 'ArrowDown' : 'ArrowUp',
    keyCode: syntheticKey === 'ArrowDown' ? 40 : 38,
    which: syntheticKey === 'ArrowDown' ? 40 : 38,
    bubbles: true,
    cancelable: true,
  });

  // Dispatch synthetic event first, then prevent the original
  event.target?.dispatchEvent(syntheticEvent);

  // Now prevent the original left/right key from doing anything
  event.preventDefault();
  event.stopPropagation();
};

/**
 * Lifecycle hooks
 */
onMounted(() => {
  // Attach keydown listener directly to the multiselect element
  const multiselectEl = selectWrapper.value?.querySelector('.multiselect') as HTMLElement;

  // Always attach listener if navigationDirection is not 'vertical' (default)
  // Use capture phase to intercept events before vue-multiselect processes them
  if (multiselectEl && properties.navigationDirection !== 'vertical') {
    multiselectEl.addEventListener('keydown', handleKeydown, true);
  }
});

onUnmounted(() => {
  const multiselectEl = selectWrapper.value?.querySelector('.multiselect') as HTMLElement;
  if (multiselectEl && properties.navigationDirection !== 'vertical') {
    multiselectEl.removeEventListener('keydown', handleKeydown, true);
  }
});

</script>

<style lang="scss" src="./C-Select.scss" />
