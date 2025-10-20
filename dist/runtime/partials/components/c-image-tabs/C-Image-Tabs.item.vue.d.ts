import type { CImage } from '../../../types/index.js';
export interface CImageTabsItem {
    /**
     * Image fot the tab navigation
     */
    image?: CImage;
}
declare const __VLS_export: __VLS_WithSlots<import("vue").DefineComponent<CImageTabsItem, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CImageTabsItem> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
