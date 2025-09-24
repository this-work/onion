import { defineComponent, computed, normalizeClass, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useSpacing } from './useSpacing-7hsUgoqU.mjs';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "C-Divider",
  __ssrInlineRender: true,
  props: {
    line: { type: Boolean, default: true },
    colorMode: {},
    paddingTop: {},
    paddingBottom: {},
    paddingRight: {},
    paddingLeft: {},
    marginTop: {},
    marginBottom: {},
    marginRight: {},
    marginLeft: {}
  },
  setup(__props) {
    const properties = __props;
    const { componentName } = useComponentInstance();
    const partialClass = computed(
      () => normalizeClass(
        [
          componentName,
          useSpacing().getClasses(properties, true),
          useColorMode().getClasses(properties)
        ]
      )
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: partialClass.value }, _attrs))}>`);
      if (properties.line) {
        _push(`<hr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/components/c-divider/C-Divider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CDivider = Object.assign(_sfc_main, { __name: "CDivider" });

export { CDivider as default };
//# sourceMappingURL=C-Divider-CvUe8MlV.mjs.map
