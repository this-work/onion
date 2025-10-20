import __nuxt_component_1$1 from './C-Button-ZPZkdLor.mjs';
import __nuxt_component_3 from './C-Headline-CV9hrUCv.mjs';
import __nuxt_component_1$2 from './C-Image-Duq0THOF.mjs';
import __nuxt_component_2 from './C-Text-BR7y9aN_.mjs';
import { defineComponent, useId, ref, watch, computed, useSlots, normalizeClass, unref, mergeProps, readonly, useSSRContext } from 'vue';
import { ssrRenderTeleport, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { u as useBem } from './useBem-B6rIDc60.mjs';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';
import './C-Wrapper-DaL46UAI.mjs';
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
import './nuxt-link-Cziyx-rU.mjs';
import './useCssVar-ulhRdbnU.mjs';

const modalStack = ref([]);
const modals = ref(/* @__PURE__ */ new Map());
let modalCount = 0;
function getModalNumber() {
  modalCount++;
  return modalCount;
}
function useModal(modalId = getModalNumber().toString()) {
  const open = () => {
    const level2 = modalStack.value.length;
    modals.value.set(modalId, { isOpen: true, level: level2 });
    modalStack.value.push(modalId);
  };
  const close = () => {
    modals.value.delete(modalId);
    const index = modalStack.value.indexOf(modalId);
    if (index !== -1) {
      modalStack.value.splice(index, 1);
    }
  };
  const getState = () => modals.value.get(modalId);
  const isOpen = computed(() => !!modals.value.get(modalId)?.isOpen);
  const level = computed(() => modals.value.get(modalId)?.level ?? 0);
  return {
    open,
    close,
    getState,
    isOpen: readonly(isOpen),
    level: readonly(level),
    modalStack: readonly(modalStack)
  };
}
ref(0);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "C-Modal",
  __ssrInlineRender: true,
  props: {
    rootElement: { default: "body" },
    show: { type: Boolean, default: false },
    fullwidth: { type: Boolean, default: false },
    content: {},
    title: {},
    image: {},
    headline: {},
    text: {},
    width: { default: 600 },
    colorMode: {}
  },
  emits: ["update:show", "close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const properties = __props;
    const contentID = `modal-content-${useId()}`;
    const { isOpen, level, open, close } = useModal();
    ref(null);
    watch(
      () => properties.show,
      (newValue) => {
        if (newValue) {
          open();
        } else {
          close();
        }
      },
      { immediate: true }
    );
    const emit = __emit;
    const handleClose = () => {
      close();
      emit("update:show", false);
      emit("close");
    };
    const hasContent = computed(() => properties.image || properties.headline || properties.text || properties.content || useSlots().default);
    const isSimpleLayer = computed(() => properties.image || properties.headline || properties.text);
    const isComplexLayer = computed(() => !isSimpleLayer.value);
    const { componentName } = useComponentInstance();
    const partialClass = computed(
      () => normalizeClass([
        componentName,
        useColorMode().getClasses(properties),
        {
          [useBem(void 0, "fullwidth")]: properties.fullwidth,
          [useBem(void 0, "simple")]: isSimpleLayer.value,
          [useBem(void 0, "complex")]: isComplexLayer.value,
          [useBem(void 0, "no-title")]: !properties.title
        }
      ])
    );
    __expose({
      open,
      close
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_C_Button = __nuxt_component_1$1;
      const _component_C_Headline = __nuxt_component_3;
      const _component_C_Image = __nuxt_component_1$2;
      const _component_C_Text = __nuxt_component_2;
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(isOpen)) {
          _push2(`<aside class="${ssrRenderClass(partialClass.value)}" style="${ssrRenderStyle({ background: unref(level) === 0 ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.25)" })}"><div class="${ssrRenderClass(unref(useBem)("container"))}" style="${ssrRenderStyle(isSimpleLayer.value ? { width: `${_ctx.width}px` } : {})}"><div role="dialog" aria-modal="true"${ssrRenderAttr("aria-describedby", contentID)} class="${ssrRenderClass(unref(useBem)("box"))}"><div class="${ssrRenderClass(unref(useBem)("controls"))}">`);
          _push2(ssrRenderComponent(_component_C_Button, {
            icon: "close-rounded",
            "aria-label": "Close modal",
            background: "soft",
            onClick: handleClose
          }, null, _parent));
          _push2(`</div>`);
          if (_ctx.title && isSimpleLayer.value) {
            _push2(ssrRenderComponent(_component_C_Headline, {
              headline: _ctx.title,
              class: unref(useBem)("title"),
              "headline-type": "h6",
              "headline-tag": "h3"
            }, null, _parent));
          } else {
            _push2(`<!---->`);
          }
          if (hasContent.value) {
            _push2(`<article${ssrRenderAttr("id", contentID)} class="${ssrRenderClass(unref(useBem)("content"))}">`);
            if (_ctx.image) {
              _push2(ssrRenderComponent(_component_C_Image, mergeProps(_ctx.image, {
                class: unref(useBem)("image")
              }), null, _parent));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.headline) {
              _push2(ssrRenderComponent(_component_C_Headline, mergeProps(_ctx.headline, {
                class: unref(useBem)("headline")
              }), null, _parent));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.text) {
              _push2(ssrRenderComponent(_component_C_Text, mergeProps(_ctx.text, {
                class: unref(useBem)("text")
              }), null, _parent));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`<div>${_ctx.content ?? ""}</div>`);
            }, _push2, _parent);
            _push2(`</article>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div></aside>`);
        } else {
          _push2(`<!---->`);
        }
      }, _ctx.rootElement, false, _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/components/c-modal/C-Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "CModal" });

export { __nuxt_component_1 as default };
//# sourceMappingURL=C-Modal-BK3t3pW6.mjs.map
