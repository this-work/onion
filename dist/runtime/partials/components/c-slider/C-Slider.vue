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

<script>

</script>

<script setup>
import { normalizeClass, computed, useTemplateRef, onMounted, useId } from "vue";
import { useColorMode } from "../../../composables/useColorMode";
import { useComponentInstance } from "../../../composables/useComponentInstance";
import { useBem } from "../../../composables/useBem";
import { merge } from "lodash";
import { register } from "swiper/element/bundle";
register();
const properties = defineProps({
  slides: { type: Array, required: false },
  swiperParameter: { type: null, required: false },
  colorMode: { type: String, required: false }
});
const { componentName } = useComponentInstance();
const partialClass = computed(
  () => normalizeClass(
    [
      componentName,
      useColorMode().getClasses(properties)
    ]
  )
);
const swiperElement = useTemplateRef("swiper");
const slideId = "swiper-" + useId();
const defaultSwiperParameter = {
  loop: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    enabled: true,
    nextEl: `#${slideId} .${useBem("control-button", "next-slide")}`,
    prevEl: `#${slideId} .${useBem("control-button", "previous-slide")}`
  },
  pagination: {
    enabled: true,
    el: `#${slideId} .${useBem("pagination")}`,
    type: "fraction",
    bulletElement: "button",
    clickable: true,
    renderBullet: function(index, className) {
      return '<button class="' + className + '"><span class="swiper-pagination-bullet-point"></span></button>';
    }
  },
  slidesPerView: 1,
  autoHeight: true
};
const swiperParameter = merge(defaultSwiperParameter, properties.swiperParameter);
const hasNavigation = computed(() => {
  return swiperParameter.navigation?.enabled;
});
const hasPagination = computed(() => {
  return swiperParameter.pagination?.enabled;
});
onMounted(() => {
  const swiperElementEL = swiperElement.value;
  Object.assign(swiperElementEL, swiperParameter);
  swiperElementEL?.initialize();
});
</script>

<style lang="scss" src="./C-Slider.scss">

</style>
