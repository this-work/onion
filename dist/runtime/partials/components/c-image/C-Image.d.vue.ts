import type { AspectRatios, BorderRadius, Breakpoint, ColormodeComposableProperties } from '../../../types/index.js';
export interface CImageSourceAlternates {
    /**
     * Breakpoint name where the source set is valid e.g. xs or xl
     */
    [breakpoint: Breakpoint]: {
        /**
         * File format of the source set e.g. webp or jpg
         */
        [format: string]: {
            /**
             * Displey resolution of the source set e.g. 1x or 2x
             */
            [resolution: string]: string;
        };
    };
}
export interface CImage extends ColormodeComposableProperties {
    /**
     * Optional custom tag of the image
     * @default 'figure'
     */
    tag?: string;
    /**
     * Native html path to the image
     */
    src: string;
    /**
     * Optional source alternates. Builds multiple source tags
     * based on the given object. Supports the most native html
     * attributes picture/source functions.
     */
    srcAlternates?: CImageSourceAlternates;
    /**
     * Option to activate lazy loading for this image
     * @default true
     */
    lazy?: boolean;
    /**
     * Option to set a native html title attribute and aria label
     */
    title?: string;
    /**
     * Option to set a native html alt attribute
     */
    alt?: string;
    /**
     * Fitting behave when the image does not
     * fit the given dimensions
     * @default 'cover'
     */
    fit?: string;
    /**
     * Default position when the image does not fit the
     * given dimensions
     * @default 'center center'
     */
    position?: string;
    /**
     * Option to set the image to autosize.
     * @default false
     */
    autosize?: boolean;
    /**
     * To set an individual border radius on this image according
     * to the list from the border radius config.
     */
    borderRadius?: BorderRadius | null;
    /**
     * Option for a caption to display below the image.
     */
    description?: string;
    /**
     * Object of breakpoints that define the aspect Ratio of
     * the image for the respective breakpoint.
     */
    aspectRatios?: AspectRatios;
    /**
     * Enable Nuxt Picture optimization features
     * @default false
     */
    useNuxtPicture?: boolean;
    /**
     * Image formats to generate (for Nuxt Picture)
     * @default 'webp'
     */
    format?: string;
    /**
     * Image sizes for responsive images (for Nuxt Picture)
     */
    sizes?: string;
    /**
     * Image quality (for Nuxt Picture)
     * @default 80
     */
    quality?: number;
    /**
     * Image width (for Nuxt Picture)
     */
    width?: number;
    /**
     * Image height (for Nuxt Picture)
     */
    height?: number;
    /**
     * Placeholder image while loading (for Nuxt Picture)
     */
    placeholder?: string | boolean;
    /**
     * Additional attributes to pass to the img element (for Nuxt Picture)
     */
    imgAttrs?: Record<string, any>;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<CImage, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CImage> & Readonly<{}>, {
    tag: string;
    position: string;
    lazy: boolean;
    fit: string;
    autosize: boolean;
    useNuxtPicture: boolean;
    format: string;
    quality: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
