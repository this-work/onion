import { getCurrentInstance } from 'vue';

function useComponentInstance(componentInstance = getCurrentInstance()) {
  const instanceName = componentInstance.type.__name;
  const componentName = instanceName.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());
  return {
    componentName
  };
}

export { useComponentInstance as u };
//# sourceMappingURL=useComponentInstance-CaQBHdps.mjs.map
