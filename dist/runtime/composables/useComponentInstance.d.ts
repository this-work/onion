/**
 * Composable to get the current component instance and name
 * @param {ComponentInternalInstance | null} componentInstance - Optional Vue component instance, defaults to current instance
 * @returns {{componentName: string}} Object containing the lowercase component name
 * @description A utility composable that extracts the component name from a Vue component instance,
 * typically used for generating BEM-style CSS class names
 */
export declare function useComponentInstance(componentInstance?: import("vue").ComponentInternalInstance | null): {
    componentName: string;
};
