import type { ColormodeComposableProperties } from '../../../types/index.js';
export interface CText extends ColormodeComposableProperties {
    /**
     * Optional custom tag of the text
     * @default 'div'
     */
    tag?: string;
    /**
     * Optional text - The text can be filled either via a prop
     * or via the slot.
     */
    text?: string;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<CText, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CText> & Readonly<{}>, {
    tag: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
