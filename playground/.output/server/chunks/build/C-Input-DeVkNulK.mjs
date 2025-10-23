import { defineComponent, computed, normalizeClass, ref, watch, useAttrs, useSlots, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrGetDynamicModelProps } from 'vue/server-renderer';
import { u as useBem } from './useBem-B6rIDc60.mjs';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "C-Input",
  __ssrInlineRender: true,
  props: {
    label: {},
    value: {},
    class: {},
    name: {},
    instruction: {},
    prefix: {},
    suffix: {},
    colorMode: {}
  },
  emits: ["input", "change"],
  setup(__props, { emit: __emit }) {
    const properties = __props;
    const { componentName } = useComponentInstance();
    const partialClass = computed(
      () => normalizeClass(
        [
          componentName,
          properties.class || "",
          useColorMode().getClasses(properties),
          {
            [useBem(void 0, `prefix`)]: properties.prefix || hasSlotContent("prefix"),
            [useBem(void 0, `suffix`)]: properties.suffix || hasSlotContent("suffix")
          }
        ]
      )
    );
    const value = ref(properties.value || "");
    watch(() => properties.value, (newValue) => {
      value.value = newValue ?? "";
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
    const inputmode = computed(() => {
      const attrs = useAttrs();
      if (attrs.hasOwnProperty("inputmode")) {
        return attrs.type === "number" ? "decimal" : attrs.inputmode;
      }
      return void 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<label${ssrRenderAttrs(mergeProps({
        for: _ctx.name,
        class: partialClass.value
      }, _attrs))}>`);
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
        _push(`<span class="${ssrRenderClass(unref(useBem)("field"))}">`);
        ssrRenderSlot(_ctx.$slots, "input", {}, () => {
          _push(`<input${ssrRenderAttrs((_temp0 = mergeProps(_ctx.$attrs, {
            class: unref(useBem)("form-element"),
            id: _ctx.name,
            name: _ctx.name,
            inputmode: inputmode.value,
            "aria-label": _ctx.label,
            value: value.value
          }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, value.value))))}>`);
        }, _push, _parent);
        if (_ctx.prefix || hasSlotContent("prefix")) {
          _push(`<span class="${ssrRenderClass(unref(useBem)("prefix"))}">`);
          ssrRenderSlot(_ctx.$slots, "prefix", {}, () => {
            _push(`<span>${_ctx.prefix ?? ""}</span>`);
          }, _push, _parent);
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.suffix || hasSlotContent("suffix")) {
          _push(`<span class="${ssrRenderClass(unref(useBem)("suffix"))}">`);
          ssrRenderSlot(_ctx.$slots, "suffix", {}, () => {
            _push(`<span>${_ctx.suffix ?? ""}</span>`);
          }, _push, _parent);
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
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
      _push(`</label>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/components/c-input/C-Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main, { __name: "CInput" });

export { __nuxt_component_6 as default };
//# sourceMappingURL=C-Input-DeVkNulK.mjs.map
