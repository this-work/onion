<template>
  <component
    :is="tag"
    :class="partialClass"
  >
    <picture :class="useBem('wrapper')">
      <slot>
        <source
          v-for="(source, index) in formattedSrcAlternates"
          v-bind="source"
          :key="index"
        >
        <img
          :src="src"
          :loading="loadingMethod"
          :class="imageClasses"
          :style="imageStyles as any"
          :alt="alt"
          :title="title"
          role="img"
          draggable="false"
        >
      </slot>
    </picture>
    <c-text
      v-if="description"
      :tag="captionTag"
      :class="useBem('caption')"
    >
      <p v-html="description" />
    </c-text>
  </component>
</template>

<script lang="ts">
import type {
  ColormodeComposableProperties,
  CSSObject,
  CSSClassObject,
  Breakpoint,
  BorderRadius,
  AspectRatios,
} from '../../../types'

export interface CImageSourceAlternates {
  /**
   * Breakpoint name where the source set is valid e.g. xs or xl
   */
  [breakpoint: Breakpoint]: {
    /**
     * File format of the source set e.g. webp or jpg
     */
    [format: string]: {
      /**
       * Displey resolution of the source set e.g. 1x or 2x
       */
      [resolution: string]: string
    }
  }
}
export interface CImage extends ColormodeComposableProperties {
  /**
   * Optional custom tag of the image
   * @default 'figure'
   */
  tag?: string

  /**
   * Native html path to the image
   */
  src: string

  /**
   * Optional source alternates. Builds multiple source tags
   * based on the given object. Supports the most native html
   * attributes picture/source functions.
   */
  srcAlternates?: CImageSourceAlternates

  /**
   * Option to activate lazy loading for this image
   * @default true
   */
  lazy?: boolean

  /**
   * Option to set a native html title attribute and aria label
   */
  title?: string

  /**
   * Option to set a native html alt attribute
   */
  alt?: string

  /**
   * Fitting behave when the image does not
   * fit the given dimensions
   * @default 'cover'
   */
  fit?: string

  /**
   * Default position when the image does not fit the
   * given dimensions
   * @default 'center center'
   */
  position?: string

  /**
   * Option to set the image to autosize.
   * @default false
   */
  autosize?: boolean

  /**
   * To set an individual border radius on this image according
   * to the list from the border radius config.
   */
  borderRadius?: BorderRadius | null

  /**
   * Option for a caption to display below the image.
   */
  description?: string

  /**
   * Object of breakpoints that define the aspect Ratio of
   * the image for the respective breakpoint.
   */
  aspectRatios?: AspectRatios
}
</script>

<script setup lang="ts">
import { normalizeClass, computed } from 'vue'

import { useBem } from '../../../composables/useBem'
import { useColorMode } from '../../../composables/useColorMode'
import { useComponentInstance } from '../../../composables/useComponentInstance'
import { useCssVar } from '../../../composables/useCssVar'

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<CImage>(), {
  tag: 'figure',
  lazy: true,
  fit: 'cover',
  position: 'center center',
  autosize: false,
})

/**
 * Composable to get and preserve the current element
 * and instance of the component
 */
const { componentName } = useComponentInstance()

/**
 * Standardised computed function for setting
 * classes on the root element of the component
 */
const partialClass = computed(() => {
  const aspectRatioClasses: CSSClassObject = {}
  if (properties.autosize) {
    aspectRatioClasses[useBem(undefined, `autosize`)] = properties.autosize
  }
  if (properties.aspectRatios) {
    for (const aspectRatio in properties.aspectRatios) {
      aspectRatioClasses[useBem(undefined, `has-aspect-ratio-${aspectRatio}`)] = true
    }
  }
  return normalizeClass([componentName, useColorMode().getClasses(properties), aspectRatioClasses])
})

/**
 * Standardised computed function for setting various
 * styles on the image element of the component
 */
const imageStyles = computed(() => {
  const cssStyles: CSSObject = {}
  if (properties.fit) {
    cssStyles[`object-fit`] = properties.fit
  }
  if (properties.position) {
    cssStyles[`object-position`] = properties.position
  }
  if (properties.aspectRatios) {
    for (const aspectRatio in properties.aspectRatios) {
      cssStyles[`--aspect-ratio-${aspectRatio}`] = properties.aspectRatios[aspectRatio as keyof AspectRatios]
    }
  }
  return cssStyles
})

/**
 * Computed function for setting
 * classes on the image element of the component
 */
const imageClasses = computed(() => {
  const classes: CSSClassObject = {
    [useBem('image')]: true,
  }
  if (properties.borderRadius) {
    classes[`border-radius-${properties.borderRadius}`] = true
  }
  return classes
})

/**
 * Builds an object to bind it to a source element for
 * all alternative sources with media queries. The
 * default breakpoint is resolved to 0.
 */
const formattedSrcAlternates = computed(() => {
  const sources: Array<any> = []
  if (properties.srcAlternates) {
    for (const srcAlternateMediaQuerySize in properties.srcAlternates) {
      let mediaQuerySize: string | undefined = '0px'
      if (srcAlternateMediaQuerySize !== 'default') {
        mediaQuerySize = useCssVar(`breakpoint-${srcAlternateMediaQuerySize}`)
      }
      const alternates: any = properties.srcAlternates[srcAlternateMediaQuerySize]
      for (const alternate in alternates) {
        sources.push({
          srcset: buildSourceSet(alternates[alternate]),
          media: mediaQuerySize != '0px' ? `(min-width: ${mediaQuerySize})` : undefined,
          type: `image/${alternate}`,
        })
      }
    }
  }
  return sources.reverse()
})

/**
 * Merges a source set object into a string and separates
 * them with a comma in order to be able to fill the source
 * tag natively.
 */
function buildSourceSet(sourceSet: Record<string, string>) {
  let sourceSetString: string = ''

  for (const source in sourceSet) {
    sourceSetString += `${sourceSet[source]} ${source}, `
  }
  return sourceSetString.slice(0, -2)
}

const loadingMethod = computed(() => (properties.lazy ? 'lazy' : 'eager'))

const captionTag = computed(() => (properties.tag === 'figure' ? 'figcaption' : 'span'))
</script>

<style lang="scss" src="./C-Image.scss" />
