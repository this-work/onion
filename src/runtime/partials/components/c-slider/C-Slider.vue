<template>
  <div
    :id="slideId"
    :class="partialClass"
  >
    <swiper-container
      ref="swiper"
      init="false"
    >
      <slot>
        <swiper-slide
          v-for="(component, index) in slides"
          :key="index"
        >
          <component
            :is="component.name"
            v-bind="component.data"
          />
        </swiper-slide>
      </slot>
    </swiper-container>

    <nav :class="useBem('navigation')">
      <div :class="useBem('navigation-wrapper')">
        <c-button
          v-if="hasNavigation"
          icon="chevron-left"
          :class="[useBem('control-button'), useBem('control-button', 'previous-slide')]"
          appearance="system"
          background="soft"
        />
        <div
          v-if="hasPagination"
          :class="useBem('pagination')"
        />
        <c-button
          v-if="hasNavigation"
          icon="chevron-right"
          :class="[useBem('control-button'), useBem('control-button', 'next-slide')]"
          appearance="system"
          background="soft"
        />
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import type {
  Component,
  ColormodeComposableProperties,
} from '../../../types'
import type { Swiper } from 'swiper/types'

export interface CSlider extends ColormodeComposableProperties {
  /**
   * Slides to display in the slider
   */
  slides?: Component[]

  /**
   * Optional Swiper parameter to overwrite the default settings
   */
  swiperParameter?: Swiper['params']
}
</script>

<script setup lang="ts">
import { normalizeClass, computed, useTemplateRef, onMounted, useId } from 'vue'

import { useColorMode } from '../../../composables/useColorMode'
import { useComponentInstance } from '../../../composables/useComponentInstance'
import { useBem } from '../../../composables/useBem'

import { merge } from 'lodash'
import { register } from 'swiper/element/bundle'
/**
 * Register Swiper components
 */
register()

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<CSlider>(), {})

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
 * Get the swiper element as template ref
 * to be able to access the swiper instance
 */
const swiperElement = useTemplateRef<Swiper>('swiper')

/**
 * Create a unique id for the swiper active instance
 * to fix an issue with the navigation query selector
 */
const slideId = 'swiper-' + useId()

/**
 * Absolute swiper default overwrites to set up the swiper
 * slider for the union framework
 */
const defaultSwiperParameter: Swiper['params'] = {
  loop: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    enabled: true,
    nextEl: `#${slideId} .${useBem('control-button', 'next-slide')}`,
    prevEl: `#${slideId} .${useBem('control-button', 'previous-slide')}`,
  },
  pagination: {
    enabled: true,
    el: `#${slideId} .${useBem('pagination')}`,
    type: 'fraction',
    bulletElement: 'button',
    clickable: true,
    renderBullet: function (index, className) {
      return '<button class="' + className + '"><span class="swiper-pagination-bullet-point"></span></button>'
    },
  },
  slidesPerView: 1,
  autoHeight: true,
}

/**
 * Merge the Swiper module parameters with the user/cms
 * given parameters
 */
const swiperParameter: Swiper['params'] = merge(defaultSwiperParameter, properties.swiperParameter)

/**
 * Computed function to check if the navigation
 * is enabled in the Swiper module
 */
const hasNavigation = computed(() => {
  return swiperParameter.navigation?.enabled
})

/**
 * Computed function to check if the pagination
 * is enabled in the Swiper module
 */
const hasPagination = computed(() => {
  return swiperParameter.pagination?.enabled
})

/**
 * Initialize the Swiper instance on mount
 */
onMounted(() => {
  const swiperElementEL = swiperElement.value
  Object.assign(swiperElementEL, swiperParameter)
  swiperElementEL?.initialize()
})
</script>

<style lang="scss" src="./C-Slider.scss" />
