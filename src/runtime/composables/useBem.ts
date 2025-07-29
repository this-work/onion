import type { ComponentInternalInstance } from 'vue'
import { getCurrentInstance } from 'vue'
import { useComponentInstance } from './useComponentInstance'

/**
 * Composable to get the current component instance and name
 * @param {currentInstance} [currentInstance] - Vue component instance, defaults to current instance
 * @returns {{componentName: string}} Object containing the lowercase component name
 */
function getComponentName(currentInstance: ComponentInternalInstance | null = getCurrentInstance()) {
  const { componentName } = useComponentInstance(currentInstance)
  return componentName
}

/**
 * Composable to simplify class generation following BEM (Block Element Modifier) methodology
 *
 * @param {string} [element] - The element name in BEM notation
 * @param {string} [modifier] - The modifier name in BEM notation
 * @param {string} [componentInstanceName] - The block name, defaults to current component name in lowercase
 * @returns {string} BEM formatted class name
 *
 */
export function useBem(element?: string, modifier?: string, componentInstanceName: string = getComponentName(getCurrentInstance())) {
  if (!modifier) {
    return `${componentInstanceName}__${element}`
  }
  if (!element) {
    return `${componentInstanceName}--${modifier}`
  }
  return `${componentInstanceName}__${element}--${modifier}`
}
