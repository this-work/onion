import type { BackgroundComposableProperties, SpacingComposableProperties, Module } from '../../../types/index.js';
export interface SectionProperties extends BackgroundComposableProperties, SpacingComposableProperties {
    /**
     * All modules inside this section
     * as Array
     */
    modules?: Module[];
    /**
     * Option to set the height of the
     * section to the viewport height
     * @default false
     */
    fullViewportHeight?: boolean;
}
declare const __VLS_export: __VLS_WithSlots<import("vue").DefineComponent<SectionProperties, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SectionProperties> & Readonly<{}>, {
    fullViewportHeight: boolean;
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
