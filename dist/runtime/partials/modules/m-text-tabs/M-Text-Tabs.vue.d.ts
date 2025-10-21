import type { Slot, CTextTabs, TextTab } from '../../../types/index.js';
interface MTextTabsComponentProperties extends Omit<TextTab, 'components'> {
    /**
     * All slots inside this module
     * as Array
     */
    slots: Slot[];
}
export interface MTextTabs extends Omit<CTextTabs, 'tabs'> {
    /**
     * List of all tabs inside
     * this module as array
     */
    tabs: MTextTabsComponentProperties[];
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<MTextTabs, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<MTextTabs> & Readonly<{}>, {
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
