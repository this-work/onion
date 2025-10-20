export interface CWrapper {
    /**
     * HTML element to render the button as
     * e.g., "button", "a", "div"
     */
    tag?: string;
    /**
     * Decides whether the wrapper is rendered
     */
    condition?: boolean;
}
declare const __VLS_export: __VLS_WithSlots<import("vue").DefineComponent<CWrapper, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CWrapper> & Readonly<{}>, {
    tag: string;
    condition: boolean;
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
