<template>
  <article :class="partialClass">
    <C-Wrapper
      :condition="properties.link"
      tag="NuxtLink"
      v-bind="properties.link"
    >
      <C-Image
        v-if="properties.image"
        v-bind="properties.image"
      />

      <C-Label
        v-if="properties.label"
        v-bind="properties.label"
      />

      <span>dghthsrhsrzszjsjrzsjzrjzsrt</span>

      <C-Headline
        v-if="properties.headline"
        v-bind="properties.headline"
      />

      <C-Text
        v-if="properties.text"
        v-bind="properties.text"
      />

      <slot />
    </C-Wrapper>
  </article>
</template>

<script>

</script>

<script setup>
import { normalizeClass, computed } from "vue";
import { useBem } from "../../../composables/useBem";
import { useColorMode } from "../../../composables/useColorMode";
import { useComponentInstance } from "../../../composables/useComponentInstance";
const properties = defineProps({
  type: { type: String, required: false, default: "default" },
  hero: { type: Boolean, required: false, default: false },
  overline: { type: String, required: true },
  headline: { type: Object, required: true },
  text: { type: Object, required: true },
  image: { type: Object, required: true },
  label: { type: Object, required: true },
  link: { type: Object, required: true },
  colorMode: { type: String, required: false }
});
const { componentName } = useComponentInstance();
const partialClass = computed(
  () => normalizeClass([
    componentName,
    useColorMode().getClasses(properties),
    {
      [useBem(void 0, "transparent")]: !properties.background,
      [useBem(void 0, `size-${properties.size}`)]: properties.size != "m"
    }
  ])
);
</script>

<style lang="scss" src="./C-Tile.scss">

</style>
