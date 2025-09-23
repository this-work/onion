import type { Component, ColormodeComposableProperties } from '../../../types/index.js';
export interface TextTab {
    /**
     * Title of the tab
     */
    title: string;
    /**
     * All components to be rendered in the tab
     */
    components: Component[];
}
export interface CTextTabs extends ColormodeComposableProperties {
    /**
     * Required array of tabs as object
     */
    tabs?: TextTab[];
    /**
     * Horizontal alignment of the components in this slot
     */
    horizontalAlignment?: string;
    /**
     * Index of the default tab to open
     */
    defaultTab?: number;
}
declare const _default: import("vue").DefineComponent<CTextTabs, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CTextTabs> & Readonly<{}>, {
    defaultTab: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
