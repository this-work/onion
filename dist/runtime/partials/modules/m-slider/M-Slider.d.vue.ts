import type { Slot, BackgroundComposableProperties, BorderRadius, ColormodeComposableProperties, SpacingComposableProperties } from '../../../types/index.js';
import type { Swiper } from 'swiper/types';
export interface MSliderSlideProperties extends BackgroundComposableProperties, SpacingComposableProperties, ColormodeComposableProperties {
    /**
     * To set an individual border radius on this slide
     *  from the border radius config.
     */
    borderRadius?: BorderRadius | null;
    /**
     * All slots inside this module
     * as Array
     */
    slots: Slot[];
}
export interface MSlider {
    /**
     * Slides to display in the slider
     */
    slides?: MSliderSlideProperties[];
    /**
     * Optional Swiper parameter to overwrite the default settings
     */
    swiperParameter?: Swiper['params'];
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<MSlider, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<MSlider> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
