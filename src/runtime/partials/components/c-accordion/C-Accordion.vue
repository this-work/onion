<template>
  <transition
    mode="out-in"
    @enter="onTransitionEnter"
    @leave="onTransitionLeave"
  >
    <details
      :key="openContent + ''"
      ref="componentRef"
      :data-groupName="group"
      :open="initiallyOpened"
      :class="partialClass"
    >
      <summary
        ref="summaryRef"
        :class="useBem('label')"
        :aria-expanded="openContent"
        :aria-controls="panelId"
        @click="toggleContentVisible"
      >
        <C-Icon
          tag="figure"
          :class="useBem('icon')"
          aria-hidden="true"
          name="chevron-right"
          size="24px"
        />
        <span
          :id="labelId"
          :class="useBem('label-text')"
          v-html="label"
        />
      </summary>
      <div
        :id="panelId"
        ref="contentRef"
        :class="useBem('content')"
        role="region"
        :aria-labelledby="labelId"
      >
        <slot>
          <c-text :text="text" />
        </slot>
      </div>
    </details>
  </transition>
</template>

<script lang="ts">
import type { TransitionProps } from 'vue'
import type {
  ColormodeComposableProperties,
} from '../../../types'

export interface CAccordion extends ColormodeComposableProperties {
  /**
   * Text of the label
   */
  label: string

  /**
   * Content of the accordion
   */
  text?: string

  /**
   * Group name of the accordion
   */
  group?: string

  /**
   * Decides whether the accordion is open by default
   * @default false
   */
  initiallyOpened?: boolean
}
</script>

<script setup lang="ts">
import { normalizeClass, computed, ref, useId } from 'vue'
import { get } from '@vueuse/core'

import { useBem } from '../../../composables/useBem'
import { useColorMode } from '../../../composables/useColorMode'
import { useComponentInstance } from '../../../composables/useComponentInstance'

/**
 * Declare the options for the component. Disables inheriting
 * the attributes from the parent element.
 */
defineOptions({
  inheritAttrs: false,
})

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<CAccordion>(), {
  initiallyOpened: false,
})

/**
 * Composables to get and preserve the current element
 * and instance of the component
 */
const { componentName } = useComponentInstance()
const componentRef = ref<HTMLElement | null>(null)

const summaryRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

const labelId = useId()
const panelId = useId()
const openContent = ref(properties.initiallyOpened)

/**
 * Standardised computed function for setting
 * classes on the root element of the component
 */
const partialClass = computed(() =>
  normalizeClass([
    componentName,
    useColorMode().getClasses(properties),
    {
      [useBem(undefined, `open`, componentName)]: openContent.value,
    },
  ],
  ),
)

const toggleContentVisible = (event: MouseEvent) => {
  event.preventDefault()
  openContent.value = !openContent.value
  closeAccordionsOfGroup()
}

const closeAccordionsOfGroup = () => {
  if (properties.group) {
    const componentElement = get(componentRef)!
    const accordionGroup = document.querySelectorAll<HTMLDetailsElement>(`details[data-groupName="${properties.group}"]`)

    accordionGroup.forEach((accordion) => {
      if (accordion != componentElement) {
        if (accordion.open) {
          accordion.querySelector('summary')!.dispatchEvent(new Event('click', { bubbles: true }))
        }
      }
    })
  }
}

const onTransitionEnter: TransitionProps['onEnter'] = (componentElement, done) => {
  const element = componentElement as HTMLDetailsElement

  const componentStyles = window.getComputedStyle(element)

  const summaryElement = get(summaryRef)!
  const detailsStyles = window.getComputedStyle(summaryElement.parentElement!)
  const detailsPaddingBottom = Number.parseFloat(detailsStyles['paddingBottom'])
  const summaryHeight = summaryElement.offsetHeight + detailsPaddingBottom

  const contentElement = get(contentRef)!
  const contentStyles = window.getComputedStyle(contentElement)
  const contentHeight = Math.ceil(contentElement.offsetHeight + Number.parseFloat(contentStyles['marginTop']) + Number.parseFloat(contentStyles['marginBottom']))

  element.open = true

  let animateFromHeight = `${summaryHeight + contentHeight}px`
  let animateToHeight = `${summaryHeight}px`

  if (get(openContent)) {
    animateFromHeight = `${summaryHeight}px`
    animateToHeight = `${summaryHeight + contentHeight}px`
  }

  element.style.transitionDuration = `0s`
  element.style.height = animateFromHeight
  element.style.transitionDuration = ''

  requestAnimationFrame(() => {
    element.style.height = animateToHeight
  })

  setTimeout(() => {
    done()
    if (!get(openContent)) {
      element.open = false
    }
    element.style.removeProperty('height')
  }, Number.parseFloat(componentStyles['transitionDuration']) * 1000)
}

const onTransitionLeave: TransitionProps['onLeave'] = (componentElement) => {
  // Type assertion since we know it's a HTMLDetailsElement
  const element = componentElement as HTMLDetailsElement
  element.style.transitionDuration = `0s`
}
</script>

<style lang="scss" src="./C-Accordion.scss" />
