<template>
  <component
    :is="tag"
    :class="partialClass"
  >
    <ScriptYouTubePlayer
      v-if="isStreamingVideo"
      :class="videoClasses"
      :video-id="streamingVideoId"
      :player-vars="{ controls: controls? 1 : 0, loop: loop? 1 : 0, playsinline: isInlinePlay? 1 : 0 }"
    >
      <template v-if="poster" #placeholder="{}">
        <img
          :src="poster"
          :alt="title"
        >
      </template>
      <template #awaitingLoad>
        <c-button icon="play-circle-outline" :class="useBem('play-button')" text="Video starten" appearance="primary" />
      </template>
    </ScriptYouTubePlayer>

    <video
      v-else
      :class="videoClasses"
      :style="videoStyles as any"
      :tabindex="(showPoster ? -1 : undefined)"
      :controls="controls"
      :loop="loop"
      :muted="isMuted"
      :controlsList="controlsList"
      :autoplay="autoplay"
      :playsinline="isInlinePlay"
      :poster="poster"
      :title="title"
      :aria-label="title"
      preload="metadata"
      crossorigin="anonymous"
      disablePictureInPicture="true"
    >
      <slot>
        <source
          v-for="(source, index) in formattedSources"
          :key="index"
          v-bind="source"
        >

        <track
          v-for="(track, index) in tracks"
          :key="index"
          :src="track.url"
          :label="track.label"
          :srclang="track.srclang"
          :kind="track.type"
          :default="track.default"
        >

      </slot>
    </video>

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
  AspectRatios,
  BorderRadius,
  Breakpoint,
  CSSObject,
  CSSClassObject,
  ColormodeComposableProperties,
} from '../../../types'

export interface CVideoSourceAlternates {
  /**
   * Breakpoint name where the source set is valid e.g. xs or xl
   */
  [breakpoint: Breakpoint]: string
}

export interface CVideoTracks {
  [index: number]: {
    url: string
    label: string
    srclang: string
    type: string
    default: boolean | undefined
  }
}
export interface CVideo extends ColormodeComposableProperties {
  /**
   * Optional custom tag of the image
   * The default value is 'figure'
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
  srcAlternates?: CVideoSourceAlternates

  /**
   * Option to set a native html title attribute
   */
  title?: string

  /**
   * Fitting behave when the video does not
   * fit the given dimensions
   * The default value is 'cover'
   */
  fit?: string

  /**
   * Default position when the video does not fit the
   * given dimensions
   * The default value is 'center center'
   */
  position?: string

  /**
   * Set the loop attribute on the video element
   * The default value is 'false'
   */
  loop?: boolean

  /**
   *  Set the playinline attribute on the video element
   *  The default value is 'true'
   */
  playsinline?: boolean

  /**
   * Set the muted attribute on the video element
   * The default value is 'false'
   */
  muted?: boolean

  /**
   * Activate the controls on the video element
   * The default value is 'true'
   */
  controls?: boolean

  /**
   * Activate the download control the video element
   * The default value is 'false'
   */
  controlsDownload?: boolean

  /**
   * Activate the fullscreen control the video element
   * The default value is 'true'
   */
  controlsFullscreen?: boolean

  /**
   * Set the autoplay attribute on the video element
   * The default value is 'false'
   */
  autoplay?: boolean

  /**
   * Set a native poster on the video element
   */
  poster?: string

  /**
   * To set an individual border radius on this image according
   * to the list from the border radius config.
   */
  borderRadius?: BorderRadius

  /**
   * Option for a caption to display below the image.
   */
  description?: string

  /**
   * Option to set a track for the video.
   */
  tracks?: CVideoTracks

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
const properties = withDefaults(defineProps<CVideo>(), {
  tag: 'figure',
  fit: 'cover',
  position: 'center center',
  loop: false,
  playsinline: true,
  muted: false,
  controls: true,
  controlsDownload: false,
  controlsFullscreen: true,
  autoplay: false,
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
const partialClass = computed(() => {
  const aspectRatioClasses: CSSClassObject = {}
  if (properties.aspectRatios) {
    for (const aspectRatio in properties.aspectRatios) {
      aspectRatioClasses[useBem(undefined, `has-aspect-ratio-${aspectRatio}`)] = true
    }
  }
  return normalizeClass([
    componentName,
    useColorMode().getClasses(properties),
    aspectRatioClasses,
  ],
  )
})

/**
 * Computed function for setting
 * classes on the image element of the component
 */
const videoClasses = computed(() => {
  const classes: CSSClassObject = {
    [useBem('video')]: true,
  }
  if (properties.borderRadius) {
    classes[`border-radius-${properties.borderRadius}`] = true
  }
  return classes
})

/**
 * Computed function for setting various
 * styles on the video element of the component
 */
const videoStyles = computed(() => {
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
 * Check if the video is a streaming video of youtube or
 * vimeo. When this is the case, following video tag attributes
 *  are ignored:
 * :srcAlternates=""
 * :fit=""
 * :position=""
 * :muted=""
 * :controlsDownload=""
 * :controlsFullscreen=""
 * :tracks=""
 * :aspect-ratios=""
 */
const isStreamingVideo = computed(() => {
  if (!properties.src) {
    return false
  }
  return properties.src.includes('youtube.')
})

/**
 * Check if the video is a streaming video of YouTube or
 * vimeo. When this is the case, all video tag attribute
 * like loop or fit are ignored.
 */
const streamingVideoId = computed(() => {
  if (isStreamingVideo.value) {
    if (properties.src.includes('youtube.')) {
      return properties.src.split('v=')[1]
    }
    else {
      return isStreamingVideo.value
    }
  }
  else {
    return undefined
  }
})

/**
 * Builds an object to bind it to a source element for
 * all alternative sources with media queries. The
 * default breakpoint is resolved to 0.
 */
const formattedSources = computed(() => {
  const sources: Array<any> = []

  if (!properties.srcAlternates || !Object.prototype.hasOwnProperty.call(properties.srcAlternates, 'default')) {
    sources.push({
      src: properties.src,
    })
  }

  if (properties.srcAlternates) {
    for (const srcAlternateMediaQuerySize in properties.srcAlternates) {
      let mediaQuerySize = '0px'
      if (srcAlternateMediaQuerySize !== 'default') {
        mediaQuerySize = useCssVar(`breakpoint-${srcAlternateMediaQuerySize}`)
      }
      const alternates: any = properties.srcAlternates[srcAlternateMediaQuerySize]
      for (const alternate in alternates) {
        sources.push({
          src: alternates[alternate],
          media: mediaQuerySize != '0px' ? `(min-width: ${mediaQuerySize})` : undefined,
          type: `video/${alternate}`,
        })
      }
    }
  }
  return sources.reverse()
})

const showPoster = computed(() => properties.poster?.length || 0 > 0)

const isMuted = computed(() => !!(properties.muted || properties.autoplay))

const isInlinePlay = computed(() => properties.autoplay || properties.playsinline)

const captionTag = computed(() => properties.tag === 'figure' ? 'figcaption' : 'span')

const controlsList = computed(() => {
  let controlsList: string = ''

  if (!properties.controls) {
    return undefined
  }

  if (!properties.controlsDownload) {
    controlsList += ' nodownload'
  }

  if (!properties.controlsFullscreen) {
    controlsList += ' nofullscreen'
  }

  return controlsList
})
</script>

<style lang="scss" src="./C-Video.scss" />
