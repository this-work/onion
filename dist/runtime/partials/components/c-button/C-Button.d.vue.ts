import type { ColormodeComposableProperties } from '../../../types/index.js';
export interface CButton extends ColormodeComposableProperties {
    /**
     * HTML element to render the button as
     * @default 'button'
     */
    tag?: string;
    /**
     * Visual style variant of the button
     * @default 'system'
     */
    appearance?: 'primary' | 'secondary' | 'system';
    /**
     * Custom background color for the button
     * @default 'solid'
     */
    background?: 'solid' | 'soft' | 'outline' | 'plain';
    /**
     * Whether the button should have rounded corners
     * @default false
     */
    rounded?: boolean;
    /**
     * The text content to display inside the button
     */
    text?: string;
    /**
     * Icon name/identifier to show alongside button text
     */
    icon?: string;
    /**
     * Size of the icon
     */
    iconSize?: string;
    /**
     * Position of the icon relative to the button text
     * @default 'left'
     */
    iconPosition?: 'left' | 'right';
    /**
     * Package of the icon
     */
    iconPackage?: string;
    /**
     * Shows a loading indicator when true
     * @default false
     */
    loading?: boolean;
    /**
     * Whether the button is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Size of the loading indicator
     */
    loadingSpinnerSize?: string;
    /**
     * URL that the button links to when clicked
     */
    href?: string;
    /**
     * The target attribute specifying where to open the linked document
     */
    target?: string;
    /**
     * Additional buttons to render in as a button group
     */
    additionalButtons?: Omit<CButton, 'additionalButtons'>[];
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<CButton, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<CButton> & Readonly<{}>, {
    background: "solid" | "soft" | "outline" | "plain";
    tag: string;
    loading: boolean;
    disabled: boolean;
    appearance: "primary" | "secondary" | "system";
    rounded: boolean;
    iconPosition: "left" | "right";
    loadingSpinnerSize: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
