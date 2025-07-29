<template>
  <figure :class="partialClass">
    <C-Image
      v-bind="image"
      :class="useBem('image')"
      draggable="false"
    />
    <figcaption :class="useBem('spots')">
      <button
        v-for="(spot, index) in hotspots"
        :key="index"
        :class="useBem('spot')"
        :style="getSpotStyles(spot)"
        :disabled="spot.disabled"
        @click="openModal(index)"
      >
        <div :class="useBem('dot')" />
        <div :class="useBem('ring')" />
        <C-Modal
          :show="activeSpot === index"
          v-bind="spot.content"
          @update:show="updateModalState($event, index)"
        />
      </button>
    </figcaption>
  </figure>
</template>

<script lang="ts">
import type {
  ColormodeComposableProperties,
  CSSClassObject,
  CImage,
  CModal,
  Breakpoint,
} from '../../../types'

export interface CHotspotDot {
  /**
   * Horizontal position as percentage (0-100)
   */
  x: number

  /**
   * Vertical position as percentage (0-100)
   */
  y: number

  /**
   * Content to display when the hotspot is clicked
   */
  content?: CModal

  /**
   * Alternative spot positions for different breakpoints
   */
  alternates?: {
    [breakpoint in Breakpoint]: {
      x: number
      y: number
    };
  }

  /**
   * Whether the hotspot is disabled
   */
  disabled?: boolean
}

export interface CHotspot extends ColormodeComposableProperties {
  /**
   * Source image to display
   */
  image: CImage

  /**
   * Array of hotspot dots to display on the image
   */
  hotspots: CHotspotDot[]
}
</script>

<script setup lang="ts">
import { normalizeClass, computed, ref } from 'vue'

import { useBem } from '../../../composables/useBem'
import { useColorMode } from '../../../composables/useColorMode'

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<CHotspot>(), {
})

/**
 * Composable to get and preserve the current element
 * and instance of the component
 */
const activeSpot = ref<number | null>(null)

/**
 * Standardised computed function for setting
 * classes on the root element of the component
 */
const partialClass = computed(() => {
  const classes: CSSClassObject = {}
  properties.hotspots.forEach((hotspot) => {
    if (hotspot.alternates) {
      Object.keys(hotspot.alternates).forEach((breakpoint) => {
        classes[useBem(undefined, `has-position-${breakpoint}`)] = true
      })
    }
  })

  return normalizeClass([useColorMode().getClasses(properties), classes])
})

const openModal = (index: number) => {
  activeSpot.value = index
}

const updateModalState = (show: boolean, index: number) => {
  activeSpot.value = show ? index : null
}

const getSpotStyles = (spot: CHotspotDot) => {
  const styles: Record<string, string> = {}

  styles['--x-position'] = `${spot.x}%`
  styles['--y-position'] = `${spot.y}%`
  if (spot.alternates) {
    for (const [breakpoint, position] of Object.entries(spot.alternates)) {
      styles[`--x-position-${breakpoint}`] = `${position.x}%`
      styles[`--y-position-${breakpoint}`] = `${position.y}%`
    }
  }

  return styles
}
</script>

<style lang="scss" src="./C-Hotspot.scss" />
