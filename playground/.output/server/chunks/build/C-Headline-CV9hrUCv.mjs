import { defineComponent, computed, normalizeClass, createVNode, resolveDynamicComponent, mergeProps, withCtx, renderSlot, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "C-Headline",
  __ssrInlineRender: true,
  props: {
    tag: { default: "div" },
    headline: {},
    headlineTag: { default: "h2" },
    headlineType: { default: "h2" },
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
    const headlineClass = computed(() => [`is-typo-${properties.headlineType}`]);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.tag), mergeProps({ class: partialClass.value }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.headlineTag), { class: headlineClass.value }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                    _push3(`<span${_scopeId2}>${_ctx.headline ?? ""}</span>`);
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, () => [
                      createVNode("span", { innerHTML: _ctx.headline }, null, 8, ["innerHTML"])
                    ])
                  ];
                }
              }),
              _: 3
            }), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.headlineTag), { class: headlineClass.value }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, () => [
                    createVNode("span", { innerHTML: _ctx.headline }, null, 8, ["innerHTML"])
                  ])
                ]),
                _: 3
              }, 8, ["class"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/components/c-headline/C-Headline.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main, { __name: "CHeadline" });

export { __nuxt_component_3 as default };
//# sourceMappingURL=C-Headline-CV9hrUCv.mjs.map
