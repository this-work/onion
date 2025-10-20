import type { AspectRatios, BorderRadius, Breakpoint, ColormodeComposableProperties } from '../../../types/index.js';
export interface CVideoSourceAlternates {
    /**
     * Breakpoint name where the source set is valid e.g. xs or xl
     */
    [breakpoint: Breakpoint]: string;
}
export interface CVideoTracks {
    [index: number]: {
        url: string;
        label: string;
        srclang: string;
        type: string;
        default: boolean | undefined;
    };
}
export interface CVideo extends ColormodeComposableProperties {
    /**
     * Optional custom tag of the image
     * The default value is 'figure'
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
    srcAlternates?: CVideoSourceAlternates;
    /**
     * Option to set a native html title attribute
     */
    title?: string;
    /**
     * Fitting behave when the video does not
     * fit the given dimensions
     * The default value is 'cover'
     */
    fit?: string;
    /**
     * Default position when the video does not fit the
     * given dimensions
     * The default value is 'center center'
     */
    position?: string;
    /**
     * Set the loop attribute on the video element
     * The default value is 'false'
     */
    loop?: boolean;
    /**
     *  Set the playinline attribute on the video element
     *  The default value is 'true'
     */
    playsinline?: boolean;
    /**
     * Set the muted attribute on the video element
     * The default value is 'false'
     */
    muted?: boolean;
    /**
     * Activate the controls on the video element
     * The default value is 'true'
     */
    controls?: boolean;
    /**
     * Activate the download control the video element
     * The default value is 'false'
     */
    controlsDownload?: boolean;
    /**
     * Activate the fullscreen control the video element
     * The default value is 'true'
     */
    controlsFullscreen?: boolean;
    /**
     * Set the autoplay attribute on the video element
     * The default value is 'false'
     */
    autoplay?: boolean;
    /**
     * Set a native poster on the video element
     */
    poster?: string;
    /**
     * To set an individual border radius on this image according
     * to the list from the border radius config.
     */
    borderRadius?: BorderRadius;
    /**
     * Option for a caption to display below the image.
     */
    description?: string;
    /**
     * Option to set a track for the video.
     */
    tracks?: CVideoTracks;
    /**
     * Object of breakpoints that define the aspect Ratio of
     * the image for the respective breakpoint.
     */
    aspectRatios?: AspectRatios;
}
declare const __VLS_export: __VLS_WithSlots<import("vue").DefineComponent<CVideo, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CVideo> & Readonly<{}>, {
    tag: string;
    position: string;
    fit: string;
    controls: boolean;
    loop: boolean;
    playsinline: boolean;
    muted: boolean;
    controlsDownload: boolean;
    controlsFullscreen: boolean;
    autoplay: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
