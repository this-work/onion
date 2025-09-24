import __nuxt_component_0 from './C-Text-Tabs-CAYic0Oy.mjs';
import __nuxt_component_1 from './C-Text-Tabs.item-4fyiqzy1.mjs';
import { _ as __nuxt_component_2 } from './Slot-CnrEHEKS.mjs';
import { defineComponent, computed, normalizeClass, mergeProps, withCtx, createBlock, openBlock, Fragment, renderList, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';
import './T-Replace-B-o-wjvK.mjs';
import './useBem-B6rIDc60.mjs';
import './useColorMode-BHUoQmDp.mjs';
import './useSpacing-7hsUgoqU.mjs';
import './useCssVar-ulhRdbnU.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "M-Text-Tabs",
  __ssrInlineRender: true,
  props: {
    tabs: {},
    horizontalAlignment: {},
    defaultTab: { default: 0 },
    colorMode: {}
  },
  setup(__props) {
    const properties = __props;
    const { componentName } = useComponentInstance();
    const partialClass = computed(
      () => normalizeClass(
        [
          componentName
        ]
      )
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_C_Text_Tabs = __nuxt_component_0;
      const _component_C_Text_Tabs_Item = __nuxt_component_1;
      const _component_Slot = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: partialClass.value }, _attrs))}>`);
      _push(ssrRenderComponent(_component_C_Text_Tabs, {
        "default-tab": properties.defaultTab,
        "horizontal-alignment": properties.horizontalAlignment
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.tabs.length > 0) {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.tabs, (tab, index) => {
                _push2(ssrRenderComponent(_component_C_Text_Tabs_Item, {
                  key: index,
                  title: tab.title
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<!--[-->`);
                      ssrRenderList(tab.slots, (slot, slotIndex) => {
                        _push3(ssrRenderComponent(_component_Slot, mergeProps({ key: slotIndex }, { ref_for: true }, slot.data, {
                          components: slot.components
                        }), null, _parent3, _scopeId2));
                      });
                      _push3(`<!--]-->`);
                    } else {
                      return [
                        (openBlock(true), createBlock(Fragment, null, renderList(tab.slots, (slot, slotIndex) => {
                          return openBlock(), createBlock(_component_Slot, mergeProps({ key: slotIndex }, { ref_for: true }, slot.data, {
                            components: slot.components
                          }), null, 16, ["components"]);
                        }), 128))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            }
          } else {
            return [
              _ctx.tabs.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.tabs, (tab, index) => {
                return openBlock(), createBlock(_component_C_Text_Tabs_Item, {
                  key: index,
                  title: tab.title
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(tab.slots, (slot, slotIndex) => {
                      return openBlock(), createBlock(_component_Slot, mergeProps({ key: slotIndex }, { ref_for: true }, slot.data, {
                        components: slot.components
                      }), null, 16, ["components"]);
                    }), 128))
                  ]),
                  _: 2
                }, 1032, ["title"]);
              }), 128)) : renderSlot(_ctx.$slots, "default", { key: 1 })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/modules/m-text-tabs/M-Text-Tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MTextTabs = Object.assign(_sfc_main, { __name: "MTextTabs" });

export { MTextTabs as default };
//# sourceMappingURL=M-Text-Tabs-C0usW1E6.mjs.map
