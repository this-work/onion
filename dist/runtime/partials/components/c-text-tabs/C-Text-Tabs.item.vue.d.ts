export interface CTextTabsItem {
    /**
     * Title of the tab
     */
    title?: string;
}
declare const __VLS_export: __VLS_WithSlots<import("vue").DefineComponent<CTextTabsItem, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CTextTabsItem> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
