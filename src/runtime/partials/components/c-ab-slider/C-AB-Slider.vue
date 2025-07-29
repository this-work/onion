<template>
  <component
    :is="tag"
    ref="containerElement"
    :class="partialClass"
    @pointerdown="onContainerPointerDown"
    @keydown="onKeyDown"
  >
    <slot name="before">
      <C-Image
        v-bind="before"
        :class="useBem('before')"
        :style="beforeStyle"
      />
    </slot>
    <slot name="after">
      <C-Image
        v-bind="after"
        :class="useBem('after')"
        :style="afterStyle"
      />
    </slot>
    <button
      :class="useBem('handle')"
      :style="handleStyle"
      role="slider"
      aria-label="Zum verschieben ziehen oder fokussieren und Pfeiltasten verwenden"
      aria-orientation="horizontal"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-valuenow="Math.round(position)"
      :disabled="properties.disabled"
    >
      <div :class="useBem('divider')" />
      <slot name="handle">
        <C-Icon
          name="drag-vertical-variant"
          package="mdi"
          :class="useBem('icon')"
          size="24px"
        />
      </slot>
      <div :class="useBem('divider')" />
    </button>
  </component>
</template>

<script lang="ts">
import type {
  ColormodeComposableProperties,
  CImage,
} from '../../../types'

export interface CAbSlider extends ColormodeComposableProperties {
  /**
   * HTML tag to render the component as
   * @default 'div'
   */
  tag?: string

  /**
   * Properties for the "before" image
   */
  before: CImage

  /**
   * Properties for the "after" image
   */
  after: CImage

  /**
   * Boundary limits from edges in percentage (0-50)
   * @default 0
   */
  bounds?: number

  /**
   * Initial position of the slider (0-100)
   * @default 50
   */
  initialPosition?: number

  /**
   * Amount to increment/decrement when using keyboard (0-100)
   * @default 5
   */
  keyboardIncrement?: number

  /**
   * Whether the slider is disabled
   * @default false
   */
  disabled?: boolean
}
</script>

<script setup lang="ts">
import { normalizeClass, computed, ref, watch, onMounted, onUnmounted } from 'vue'

import { useBem } from '../../../composables/useBem'
import { useColorMode } from '../../../composables/useColorMode'
import { useComponentInstance } from '../../../composables/useComponentInstance'

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<CAbSlider>(), {
  tag: 'div',
  bounds: 0,
  initialPosition: 50,
  keyboardIncrement: 5,
  disabled: false,
})

const isDragging = ref(false)
const position = ref(properties.initialPosition)
const containerElement = ref<HTMLElement | null>(null)

const constrainPosition = (value: number): number => {
  const minPosition = properties.bounds
  const maxPosition = 100 - properties.bounds
  return Math.max(minPosition, Math.min(maxPosition, value))
}

// Watch to ensure initial position respects bounds
watch(
  () => properties.initialPosition,
  (newInitialPositionValue) => {
    position.value = constrainPosition(newInitialPositionValue)
  },
  { immediate: true },
)

const updatePosition = (clientX: number) => {
  if (properties.disabled || !containerElement.value) {
    return
  }

  const rect = containerElement.value.getBoundingClientRect()
  const x = clientX - rect.left
  const rawPosition = (x / rect.width) * 100
  position.value = constrainPosition(rawPosition)
}

const onKeyDown = (event: KeyboardEvent) => {
  if (properties.disabled || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
    return
  }
  event.preventDefault()

  switch (event.key) {
    case 'ArrowLeft':
      position.value = constrainPosition(position.value - properties.keyboardIncrement)
      break
    case 'ArrowRight':
      position.value = constrainPosition(position.value + properties.keyboardIncrement)
      break
    case 'Home':
      position.value = properties.bounds
      break
    case 'End':
      position.value = 100 - properties.bounds
      break
  }
}

const onContainerPointerDown = (event: PointerEvent) => {
  if (properties.disabled || event.button !== 0) {
    return
  }

  event.preventDefault()
  isDragging.value = true
  updatePosition(event.clientX)
}

const onPointerMove = (event: PointerEvent) => {
  if (properties.disabled || !isDragging.value) {
    return
  }

  event.preventDefault()
  updatePosition(event.clientX)
}

const onPointerUp = () => {
  isDragging.value = false
}

onMounted(() => {
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
})
onUnmounted(() => {
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
})

const beforeStyle = computed(() => ({ clipPath: `inset(0 ${100 - position.value}% 0 0)` }))
const afterStyle = computed(() => ({ clipPath: `inset(0 0 0 ${position.value}%)` }))
const handleStyle = computed(() => ({ left: `${position.value}%` }))

/**
 * Composables to get and preserve the current element
 * and instance of the component
 */
const { componentName } = useComponentInstance()

/**
 * Standardised computed function for setting
 * classes on the root element of the component
 */
const partialClass = computed(() =>
  normalizeClass([
    componentName,
    useColorMode().getClasses(properties),
    {
      [useBem(undefined, 'disabled')]: properties.disabled,
    },
  ]),
)
</script>

<style lang="scss" src="./C-AB-Slider.scss" />
