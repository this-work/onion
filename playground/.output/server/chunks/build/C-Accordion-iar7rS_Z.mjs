import __nuxt_component_0$1 from './C-Icon-DtEmzy2w.mjs';
import __nuxt_component_2 from './C-Text-BR7y9aN_.mjs';
import { defineComponent, ref, useId, computed, normalizeClass, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { u as useBem } from './useBem-B6rIDc60.mjs';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';
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
  ...{
    inheritAttrs: false
  },
  __name: "C-Accordion",
  __ssrInlineRender: true,
  props: {
    label: {},
    text: {},
    group: {},
    initiallyOpened: { type: Boolean, default: false },
    colorMode: {}
  },
  setup(__props) {
    const properties = __props;
    const { componentName } = useComponentInstance();
    const componentRef = ref(null);
    ref(null);
    ref(null);
    const labelId = useId();
    const panelId = useId();
    const openContent = ref(properties.initiallyOpened);
    const partialClass = computed(
      () => normalizeClass(
        [
          componentName,
          useColorMode().getClasses(properties),
          {
            [useBem(void 0, `open`, componentName)]: openContent.value
          }
        ]
      )
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_C_Icon = __nuxt_component_0$1;
      const _component_c_text = __nuxt_component_2;
      _push(`<details${ssrRenderAttrs(mergeProps({
        key: openContent.value + "",
        ref_key: "componentRef",
        ref: componentRef,
        "data-groupName": _ctx.group,
        open: _ctx.initiallyOpened,
        class: partialClass.value
      }, _attrs))}><summary class="${ssrRenderClass(unref(useBem)("label"))}"${ssrRenderAttr("aria-expanded", openContent.value)}${ssrRenderAttr("aria-controls", unref(panelId))}>`);
      _push(ssrRenderComponent(_component_C_Icon, {
        tag: "figure",
        class: unref(useBem)("icon"),
        "aria-hidden": "true",
        name: "chevron-right",
        size: "24px"
      }, null, _parent));
      _push(`<span${ssrRenderAttr("id", unref(labelId))} class="${ssrRenderClass(unref(useBem)("label-text"))}">${_ctx.label ?? ""}</span></summary><div${ssrRenderAttr("id", unref(panelId))} class="${ssrRenderClass(unref(useBem)("content"))}" role="region"${ssrRenderAttr("aria-labelledby", unref(labelId))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(ssrRenderComponent(_component_c_text, { text: _ctx.text }, null, _parent));
      }, _push, _parent);
      _push(`</div></details>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/components/c-accordion/C-Accordion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "CAccordion" });

export { __nuxt_component_0 as default };
//# sourceMappingURL=C-Accordion-iar7rS_Z.mjs.map
