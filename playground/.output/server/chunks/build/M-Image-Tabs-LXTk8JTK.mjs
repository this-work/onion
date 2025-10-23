import __nuxt_component_0 from './C-Image-Tabs-wlvVHYVL.mjs';
import __nuxt_component_1 from './C-Image-Tabs.item-BD6liHD5.mjs';
import { _ as __nuxt_component_2 } from './Slot-CnrEHEKS.mjs';
import { defineComponent, computed, normalizeClass, mergeProps, withCtx, createBlock, openBlock, Fragment, renderList, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';
import './T-Replace-B-o-wjvK.mjs';
import './C-Text-Tabs.item-4fyiqzy1.mjs';
import './C-Image-BlpE6N20.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import './server.mjs';
import 'vue-router';
import './composables-BNjskvIb.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './C-Text-BR7y9aN_.mjs';
import './useColorMode-BHUoQmDp.mjs';
import './useBem-B6rIDc60.mjs';
import './useCssVar-ulhRdbnU.mjs';
import './useSpacing-7hsUgoqU.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "M-Image-Tabs",
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
      const _component_C_Image_Tabs = __nuxt_component_0;
      const _component_C_Image_Tabs_Item = __nuxt_component_1;
      const _component_Slot = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: partialClass.value }, _attrs))}>`);
      _push(ssrRenderComponent(_component_C_Image_Tabs, {
        "default-tab": properties.defaultTab,
        "horizontal-alignment": properties.horizontalAlignment
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.tabs.length > 0) {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.tabs, (tab, index) => {
                _push2(ssrRenderComponent(_component_C_Image_Tabs_Item, {
                  key: index,
                  image: tab.image
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
                return openBlock(), createBlock(_component_C_Image_Tabs_Item, {
                  key: index,
                  image: tab.image
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(tab.slots, (slot, slotIndex) => {
                      return openBlock(), createBlock(_component_Slot, mergeProps({ key: slotIndex }, { ref_for: true }, slot.data, {
                        components: slot.components
                      }), null, 16, ["components"]);
                    }), 128))
                  ]),
                  _: 2
                }, 1032, ["image"]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/modules/m-image-tabs/M-Image-Tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MImageTabs = Object.assign(_sfc_main, { __name: "MImageTabs" });

export { MImageTabs as default };
//# sourceMappingURL=M-Image-Tabs-LXTk8JTK.mjs.map
