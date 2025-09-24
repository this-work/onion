import __nuxt_component_2 from './C-Text-BR7y9aN_.mjs';
import { defineComponent, computed, normalizeClass, createVNode, resolveDynamicComponent, mergeProps, withCtx, unref, createBlock, createCommentVNode, renderSlot, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderClass, ssrRenderSlot, ssrRenderList, ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { u as useBem } from './useBem-B6rIDc60.mjs';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';
import { u as useCssVar } from './useCssVar-ulhRdbnU.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "C-Image",
  __ssrInlineRender: true,
  props: {
    tag: { default: "figure" },
    src: {},
    srcAlternates: {},
    lazy: { type: Boolean, default: true },
    title: {},
    alt: {},
    fit: { default: "cover" },
    position: { default: "center center" },
    autosize: { type: Boolean, default: false },
    borderRadius: {},
    description: {},
    aspectRatios: {},
    colorMode: {}
  },
  setup(__props) {
    const properties = __props;
    const { componentName } = useComponentInstance();
    const partialClass = computed(() => {
      const aspectRatioClasses = {};
      if (properties.autosize) {
        aspectRatioClasses[useBem(void 0, `autosize`)] = properties.autosize;
      }
      if (properties.aspectRatios) {
        for (const aspectRatio in properties.aspectRatios) {
          aspectRatioClasses[useBem(void 0, `has-aspect-ratio-${aspectRatio}`)] = true;
        }
      }
      return normalizeClass([componentName, useColorMode().getClasses(properties), aspectRatioClasses]);
    });
    const imageStyles = computed(() => {
      const cssStyles = {};
      if (properties.fit) {
        cssStyles[`object-fit`] = properties.fit;
      }
      if (properties.position) {
        cssStyles[`object-position`] = properties.position;
      }
      if (properties.aspectRatios) {
        for (const aspectRatio in properties.aspectRatios) {
          cssStyles[`--aspect-ratio-${aspectRatio}`] = properties.aspectRatios[aspectRatio];
        }
      }
      return cssStyles;
    });
    const imageClasses = computed(() => {
      const classes = {
        [useBem("image")]: true
      };
      if (properties.borderRadius) {
        classes[`border-radius-${properties.borderRadius}`] = true;
      }
      return classes;
    });
    const formattedSrcAlternates = computed(() => {
      const sources = [];
      if (properties.srcAlternates) {
        for (const srcAlternateMediaQuerySize in properties.srcAlternates) {
          let mediaQuerySize = "0px";
          if (srcAlternateMediaQuerySize !== "default") {
            mediaQuerySize = useCssVar(`breakpoint-${srcAlternateMediaQuerySize}`);
          }
          const alternates = properties.srcAlternates[srcAlternateMediaQuerySize];
          for (const alternate in alternates) {
            sources.push({
              srcset: buildSourceSet(alternates[alternate]),
              media: mediaQuerySize != "0px" ? `(min-width: ${mediaQuerySize})` : void 0,
              type: `image/${alternate}`
            });
          }
        }
      }
      return sources.reverse();
    });
    function buildSourceSet(sourceSet) {
      let sourceSetString = "";
      for (const source in sourceSet) {
        sourceSetString += `${sourceSet[source]} ${source}, `;
      }
      return sourceSetString.slice(0, -2);
    }
    const loadingMethod = computed(() => properties.lazy ? "lazy" : "eager");
    const captionTag = computed(() => properties.tag === "figure" ? "figcaption" : "span");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_c_text = __nuxt_component_2;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.tag), mergeProps({ class: partialClass.value }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<picture class="${ssrRenderClass(unref(useBem)("wrapper"))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`<!--[-->`);
              ssrRenderList(formattedSrcAlternates.value, (source, index) => {
                _push2(`<source${ssrRenderAttrs(mergeProps({ ref_for: true }, source, { key: index }))}${_scopeId}>`);
              });
              _push2(`<!--]--><img${ssrRenderAttr("src", _ctx.src)}${ssrRenderAttr("loading", loadingMethod.value)} class="${ssrRenderClass(imageClasses.value)}" style="${ssrRenderStyle(imageStyles.value)}"${ssrRenderAttr("alt", _ctx.alt)}${ssrRenderAttr("title", _ctx.title)} role="img" draggable="false"${_scopeId}>`);
            }, _push2, _parent2, _scopeId);
            _push2(`</picture>`);
            if (_ctx.description) {
              _push2(ssrRenderComponent(_component_c_text, {
                tag: captionTag.value,
                class: unref(useBem)("caption")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p${_scopeId2}>${_ctx.description ?? ""}</p>`);
                  } else {
                    return [
                      createVNode("p", { innerHTML: _ctx.description }, null, 8, ["innerHTML"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("picture", {
                class: unref(useBem)("wrapper")
              }, [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  (openBlock(true), createBlock(Fragment, null, renderList(formattedSrcAlternates.value, (source, index) => {
                    return openBlock(), createBlock("source", mergeProps({ ref_for: true }, source, { key: index }), null, 16);
                  }), 128)),
                  createVNode("img", {
                    src: _ctx.src,
                    loading: loadingMethod.value,
                    class: imageClasses.value,
                    style: imageStyles.value,
                    alt: _ctx.alt,
                    title: _ctx.title,
                    role: "img",
                    draggable: "false"
                  }, null, 14, ["src", "loading", "alt", "title"])
                ])
              ], 2),
              _ctx.description ? (openBlock(), createBlock(_component_c_text, {
                key: 0,
                tag: captionTag.value,
                class: unref(useBem)("caption")
              }, {
                default: withCtx(() => [
                  createVNode("p", { innerHTML: _ctx.description }, null, 8, ["innerHTML"])
                ]),
                _: 1
              }, 8, ["tag", "class"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/components/c-image/C-Image.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "CImage" });

export { __nuxt_component_1 as default };
//# sourceMappingURL=C-Image-Duq0THOF.mjs.map
