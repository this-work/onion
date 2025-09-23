import type { ColormodeComposableProperties, CImage, CModal, Breakpoint } from '../../../types/index.js';
export interface CHotspotDot {
    /**
     * Horizontal position as percentage (0-100)
     */
    x: number;
    /**
     * Vertical position as percentage (0-100)
     */
    y: number;
    /**
     * Content to display when the hotspot is clicked
     */
    content?: CModal;
    /**
     * Alternative spot positions for different breakpoints
     */
    alternates?: {
        [breakpoint in Breakpoint]: {
            x: number;
            y: number;
        };
    };
    /**
     * Whether the hotspot is disabled
     */
    disabled?: boolean;
}
export interface CHotspot extends ColormodeComposableProperties {
    /**
     * Source image to display
     */
    image: CImage;
    /**
     * Array of hotspot dots to display on the image
     */
    hotspots: CHotspotDot[];
}
declare const _default: import("vue").DefineComponent<CHotspot, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CHotspot> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
