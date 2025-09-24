import { defineComponent, computed, normalizeClass, ref, watch, useAttrs, mergeProps, unref, useSlots, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { u as useBem } from './useBem-B6rIDc60.mjs';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "C-Textarea",
  __ssrInlineRender: true,
  props: {
    label: {},
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
          useColorMode().getClasses(properties)
        ]
      )
    );
    const value = ref("");
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
        _push(`<textarea${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
          class: unref(useBem)("form-element"),
          id: _ctx.name,
          name: _ctx.name,
          "aria-label": _ctx.label
        }), "textarea")}>${ssrInterpolate(value.value)}</textarea>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/components/c-textarea/C-Textarea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_9 = Object.assign(_sfc_main, { __name: "CTextarea" });

export { __nuxt_component_9 as default };
//# sourceMappingURL=C-Textarea-CwtbpsYj.mjs.map
