<template>
  <C-Wrapper
    :condition="!!additionalButtons?.length"
    tag="div"
  >
    <component
      v-bind="$attrs"
      :is="computedTag"
      v-if="text || icon"
      :href
      :target="computedTarget"
      :class="partialClass"
      :disabled
    >
      <span :class="useBem('content')">
        <C-Icon
          v-if="loading"
          tag="span"
          name="loading"
          :class="useBem('loader')"
          package="mdi"
          :size="loadingSpinnerSize"
        />
        <C-Icon
          v-if="icon"
          tag="span"
          :name="icon"
          :class="useBem('icon')"
          :size="iconSize"
        />
        <span
          v-if="hasText"
          :class="useBem('text')"
        >
          <slot>{{ text }}</slot>
        </span>
      </span>
    </component>
    <C-Button
      v-for="(button, index) in additionalButtons"
      :key="index"
      v-bind="button"
    />
  </C-Wrapper>
</template>

<script>

</script>

<script setup>
import { normalizeClass, computed, useSlots } from "vue";
import { useBem } from "../../../composables/useBem";
import { useColorMode } from "../../../composables/useColorMode";
import { useComponentInstance } from "../../../composables/useComponentInstance";
defineOptions({
  inheritAttrs: false
});
const properties = defineProps({
  tag: { type: String, required: false, default: "button" },
  appearance: { type: String, required: false, default: "system" },
  background: { type: String, required: false, default: "solid" },
  rounded: { type: Boolean, required: false, default: false },
  text: { type: String, required: false },
  icon: { type: String, required: false },
  iconSize: { type: String, required: false },
  iconPosition: { type: String, required: false, default: "left" },
  loading: { type: Boolean, required: false, default: false },
  disabled: { type: Boolean, required: false, default: false },
  loadingSpinnerSize: { type: String, required: false, default: "20px" },
  href: { type: String, required: false },
  target: { type: String, required: false },
  additionalButtons: { type: Array, required: false },
  colorMode: { type: String, required: false }
});
const computedTag = computed(() => properties.href ? "a" : properties.tag);
const computedTarget = computed(() => properties.target && computedTag.value === "a" ? properties.target : void 0);
const hasText = computed(() => !!properties.text || !!useSlots().default);
const { componentName } = useComponentInstance();
const partialClass = computed(
  () => normalizeClass([
    componentName,
    useColorMode().getClasses(properties),
    {
      [useBem(void 0, `${properties.appearance}-${properties.background}`)]: true,
      [useBem(void 0, `icon-position-${properties.iconPosition}`)]: properties.iconPosition && hasText.value,
      [useBem(void 0, "icon")]: !hasText.value,
      [useBem(void 0, "loading")]: properties.loading,
      [useBem(void 0, "disabled")]: properties.disabled,
      [useBem(void 0, "link")]: computedTag.value === "a",
      [useBem(void 0, "rounded")]: properties.appearance === "system" && !hasText.value ? true : properties.rounded
    }
  ])
);
</script>

<style lang="scss" src="./C-Button.scss">

</style>
