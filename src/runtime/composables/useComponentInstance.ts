import { getCurrentInstance } from 'vue'

/**
 * Composable to get the current component instance and name
 * @param {ComponentInternalInstance | null} componentInstance - Optional Vue component instance, defaults to current instance
 * @returns {{componentName: string}} Object containing the lowercase component name
 * @description A utility composable that extracts the component name from a Vue component instance,
 * typically used for generating BEM-style CSS class names
 */
export function useComponentInstance(componentInstance = getCurrentInstance()) {
  const splittetFilePath = componentInstance!.type.__file!.split('/')
  const fileName = splittetFilePath[splittetFilePath.length - 1]
  const componentName = fileName!.substring(0, fileName!.length - 4).toLowerCase()

  return {
    componentName,
  }
}
