<template>
  <div
    class="c-text-tabs-item"
    role="tabpanel"
  >
    <slot />
  </div>
</template>

<script lang="ts">
export interface CTextTabsItem {
  /**
   * Title of the tab
   */
  title?: string
}
</script>

<script setup lang="ts">
/**
 * Declare all props and defaults for vue.
 */
withDefaults(defineProps<CTextTabsItem>(), {})
</script>
