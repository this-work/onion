import type { BackgroundComposableProperties, SpacingComposableProperties, ColormodeComposableProperties, ColumnWidth, BorderRadius, Spacing, Component } from '../../../types/index.js';
export interface Slot {
    data: SlotProperties;
    components: Component[];
}
export interface SlotProperties extends BackgroundComposableProperties, SpacingComposableProperties, ColormodeComposableProperties {
    /**
     * Width in columns of the slot
     * @default '16'
     */
    width?: ColumnWidth;
    /**
     * Height in rows of the slot
     */
    height?: number;
    /**
     * Start column of the slot in the module
     */
    column?: number;
    /**
     * Start row of the slot in the module
     */
    row?: number;
    /**
     * To set an individual border radius on this slot according
     * to the list from the border radius config.
     */
    borderRadius?: BorderRadius | null;
    /**
     * Horizontal alignment of the components in this slot
     */
    horizontalAlignment?: string;
    /**
     * Vertical spacing between components in this slot
     * @default 'l'
     */
    componentSpacing?: Spacing;
    /**
     * All components inside this module
     * as Array
     */
    components?: Component[];
}
declare const __VLS_export: __VLS_WithSlots<import("vue").DefineComponent<SlotProperties, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<SlotProperties> & Readonly<{}>, {
    width: ColumnWidth;
    componentSpacing: Spacing;
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
