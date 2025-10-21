<template>
  <component :is="tag" :class="partialClass">
    <div v-if="useNuxtPicture" :class="useBem('wrapper')">
      <NuxtPicture :src="src" :format="format" :sizes="sizes" :quality="quality" :width="width" :height="height"
        :placeholder="placeholder" :loading="loadingMethod" :img-attrs="mergedImgAttrs" />
    </div>
    <picture v-else :class="useBem('wrapper')">
      <slot>
        <source v-for="(source, index) in formattedSrcAlternates" v-bind="source" :key="index" />
        <img :src="src" :loading="loadingMethod" :class="imageClasses" :style="imageStyles" :alt="alt"
          :title="title" role="img" draggable="false" />
      </slot>
    </picture>
    <c-text v-if="description" :tag="captionTag" :class="useBem('caption')">
      <p v-html="description" />
    </c-text>
  </component>
</template>

<script>

</script>

<script setup>
import { computed, normalizeClass } from "vue";
import { useBem } from "../../../composables/useBem";
import { useColorMode } from "../../../composables/useColorMode";
import { useComponentInstance } from "../../../composables/useComponentInstance";
import { useCssVar } from "../../../composables/useCssVar";
const properties = defineProps({
  tag: { type: String, required: false, default: "figure" },
  src: { type: String, required: true },
  srcAlternates: { type: Object, required: false },
  lazy: { type: Boolean, required: false, default: true },
  title: { type: String, required: false },
  alt: { type: String, required: false },
  fit: { type: String, required: false, default: "cover" },
  position: { type: String, required: false, default: "center center" },
  autosize: { type: Boolean, required: false, default: false },
  borderRadius: { type: [String, null], required: false },
  description: { type: String, required: false },
  aspectRatios: { type: null, required: false },
  useNuxtPicture: { type: Boolean, required: false, default: false },
  format: { type: String, required: false, default: "webp" },
  sizes: { type: String, required: false },
  quality: { type: Number, required: false, default: 80 },
  width: { type: Number, required: false },
  height: { type: Number, required: false },
  placeholder: { type: [String, Boolean], required: false },
  imgAttrs: { type: Object, required: false },
  colorMode: { type: String, required: false }
});
const { componentName } = useComponentInstance();
const partialClass = computed(() => {
  const aspectRatioClasses = {};
  if (properties.autosize) {
    aspectRatioClasses[useBem(void 0, `autosize`)] = properties.autosize;
  }
  if (properties.aspectRatios) {
    for (const aspectRatio in properties.aspectRatios) {
      aspectRatioClasses[useBem(void 0, `has-aspect-ratio-${aspectRatio}`)] = true;
    }
  }
  return normalizeClass([componentName, useColorMode().getClasses(properties), aspectRatioClasses]);
});
const imageStyles = computed(() => {
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
const imageClasses = computed(() => {
  const classes = {
    [useBem("image")]: true
  };
  if (properties.borderRadius) {
    classes[`border-radius-${properties.borderRadius}`] = true;
  }
  return classes;
});
const formattedSrcAlternates = computed(() => {
  const sources = [];
  if (properties.srcAlternates) {
    for (const srcAlternateMediaQuerySize in properties.srcAlternates) {
      let mediaQuerySize = "0px";
      if (srcAlternateMediaQuerySize !== "default") {
        mediaQuerySize = useCssVar(`breakpoint-${srcAlternateMediaQuerySize}`);
      }
      const alternates = properties.srcAlternates[srcAlternateMediaQuerySize];
      for (const alternate in alternates) {
        sources.push({
          srcset: buildSourceSet(alternates[alternate]),
          media: mediaQuerySize != "0px" ? `(min-width: ${mediaQuerySize})` : void 0,
          type: `image/${alternate}`
        });
      }
    }
  }
  return sources.reverse();
});
function buildSourceSet(sourceSet) {
  let sourceSetString = "";
  for (const source in sourceSet) {
    sourceSetString += `${sourceSet[source]} ${source}, `;
  }
  return sourceSetString.slice(0, -2);
}
const loadingMethod = computed(() => properties.lazy ? "lazy" : "eager");
const captionTag = computed(() => properties.tag === "figure" ? "figcaption" : "span");
const mergedImgAttrs = computed(() => {
  const baseAttrs = {
    alt: properties.alt,
    title: properties.title,
    class: imageClasses.value,
    style: imageStyles.value,
    role: "img",
    draggable: false
  };
  return properties.imgAttrs ? { ...baseAttrs, ...properties.imgAttrs } : baseAttrs;
});
</script>

<style lang="scss" src="./C-Image.scss">

</style>
