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
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<CSwitch, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CSwitch> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
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
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
