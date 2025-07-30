import { normalizeClass } from "vue";
export function useColorMode() {
  const getClasses = (props) => {
    return normalizeClass({ [`color-mode-${props.colorMode}`]: props.colorMode });
  };
  return {
    getClasses
  };
}
