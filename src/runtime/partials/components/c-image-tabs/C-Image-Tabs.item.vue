<template>
  <div
    class="c-image-tabs-item"
    role="tabpanel"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import type {
  CImage,
} from '../../../types'

export interface CImageTabsItem {
  /**
   * Image fot the tab navigation
   */
  image?: CImage
}
</script>

<script setup lang="ts">
/**
 * Declare all props and defaults for vue.
 */
withDefaults(defineProps<CImageTabsItem>(), {})
</script>
