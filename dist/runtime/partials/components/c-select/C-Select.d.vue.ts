import type { ColormodeComposableProperties } from '../../../types/index.js';
export interface CSelectOption {
    /**
     * Label of the option
     */
    label: string;
    /**
     * Value of the option
     */
    value: string;
    /**
     * Whether the option is disabled
     */
    $disabled?: boolean;
}
export interface CSelect extends ColormodeComposableProperties {
    /**
     * Options for the select
     */
    options: CSelectOption[];
    /**
     * Label of the input
     */
    label?: string;
    /**
     * Initial value of the select
     */
    value?: CSelectOption | null;
    /**
     * Name of the input
     */
    class?: string;
    /**
     * Name of the input
     */
    name?: string;
    /**
     * Equivalent to the placeholder attribute
     */
    placeholder?: string;
    /**
     * Selects the first option if initial value is empty
     */
    preselectFirst?: boolean;
    /**
     * Instruction text for the input
     */
    instruction?: string;
}
declare const __VLS_export: __VLS_WithSlots<import("vue").DefineComponent<CSelect, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    change: (value: string | null | undefined) => any;
}, string, import("vue").PublicProps, Readonly<CSelect> & Readonly<{
    onChange?: ((value: string | null | undefined) => any) | undefined;
}>, {
    value: CSelectOption | null;
    placeholder: string;
    preselectFirst: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    label?: (props: {}) => any;
} & {
    noResult?: (props: {}) => any;
} & {
    noOptions?: (props: {}) => any;
} & {
    maxElements?: (props: {}) => any;
} & {
    input?: (props: {}) => any;
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
