import type { ColormodeComposableProperties } from '../../../types/index.js';
export interface CIcon extends ColormodeComposableProperties {
    /**
     * Optional custom tag of the text
     * @default 'div'
     */
    tag?: string;
    /**
     * Define the name of the icon your want to use.
     * Icons are used from https://icon-sets.iconify.design/
     */
    name: string;
    /**
     * Overwrite the default icon package.
     * Packages are used from https://icon-sets.iconify.design/
     * @default 'material-symbols'
     */
    package?: string;
    /**
     * Relative size of the icon in em to the font.
     * @default '1em'
     */
    size?: string;
    /**
     * Import method of the icon.
     * - 'svg' creates a natives SVG
     * - 'css' creates a base64 icon
     * @default 'svg'
     */
    mode?: 'svg' | 'css';
}
declare const __VLS_export: __VLS_WithSlots<import("vue").DefineComponent<CIcon, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CIcon> & Readonly<{}>, {
    size: string;
    mode: "svg" | "css";
    tag: string;
    package: string;
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
