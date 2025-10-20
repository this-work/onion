import type { BackgroundComposableProperties, SpacingComposableProperties, ColormodeComposableProperties, Slot, CAccordion, BorderRadius } from '../../../types/index.js';
interface MAccordionComponentProperties extends CAccordion, BackgroundComposableProperties, SpacingComposableProperties, ColormodeComposableProperties {
    /**
     * To set an individual border radius on this slot according
     * to the list from the border radius config.
     */
    borderRadius?: BorderRadius | null;
    /**
     * All slots inside this module
     * as Array
     */
    slots: Slot[];
}
export interface MAccordion {
    /**
     * List of all accordions inside
     * this module as array
     */
    accordions: MAccordionComponentProperties[];
}
declare const __VLS_export: __VLS_WithSlots<import("vue").DefineComponent<MAccordion, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<MAccordion> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
