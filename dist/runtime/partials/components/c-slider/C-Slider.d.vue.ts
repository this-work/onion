import type { Component, ColormodeComposableProperties } from '../../../types/index.js';
import type { Swiper } from 'swiper/types';
export interface CSlider extends ColormodeComposableProperties {
    /**
     * Slides to display in the slider
     */
    slides?: Component[];
    /**
     * Optional Swiper parameter to overwrite the default settings
     */
    swiperParameter?: Swiper['params'];
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<CSlider, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CSlider> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
