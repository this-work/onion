import __nuxt_component_1 from './C-Image-Duq0THOF.mjs';
import __nuxt_component_0 from './C-Icon-DtEmzy2w.mjs';
import { defineComponent, ref, watch, computed, normalizeClass, createVNode, resolveDynamicComponent, mergeProps, withCtx, unref, renderSlot, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderSlot, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useBem } from './useBem-B6rIDc60.mjs';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';
import './C-Text-BR7y9aN_.mjs';
import './useCssVar-ulhRdbnU.mjs';
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
  __name: "C-AB-Slider",
  __ssrInlineRender: true,
  props: {
    tag: { default: "div" },
    before: {},
    after: {},
    bounds: { default: 0 },
    initialPosition: { default: 50 },
    keyboardIncrement: { default: 5 },
    disabled: { type: Boolean, default: false },
    colorMode: {}
  },
  setup(__props) {
    const properties = __props;
    const isDragging = ref(false);
    const position = ref(properties.initialPosition);
    const containerElement = ref(null);
    const constrainPosition = (value) => {
      const minPosition = properties.bounds;
      const maxPosition = 100 - properties.bounds;
      return Math.max(minPosition, Math.min(maxPosition, value));
    };
    watch(
      () => properties.initialPosition,
      (newInitialPositionValue) => {
        position.value = constrainPosition(newInitialPositionValue);
      },
      { immediate: true }
    );
    const updatePosition = (clientX) => {
      if (properties.disabled || !containerElement.value) {
        return;
      }
      const rect = containerElement.value.getBoundingClientRect();
      const x = clientX - rect.left;
      const rawPosition = x / rect.width * 100;
      position.value = constrainPosition(rawPosition);
    };
    const onKeyDown = (event) => {
      if (properties.disabled || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
        return;
      }
      event.preventDefault();
      switch (event.key) {
        case "ArrowLeft":
          position.value = constrainPosition(position.value - properties.keyboardIncrement);
          break;
        case "ArrowRight":
          position.value = constrainPosition(position.value + properties.keyboardIncrement);
          break;
        case "Home":
          position.value = properties.bounds;
          break;
        case "End":
          position.value = 100 - properties.bounds;
          break;
      }
    };
    const onContainerPointerDown = (event) => {
      if (properties.disabled || event.button !== 0) {
        return;
      }
      event.preventDefault();
      isDragging.value = true;
      updatePosition(event.clientX);
    };
    const beforeStyle = computed(() => ({ clipPath: `inset(0 ${100 - position.value}% 0 0)` }));
    const afterStyle = computed(() => ({ clipPath: `inset(0 0 0 ${position.value}%)` }));
    const handleStyle = computed(() => ({ left: `${position.value}%` }));
    const { componentName } = useComponentInstance();
    const partialClass = computed(
      () => normalizeClass([
        componentName,
        useColorMode().getClasses(properties),
        {
          [useBem(void 0, "disabled")]: properties.disabled
        }
      ])
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_C_Image = __nuxt_component_1;
      const _component_C_Icon = __nuxt_component_0;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.tag), mergeProps({
        ref_key: "containerElement",
        ref: containerElement,
        class: partialClass.value,
        onPointerdown: onContainerPointerDown,
        onKeydown: onKeyDown
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "before", {}, () => {
              _push2(ssrRenderComponent(_component_C_Image, mergeProps(_ctx.before, {
                class: unref(useBem)("before"),
                style: beforeStyle.value
              }), null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "after", {}, () => {
              _push2(ssrRenderComponent(_component_C_Image, mergeProps(_ctx.after, {
                class: unref(useBem)("after"),
                style: afterStyle.value
              }), null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            _push2(`<button class="${ssrRenderClass(unref(useBem)("handle"))}" style="${ssrRenderStyle(handleStyle.value)}" role="slider" aria-label="Zum verschieben ziehen oder fokussieren und Pfeiltasten verwenden" aria-orientation="horizontal" aria-valuemin="0" aria-valuemax="100"${ssrRenderAttr("aria-valuenow", Math.round(position.value))}${ssrIncludeBooleanAttr(properties.disabled) ? " disabled" : ""}${_scopeId}><div class="${ssrRenderClass(unref(useBem)("divider"))}"${_scopeId}></div>`);
            ssrRenderSlot(_ctx.$slots, "handle", {}, () => {
              _push2(ssrRenderComponent(_component_C_Icon, {
                name: "drag-vertical-variant",
                package: "mdi",
                class: unref(useBem)("icon"),
                size: "24px"
              }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            _push2(`<div class="${ssrRenderClass(unref(useBem)("divider"))}"${_scopeId}></div></button>`);
          } else {
            return [
              renderSlot(_ctx.$slots, "before", {}, () => [
                createVNode(_component_C_Image, mergeProps(_ctx.before, {
                  class: unref(useBem)("before"),
                  style: beforeStyle.value
                }), null, 16, ["class", "style"])
              ]),
              renderSlot(_ctx.$slots, "after", {}, () => [
                createVNode(_component_C_Image, mergeProps(_ctx.after, {
                  class: unref(useBem)("after"),
                  style: afterStyle.value
                }), null, 16, ["class", "style"])
              ]),
              createVNode("button", {
                class: unref(useBem)("handle"),
                style: handleStyle.value,
                role: "slider",
                "aria-label": "Zum verschieben ziehen oder fokussieren und Pfeiltasten verwenden",
                "aria-orientation": "horizontal",
                "aria-valuemin": "0",
                "aria-valuemax": "100",
                "aria-valuenow": Math.round(position.value),
                disabled: properties.disabled
              }, [
                createVNode("div", {
                  class: unref(useBem)("divider")
                }, null, 2),
                renderSlot(_ctx.$slots, "handle", {}, () => [
                  createVNode(_component_C_Icon, {
                    name: "drag-vertical-variant",
                    package: "mdi",
                    class: unref(useBem)("icon"),
                    size: "24px"
                  }, null, 8, ["class"])
                ]),
                createVNode("div", {
                  class: unref(useBem)("divider")
                }, null, 2)
              ], 14, ["aria-valuenow", "disabled"])
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/components/c-ab-slider/C-AB-Slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CABSlider = Object.assign(_sfc_main, { __name: "CABSlider" });

export { CABSlider as default };
//# sourceMappingURL=C-AB-Slider-0qht4TdC.mjs.map
