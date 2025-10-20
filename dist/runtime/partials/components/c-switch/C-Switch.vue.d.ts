import type { ColormodeComposableProperties } from '../../../types/index.js';
export interface CSwitch extends ColormodeComposableProperties {
    /**
     * Label of the input
     */
    label?: string;
    /**
     * Label of the input
     */
    checked?: boolean;
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
}
declare const __VLS_export: __VLS_WithSlots<import("vue").DefineComponent<CSwitch, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (value: boolean | null | undefined) => any;
}, string, import("vue").PublicProps, Readonly<CSwitch> & Readonly<{
    onChange?: ((value: boolean | null | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
} & {
    label?: (props: {}) => any;
} & {
    input?: (props: {}) => any;
} & {
    'icon-true'?: (props: {}) => any;
} & {
    'icon-false'?: (props: {}) => any;
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
