/**
 * Composable to simplify class generation following BEM (Block Element Modifier) methodology
 *
 * @param {string} [element] - The element name in BEM notation
 * @param {string} [modifier] - The modifier name in BEM notation
 * @param {string} [componentInstanceName] - The block name, defaults to current component name in lowercase
 * @returns {string} BEM formatted class name
 *
 */
export declare function useBem(element?: string, modifier?: string, componentInstanceName?: string): string;
