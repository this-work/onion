import __nuxt_component_0 from './C-Slider-3y18GX-l.mjs';
import { _ as __nuxt_component_2, u as useBackground } from './Slot-CnrEHEKS.mjs';
import { defineComponent, computed, normalizeClass, ref, mergeProps, unref, withCtx, renderSlot, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { a as useElementVisibility } from './index-kSUyau-2.mjs';
import merge from 'lodash/merge.js';
import { u as useBem } from './useBem-B6rIDc60.mjs';
import { u as useCssVar } from './useCssVar-ulhRdbnU.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';
import { u as useSpacing } from './useSpacing-7hsUgoqU.mjs';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
import './C-Button-BYIrkxZH.mjs';
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
import 'ipx';
import 'vue-router';
import './composables-BNjskvIb.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';
import './nuxt-link-Cziyx-rU.mjs';
import 'lodash';
import 'swiper/element/bundle';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "M-Slider",
  __ssrInlineRender: true,
  props: {
    slides: {},
    swiperParameter: {}
  },
  setup(__props) {
    const properties = __props;
    const { componentName } = useComponentInstance();
    const partialClass = computed(
      () => normalizeClass(
        [
          componentName
        ]
      )
    );
    const defaultSwiperModuleParameter = {
      effect: "slide",
      freeMode: true,
      slidesPerView: "auto",
      autoHeight: false,
      navigation: {
        enabled: false
      },
      pagination: {
        type: "bullets"
      },
      injectStyles: [
        `.swiper {overflow: visible;}`
      ]
    };
    const breakpointGaps = JSON.parse(useCssVar("grid-gaps").replace("(", "{").replace(")", "}").replaceAll("px", ""));
    const breakpointsForSpacing = {
      breakpoints: {}
    };
    for (const index in breakpointGaps) {
      breakpointsForSpacing.breakpoints[index !== "default" ? Number.parseInt(useCssVar("breakpoint-" + index)) : 0] = {
        spaceBetween: breakpointGaps[index]
      };
    }
    const swiperParameter = merge(defaultSwiperModuleParameter, breakpointsForSpacing, properties.swiperParameter);
    const slider = ref(null);
    const sliderIsVisible = useElementVisibility(slider, {
      rootMargin: "-30% 0px -40% 0px"
    });
    function slideWidth(slide) {
      let width = 0;
      for (const slot of slide.slots) {
        width += slot.data.width;
      }
      return width;
    }
    function slideClasses(slide) {
      if (!Object.prototype.hasOwnProperty.call(slide, "data")) {
        return useBem("slide");
      }
      return normalizeClass(
        [
          useBem("slide"),
          useSpacing().getClasses(slide),
          useBackground().getClasses(slide),
          useColorMode().getClasses(slide),
          {
            [`border-radius-${slide.borderRadius}`]: !!slide.borderRadius
          }
        ]
      );
    }
    function slideStyles(slide) {
      return {
        ...useBackground().getStyles(slide)
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_C_Slider = __nuxt_component_0;
      const _component_Slot = __nuxt_component_2;
      _push(ssrRenderComponent(_component_C_Slider, mergeProps({
        ref_key: "slider",
        ref: slider,
        class: [partialClass.value, unref(sliderIsVisible) ? unref(useBem)(void 0, `show-navigation`) : unref(useBem)(void 0, `hide-navigation`)],
        "swiper-parameter": unref(swiperParameter)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.slides, (slide, index) => {
                _push2(`<swiper-slide class="${ssrRenderClass(slideClasses(slide))}"${ssrRenderAttr("styles", slideStyles(slide))} style="${ssrRenderStyle("--slide-width: " + slideWidth(slide))}"${_scopeId}><!--[-->`);
                ssrRenderList(slide.slots, (slot, slotIndex) => {
                  _push2(ssrRenderComponent(_component_Slot, mergeProps({ key: slotIndex }, { ref_for: true }, slot.data, {
                    components: slot.components
                  }), null, _parent2, _scopeId));
                });
                _push2(`<!--]--></swiper-slide>`);
              });
              _push2(`<!--]-->`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.slides, (slide, index) => {
                  return openBlock(), createBlock("swiper-slide", {
                    key: index,
                    class: slideClasses(slide),
                    styles: slideStyles(slide),
                    style: "--slide-width: " + slideWidth(slide)
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(slide.slots, (slot, slotIndex) => {
                      return openBlock(), createBlock(_component_Slot, mergeProps({ key: slotIndex }, { ref_for: true }, slot.data, {
                        components: slot.components
                      }), null, 16, ["components"]);
                    }), 128))
                  ], 14, ["styles"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/modules/m-slider/M-Slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MSlider = Object.assign(_sfc_main, { __name: "MSlider" });

export { MSlider as default };
//# sourceMappingURL=M-Slider-1HfKUNOu.mjs.map
