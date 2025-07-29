import { normalizeClass } from 'vue'
import type { BackgroundColor } from '../types'

/**
 * @interface BackgroundComposableProperties
 * @description Interface defining the properties for background styling
 * @property {string | null} [background] - The background color identifier
 * @property {string | null} [backgroundImage] - URL or path to the background image
 * @property {string | null} [backgroundPosition] - CSS background-position value
 */
export interface BackgroundComposableProperties {
  background?: BackgroundColor | null
  backgroundImage?: string | null
  backgroundPosition?: string | null
}

/**
 * @function useBackground
 * @description Composable that provides standardized background styling functionality
 * @returns {object} Object containing utility functions for background handling
 */
export function useBackground() {
  /**
   * @function getClasses
   * @description Generates normalized CSS classes based on provided background properties
   * @param {BackgroundComposableProperties} props - Background properties object
   * @returns {string} Normalized CSS class string
   */
  const getClasses = (props: BackgroundComposableProperties) => {
    const { background, backgroundImage } = props
    return normalizeClass({
      [`background-color-${background}`]: background,
      ['has-background-image']: backgroundImage,
    })
  }

  /**
   * @function getStyles
   * @description Generates inline styles object for background styling
   * @param {BackgroundComposableProperties} props - Background properties object
   * @returns {object} Style object with background-related CSS properties
   */
  const getStyles = (props: BackgroundComposableProperties) => {
    return {
      'backgroundImage': props.backgroundImage ? `url("${props.backgroundImage}")` : undefined,
      'backgroundPosition': props.backgroundPosition ? props.backgroundPosition : undefined,
      '--closest-background-color': props.background ? 'var(--color-' + props.background + ')' : undefined,
    }
  }

  return {
    getClasses,
    getStyles,
  }
}
