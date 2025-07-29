import { ref } from 'vue'

/**
 * Configuration type for scroll locker functionality.
 * @typedef {object} ScrollLockerComposableProperties
 * @property {object} scrollLocker - Main configuration object
 * @property {Array<{selector?: string, element?: HTMLElement, property: string}>} scrollLocker.affectedElements - Elements to adjust when locking scroll
 */
export type ScrollLockerComposableProperties = {
  scrollLocker: {
    /** List of elements to adjust when locking scroll */
    affectedElements: {
      /** CSS selector to target the element */
      selector?: string
      /** Direct reference to an HTML element */
      element?: HTMLElement
      /** CSS property name to modify when locking scroll */
      property: string
    }[]
  }
}

/**
 * Default configuration for scroll locker.
 * Defines elements that need adjustment when scroll is locked.
 * @type {ScrollLockerComposableProperties}
 */
const config: ScrollLockerComposableProperties = {
  scrollLocker: {
    affectedElements: [
      { selector: 'body', property: 'right' },
    ],
  },
}

/**
 * Counter to track active lock instances between multiple component instances.
 * Used primarily for handling nested modals.
 * @type {import('vue').Ref<number>}
 */
const lockCount = ref(0)

/**
 * Composable to manage page scroll locking functionality.
 * Prevents page scrolling while maintaining scroll position and adjusting for scrollbar width.
 * @returns {{lock: () => void, unlock: () => void}} Object containing lock and unlock methods
 */
export function useScrollLocker() {
  const appConfig = config
  const affectedElements = appConfig.scrollLocker.affectedElements || []

  /**
   * Locks the page scroll and adjusts elements to prevent layout shift.
   * - Calculates scrollbar width
   * - Adjusts margin to compensate for scrollbar removal
   * - Stores current scroll position
   * - Applies 'has-no-scroll' class
   * @returns {void}
   */
  const lock = () => {
    if (typeof window === 'undefined') {
      return
    }

    lockCount.value++
    if (lockCount.value === 1) {
      const htmlEl = document.querySelector('html')
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

      if (scrollbarWidth > 0) {
        htmlEl?.style.setProperty('margin-right', `${scrollbarWidth}px`)
        affectedElements.forEach(({ element, selector, property }) => {
          const targetElement = element || ((selector ? document.querySelector(selector) : null) as HTMLElement)
          if (targetElement) {
            targetElement.style.setProperty(property, `${scrollbarWidth}px`)
          }
        })
      }

      document.body.style.setProperty('top', `-${window.scrollY}px`)
      htmlEl?.classList.add('has-no-scroll')
    }
  }

  /**
   * Unlocks the page scroll and restores original layout.
   * - Removes margin compensation
   * - Restores scroll position
   * - Removes 'has-no-scroll' class
   * Only executes full unlock when lockCount reaches 0.
   * @returns {void}
   */
  const unlock = () => {
    if (typeof window === 'undefined') {
      return
    }

    lockCount.value--
    if (lockCount.value === 0) {
      const scrollY = document.body.style.top

      const htmlEl = document.querySelector('html')
      if (htmlEl) {
        htmlEl.style.removeProperty('margin-right')
      }

      affectedElements.forEach(({ element, selector, property }) => {
        const targetElement = element || ((selector ? document.querySelector(selector) : null) as HTMLElement)
        if (targetElement) {
          targetElement.style.removeProperty(property)
        }
      })

      htmlEl?.classList.remove('has-no-scroll')
      document.body.style.removeProperty('top')
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || '0') * -1)
      }
    }
  }

  return { lock, unlock }
}
