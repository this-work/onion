import { getCurrentInstance } from "vue";
import { useComponentInstance } from "./useComponentInstance.js";
function getComponentName(currentInstance = getCurrentInstance()) {
  const { componentName } = useComponentInstance(currentInstance);
  return componentName;
}
export function useBem(element, modifier, componentInstanceName = getComponentName(getCurrentInstance())) {
  if (!modifier) {
    return `${componentInstanceName}__${element}`;
  }
  if (!element) {
    return `${componentInstanceName}--${modifier}`;
  }
  return `${componentInstanceName}__${element}--${modifier}`;
}
