import type { Component, CImage, ColormodeComposableProperties } from '../../../types/index.js';
export interface ImageTab {
    /**
     * Optional image of the tab
     */
    image: CImage;
    /**
     * All components to be rendered in the tab
     */
    components: Component[];
}
export interface CImageTabs extends ColormodeComposableProperties {
    /**
     * Required array of tabs as object
     */
    tabs?: ImageTab[];
    /**
     * Horizontal alignment of the components in this slot
     */
    horizontalAlignment?: string;
    /**
     * Index of the default tab to open
     */
    defaultTab?: number;
}
declare const __VLS_export: import("vue").DefineComponent<CImageTabs, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CImageTabs> & Readonly<{}>, {
    defaultTab: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
