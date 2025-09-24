import { a as __nuxt_component_0$1 } from './index-B5dIXVXz.mjs';
import { defineComponent, computed, normalizeClass, createVNode, resolveDynamicComponent, mergeProps, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';
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
  __name: "C-Icon",
  __ssrInlineRender: true,
  props: {
    tag: { default: "div" },
    name: {},
    package: { default: "material-symbols" },
    size: { default: "1em" },
    mode: { default: "svg" },
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
    const computedIconName = computed(() => {
      return `${properties.package}:${properties.name}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      if (_ctx.name) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.tag), mergeProps({ class: partialClass.value }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                _push2(ssrRenderComponent(_component_Icon, {
                  mode: _ctx.mode,
                  size: _ctx.size,
                  name: computedIconName.value
                }, null, _parent2, _scopeId));
              }, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createVNode(_component_Icon, {
                    mode: _ctx.mode,
                    size: _ctx.size,
                    name: computedIconName.value
                  }, null, 8, ["mode", "size", "name"])
                ])
              ];
            }
          }),
          _: 3
        }), _parent);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/components/c-icon/C-Icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "CIcon" });

export { __nuxt_component_0 as default };
//# sourceMappingURL=C-Icon-DtEmzy2w.mjs.map
