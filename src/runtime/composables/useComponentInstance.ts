import { getCurrentInstance } from 'vue'

/**
 * Composable to get the current component instance and name
 * @param {ComponentInternalInstance | null} componentInstance - Optional Vue component instance, defaults to current instance
 * @returns {{componentName: string}} Object containing the lowercase component name
 * @description A utility composable that extracts the component name from a Vue component instance,
 * typically used for generating BEM-style CSS class names
 */
export function useComponentInstance(componentInstance = getCurrentInstance()) {
  const instanceName = componentInstance!.type.__name!
  const componentName = instanceName.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());
  return {
    componentName
  };
}
