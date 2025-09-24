import __nuxt_component_1 from './Module-C_cUIPpr.mjs';
import { defineComponent, computed, normalizeClass, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { u as useBackground } from './Slot-CnrEHEKS.mjs';
import { u as useSpacing } from './useSpacing-7hsUgoqU.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';
import './useColorMode-BHUoQmDp.mjs';
import './useCssVar-ulhRdbnU.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Section",
  __ssrInlineRender: true,
  props: {
    modules: {},
    fullViewportHeight: { type: Boolean, default: false },
    background: {},
    backgroundImage: {},
    backgroundPosition: {},
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
          useSpacing().getClasses(properties, false),
          useBackground().getClasses(properties),
          {
            [`full-viewport-height`]: properties.fullViewportHeight,
            [`offset-left-${properties.paddingLeft}`]: properties.paddingLeft,
            [`border-radius-${properties.borderRadius}`]: properties.borderRadius,
            [`vertical-alignment-${properties.verticalAlignment}`]: properties.verticalAlignment
          }
        ]
      )
    );
    const partialStyle = computed(() => useBackground().getStyles(properties));
    function moduleBind(module) {
      return {
        ...module.data,
        ...module
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Module = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref: "section",
        class: partialClass.value,
        style: partialStyle.value
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`<!--[-->`);
        ssrRenderList(_ctx.modules, (module, index) => {
          _push(ssrRenderComponent(_component_Module, mergeProps({ ref_for: true }, moduleBind(module), { key: index }), null, _parent));
        });
        _push(`<!--]-->`);
      }, _push, _parent);
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/structure/section/Section.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "Section" });

export { __nuxt_component_0 as default };
//# sourceMappingURL=Section-Pcv06J42.mjs.map
