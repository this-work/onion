import type { ColormodeComposableProperties } from '../../../types/index.js';
export interface CHeadline extends ColormodeComposableProperties {
    /**
     * Optional custom tag of the text
     * @default 'div'
     */
    tag?: string;
    /**
     * Headline text
     */
    headline: string;
    /**
     * Optional html tag of the headline
     * @default 'h2'
     */
    headlineTag?: string;
    /**
     * Optional font type of the headline
     * @default 'h2'
     */
    headlineType?: string;
}
declare const __VLS_export: __VLS_WithSlots<import("vue").DefineComponent<CHeadline, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CHeadline> & Readonly<{}>, {
    tag: string;
    headlineTag: string;
    headlineType: string;
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
