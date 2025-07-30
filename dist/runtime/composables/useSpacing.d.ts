import type { Spacing } from '../types/index.js';
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
    paddingTop?: Spacing;
    paddingBottom?: Spacing;
    paddingRight?: Spacing;
    paddingLeft?: Spacing;
    marginTop?: Spacing;
    marginBottom?: Spacing;
    marginRight?: Spacing;
    marginLeft?: Spacing;
}
/**
 * Composable to handle standardized spacing functionality
 * @returns {object} An object containing spacing utility functions
 */
export declare function useSpacing(): {
    getClasses: (props: SpacingComposableProperties, horizontal?: boolean) => string;
};
