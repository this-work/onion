import { defineComponent, computed, normalizeClass, mergeProps, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
import { u as useSpacing } from './useSpacing-7hsUgoqU.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';
import { u as useCssVar } from './useCssVar-ulhRdbnU.mjs';

function useBackground() {
  const getClasses = (props) => {
    const { background, backgroundImage } = props;
    return normalizeClass({
      [`background-color-${background}`]: background,
      ["has-background-image"]: backgroundImage
    });
  };
  const getStyles = (props) => {
    return {
      "backgroundImage": props.backgroundImage ? `url("${props.backgroundImage}")` : void 0,
      "backgroundPosition": props.backgroundPosition ? props.backgroundPosition : void 0,
      "--closest-background-color": props.background ? "var(--color-" + props.background + ")" : void 0
    };
  };
  return {
    getClasses,
    getStyles
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Slot",
  __ssrInlineRender: true,
  props: {
    width: { default: parseInt(useCssVar("grid-columns")) },
    height: {},
    column: {},
    row: {},
    borderRadius: {},
    horizontalAlignment: {},
    componentSpacing: { default: "l" },
    components: {},
    background: {},
    backgroundImage: {},
    backgroundPosition: {},
    paddingTop: {},
    paddingBottom: {},
    paddingRight: {},
    paddingLeft: {},
    marginTop: {},
    marginBottom: {},
    marginRight: {},
    marginLeft: {},
    colorMode: {}
  },
  setup(__props) {
    const properties = __props;
    const { componentName } = useComponentInstance();
    const partialClass = computed(
      () => normalizeClass(
        [
          componentName,
          useSpacing().getClasses(properties, true),
          useBackground().getClasses(properties),
          useColorMode().getClasses(properties),
          {
            [`offset-right-${properties.paddingRight}`]: properties.paddingRight,
            [`offset-left-${properties.paddingLeft}`]: properties.paddingLeft,
            [`border-radius-${properties.borderRadius}`]: properties.borderRadius,
            [`text-align-${properties.horizontalAlignment}`]: properties.horizontalAlignment
          }
        ]
      )
    );
    const partialStyle = computed(() => {
      return {
        ...useBackground().getStyles(properties),
        "--slot-column-width": properties.width,
        "--slot-column-start": properties.column,
        "--slot-row-height": properties.height,
        "--slot-row-start": properties.row,
        "--slot-component-spacing": `var(--spacing-${properties.componentSpacing})`
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref: "slot",
        class: partialClass.value,
        style: partialStyle.value
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`<!--[-->`);
        ssrRenderList(_ctx.components, (component, index) => {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.name), mergeProps({ ref_for: true }, component.data, { key: index }), null), _parent);
        });
        _push(`<!--]-->`);
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/structure/slot/Slot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "Slot" });
const Slot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_2
}, Symbol.toStringTag, { value: "Module" }));

export { Slot as S, __nuxt_component_2 as _, useBackground as u };
//# sourceMappingURL=Slot-CnrEHEKS.mjs.map
