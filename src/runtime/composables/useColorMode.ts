import { normalizeClass } from 'vue'
import type { ColorMode } from '../types'

/**
 * Interface defining the properties for color mode functionality
 * @interface ColormodeComposableProperties
 * @property {string} [colorMode] - The color mode to be applied
 */
export interface ColormodeComposableProperties {
  colorMode?: ColorMode
}

/**
 * Composable to use the standardised color mode function.
 * This function declares classes by given prop to use different styles per mode.
 * @returns {object} An object containing getProps and getClasses functions
 */
export function useColorMode() {
  /**
   * Generates normalized class names based on the provided color mode
   * @param {ColormodeComposableProperties} props - The props containing the colorMode
   * @returns {string} Normalized class string
   */
  const getClasses = (props: ColormodeComposableProperties) => {
    return normalizeClass({ [`color-mode-${props.colorMode}`]: props.colorMode })
  }

  return {
    getClasses,
  }
}
