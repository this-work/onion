<template>
  <C-Slider
    ref="slider"
    :class="[partialClass, sliderIsVisible ? useBem(undefined, `show-navigation`) : useBem(undefined, `hide-navigation`)]"
    :swiper-parameter="swiperParameter"
  >
    <slot>
      <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
        :class="slideClasses(slide)"
        :styles="slideStyles(slide)"
        :style="'--slide-width: ' + slideWidth(slide)"
      >
        <Slot
          v-for="(slot, slotIndex) in slide.slots"
          :key="slotIndex"
          v-bind="slot.data"
          :components="slot.components"
        />
      </swiper-slide>
    </slot>
  </C-Slider>
</template>

<script lang="ts">
import type {
  Slot,
  BackgroundComposableProperties,
  BorderRadius,
  ColormodeComposableProperties,
  SpacingComposableProperties,
} from '../../../types'
import type { Swiper } from 'swiper/types'

export interface MSliderSlideProperties extends BackgroundComposableProperties, SpacingComposableProperties, ColormodeComposableProperties {
  /**
   * To set an individual border radius on this slide
   *  from the border radius config.
   */
  borderRadius?: BorderRadius | null

  /**
   * All slots inside this module
   * as Array
   */
  slots: Slot[]
}

export interface MSlider {
  /**
   * Slides to display in the slider
   */
  slides?: MSliderSlideProperties[]

  /**
   * Optional Swiper parameter to overwrite the default settings
   */
  swiperParameter?: Swiper['params']
}
</script>

<script setup lang="ts">
import { normalizeClass, ref, computed } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import merge from 'lodash/merge'

import { useBem } from '../../../composables/useBem'
import { useCssVar } from '../../../composables/useCssVar'
import { useComponentInstance } from '../../../composables/useComponentInstance'
import { useSpacing } from '../../../composables/useSpacing'
import { useBackground } from '../../../composables/useBackground'
import { useColorMode } from '../../../composables/useColorMode'

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<MSlider>(), {})

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
  ],
  ),
)

/**
 * Swiper overwrites to set up the swiper slider
 * for the module usage.
 */
const defaultSwiperModuleParameter: Swiper['params'] = {
  effect: 'slide',
  freeMode: true,
  slidesPerView: 'auto',
  autoHeight: false,
  navigation: {
    enabled: false,
  },
  pagination: {
    type: 'bullets',
  },
  injectStyles: [
    `.swiper {overflow: visible;}`,
  ],
}

/**
 * Get the grid gaps from the CSS variables and create
 * the Swiper breakpoints with it. The swiper needs the
 * breakpoints with a spaceBetween to work.
 */
const breakpointGaps = JSON.parse(useCssVar('grid-gaps').replace('(', '{').replace(')', '}').replaceAll('px', ''))
const breakpointsForSpacing: Swiper['params'] = {
  breakpoints: {},
}
for (const index in breakpointGaps) {
  breakpointsForSpacing.breakpoints![index !== 'default' ? Number.parseInt(useCssVar('breakpoint-' + index)) : 0] = {
    spaceBetween: breakpointGaps[index],
  }
}

/**
 * Merge the Swiper module parameters with the
 * breakpoints for the gaps.
 */
const swiperParameter: Swiper['params'] = merge(defaultSwiperModuleParameter, breakpointsForSpacing, properties.swiperParameter)

/**
 * Create a ref and da intersection observer
 * to check if the slider is visible for the
 * navigation animation
 */
const slider = ref(null)
const sliderIsVisible = useElementVisibility(slider, {
  rootMargin: '-30% 0px -40% 0px',
})

/**
 * Dynamic function to get the width of a slide.
 * The width is the sum of all slot widths in
 * the slide.
 */
function slideWidth(slide: MSliderSlideProperties) {
  let width = 0
  for (const slot of slide.slots) {
    width += slot.data.width
  }
  return width
}

/**
 * Dynamic function to set kernel slot properties
 * classes on the accordion element too
 */
function slideClasses(slide: MSliderSlideProperties) {
  if (!Object.prototype.hasOwnProperty.call(slide, 'data')) {
    return useBem('slide')
  }

  return normalizeClass([
    useBem('slide'),
    useSpacing().getClasses(slide),
    useBackground().getClasses(slide),
    useColorMode().getClasses(slide),
    {
      [`border-radius-${slide.borderRadius}`]: !!slide.borderRadius,
    },
  ],
  )
}

/**
 * Dynamic function to set kernel slot properties
 * styles on the accordion element too
 */
function slideStyles(slide: MSliderSlideProperties) {
  return {
    ...useBackground().getStyles(slide),
  }
}
</script>

<style lang="scss" src="./M-Slider.scss" />
