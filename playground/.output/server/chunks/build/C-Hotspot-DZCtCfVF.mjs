import __nuxt_component_1 from './C-Image-Duq0THOF.mjs';
import __nuxt_component_1$1 from './C-Modal-BK3t3pW6.mjs';
import { defineComponent, ref, computed, normalizeClass, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useBem } from './useBem-B6rIDc60.mjs';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
import './C-Text-BR7y9aN_.mjs';
import './useComponentInstance-CaQBHdps.mjs';
import './useCssVar-ulhRdbnU.mjs';
import './C-Button-ZPZkdLor.mjs';
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
import './C-Headline-CV9hrUCv.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "C-Hotspot",
  __ssrInlineRender: true,
  props: {
    image: {},
    hotspots: {},
    colorMode: {}
  },
  setup(__props) {
    const properties = __props;
    const activeSpot = ref(null);
    const partialClass = computed(() => {
      const classes = {};
      properties.hotspots.forEach((hotspot) => {
        if (hotspot.alternates) {
          Object.keys(hotspot.alternates).forEach((breakpoint) => {
            classes[useBem(void 0, `has-position-${breakpoint}`)] = true;
          });
        }
      });
      return normalizeClass([useColorMode().getClasses(properties), classes]);
    });
    const updateModalState = (show, index) => {
      activeSpot.value = show ? index : null;
    };
    const getSpotStyles = (spot) => {
      const styles = {};
      styles["--x-position"] = `${spot.x}%`;
      styles["--y-position"] = `${spot.y}%`;
      if (spot.alternates) {
        for (const [breakpoint, position] of Object.entries(spot.alternates)) {
          styles[`--x-position-${breakpoint}`] = `${position.x}%`;
          styles[`--y-position-${breakpoint}`] = `${position.y}%`;
        }
      }
      return styles;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_C_Image = __nuxt_component_1;
      const _component_C_Modal = __nuxt_component_1$1;
      _push(`<figure${ssrRenderAttrs(mergeProps({ class: partialClass.value }, _attrs))}>`);
      _push(ssrRenderComponent(_component_C_Image, mergeProps(_ctx.image, {
        class: unref(useBem)("image"),
        draggable: "false"
      }), null, _parent));
      _push(`<figcaption class="${ssrRenderClass(unref(useBem)("spots"))}"><!--[-->`);
      ssrRenderList(_ctx.hotspots, (spot, index) => {
        _push(`<button class="${ssrRenderClass(unref(useBem)("spot"))}" style="${ssrRenderStyle(getSpotStyles(spot))}"${ssrIncludeBooleanAttr(spot.disabled) ? " disabled" : ""}><div class="${ssrRenderClass(unref(useBem)("dot"))}"></div><div class="${ssrRenderClass(unref(useBem)("ring"))}"></div>`);
        _push(ssrRenderComponent(_component_C_Modal, mergeProps({
          show: activeSpot.value === index
        }, { ref_for: true }, spot.content, {
          "onUpdate:show": ($event) => updateModalState($event, index)
        }), null, _parent));
        _push(`</button>`);
      });
      _push(`<!--]--></figcaption></figure>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/components/c-hotspot/C-Hotspot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CHotspot = Object.assign(_sfc_main, { __name: "CHotspot" });

export { CHotspot as default };
//# sourceMappingURL=C-Hotspot-DZCtCfVF.mjs.map
