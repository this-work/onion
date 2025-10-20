import type { ColormodeComposableProperties } from '../../../types/index.js';
export interface CTextarea extends ColormodeComposableProperties {
    /**
     * Label of the textarea
     */
    label?: string;
    /**
     * Default value of the textarea
     */
    value?: string;
    /**
     * Name of the textarea
     */
    class?: string;
    /**
     * Name of the textarea
     */
    name?: string;
    /**
     * Instruction text for the textarea
     */
    instruction?: string;
}
declare const __VLS_export: __VLS_WithSlots<import("vue").DefineComponent<CTextarea, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (value: string | null | undefined) => any;
}, string, import("vue").PublicProps, Readonly<CTextarea> & Readonly<{
    onChange?: ((value: string | null | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
} & {
    label?: (props: {}) => any;
} & {
    instruction?: (props: {}) => any;
}>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
