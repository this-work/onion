import { defineComponent, computed, normalizeClass, createVNode, resolveDynamicComponent, mergeProps, withCtx, unref, createBlock, createCommentVNode, openBlock, renderSlot, Fragment, renderList, useAttrs, ref, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { z as defu, A as withLeadingSlash, i as hasProtocol, j as joinURL, B as parseURL, C as encodeParam, D as encodePath } from '../nitro/nitro.mjs';
import { a as useNuxtApp, b as useRuntimeConfig } from './server.mjs';
import { u as useHead } from './composables-BNjskvIb.mjs';
import __nuxt_component_2 from './C-Text-BR7y9aN_.mjs';
import { u as useBem } from './useBem-B6rIDc60.mjs';
import { u as useColorMode } from './useColorMode-BHUoQmDp.mjs';
import { u as useComponentInstance } from './useComponentInstance-CaQBHdps.mjs';
import { u as useCssVar } from './useCssVar-ulhRdbnU.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

function getFileExtension(url = "") {
  const extension = url.split(/[?#]/).shift().split("/").pop().split(".").pop();
  return extension;
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('./index-BdoV8z1p.mjs').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        const alias = ctx.options.alias[base];
        if (alias) {
          input = joinURL(alias, input.slice(base.length));
        }
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if (_options.modifiers?.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if (_options.modifiers?.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  const width = parseSize(opts.modifiers?.width);
  const height = parseSize(opts.modifiers?.height);
  const sizes = parseSizes(opts.sizes);
  const densities = opts.densities?.trim() ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = key ? getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx) : void 0;
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: opts.modifiers?.width,
          _cHeight: opts.modifiers?.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant?.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = sizeVariants[i + 1]?.media || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$QVVA5G4I8oLCN4suF_45zdGINt9nwzajai4zSOw200dAk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getImage,
  operationsGenerator,
  supportsAlias,
  validateDomains
}, Symbol.toStringTag, { value: "Module" }));
const imageOptions = {
  ...{
    "screens": {
      "xs": 320,
      "sm": 640,
      "md": 768,
      "lg": 1024,
      "xl": 1280,
      "xxl": 1536,
      "2xl": 1536
    },
    "presets": {},
    "provider": "ipx",
    "domains": [],
    "alias": {},
    "densities": [
      1,
      2
    ],
    "format": [
      "webp"
    ]
  },
  providers: {
    ["ipx"]: { provider: ipxRuntime$QVVA5G4I8oLCN4suF_45zdGINt9nwzajai4zSOw200dAk, defaults: {} }
  }
};
const useImage = (event) => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    event: nuxtApp.ssrContext?.event,
    nuxt: {
      baseURL: config.app.baseURL
    },
    runtimeConfig: config
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: false },
  // modifiers
  format: { type: String, required: false },
  quality: { type: [Number, String], required: false },
  background: { type: String, required: false },
  fit: { type: String, required: false },
  modifiers: { type: Object, required: false },
  // options
  preset: { type: String, required: false },
  provider: { type: String, required: false },
  sizes: { type: [Object, String], required: false },
  densities: { type: String, required: false },
  preload: {
    type: [Boolean, Object],
    required: false
  },
  // <img> attributes
  width: { type: [String, Number], required: false },
  height: { type: [String, Number], required: false },
  alt: { type: String, required: false },
  referrerpolicy: { type: String, required: false },
  usemap: { type: String, required: false },
  longdesc: { type: String, required: false },
  ismap: { type: Boolean, required: false },
  loading: {
    type: String,
    required: false,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    required: false,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    required: false,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], required: false }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const pictureProps = {
  ...baseImageProps,
  legacyFormat: { type: String, default: null },
  imgAttrs: { type: Object, default: null }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NuxtPicture",
  __ssrInlineRender: true,
  props: pictureProps,
  emits: ["load", "error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const attrs = useAttrs();
    const isServer = true;
    const $img = useImage();
    const { attrs: baseAttrs, options: baseOptions, modifiers: baseModifiers } = useBaseImage(props);
    const originalFormat = computed(() => getFileExtension(props.src));
    const isTransparent = computed(() => ["png", "webp", "gif", "svg"].includes(originalFormat.value));
    const legacyFormat = computed(() => {
      if (props.legacyFormat) {
        return props.legacyFormat;
      }
      return isTransparent.value ? "png" : "jpeg";
    });
    const sources = computed(() => {
      const formats = props.format?.split(",") || (originalFormat.value === "svg" ? ["svg"] : $img.options.format?.length ? [...$img.options.format] : ["webp"]);
      if (formats[0] === "svg") {
        return [{ src: props.src }];
      }
      if (!formats.includes(legacyFormat.value)) {
        formats.push(legacyFormat.value);
      } else {
        formats.splice(formats.indexOf(legacyFormat.value), 1);
        formats.push(legacyFormat.value);
      }
      return formats.map((format) => {
        const { srcset, sizes, src } = $img.getSizes(props.src, {
          ...baseOptions.value,
          sizes: props.sizes || $img.options.screens,
          densities: props.densities,
          modifiers: { ...baseModifiers.value, format }
        });
        return { src, type: `image/${format}`, sizes, srcset };
      });
    });
    const lastSource = computed(() => sources.value[sources.value.length - 1]);
    if (props.preload) {
      useHead({ link: () => {
        const firstSource = sources.value[0];
        if (!firstSource) {
          return [];
        }
        const link = {
          rel: "preload",
          as: "image",
          imagesrcset: firstSource.srcset,
          nonce: props.nonce,
          ...typeof props.preload !== "boolean" && props.preload?.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        };
        if (sources.value?.[0]?.sizes) {
          link.imagesizes = sources.value[0].sizes;
        }
        return [link];
      } });
    }
    const imgAttrs = computed(() => {
      const result = { ...props.imgAttrs, "data-nuxt-pic": "" };
      for (const key in attrs) {
        if (key in baseImageProps && !(key in result)) {
          result[key] = attrs[key];
        }
      }
      return result;
    });
    const imgEl = ref();
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<picture${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(sources.value.slice(0, -1), (source) => {
        _push(`<source${ssrRenderAttr("type", source.type)}${ssrRenderAttr("sizes", source.sizes)}${ssrRenderAttr("srcset", source.srcset)}>`);
      });
      _push(`<!--]-->`);
      if (lastSource.value) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          ref_key: "imgEl",
          ref: imgEl
        }, {
          ...unref(baseAttrs),
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          ...imgAttrs.value
        }, {
          src: lastSource.value.src,
          sizes: lastSource.value.sizes,
          srcset: lastSource.value.srcset
        }))}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</picture>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/@nuxt+image@1.11.0_@netlify+blobs@9.1.2_db0@0.3.2_ioredis@5.8.0_magicast@0.3.5/node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "NuxtPicture" });
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
    useNuxtPicture: { type: Boolean, default: false },
    format: { default: "webp" },
    sizes: {},
    quality: { default: 80 },
    width: {},
    height: {},
    placeholder: { type: [String, Boolean] },
    imgAttrs: {},
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
    const mergedImgAttrs = computed(() => {
      const baseAttrs = {
        alt: properties.alt,
        title: properties.title,
        class: imageClasses.value,
        style: imageStyles.value,
        role: "img",
        draggable: false
      };
      return properties.imgAttrs ? { ...baseAttrs, ...properties.imgAttrs } : baseAttrs;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPicture = __nuxt_component_0;
      const _component_c_text = __nuxt_component_2;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.tag), mergeProps({ class: partialClass.value }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.useNuxtPicture) {
              _push2(`<div class="${ssrRenderClass(unref(useBem)("wrapper"))}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtPicture, {
                src: _ctx.src,
                format: _ctx.format,
                sizes: _ctx.sizes,
                quality: _ctx.quality,
                width: _ctx.width,
                height: _ctx.height,
                placeholder: _ctx.placeholder,
                loading: loadingMethod.value,
                "img-attrs": mergedImgAttrs.value
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<picture class="${ssrRenderClass(unref(useBem)("wrapper"))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(formattedSrcAlternates.value, (source, index) => {
                  _push2(`<source${ssrRenderAttrs(mergeProps({ ref_for: true }, source, { key: index }))}${_scopeId}>`);
                });
                _push2(`<!--]--><img${ssrRenderAttr("src", _ctx.src)}${ssrRenderAttr("loading", loadingMethod.value)} class="${ssrRenderClass(imageClasses.value)}" style="${ssrRenderStyle(imageStyles.value)}"${ssrRenderAttr("alt", _ctx.alt)}${ssrRenderAttr("title", _ctx.title)} role="img" draggable="false"${_scopeId}>`);
              }, _push2, _parent2, _scopeId);
              _push2(`</picture>`);
            }
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
              _ctx.useNuxtPicture ? (openBlock(), createBlock("div", {
                key: 0,
                class: unref(useBem)("wrapper")
              }, [
                createVNode(_component_NuxtPicture, {
                  src: _ctx.src,
                  format: _ctx.format,
                  sizes: _ctx.sizes,
                  quality: _ctx.quality,
                  width: _ctx.width,
                  height: _ctx.height,
                  placeholder: _ctx.placeholder,
                  loading: loadingMethod.value,
                  "img-attrs": mergedImgAttrs.value
                }, null, 8, ["src", "format", "sizes", "quality", "width", "height", "placeholder", "loading", "img-attrs"])
              ], 2)) : (openBlock(), createBlock("picture", {
                key: 1,
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
              ], 2)),
              _ctx.description ? (openBlock(), createBlock(_component_c_text, {
                key: 2,
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
//# sourceMappingURL=C-Image-BlpE6N20.mjs.map
