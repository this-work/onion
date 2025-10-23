import __nuxt_component_0 from './C-Accordion-iar7rS_Z.mjs';
import { _ as __nuxt_component_2, u as useBackground } from './Slot-CnrEHEKS.mjs';
import { defineComponent, computed, normalizeClass, mergeProps, withCtx, renderSlot, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { u as useBem } from './useBem-B6rIDc60.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';
import { u as useSpacing } from './useSpacing-7hsUgoqU.mjs';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
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
import 'ipx';
import 'vue-router';
import './composables-BNjskvIb.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';
import './C-Text-BR7y9aN_.mjs';
import './useCssVar-ulhRdbnU.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "M-Accordion",
  __ssrInlineRender: true,
  props: {
    accordions: {}
  },
  setup(__props) {
    const { componentName } = useComponentInstance();
    const partialClass = computed(
      () => normalizeClass(
        [
          componentName
        ]
      )
    );
    function accordionClasses(accordion) {
      return normalizeClass(
        [
          useBem("accordion"),
          useSpacing().getClasses(accordion),
          useBackground().getClasses(accordion),
          useColorMode().getClasses(accordion),
          {
            [`border-radius-${accordion.borderRadius}`]: !!accordion.borderRadius
          }
        ]
      );
    }
    function accordionStyles(accordion) {
      return {
        ...useBackground().getStyles(accordion)
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_C_Accordion = __nuxt_component_0;
      const _component_Slot = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: partialClass.value }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.accordions, (accordion, index) => {
        _push(ssrRenderComponent(_component_C_Accordion, mergeProps({
          key: index,
          class: accordionClasses(accordion),
          styles: accordionStyles(accordion)
        }, { ref_for: true }, accordion), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(accordion.slots, (slot, slotIndex) => {
                  _push2(ssrRenderComponent(_component_Slot, mergeProps({ key: slotIndex }, { ref_for: true }, slot.data, {
                    components: slot.components
                  }), null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  (openBlock(true), createBlock(Fragment, null, renderList(accordion.slots, (slot, slotIndex) => {
                    return openBlock(), createBlock(_component_Slot, mergeProps({ key: slotIndex }, { ref_for: true }, slot.data, {
                      components: slot.components
                    }), null, 16, ["components"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/modules/m-accordion/M-Accordion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MAccordion = Object.assign(_sfc_main, { __name: "MAccordion" });

export { MAccordion as default };
//# sourceMappingURL=M-Accordion-DuDpjv9d.mjs.map
