import type { ColormodeComposableProperties, CImage, CHeadline, CText } from '../../../types/index.js';
export interface CModal extends ColormodeComposableProperties {
    /**
     * Root element to render the modal in
     * @default 'body'
     */
    rootElement?: string;
    /**
     * Whether the modal should be visible
     * @default false
     */
    show?: boolean;
    /**
     * Whether the modal should take up the full width
     * @default false
     */
    fullwidth?: boolean;
    /**
     * The content to display in the modal body
     * Can be HTML string or other content
     */
    content?: any;
    /**
     * Optional title to display in the modal header
     */
    title?: string;
    /**
     * Optional image content to display in the modal body
     */
    image?: CImage;
    /**
     * Optional headline content to display in the modal body
     */
    headline?: CHeadline;
    /**
     * Optional text content to display in the modal body
     */
    text?: CText;
    /**
     * Width of the modal in pixels
     * @default 600
     */
    width?: number;
}
declare const _default: __VLS_WithSlots<import("vue").DefineComponent<CModal, {
    open: () => void;
    close: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any, string, import("vue").PublicProps, any, {
    width: number;
    rootElement: string;
    show: boolean;
    fullwidth: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>, {
    default?: (props: {}) => any;
}>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
