<template>
  <C-Wrapper
    :condition="!!additionalButtons?.length"
    tag="div"
  >
    <component
      v-bind="$attrs"
      :is="computedTag"
      v-if="text || icon"
      :href
      :target="computedTarget"
      :class="partialClass"
      :disabled
    >
      <span :class="useBem('content')">
        <C-Icon
          v-if="loading"
          tag="span"
          name="loading"
          :class="useBem('loader')"
          :package="iconPackage"
          :size="loadingSpinnerSize"
        />
        <C-Icon
          v-if="icon"
          tag="span"
          :name="icon"
          :class="useBem('icon')"
          :package="iconPackage"
          :size="iconSize"
        />
        <span
          v-if="hasText"
          :class="useBem('text')"
        >
          <slot>{{ text }}</slot>
        </span>
      </span>
    </component>
    <C-Button
      v-for="(button, index) in additionalButtons"
      :key="index"
      v-bind="button"
    />
  </C-Wrapper>
</template>

<script lang="ts">
import type {
  ColormodeComposableProperties,
} from '../../../types'

export interface CButton extends ColormodeComposableProperties {
  /**
   * HTML element to render the button as
   * @default 'button'
   */
  tag?: string

  /**
   * Visual style variant of the button
   * @default 'system'
   */
  appearance?: 'primary' | 'secondary' | 'system'

  /**
   * Custom background color for the button
   * @default 'solid'
   */
  background?: 'solid' | 'soft' | 'outline' | 'plain'

  /**
   * Whether the button should have rounded corners
   * @default false
   */
  rounded?: boolean

  /**
   * The text content to display inside the button
   */
  text?: string

  /**
   * Icon name/identifier to show alongside button text
   */
  icon?: string

  /**
   * Size of the icon
   */
  iconSize?: string

  /**
   * Position of the icon relative to the button text
   * @default 'left'
   */
  iconPosition?: 'left' | 'right'

  /**
   * Package of the icon
   */
  iconPackage?: string

  /**
   * Shows a loading indicator when true
   * @default false
   */
  loading?: boolean

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean

  /**
   * Size of the loading indicator
   */
  loadingSpinnerSize?: string

  /**
   * URL that the button links to when clicked
   */
  href?: string

  /**
   * The target attribute specifying where to open the linked document
   */
  target?: string

  /**
   * Additional buttons to render in as a button group
   */
  additionalButtons?: Omit<CButton, 'additionalButtons'>[]
}
</script>

<script setup lang="ts">
import { normalizeClass, computed, useSlots } from 'vue'
import { NuxtLink } from '#components'

import { useBem } from '../../../composables/useBem'
import { useColorMode } from '../../../composables/useColorMode'
import { useComponentInstance } from '../../../composables/useComponentInstance'

/**
 * Declare the options for the component. Disables inheriting
 * the attributes from the parent element.
 */
defineOptions({
  inheritAttrs: false,
})

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<CButton>(), {
  tag: 'button',
  appearance: 'system',
  background: 'solid',
  rounded: false,
  iconPosition: 'left',
  loading: false,
  disabled: false,
  loadingSpinnerSize: '20px',
})

const computedTag = computed(() => {
  if (properties.tag.toLowerCase() === 'nuxtlink' || properties.tag.toLowerCase() === 'nuxt-link') {
    return NuxtLink;
  }
  return properties.href ? "a" : properties.tag
});
const computedTarget = computed(() => (properties.target && computedTag.value === 'a' ? properties.target : undefined))
const hasText = computed(() => !!properties.text || !!useSlots().default)

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
    {
      [useBem(undefined, `${properties.appearance}-${properties.background}`)]: true,
      [useBem(undefined, `icon-position-${properties.iconPosition}`)]: properties.iconPosition && hasText.value,
      [useBem(undefined, 'icon')]: !hasText.value,
      [useBem(undefined, 'loading')]: properties.loading,
      [useBem(undefined, 'disabled')]: properties.disabled,
      [useBem(undefined, 'link')]: computedTag.value === 'a',
      [useBem(undefined, 'rounded')]: properties.appearance === 'system' && !hasText.value ? true : properties.rounded,
    },
  ]),
)
</script>

<style lang="scss" src="./C-Button.scss" />
