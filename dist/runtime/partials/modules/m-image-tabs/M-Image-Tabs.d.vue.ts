import type { Slot, CImageTabs, ImageTab } from '../../../types/index.js';
interface MImageTabsComponentProperties extends Omit<ImageTab, 'components'> {
    /**
     * All slots inside this module
     * as Array
     */
    slots: Slot[];
}
export interface MImageTabs extends Omit<CImageTabs, 'tabs'> {
    /**
     * List of all tabs inside
     * this module as array
     */
    tabs: MImageTabsComponentProperties[];
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<MImageTabs, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<MImageTabs> & Readonly<{}>, {
    defaultTab: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
