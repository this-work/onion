import __nuxt_component_0 from './C-Wrapper-DaL46UAI.mjs';
import __nuxt_component_1 from './C-Image-Duq0THOF.mjs';
import __nuxt_component_2 from './C-Label-DSdCryq6.mjs';
import __nuxt_component_3 from './C-Headline-CV9hrUCv.mjs';
import __nuxt_component_2$1 from './C-Text-BR7y9aN_.mjs';
import { defineComponent, computed, normalizeClass, mergeProps, withCtx, unref, renderSlot, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { u as useBem } from './useBem-B6rIDc60.mjs';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';
import './useCssVar-ulhRdbnU.mjs';
import './C-Icon-DtEmzy2w.mjs';
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
import 'vue-router';
import './composables-BNjskvIb.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "C-Tile",
  __ssrInlineRender: true,
  props: {
    type: { default: "default" },
    hero: { type: Boolean, default: false },
    overline: {},
    headline: {},
    text: {},
    image: {},
    backgroundColor: { default: "white" },
    label: {},
    link: {},
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
          [`background-color-${properties.background}`]: properties.background
        }
      ])
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_C_Wrapper = __nuxt_component_0;
      const _component_C_Image = __nuxt_component_1;
      const _component_C_Label = __nuxt_component_2;
      const _component_C_Headline = __nuxt_component_3;
      const _component_C_Text = __nuxt_component_2$1;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: partialClass.value }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(ssrRenderComponent(_component_C_Wrapper, mergeProps({
          condition: typeof properties.link != "undefined" && properties.link != null,
          tag: "NuxtLink"
        }, properties.link), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "image", {}, () => {
                if (properties.image) {
                  _push2(ssrRenderComponent(_component_C_Image, mergeProps(properties.image, {
                    class: unref(useBem)("image")
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              ssrRenderSlot(_ctx.$slots, "label", {}, () => {
                if (properties.label) {
                  _push2(ssrRenderComponent(_component_C_Label, mergeProps({
                    tag: "span",
                    size: "s"
                  }, properties.label, {
                    class: unref(useBem)("label")
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              ssrRenderSlot(_ctx.$slots, "headline", {}, () => {
                if (_ctx.overline) {
                  _push2(`<span class="${ssrRenderClass(unref(useBem)("overline"))}"${_scopeId}>${_ctx.overline ?? ""}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (properties.headline) {
                  _push2(ssrRenderComponent(_component_C_Headline, mergeProps({ tag: "span" }, properties.headline, {
                    class: unref(useBem)("headline")
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              ssrRenderSlot(_ctx.$slots, "text", {}, () => {
                if (properties.text) {
                  _push2(ssrRenderComponent(_component_C_Text, mergeProps({ tag: "span" }, properties.text, {
                    class: unref(useBem)("text")
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "image", {}, () => [
                  properties.image ? (openBlock(), createBlock(_component_C_Image, mergeProps({ key: 0 }, properties.image, {
                    class: unref(useBem)("image")
                  }), null, 16, ["class"])) : createCommentVNode("", true)
                ]),
                renderSlot(_ctx.$slots, "label", {}, () => [
                  properties.label ? (openBlock(), createBlock(_component_C_Label, mergeProps({
                    key: 0,
                    tag: "span",
                    size: "s"
                  }, properties.label, {
                    class: unref(useBem)("label")
                  }), null, 16, ["class"])) : createCommentVNode("", true)
                ]),
                renderSlot(_ctx.$slots, "headline", {}, () => [
                  _ctx.overline ? (openBlock(), createBlock("span", {
                    key: 0,
                    innerHTML: _ctx.overline,
                    class: unref(useBem)("overline")
                  }, null, 10, ["innerHTML"])) : createCommentVNode("", true),
                  properties.headline ? (openBlock(), createBlock(_component_C_Headline, mergeProps({
                    key: 1,
                    tag: "span"
                  }, properties.headline, {
                    class: unref(useBem)("headline")
                  }), null, 16, ["class"])) : createCommentVNode("", true)
                ]),
                renderSlot(_ctx.$slots, "text", {}, () => [
                  properties.text ? (openBlock(), createBlock(_component_C_Text, mergeProps({
                    key: 0,
                    tag: "span"
                  }, properties.text, {
                    class: unref(useBem)("text")
                  }), null, 16, ["class"])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      }, _push, _parent);
      _push(`</article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/components/c-tile/C-Tile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CTile = Object.assign(_sfc_main, { __name: "CTile" });

export { CTile as default };
//# sourceMappingURL=C-Tile-BUvA5scR.mjs.map
