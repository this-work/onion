<template>
  <C-Slider
    ref="slider"
    :class="[partialClass, sliderIsVisible ? useBem(void 0, `show-navigation`) : useBem(void 0, `hide-navigation`)]"
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

<script>

</script>

<script setup>
import { normalizeClass, ref, computed } from "vue";
import { useElementVisibility } from "@vueuse/core";
import merge from "lodash/merge";
import { useBem } from "../../../composables/useBem";
import { useCssVar } from "../../../composables/useCssVar";
import { useComponentInstance } from "../../../composables/useComponentInstance";
import { useSpacing } from "../../../composables/useSpacing";
import { useBackground } from "../../../composables/useBackground";
import { useColorMode } from "../../../composables/useColorMode";
const properties = defineProps({
  slides: { type: Array, required: false },
  swiperParameter: { type: null, required: false }
});
const { componentName } = useComponentInstance();
const partialClass = computed(
  () => normalizeClass(
    [
      componentName
    ]
  )
);
const defaultSwiperModuleParameter = {
  effect: "slide",
  freeMode: true,
  slidesPerView: "auto",
  autoHeight: false,
  navigation: {
    enabled: false
  },
  pagination: {
    type: "bullets"
  },
  injectStyles: [
    `.swiper {overflow: visible;}`
  ]
};
const breakpointGaps = JSON.parse(useCssVar("grid-gaps").replace("(", "{").replace(")", "}").replaceAll("px", ""));
const breakpointsForSpacing = {
  breakpoints: {}
};
for (const index in breakpointGaps) {
  breakpointsForSpacing.breakpoints[index !== "default" ? Number.parseInt(useCssVar("breakpoint-" + index)) : 0] = {
    spaceBetween: breakpointGaps[index]
  };
}
const swiperParameter = merge(defaultSwiperModuleParameter, breakpointsForSpacing, properties.swiperParameter);
const slider = ref(null);
const sliderIsVisible = useElementVisibility(slider, {
  rootMargin: "-30% 0px -40% 0px"
});
function slideWidth(slide) {
  let width = 0;
  for (const slot of slide.slots) {
    width += slot.data.width;
  }
  return width;
}
function slideClasses(slide) {
  if (!Object.prototype.hasOwnProperty.call(slide, "data")) {
    return useBem("slide");
  }
  return normalizeClass(
    [
      useBem("slide"),
      useSpacing().getClasses(slide),
      useBackground().getClasses(slide),
      useColorMode().getClasses(slide),
      {
        [`border-radius-${slide.borderRadius}`]: !!slide.borderRadius
      }
    ]
  );
}
function slideStyles(slide) {
  return {
    ...useBackground().getStyles(slide)
  };
}
</script>

<style lang="scss" src="./M-Slider.scss">

</style>
