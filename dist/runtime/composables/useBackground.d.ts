import type { BackgroundColor } from '../types/index.js';
/**
 * @interface BackgroundComposableProperties
 * @description Interface defining the properties for background styling
 * @property {string | null} [background] - The background color identifier
 * @property {string | null} [backgroundImage] - URL or path to the background image
 * @property {string | null} [backgroundPosition] - CSS background-position value
 */
export interface BackgroundComposableProperties {
    background?: BackgroundColor | null;
    backgroundImage?: string | null;
    backgroundPosition?: string | null;
}
/**
 * @function useBackground
 * @description Composable that provides standardized background styling functionality
 * @returns {object} Object containing utility functions for background handling
 */
export declare function useBackground(): {
    getClasses: (props: BackgroundComposableProperties) => string;
    getStyles: (props: BackgroundComposableProperties) => {
        backgroundImage: string | undefined;
        backgroundPosition: string | undefined;
        '--closest-background-color': string | undefined;
    };
};
