import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderSlotInner } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "T-Replace",
  __ssrInlineRender: true,
  props: {
    duration: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/transitions/t-replace/T-Replace.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "TReplace" });

export { __nuxt_component_0 as default };
//# sourceMappingURL=T-Replace-B-o-wjvK.mjs.map
