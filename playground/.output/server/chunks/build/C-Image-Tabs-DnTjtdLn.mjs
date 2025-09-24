import __nuxt_component_0$1 from './T-Replace-B-o-wjvK.mjs';
import __nuxt_component_1 from './C-Text-Tabs.item-4fyiqzy1.mjs';
import __nuxt_component_1$1 from './C-Image-Duq0THOF.mjs';
import { defineComponent, useSlots, ref, computed, normalizeClass, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { u as useBem } from './useBem-B6rIDc60.mjs';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';
import './C-Text-BR7y9aN_.mjs';
import './useCssVar-ulhRdbnU.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "C-Image-Tabs",
  __ssrInlineRender: true,
  props: {
    tabs: {},
    horizontalAlignment: {},
    defaultTab: { default: 0 },
    colorMode: {}
  },
  setup(__props) {
    const componentDefaultSlot = useSlots().default?.();
    const properties = __props;
    const { componentName } = useComponentInstance();
    const activeTabIndex = ref(properties.defaultTab);
    const partialClass = computed(
      () => normalizeClass(
        [
          componentName,
          useColorMode().getClasses(properties)
        ]
      )
    );
    const tabListClass = computed(
      () => normalizeClass(
        [
          useBem("tab-list"),
          {
            [`flex-align-${properties.horizontalAlignment}`]: properties.horizontalAlignment
          }
        ]
      )
    );
    const tabItems = computed(() => {
      if (properties?.tabs && properties.tabs.length > 0) {
        return properties.tabs?.map((slot) => {
          return {
            props: {
              image: slot?.image
            },
            components: slot.components
          };
        });
      }
      if (componentDefaultSlot?.length === 1 && componentDefaultSlot[0].children.length > 0) {
        return componentDefaultSlot[0].children;
      }
      return componentDefaultSlot;
    });
    const activeTabItem = computed(() => {
      if (!tabItems.value || activeTabIndex.value === void 0) return null;
      return tabItems.value[activeTabIndex.value];
    });
    const changeActiveTab = (index) => {
      activeTabIndex.value = index;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_T_Replace = __nuxt_component_0$1;
      const _component_C_Text_Tabs_Item = __nuxt_component_1;
      const _component_C_Image = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: partialClass.value }, _attrs))}><div class="${ssrRenderClass(unref(useBem)("content"))}">`);
      _push(ssrRenderComponent(_component_T_Replace, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (activeTabItem.value?.hasOwnProperty("components")) {
              _push2(ssrRenderComponent(_component_C_Text_Tabs_Item, {
                key: activeTabIndex.value + "1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(activeTabItem.value?.components, (component, index) => {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(component.name), mergeProps({ key: index }, { ref_for: true }, component.data), null), _parent3, _scopeId2);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(activeTabItem.value?.components, (component, index) => {
                        return openBlock(), createBlock(resolveDynamicComponent(component.name), mergeProps({ key: index }, { ref_for: true }, component.data), null, 16);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(activeTabItem.value), mergeProps({
                key: activeTabIndex.value + "2"
              }, activeTabItem.value?.props), null), _parent2, _scopeId);
            }
          } else {
            return [
              activeTabItem.value?.hasOwnProperty("components") ? (openBlock(), createBlock(_component_C_Text_Tabs_Item, {
                key: activeTabIndex.value + "1"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(activeTabItem.value?.components, (component, index) => {
                    return openBlock(), createBlock(resolveDynamicComponent(component.name), mergeProps({ key: index }, { ref_for: true }, component.data), null, 16);
                  }), 128))
                ]),
                _: 1
              })) : (openBlock(), createBlock(resolveDynamicComponent(activeTabItem.value), mergeProps({
                key: activeTabIndex.value + "2"
              }, activeTabItem.value?.props), null, 16))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass(unref(useBem)("tabs"))}"><ul class="${ssrRenderClass(tabListClass.value)}" role="tablist"><!--[-->`);
      ssrRenderList(tabItems.value, (tabItem, index) => {
        _push(`<li class="${ssrRenderClass(unref(useBem)("tab-item"))}" role="presentation">`);
        _push(ssrRenderComponent(_component_C_Image, mergeProps({ role: "tab" }, { ref_for: true }, tabItem.props?.image, {
          class: [
            unref(useBem)("tab-image"),
            activeTabIndex.value === index ? unref(useBem)("tab-image", "active") : null
          ],
          "aria-selected": activeTabIndex.value === index ? "true" : "false",
          onClick: ($event) => changeActiveTab(index)
        }), null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/components/c-image-tabs/C-Image-Tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "CImageTabs" });

export { __nuxt_component_0 as default };
//# sourceMappingURL=C-Image-Tabs-DnTjtdLn.mjs.map
