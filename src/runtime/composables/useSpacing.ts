import { normalizeClass } from 'vue'
import type { Spacing } from '../types'

/**
 * Interface defining the spacing properties that can be applied
 * @interface SpacingComposableProperties
 * @property {string} [paddingTop] - Top padding value
 * @property {string} [paddingBottom] - Bottom padding value
 * @property {string} [paddingRight] - Right padding value
 * @property {string} [paddingLeft] - Left padding value
 * @property {string} [marginTop] - Top margin value
 * @property {string} [marginBottom] - Bottom margin value
 * @property {string} [marginRight] - Right margin value
 * @property {string} [marginLeft] - Left margin value
 */
export interface SpacingComposableProperties {
  paddingTop?: Spacing
  paddingBottom?: Spacing
  paddingRight?: Spacing
  paddingLeft?: Spacing
  marginTop?: Spacing
  marginBottom?: Spacing
  marginRight?: Spacing
  marginLeft?: Spacing
}

/**
 * Composable to handle standardized spacing functionality
 * @returns {object} An object containing spacing utility functions
 */
export function useSpacing() {
  /**
   * Generates spacing classes based on provided props
   * @param {SpacingComposableProperties} props - The spacing properties to apply
   * @param {boolean} [horizontal] - Flag to enable horizontal spacing
   * @returns {string} Normalized class string for spacing
   */
  const getClasses = (props: SpacingComposableProperties, horizontal?: boolean) => {
    const { marginTop, marginBottom, paddingTop, paddingRight, paddingBottom, paddingLeft } = props
    return normalizeClass({
      [`spacing-margin-top-${marginTop}`]: marginTop,
      [`spacing-margin-bottom-${marginBottom}`]: marginBottom,
      [`spacing-padding-top-${paddingTop}`]: paddingTop,
      [`spacing-padding-right-${paddingRight}`]: paddingRight && horizontal,
      [`spacing-padding-bottom-${paddingBottom}`]: paddingBottom,
      [`spacing-padding-left-${paddingLeft}`]: paddingLeft && horizontal,
    })
  }

  return {
    getClasses,
  }
}
