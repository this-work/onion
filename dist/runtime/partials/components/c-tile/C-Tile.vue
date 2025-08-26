<template>
  <article :class="partialClass">
    <slot>
      <C-Wrapper
        :condition="typeof properties.link != 'undefined' && properties.link != null"
        tag="NuxtLink"
        v-bind="properties.link"
      >
        <slot name="image">
          <C-Image
            v-if="properties.image"
            v-bind="properties.image"
            :class="useBem('image')"
          />
        </slot>

        <slot name="label">
          <C-Label
            v-if="properties.label"
            tag="span"
            size="s"
            v-bind="properties.label"
            :class="useBem('label')"
          />
        </slot>

        <slot name="headline">
          <span
            v-if="overline"
            v-html="overline"
            :class="useBem('overline')"
          />
          <C-Headline
            v-if="properties.headline"
            tag="span"
            v-bind="properties.headline"
            :class="useBem('headline')"
          />
        </slot>

        <slot name="text">
          <C-Text
            v-if="properties.text"
            tag="span"
            v-bind="properties.text"
            :class="useBem('text')"
          />
        </slot>
      </C-Wrapper>
    </slot>
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
  overline: { type: String, required: false },
  headline: { type: Object, required: false },
  text: { type: Object, required: false },
  image: { type: Object, required: false },
  backgroundColor: { type: String, required: false, default: "white" },
  label: { type: Object, required: false },
  link: { type: Object, required: false },
  colorMode: { type: String, required: false }
});
const { componentName } = useComponentInstance();
const partialClass = computed(
  () => normalizeClass([
    componentName,
    useColorMode().getClasses(properties),
    {
      [`background-color-${properties.background}`]: properties.background
    }
  ])
);
</script>

<style lang="scss" src="./C-Tile.scss">

</style>
