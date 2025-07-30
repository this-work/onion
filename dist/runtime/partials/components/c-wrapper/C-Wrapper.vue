<template>
  <Wrap
    :wrapper="condition && tag"
    :class="partialClass"
  >
    <slot />
  </Wrap>
</template>

<script>

</script>

<script setup>
import { normalizeClass, computed } from "vue";
import Wrap from "../../utilities/Wrap";
import { useComponentInstance } from "../../../composables/useComponentInstance";
defineProps({
  tag: { type: String, required: false, default: "div" },
  condition: { type: Boolean, required: false, default: true }
});
const { componentName } = useComponentInstance();
const partialClass = computed(
  () => normalizeClass(
    [
      componentName
    ]
  )
);
</script>
