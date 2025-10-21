import type { ColormodeComposableProperties } from '../../../types/index.js';
export interface CInput extends ColormodeComposableProperties {
    /**
     * Label of the input
     */
    label?: string;
    /**
     * Default value of the input
     */
    value?: string;
    /**
     * Name of the input
     */
    class?: string;
    /**
     * Name of the input
     */
    name?: string;
    /**
     * Instruction text for the input
     */
    instruction?: string;
    /**
     * Instruction text for the input
     */
    prefix?: string;
    /**
     * Instruction text for the input
     */
    suffix?: string;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<CInput, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (value: string | null | undefined) => any;
}, string, import("vue").PublicProps, Readonly<CInput> & Readonly<{
    onChange?: ((value: string | null | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
} & {
    label?: (props: {}) => any;
} & {
    input?: (props: {}) => any;
} & {
    prefix?: (props: {}) => any;
} & {
    suffix?: (props: {}) => any;
} & {
    instruction?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
