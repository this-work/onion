import type { BackgroundComposableProperties, SpacingComposableProperties, ColormodeComposableProperties, ColumnWidth, BorderRadius, Slot } from '../../../types/index.js';
export interface Module {
    data?: ModuleProperties;
    slots?: Slot[];
}
export interface ModuleProperties extends BackgroundComposableProperties, SpacingComposableProperties, ColormodeComposableProperties {
    /**
     * Start column of the module in the section
     * @default '1'
     */
    start?: ColumnWidth;
    /**
     * Width in columns of the module
     * @default '16'
     */
    width?: ColumnWidth;
    /**
     * To set an individual border radius on this image according
     * to the list from the border radius config.
     */
    borderRadius?: BorderRadius | null;
    /**
     * Type of the module
     * @default 'stacked'
     */
    type?: string;
    /**
     * Vertical alignment of the slots in this module
     * @default 'stretch'
     */
    verticalAlignment?: string;
    /**
     * All slots inside this module
     * as Array
     */
    slots?: Slot[];
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<ModuleProperties, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ModuleProperties> & Readonly<{}>, {
    type: string;
    verticalAlignment: string;
    start: ColumnWidth;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
