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

<script>

</script>

<script setup>
import { normalizeClass, computed, ref } from "vue";
import { useBem } from "../../../composables/useBem";
import { useColorMode } from "../../../composables/useColorMode";
const properties = defineProps({
  image: { type: Object, required: true },
  hotspots: { type: Array, required: true },
  colorMode: { type: String, required: false }
});
const activeSpot = ref(null);
const partialClass = computed(() => {
  const classes = {};
  properties.hotspots.forEach((hotspot) => {
    if (hotspot.alternates) {
      Object.keys(hotspot.alternates).forEach((breakpoint) => {
        classes[useBem(void 0, `has-position-${breakpoint}`)] = true;
      });
    }
  });
  return normalizeClass([useColorMode().getClasses(properties), classes]);
});
const openModal = (index) => {
  activeSpot.value = index;
};
const updateModalState = (show, index) => {
  activeSpot.value = show ? index : null;
};
const getSpotStyles = (spot) => {
  const styles = {};
  styles["--x-position"] = `${spot.x}%`;
  styles["--y-position"] = `${spot.y}%`;
  if (spot.alternates) {
    for (const [breakpoint, position] of Object.entries(spot.alternates)) {
      styles[`--x-position-${breakpoint}`] = `${position.x}%`;
      styles[`--y-position-${breakpoint}`] = `${position.y}%`;
    }
  }
  return styles;
};
</script>

<style lang="scss" src="./C-Hotspot.scss">

</style>
