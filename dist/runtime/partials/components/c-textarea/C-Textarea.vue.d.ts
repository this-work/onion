import type { ColormodeComposableProperties } from '../../../types/index.js';
export interface CTextarea extends ColormodeComposableProperties {
    /**
     * Label of the textarea
     */
    label?: string;
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
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<CTextarea, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CTextarea> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
} & {
    label?: (props: {}) => any;
} & {
    instruction?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
