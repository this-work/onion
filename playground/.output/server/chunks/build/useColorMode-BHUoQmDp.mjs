import { normalizeClass } from 'vue';

function useColorMode() {
  const getClasses = (props) => {
    return normalizeClass({ [`color-mode-${props.colorMode}`]: props.colorMode });
  };
  return {
    getClasses
  };
}

export { useColorMode as u };
//# sourceMappingURL=useColorMode-BHUoQmDp.mjs.map
