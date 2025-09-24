import { u as useBackground, _ as __nuxt_component_2 } from './Slot-CnrEHEKS.mjs';
import { defineComponent, computed, normalizeClass, useAttrs, createVNode, resolveDynamicComponent, mergeProps, withCtx, renderSlot, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderSlot, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
import { u as useSpacing } from './useSpacing-7hsUgoqU.mjs';
import { u as useCssVar } from './useCssVar-ulhRdbnU.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Module",
  __ssrInlineRender: true,
  props: {
    start: { default: 1 },
    width: {},
    borderRadius: {},
    type: { default: "stacked" },
    verticalAlignment: { default: "stretch" },
    slots: {},
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
    marginLeft: {},
    colorMode: {}
  },
  setup(__props) {
    const properties = __props;
    const { componentName } = useComponentInstance();
    const partialClass = computed(
      () => normalizeClass(
        [
          componentName,
          useSpacing().getClasses(properties, true),
          useBackground().getClasses(properties),
          useColorMode().getClasses(properties),
          {
            [`offset-right-${properties.paddingRight}`]: properties.paddingRight,
            [`offset-left-${properties.paddingLeft}`]: properties.paddingLeft,
            [`border-radius-${properties.borderRadius}`]: properties.borderRadius,
            [`vertical-alignment-${properties.verticalAlignment}`]: properties.verticalAlignment
          }
        ]
      )
    );
    const partialStyle = computed(() => ({
      ...useBackground().getStyles(properties),
      "--module-column-start": properties.start,
      "--module-column-width": properties.width ? properties.width : parseInt(useCssVar("grid-columns")) - 2 * (properties.start - 1)
    }));
    const partialType = computed(() => {
      if (properties.type === "stacked") {
        return "div";
      }
      return `m-${properties.type}`;
    });
    const partialBind = computed(() => {
      const attrs = useAttrs();
      if (properties.type !== "stacked") {
        return { attrs };
      }
      return void 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Slot = __nuxt_component_2;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(partialType.value), mergeProps(partialBind.value, {
        ref: "module",
        class: partialClass.value,
        style: partialStyle.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`<!--[-->`);
              ssrRenderList(properties.slots, (slot, index) => {
                _push2(ssrRenderComponent(_component_Slot, mergeProps({ ref_for: true }, slot.data, {
                  key: index,
                  components: slot.components
                }), null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                (openBlock(true), createBlock(Fragment, null, renderList(properties.slots, (slot, index) => {
                  return openBlock(), createBlock(_component_Slot, mergeProps({ ref_for: true }, slot.data, {
                    key: index,
                    components: slot.components
                  }), null, 16, ["components"]);
                }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/structure/module/Module.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "Module" });

export { __nuxt_component_1 as default };
//# sourceMappingURL=Module-C_cUIPpr.mjs.map
