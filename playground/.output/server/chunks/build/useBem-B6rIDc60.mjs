import { getCurrentInstance } from 'vue';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';

function getComponentName(currentInstance = getCurrentInstance()) {
  const { componentName } = useComponentInstance(currentInstance);
  return componentName;
}
function useBem(element, modifier, componentInstanceName = getComponentName(getCurrentInstance())) {
  if (!modifier) {
    return `${componentInstanceName}__${element}`;
  }
  if (!element) {
    return `${componentInstanceName}--${modifier}`;
  }
  return `${componentInstanceName}__${element}--${modifier}`;
}

export { useBem as u };
//# sourceMappingURL=useBem-B6rIDc60.mjs.map
