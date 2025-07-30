<template>
  <component
    :is="tag"
    :class="partialClass"
  >
    <video
      :class="videoClasses"
      :style="videoStyles"
      :tabindex="showPoster ? -1 : void 0"
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

<script>

</script>

<script setup>
import { normalizeClass, computed } from "vue";
import { useBem } from "../../../composables/useBem";
import { useColorMode } from "../../../composables/useColorMode";
import { useComponentInstance } from "../../../composables/useComponentInstance";
import { useCssVar } from "../../../composables/useCssVar";
const properties = defineProps({
  tag: { type: String, required: false, default: "figure" },
  src: { type: String, required: true },
  srcAlternates: { type: Object, required: false },
  title: { type: String, required: false },
  fit: { type: String, required: false, default: "cover" },
  position: { type: String, required: false, default: "center center" },
  loop: { type: Boolean, required: false, default: false },
  playsinline: { type: Boolean, required: false, default: true },
  muted: { type: Boolean, required: false, default: false },
  controls: { type: Boolean, required: false, default: true },
  controlsDownload: { type: Boolean, required: false, default: false },
  controlsFullscreen: { type: Boolean, required: false, default: true },
  autoplay: { type: Boolean, required: false, default: false },
  poster: { type: String, required: false },
  borderRadius: { type: String, required: false },
  description: { type: String, required: false },
  tracks: { type: Object, required: false },
  aspectRatios: { type: null, required: false },
  colorMode: { type: String, required: false }
});
const { componentName } = useComponentInstance();
const partialClass = computed(() => {
  const aspectRatioClasses = {};
  if (properties.aspectRatios) {
    for (const aspectRatio in properties.aspectRatios) {
      aspectRatioClasses[useBem(void 0, `has-aspect-ratio-${aspectRatio}`)] = true;
    }
  }
  return normalizeClass(
    [
      componentName,
      useColorMode().getClasses(properties),
      aspectRatioClasses
    ]
  );
});
const videoClasses = computed(() => {
  const classes = {
    [useBem("video")]: true
  };
  if (properties.borderRadius) {
    classes[`border-radius-${properties.borderRadius}`] = true;
  }
  return classes;
});
const videoStyles = computed(() => {
  const cssStyles = {};
  if (properties.fit) {
    cssStyles[`object-fit`] = properties.fit;
  }
  if (properties.position) {
    cssStyles[`object-position`] = properties.position;
  }
  if (properties.aspectRatios) {
    for (const aspectRatio in properties.aspectRatios) {
      cssStyles[`--aspect-ratio-${aspectRatio}`] = properties.aspectRatios[aspectRatio];
    }
  }
  return cssStyles;
});
const formattedSources = computed(() => {
  const sources = [];
  if (!properties.srcAlternates || !Object.prototype.hasOwnProperty.call(properties.srcAlternates, "default")) {
    sources.push({
      src: properties.src
    });
  }
  if (properties.srcAlternates) {
    for (const srcAlternateMediaQuerySize in properties.srcAlternates) {
      let mediaQuerySize = "0px";
      if (srcAlternateMediaQuerySize !== "default") {
        mediaQuerySize = useCssVar(`breakpoint-${srcAlternateMediaQuerySize}`);
      }
      const alternates = properties.srcAlternates[srcAlternateMediaQuerySize];
      for (const alternate in alternates) {
        sources.push({
          src: alternates[alternate],
          media: mediaQuerySize != "0px" ? `(min-width: ${mediaQuerySize})` : void 0,
          type: `video/${alternate}`
        });
      }
    }
  }
  return sources.reverse();
});
const showPoster = computed(() => properties.poster?.length > 0);
const isMuted = computed(() => !!(properties.muted || properties.autoplay));
const isInlinePlay = computed(() => properties.autoplay || properties.playsinline);
const captionTag = computed(() => properties.tag === "figure" ? "figcaption" : "span");
const controlsList = computed(() => {
  let controlsList2 = "";
  if (!properties.controls) {
    return void 0;
  }
  if (!properties.controlsDownload) {
    controlsList2 += " nodownload";
  }
  if (!properties.controlsFullscreen) {
    controlsList2 += " nofullscreen";
  }
  return controlsList2;
});
</script>

<style lang="scss" src="./C-Video.scss">

</style>
