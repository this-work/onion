import type { CHeadline, CText, CImage, CLabel, ColormodeComposableProperties } from '../../../types/index.js';
export interface CTile extends ColormodeComposableProperties {
    /**
     * Type/Appearance of the tile
     */
    type?: string;
    hero?: boolean;
    overline?: string;
    headline?: CHeadline;
    text?: CText;
    image?: CImage;
    backgroundColor?: string;
    label?: CLabel;
    link?: object;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<CTile, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CTile> & Readonly<{}>, {
    type: string;
    hero: boolean;
    backgroundColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
} & {
    image?: (props: {}) => any;
} & {
    label?: (props: {}) => any;
} & {
    headline?: (props: {}) => any;
} & {
    text?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
