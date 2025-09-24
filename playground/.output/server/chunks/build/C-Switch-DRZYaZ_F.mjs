import __nuxt_component_0 from './C-Icon-DtEmzy2w.mjs';
import { defineComponent, computed, normalizeClass, ref, watch, useAttrs, mergeProps, unref, useSlots, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrLooseContain, ssrGetDynamicModelProps, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "C-Switch",
  __ssrInlineRender: true,
  props: {
    label: {},
    checked: { type: Boolean },
    class: {},
    name: {},
    instruction: {},
    colorMode: {}
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const properties = __props;
    const { componentName } = useComponentInstance();
    const partialClass = computed(
      () => normalizeClass(
        [
          componentName,
          properties.class || "",
          useColorMode().getClasses(properties)
        ]
      )
    );
    const value = ref(properties.checked);
    watch(value, async (newValue) => {
      emit("change", newValue);
    });
    const isRequired = computed(() => {
      const attrs = useAttrs();
      if (attrs.hasOwnProperty("required")) {
        return true;
      }
      return false;
    });
    const hasSlotContent = (slotName) => {
      if (!slotName) {
        return !!useSlots().default;
      }
      return useSlots().hasOwnProperty(slotName);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_icon = __nuxt_component_0;
      let _temp0;
      _push(`<span${ssrRenderAttrs(mergeProps({ class: partialClass.value }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        if (_ctx.label || hasSlotContent("label")) {
          _push(`<span class="${ssrRenderClass(unref(useBem)("label"))}">`);
          ssrRenderSlot(_ctx.$slots, "label", {}, () => {
            _push(`<span>${_ctx.label ?? ""}</span>`);
            if (isRequired.value) {
              _push(`<span aria-label="required">*</span>`);
            } else {
              _push(`<!---->`);
            }
          }, _push, _parent);
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        ssrRenderSlot(_ctx.$slots, "input", {}, () => {
          _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
            checked: Array.isArray(value.value) ? ssrLooseContain(value.value, null) : value.value
          }, _ctx.$attrs, {
            class: unref(useBem)("form-element"),
            id: _ctx.name,
            name: _ctx.name,
            "aria-label": _ctx.name,
            "aria-checked": value.value,
            type: "checkbox",
            tabindex: "0"
          }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, value.value))))}>`);
        }, _push, _parent);
        _push(`<label role="checkbox"${ssrRenderAttr("for", _ctx.name)} class="${ssrRenderClass(unref(useBem)("field"))}"><div class="${ssrRenderClass(unref(useBem)("field-area"))}">`);
        ssrRenderSlot(_ctx.$slots, "icon-true", {}, () => {
          _push(ssrRenderComponent(_component_c_icon, { name: "check" }, null, _parent));
        }, _push, _parent);
        _push(`</div><div class="${ssrRenderClass(unref(useBem)("field-area"))}">`);
        ssrRenderSlot(_ctx.$slots, "icon-false", {}, () => {
          _push(ssrRenderComponent(_component_c_icon, { name: "close" }, null, _parent));
        }, _push, _parent);
        _push(`</div></label>`);
        if (_ctx.instruction || hasSlotContent("instruction")) {
          _push(`<span class="${ssrRenderClass(unref(useBem)("instruction"))}">`);
          ssrRenderSlot(_ctx.$slots, "instruction", {}, () => {
            _push(`<small>${_ctx.instruction ?? ""}</small>`);
          }, _push, _parent);
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/components/c-switch/C-Switch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main, { __name: "CSwitch" });

export { __nuxt_component_7 as default };
//# sourceMappingURL=C-Switch-DRZYaZ_F.mjs.map
