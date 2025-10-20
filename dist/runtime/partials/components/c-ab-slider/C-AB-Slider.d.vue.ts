import type { ColormodeComposableProperties, CImage } from '../../../types/index.js';
export interface CAbSlider extends ColormodeComposableProperties {
    /**
     * HTML tag to render the component as
     * @default 'div'
     */
    tag?: string;
    /**
     * Properties for the "before" image
     */
    before: CImage;
    /**
     * Properties for the "after" image
     */
    after: CImage;
    /**
     * Boundary limits from edges in percentage (0-50)
     * @default 0
     */
    bounds?: number;
    /**
     * Initial position of the slider (0-100)
     * @default 50
     */
    initialPosition?: number;
    /**
     * Amount to increment/decrement when using keyboard (0-100)
     * @default 5
     */
    keyboardIncrement?: number;
    /**
     * Whether the slider is disabled
     * @default false
     */
    disabled?: boolean;
}
declare const __VLS_export: __VLS_WithSlots<import("vue").DefineComponent<CAbSlider, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CAbSlider> & Readonly<{}>, {
    tag: string;
    bounds: number;
    initialPosition: number;
    keyboardIncrement: number;
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    before?: (props: {}) => any;
} & {
    after?: (props: {}) => any;
} & {
    handle?: (props: {}) => any;
}>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
