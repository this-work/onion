import { defineComponent, computed, normalizeClass, createVNode, resolveDynamicComponent, mergeProps, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "C-Text",
  __ssrInlineRender: true,
  props: {
    tag: { default: "div" },
    text: {},
    colorMode: {}
  },
  setup(__props) {
    const properties = __props;
    const { componentName } = useComponentInstance();
    const partialClass = computed(
      () => normalizeClass(
        [
          componentName,
          useColorMode().getClasses(properties)
        ]
      )
    );
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.tag), mergeProps({ class: partialClass.value }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`<span${_scopeId}>${_ctx.text ?? ""}</span>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode("span", { innerHTML: _ctx.text }, null, 8, ["innerHTML"])
              ])
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/components/c-text/C-Text.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "CText" });

export { __nuxt_component_2 as default };
//# sourceMappingURL=C-Text-BR7y9aN_.mjs.map
