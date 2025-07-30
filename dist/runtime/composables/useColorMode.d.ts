import type { ColorMode } from '../types/index.js';
/**
 * Interface defining the properties for color mode functionality
 * @interface ColormodeComposableProperties
 * @property {string} [colorMode] - The color mode to be applied
 */
export interface ColormodeComposableProperties {
    colorMode?: ColorMode;
}
/**
 * Composable to use the standardised color mode function.
 * This function declares classes by given prop to use different styles per mode.
 * @returns {object} An object containing getProps and getClasses functions
 */
export declare function useColorMode(): {
    getClasses: (props: ColormodeComposableProperties) => string;
};
