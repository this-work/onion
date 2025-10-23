import __nuxt_component_0 from './C-Icon-DtEmzy2w.mjs';
import { defineComponent, computed, normalizeClass, createVNode, resolveDynamicComponent, mergeProps, withCtx, unref, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';
import { u as useBem } from './useBem-B6rIDc60.mjs';
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
  __name: "C-Label",
  __ssrInlineRender: true,
  props: {
    tag: { default: "div" },
    text: {},
    icon: {},
    iconSize: {},
    iconPackage: {},
    background: { type: Boolean, default: true },
    size: { default: "m" },
    colorMode: {}
  },
  setup(__props) {
    const properties = __props;
    const { componentName } = useComponentInstance();
    const partialClass = computed(
      () => normalizeClass([
        componentName,
        useColorMode().getClasses(properties),
        {
          [useBem(void 0, "transparent")]: !properties.background,
          [useBem(void 0, `size-${properties.size}`)]: properties.size != "m"
        }
      ])
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_C_Icon = __nuxt_component_0;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.tag), mergeProps({ class: partialClass.value }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${ssrRenderClass(unref(useBem)("pill"))}"${_scopeId}>`);
            if (_ctx.icon) {
              _push2(ssrRenderComponent(_component_C_Icon, {
                tag: "span",
                name: _ctx.icon,
                class: unref(useBem)("icon"),
                package: _ctx.iconPackage,
                size: _ctx.iconSize
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.text) {
              _push2(`<span class="${ssrRenderClass(unref(useBem)("text"))}"${_scopeId}>${_ctx.text ?? ""}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", {
                class: unref(useBem)("pill")
              }, [
                _ctx.icon ? (openBlock(), createBlock(_component_C_Icon, {
                  key: 0,
                  tag: "span",
                  name: _ctx.icon,
                  class: unref(useBem)("icon"),
                  package: _ctx.iconPackage,
                  size: _ctx.iconSize
                }, null, 8, ["name", "class", "package", "size"])) : createCommentVNode("", true),
                _ctx.text ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: unref(useBem)("text"),
                  innerHTML: _ctx.text
                }, null, 10, ["innerHTML"])) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/components/c-label/C-Label.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "CLabel" });

export { __nuxt_component_2 as default };
//# sourceMappingURL=C-Label-DSdCryq6.mjs.map
