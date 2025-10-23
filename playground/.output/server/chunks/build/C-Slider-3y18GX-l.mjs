import __nuxt_component_1 from './C-Button-BYIrkxZH.mjs';
import { defineComponent, computed, normalizeClass, useTemplateRef, useId, mergeProps, createVNode, resolveDynamicComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderVNode, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';
import { u as useBem } from './useBem-B6rIDc60.mjs';
import { merge } from 'lodash';
import { register } from 'swiper/element/bundle';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "C-Slider",
  __ssrInlineRender: true,
  props: {
    slides: {},
    swiperParameter: {},
    colorMode: {}
  },
  setup(__props) {
    register();
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
    useTemplateRef("swiper");
    const slideId = "swiper-" + useId();
    const defaultSwiperParameter = {
      loop: false,
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        enabled: true,
        nextEl: `#${slideId} .${useBem("control-button", "next-slide")}`,
        prevEl: `#${slideId} .${useBem("control-button", "previous-slide")}`
      },
      pagination: {
        enabled: true,
        el: `#${slideId} .${useBem("pagination")}`,
        type: "fraction",
        bulletElement: "button",
        clickable: true,
        renderBullet: function(index, className) {
          return '<button class="' + className + '"><span class="swiper-pagination-bullet-point"></span></button>';
        }
      },
      slidesPerView: 1,
      autoHeight: true
    };
    const swiperParameter = merge(defaultSwiperParameter, properties.swiperParameter);
    const hasNavigation = computed(() => {
      return swiperParameter.navigation?.enabled;
    });
    const hasPagination = computed(() => {
      return swiperParameter.pagination?.enabled;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_button = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: slideId,
        class: partialClass.value
      }, _attrs))}><swiper-container init="false">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`<!--[-->`);
        ssrRenderList(_ctx.slides, (component, index) => {
          _push(`<swiper-slide>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.name), mergeProps({ ref_for: true }, component.data), null), _parent);
          _push(`</swiper-slide>`);
        });
        _push(`<!--]-->`);
      }, _push, _parent);
      _push(`</swiper-container><nav class="${ssrRenderClass(unref(useBem)("navigation"))}"><div class="${ssrRenderClass(unref(useBem)("navigation-wrapper"))}">`);
      if (hasNavigation.value) {
        _push(ssrRenderComponent(_component_c_button, {
          icon: "chevron-left",
          class: [unref(useBem)("control-button"), unref(useBem)("control-button", "previous-slide")],
          appearance: "system",
          background: "soft"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (hasPagination.value) {
        _push(`<div class="${ssrRenderClass(unref(useBem)("pagination"))}"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (hasNavigation.value) {
        _push(ssrRenderComponent(_component_c_button, {
          icon: "chevron-right",
          class: [unref(useBem)("control-button"), unref(useBem)("control-button", "next-slide")],
          appearance: "system",
          background: "soft"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/components/c-slider/C-Slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "CSlider" });

export { __nuxt_component_0 as default };
//# sourceMappingURL=C-Slider-3y18GX-l.mjs.map
