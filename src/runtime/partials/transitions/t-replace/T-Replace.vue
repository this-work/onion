<template>
  <Transition
    mode="out-in"
    name="t-replace"
    @before-enter="prepareTransition"
    @before-leave="prepareTransition"
    @enter="onTransitionEnter"
    @leave="onTransitionLeave"
    @after-enter="onTransitionAfterEnter"
  >
    <slot />
  </Transition>
</template>

<script setup lang="ts">
import type { TransitionProps } from 'vue'

export interface TReplaceProperties {
  /**
   * Duration of the replacement animation in ms
   */
  duration?: number
}

/**
 * Declare all props and defaults for vue.
 */
const properties = withDefaults(defineProps<TReplaceProperties>(), {
})

/**
 * Preserved height of the previous element
 * to animate the replacement.
 */
let leaveElementHeight: string = '0px'

/**
 * Prepare the transition by setting the transition duration
 */
const prepareTransition: TransitionProps['onBeforeEnter'] = (componentElement) => {
  const element = componentElement as HTMLElement

  if (properties.duration) {
    element.style.transitionDuration = `${properties.duration}ms`
  }
}

/**
 * Preserved height of the previous element on the leave event
 * to animate the replacement.
 */
const onTransitionLeave: TransitionProps['onLeave'] = (componentElement, done) => {
  const element = componentElement as HTMLElement
  const { height } = getComputedStyle(element)
  leaveElementHeight = height
  setTimeout(() => {
    done()
  }, properties.duration || 400)
}

/**
 * On enter event, set the height of the element to the
 * preserved height and animate the height to auto.
 */
const onTransitionEnter: TransitionProps['onEnter'] = (componentElement, done) => {
  const element = componentElement as HTMLElement

  const { width } = getComputedStyle(element)

  element.style.width = width
  element.style.visibility = `hidden`
  element.style.height = leaveElementHeight

  setTimeout(() => {
    element.style.height = `auto`

    const { height } = getComputedStyle(element)

    element.style.removeProperty('width')
    element.style.removeProperty('visibility')
    element.style.height = leaveElementHeight

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    getComputedStyle(element).height

    requestAnimationFrame(() => {
      element.style.height = height
    })
    setTimeout(() => {
      done()
    }, properties.duration || 400)
  }, 0)
}

/**
 * Reset all height properties on the after enter event
 * when die animation is finished.
 */
const onTransitionAfterEnter: TransitionProps['onAfterEnter'] = (componentElement) => {
  const element = componentElement as HTMLElement
  element.style.removeProperty('height')
}
</script>

<style lang="scss" src="./T-Replace.scss" />
