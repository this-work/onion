import type { ColormodeComposableProperties, SpacingComposableProperties } from '../../../types/index.js';
export interface CDivider extends ColormodeComposableProperties, SpacingComposableProperties {
    /**
     * Optional line in them in middle of the spacings
     * @default true
     */
    line?: boolean;
}
declare const _default: import("vue").DefineComponent<CDivider, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CDivider> & Readonly<{}>, {
    line: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
