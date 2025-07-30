<template>
  <div
    class="c-image-tabs-item"
    role="tabpanel"
  >
    <slot />
  </div>
</template>

<script>

</script>

<script setup>
defineProps({
  image: { type: Object, required: false }
});
</script>
