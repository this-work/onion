import { normalizeClass } from "vue";
export function useBackground() {
  const getClasses = (props) => {
    const { background, backgroundImage } = props;
    return normalizeClass({
      [`background-color-${background}`]: background,
      ["has-background-image"]: backgroundImage
    });
  };
  const getStyles = (props) => {
    return {
      "backgroundImage": props.backgroundImage ? `url("${props.backgroundImage}")` : void 0,
      "backgroundPosition": props.backgroundPosition ? props.backgroundPosition : void 0,
      "--closest-background-color": props.background ? "var(--color-" + props.background + ")" : void 0
    };
  };
  return {
    getClasses,
    getStyles
  };
}
