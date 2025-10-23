import __nuxt_component_0$1 from './C-Wrapper-DaL46UAI.mjs';
import __nuxt_component_0$2 from './C-Icon-DtEmzy2w.mjs';
import { defineComponent, computed, useSlots, normalizeClass, mergeProps, withCtx, createVNode, resolveDynamicComponent, unref, createBlock, createCommentVNode, openBlock, renderSlot, createTextVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderVNode, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useBem } from './useBem-B6rIDc60.mjs';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Cziyx-rU.mjs';
import './index-B5dIXVXz.mjs';
import './server.mjs';
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
import 'vue-router';
import './composables-BNjskvIb.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "C-Button",
  __ssrInlineRender: true,
  props: {
    tag: { default: "button" },
    appearance: { default: "system" },
    background: { default: "solid" },
    rounded: { type: Boolean, default: false },
    text: {},
    icon: {},
    iconSize: {},
    iconPosition: { default: "left" },
    iconPackage: {},
    loading: { type: Boolean, default: false },
    loadingIcon: { default: "progress-activity" },
    loadingIconPackage: { default: "material-symbols" },
    disabled: { type: Boolean, default: false },
    loadingIconSize: { default: "20px" },
    href: {},
    target: {},
    additionalButtons: {},
    colorMode: {}
  },
  setup(__props) {
    const properties = __props;
    const computedTag = computed(() => {
      if (properties.tag.toLowerCase() === "nuxtlink" || properties.tag.toLowerCase() === "nuxt-link") {
        return __nuxt_component_0;
      }
      return properties.href ? "a" : properties.tag;
    });
    const computedTarget = computed(() => properties.target && computedTag.value === "a" ? properties.target : void 0);
    const hasText = computed(() => !!properties.text || !!useSlots().default);
    const { componentName } = useComponentInstance();
    const partialClass = computed(
      () => normalizeClass([
        componentName,
        useColorMode().getClasses(properties),
        {
          [useBem(void 0, `${properties.appearance}-${properties.background}`)]: true,
          [useBem(void 0, `icon-position-${properties.iconPosition}`)]: properties.iconPosition && hasText.value,
          [useBem(void 0, "icon")]: !hasText.value,
          [useBem(void 0, "loading")]: properties.loading,
          [useBem(void 0, "disabled")]: properties.disabled,
          [useBem(void 0, "link")]: computedTag.value === "a",
          [useBem(void 0, "rounded")]: properties.appearance === "system" && !hasText.value ? true : properties.rounded
        }
      ])
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_C_Wrapper = __nuxt_component_0$1;
      const _component_C_Icon = __nuxt_component_0$2;
      const _component_C_Button = __nuxt_component_1;
      _push(ssrRenderComponent(_component_C_Wrapper, mergeProps({
        condition: !!_ctx.additionalButtons?.length,
        tag: "div"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.text || _ctx.icon) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(computedTag.value), mergeProps(_ctx.$attrs, {
                href: _ctx.href,
                target: computedTarget.value,
                class: partialClass.value,
                disabled: _ctx.disabled
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="${ssrRenderClass(unref(useBem)("content"))}"${_scopeId2}>`);
                    if (_ctx.loading) {
                      _push3(ssrRenderComponent(_component_C_Icon, {
                        tag: "span",
                        name: _ctx.loadingIcon,
                        class: unref(useBem)("loader"),
                        package: _ctx.loadingIconPackage,
                        size: _ctx.loadingIconSize
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (_ctx.icon) {
                      _push3(ssrRenderComponent(_component_C_Icon, {
                        tag: "span",
                        name: _ctx.icon,
                        class: unref(useBem)("icon"),
                        package: _ctx.iconPackage,
                        size: _ctx.iconSize
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (hasText.value) {
                      _push3(`<span class="${ssrRenderClass(unref(useBem)("text"))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                        _push3(`${ssrInterpolate(_ctx.text)}`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</span>`);
                  } else {
                    return [
                      createVNode("span", {
                        class: unref(useBem)("content")
                      }, [
                        _ctx.loading ? (openBlock(), createBlock(_component_C_Icon, {
                          key: 0,
                          tag: "span",
                          name: _ctx.loadingIcon,
                          class: unref(useBem)("loader"),
                          package: _ctx.loadingIconPackage,
                          size: _ctx.loadingIconSize
                        }, null, 8, ["name", "class", "package", "size"])) : createCommentVNode("", true),
                        _ctx.icon ? (openBlock(), createBlock(_component_C_Icon, {
                          key: 1,
                          tag: "span",
                          name: _ctx.icon,
                          class: unref(useBem)("icon"),
                          package: _ctx.iconPackage,
                          size: _ctx.iconSize
                        }, null, 8, ["name", "class", "package", "size"])) : createCommentVNode("", true),
                        hasText.value ? (openBlock(), createBlock("span", {
                          key: 2,
                          class: unref(useBem)("text")
                        }, [
                          renderSlot(_ctx.$slots, "default", {}, () => [
                            createTextVNode(toDisplayString(_ctx.text), 1)
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ], 2)
                    ];
                  }
                }),
                _: 3
              }), _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.additionalButtons, (button, index) => {
              _push2(ssrRenderComponent(_component_C_Button, mergeProps({ key: index }, { ref_for: true }, button), null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              _ctx.text || _ctx.icon ? (openBlock(), createBlock(resolveDynamicComponent(computedTag.value), mergeProps({ key: 0 }, _ctx.$attrs, {
                href: _ctx.href,
                target: computedTarget.value,
                class: partialClass.value,
                disabled: _ctx.disabled
              }), {
                default: withCtx(() => [
                  createVNode("span", {
                    class: unref(useBem)("content")
                  }, [
                    _ctx.loading ? (openBlock(), createBlock(_component_C_Icon, {
                      key: 0,
                      tag: "span",
                      name: _ctx.loadingIcon,
                      class: unref(useBem)("loader"),
                      package: _ctx.loadingIconPackage,
                      size: _ctx.loadingIconSize
                    }, null, 8, ["name", "class", "package", "size"])) : createCommentVNode("", true),
                    _ctx.icon ? (openBlock(), createBlock(_component_C_Icon, {
                      key: 1,
                      tag: "span",
                      name: _ctx.icon,
                      class: unref(useBem)("icon"),
                      package: _ctx.iconPackage,
                      size: _ctx.iconSize
                    }, null, 8, ["name", "class", "package", "size"])) : createCommentVNode("", true),
                    hasText.value ? (openBlock(), createBlock("span", {
                      key: 2,
                      class: unref(useBem)("text")
                    }, [
                      renderSlot(_ctx.$slots, "default", {}, () => [
                        createTextVNode(toDisplayString(_ctx.text), 1)
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ], 2)
                ]),
                _: 3
              }, 16, ["href", "target", "class", "disabled"])) : createCommentVNode("", true),
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.additionalButtons, (button, index) => {
                return openBlock(), createBlock(_component_C_Button, mergeProps({ key: index }, { ref_for: true }, button), null, 16);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/components/c-button/C-Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "CButton" });

export { __nuxt_component_1 as default };
//# sourceMappingURL=C-Button-BYIrkxZH.mjs.map
