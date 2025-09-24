import { defineComponent, computed, normalizeClass, unref, mergeProps, withCtx, renderSlot, h, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';

function Wrap({ wrapper }, { slots, attrs }) {
  return wrapper ? h(wrapper, attrs, slots.default()) : slots.default();
}
Wrap.props = ["wrapper"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "C-Wrapper",
  __ssrInlineRender: true,
  props: {
    tag: { default: "div" },
    condition: { type: Boolean, default: true }
  },
  setup(__props) {
    const { componentName } = useComponentInstance();
    const partialClass = computed(
      () => normalizeClass(
        [
          componentName
        ]
      )
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Wrap), mergeProps({
        wrapper: _ctx.condition && _ctx.tag,
        class: partialClass.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/components/c-wrapper/C-Wrapper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "CWrapper" });

export { __nuxt_component_0 as default };
//# sourceMappingURL=C-Wrapper-DaL46UAI.mjs.map
