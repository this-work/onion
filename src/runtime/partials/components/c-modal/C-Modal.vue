<template>
  <Teleport :to="rootElement">
    <Transition
      name="transition-c-modal"
      @enter="onTransitionEnter"
      @leave="onTransitionAfterLeave"
    >
      <aside
        v-if="isOpen"
        :class="partialClass"
        :style="{ background: level === 0 ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.25)' }"
        @click="handleBackdropClick"
      >
        <div
          :class="useBem('container')"
          :style="isSimpleLayer ? { width: `${width}px` } : {}"
        >
          <div
            ref="modalRef"
            role="dialog"
            aria-modal="true"
            :aria-describedby="contentID"
            :class="useBem('box')"
            @keydown.esc="handleEscape"
          >
            <div :class="useBem('controls')">
              <C-Button
                icon="close-rounded"
                aria-label="Close modal"
                background="soft"
                @click="handleClose"
              />
            </div>
            <C-Headline
              v-if="title && isSimpleLayer"
              :headline="title"
              :class="useBem('title')"
              headline-type="h6"
              headline-tag="h3"
            />
            <article
              v-if="hasContent"
              :id="contentID"
              :class="useBem('content')"
            >
              <C-Image
                v-if="image"
                v-bind="image"
                :class="useBem('image')"
              />
              <C-Headline
                v-if="headline"
                v-bind="headline"
                :class="useBem('headline')"
              />
              <C-Text
                v-if="text"
                v-bind="text"
                :class="useBem('text')"
              />
              <slot>
                <div v-html="content" />
              </slot>
            </article>
          </div>
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>

<script lang="ts">
import type {
  ColormodeComposableProperties,
  CImage,
  CHeadline,
  CText,
} from '../../../types'

export interface CModal extends ColormodeComposableProperties {
  /**
   * Root element to render the modal in
   * @default 'body'
   */
  rootElement?: string

  /**
   * Whether the modal should be visible
   * @default false
   */
  show?: boolean

  /**
   * Whether the modal should take up the full width
   * @default false
   */
  fullwidth?: boolean

  /**
   * The content to display in the modal body
   * Can be HTML string or other content
   */
  content?: any

  /**
   * Optional title to display in the modal header
   */
  title?: string

  /**
   * Optional image content to display in the modal body
   */
  image?: CImage

  /**
   * Optional headline content to display in the modal body
   */
  headline?: CHeadline

  /**
   * Optional text content to display in the modal body
   */
  text?: CText

  /**
   * Width of the modal in pixels
   * @default 600
   */
  width?: number
}
</script>

<script setup lang="ts">
import { normalizeClass, computed, onBeforeUnmount, useId, watch, ref, useSlots } from 'vue'
import { createFocusTrap } from 'focus-trap'

import { useBem } from '../../../composables/useBem'
import { useColorMode } from '../../../composables/useColorMode'
import { useComponentInstance } from '../../../composables/useComponentInstance'
import { useModal } from '../../../composables/useModal'
import { useScrollLocker } from '../../../composables/useScrollLocker'

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<CModal>(), {
  rootElement: 'body',
  show: false,
  fullwidth: false,
  width: 600,
  autosize: false,
})

const contentID = `modal-content-${useId()}`
const { isOpen, level, open, close } = useModal()
const { lock: lockScrolling, unlock: unlockScrolling } = useScrollLocker()
const modalRef = ref<HTMLElement | null>(null)
let focusTrap: ReturnType<typeof createFocusTrap> | null = null
let previousActiveElement: Element | null = null

watch(
  () => properties.show,
  (newValue) => {
    if (newValue) {
      open()
    }
    else {
      close()
    }
  },
  { immediate: true },
)

const initFocusTrap = () => {
  if (!modalRef.value) {
    return
  }

  previousActiveElement = document.activeElement

  const modalElement = modalRef.value as HTMLElement
  focusTrap = createFocusTrap(modalElement, { fallbackFocus: () => modalElement, clickOutsideDeactivates: true })
  focusTrap.activate()
}

const emit = defineEmits(['update:show', 'close'])
const handleClose = () => {
  close()
  emit('update:show', false)
  emit('close')
}
const handleEscape = (e: KeyboardEvent) => {
  console.log('escaped')
  if (e.key === 'Escape') {
    handleClose()
  }
}
const handleBackdropClick = (e: MouseEvent) => {
  if (e.target === e.currentTarget) {
    handleClose()
  }
}

const onTransitionEnter = () => {
  initFocusTrap()
  lockScrolling()
}
const onTransitionAfterLeave = () => {
  if (focusTrap) {
    focusTrap.deactivate()
  }

  if (previousActiveElement && 'focus' in previousActiveElement) {
    (previousActiveElement as HTMLElement).focus()
  }
}

onBeforeUnmount(() => {
  if (focusTrap) {
    focusTrap.deactivate()
  }

  if (previousActiveElement && 'focus' in previousActiveElement) {
    (previousActiveElement as HTMLElement).focus()
  }

  unlockScrolling()
})

const hasContent = computed(() => properties.image || properties.headline || properties.text || properties.content || useSlots().default)
const isSimpleLayer = computed(() => properties.image || properties.headline || properties.text)
const isComplexLayer = computed(() => !isSimpleLayer.value)

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
      [useBem(undefined, 'fullwidth')]: properties.fullwidth,
      [useBem(undefined, 'simple')]: isSimpleLayer.value,
      [useBem(undefined, 'complex')]: isComplexLayer.value,
      [useBem(undefined, 'no-title')]: !properties.title,
    },
  ]),
)

defineExpose({
  open,
  close,
})
</script>

<style lang="scss" src="./C-Modal.scss" />
