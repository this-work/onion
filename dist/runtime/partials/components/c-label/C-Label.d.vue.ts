import type { ColormodeComposableProperties } from '../../../types/index.js';
export interface CLabel extends ColormodeComposableProperties {
    /**
     * Optional custom tag of the text
     * @default 'div'
     */
    tag?: string;
    /**
     * Optional text of the label
     */
    text?: string;
    /**
     * Define an optional icon for the label
     * Any icon from the Material Design icons set can be used.
     */
    icon?: string;
    /**
     * Size of the icon
     */
    iconSize?: string;
    /**
     * Package of the icon
     */
    iconPackage?: string;
    /**
     * Decides whether the label has a background with inner spacing
     */
    background?: boolean;
    /**
     * Define the size of the complete label.
     */
    size?: 's' | 'm' | 'l';
}
declare const _default: import("vue").DefineComponent<CLabel, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CLabel> & Readonly<{}>, {
    size: "s" | "m" | "l";
    background: boolean;
    tag: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
