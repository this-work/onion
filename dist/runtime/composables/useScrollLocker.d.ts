/**
 * Configuration type for scroll locker functionality.
 * @typedef {object} ScrollLockerComposableProperties
 * @property {object} scrollLocker - Main configuration object
 * @property {Array<{selector?: string, element?: HTMLElement, property: string}>} scrollLocker.affectedElements - Elements to adjust when locking scroll
 */
export type ScrollLockerComposableProperties = {
    scrollLocker: {
        /** List of elements to adjust when locking scroll */
        affectedElements: {
            /** CSS selector to target the element */
            selector?: string;
            /** Direct reference to an HTML element */
            element?: HTMLElement;
            /** CSS property name to modify when locking scroll */
            property: string;
        }[];
    };
};
/**
 * Composable to manage page scroll locking functionality.
 * Prevents page scrolling while maintaining scroll position and adjusting for scrollbar width.
 * @returns {{lock: () => void, unlock: () => void}} Object containing lock and unlock methods
 */
export declare function useScrollLocker(): {
    lock: () => void;
    unlock: () => void;
};
