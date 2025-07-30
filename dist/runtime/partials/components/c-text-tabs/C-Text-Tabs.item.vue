<template>
  <div
    class="c-text-tabs-item"
    role="tabpanel"
  >
    <slot />
  </div>
</template>

<script>

</script>

<script setup>
defineProps({
  title: { type: String, required: false }
});
</script>
