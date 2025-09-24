import { normalizeClass } from 'vue';

function useSpacing() {
  const getClasses = (props, horizontal) => {
    const { marginTop, marginBottom, paddingTop, paddingRight, paddingBottom, paddingLeft } = props;
    return normalizeClass({
      [`spacing-margin-top-${marginTop}`]: marginTop,
      [`spacing-margin-bottom-${marginBottom}`]: marginBottom,
      [`spacing-padding-top-${paddingTop}`]: paddingTop,
      [`spacing-padding-right-${paddingRight}`]: paddingRight && horizontal,
      [`spacing-padding-bottom-${paddingBottom}`]: paddingBottom,
      [`spacing-padding-left-${paddingLeft}`]: paddingLeft && horizontal
    });
  };
  return {
    getClasses
  };
}

export { useSpacing as u };
//# sourceMappingURL=useSpacing-7hsUgoqU.mjs.map
