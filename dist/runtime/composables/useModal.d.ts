/**
 * Interface representing the state of a modal
 * @interface ModalComposableProperties
 * @property {boolean} isOpen - Indicates if the modal is currently displayed
 * @property {number} level - The stack level of the modal
 */
export interface ModalComposableProperties {
    isOpen: boolean;
    level: number;
}
/**
 * Composable for managing modal state and behavior
 * @param {string} modalId - Unique identifier for the modal, defaults to auto-generated number
 * @returns {object} Modal control methods and state
 */
export declare function useModal(modalId?: string): {
    open: () => void;
    close: () => void;
    getState: () => {
        isOpen: boolean;
        level: number;
    } | undefined;
    isOpen: Readonly<import("vue").Ref<boolean, boolean>>;
    level: Readonly<import("vue").Ref<number, number>>;
    modalStack: Readonly<import("vue").Ref<readonly string[], readonly string[]>>;
};
