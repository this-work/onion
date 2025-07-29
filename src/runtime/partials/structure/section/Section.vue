<template>
  <section
    ref="section"
    :class="partialClass"
    :style="partialStyle"
  >
    <slot>
      <Module
        v-for="(module, index) in modules"
        v-bind="moduleBind(module)"
        :key="index"
      />
    </slot>
  </section>
</template>

<script lang="ts">
import type {
  BackgroundComposableProperties,
  SpacingComposableProperties,
  Module,
} from '../../../types'

export interface SectionProperties extends BackgroundComposableProperties, SpacingComposableProperties {
  /**
   * All modules inside this section
   * as Array
   */
  modules?: Module[]
}
</script>

<script setup lang="ts">
import { normalizeClass, computed } from 'vue'

import { useBackground } from '../../../composables/useBackground'
import { useSpacing } from '../../../composables/useSpacing'
import { useComponentInstance } from '../../../composables/useComponentInstance'

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<SectionProperties>(), {
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
    useSpacing().getClasses(properties, false),
    useBackground().getClasses(properties),
  ],
  ),
)

/**
 * Standardised computed function for setting
 * styles on the root element of the component
 */
const partialStyle = computed(() => useBackground().getStyles(properties))

/**
 * Flatten the module object and resolve the
 * data props to root level
 */
function moduleBind(module: Module) {
  return {
    ...module.data,
    ...module,
  }
};
</script>

<style lang="scss" src="./Section.scss" />
