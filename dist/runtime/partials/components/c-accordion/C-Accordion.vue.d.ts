import type { ColormodeComposableProperties } from '../../../types/index.js';
export interface CAccordion extends ColormodeComposableProperties {
    /**
     * Text of the label
     */
    label: string;
    /**
     * Content of the accordion
     */
    text?: string;
    /**
     * Group name of the accordion
     */
    group?: string;
    /**
     * Decides whether the accordion is open by default
     * @default false
     */
    initiallyOpened?: boolean;
}
declare const __VLS_export: __VLS_WithSlots<import("vue").DefineComponent<CAccordion, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CAccordion> & Readonly<{}>, {
    initiallyOpened: boolean;
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
