import { defineComponent, computed, normalizeClass, createVNode, resolveDynamicComponent, mergeProps, withCtx, createSlots, unref, createBlock, createCommentVNode, openBlock, renderSlot, Fragment, renderList, ref, nextTick, getCurrentScope, onScopeDispose, watch, getCurrentInstance, reactive, onMounted, isRef, hasInjectionContext, inject, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderSlot, ssrRenderList, ssrRenderAttrs } from 'vue/server-renderer';
import { z as defu } from '../nitro/nitro.mjs';
import { u as useHead, i as injectHead$1 } from './composables-BNjskvIb.mjs';
import { _ as _export_sfc, b as useRuntimeConfig, a as useNuxtApp } from './server.mjs';
import { u as useEventListener } from './index-kSUyau-2.mjs';
import __nuxt_component_1 from './C-Button-D3VyIvh8.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import './C-Wrapper-DaL46UAI.mjs';
import './C-Icon-DtEmzy2w.mjs';
import './index-B5dIXVXz.mjs';
import 'perfect-debounce';
import './nuxt-link-Cziyx-rU.mjs';

const ScriptNetworkEvents = /* @__PURE__ */ new Set(["onload", "onerror"]);
const headSymbol = "usehead";
function injectHead() {
  if (hasInjectionContext()) {
    const instance = inject(headSymbol);
    if (!instance) {
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    }
    return instance;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
const onNuxtReady = (callback) => {
  {
    return;
  }
};
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
function getLifeCycleTarget(target) {
  return getCurrentInstance();
}
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function useScriptTriggerElement(options) {
  const { el, trigger } = options;
  const triggers = (Array.isArray(options.trigger) ? options.trigger : [options.trigger]).filter(Boolean);
  if (!trigger || triggers.includes("immediate") || triggers.includes("onNuxtReady")) {
    return "onNuxtReady";
  }
  if (triggers.some((t) => ["visibility", "visible"].includes(t))) {
    {
      return new Promise(() => {
      });
    }
  }
  const ssrAttrs = {};
  {
    triggers.forEach((trigger2) => {
      ssrAttrs[`on${trigger2}`] = `this.dataset.script_${trigger2} = true`;
    });
  }
  const p = new Promise((resolve) => {
    const target = typeof el !== "undefined" ? el : (void 0).body;
    const _ = useEventListener(
      target,
      triggers,
      () => {
        _();
        resolve(true);
      },
      { once: true, passive: true }
    );
    tryOnMounted(() => {
      watch(target, ($el) => {
        if ($el) {
          triggers.forEach((trigger2) => {
            if ($el.dataset[`script_${trigger2}`]) {
              _();
              resolve(true);
            }
          });
        }
      }, {
        immediate: true
      });
    });
    tryOnScopeDispose(() => resolve(false));
  });
  return Object.assign(p, { ssrAttrs });
}
function createNoopedRecordingProxy(instance = {}) {
  const stack = [];
  let stackIdx = -1;
  const handler = (reuseStack = false) => ({
    get(_, prop, receiver) {
      if (!reuseStack) {
        const v = Reflect.get(_, prop, receiver);
        if (typeof v !== "undefined") {
          return v;
        }
        stackIdx++;
        stack[stackIdx] = [];
      }
      stack[stackIdx].push({ type: "get", key: prop });
      return new Proxy(() => {
      }, handler(true));
    },
    apply(_, __, args) {
      stack[stackIdx].push({ type: "apply", key: "", args });
      return void 0;
    }
  });
  return {
    proxy: new Proxy(instance || {}, handler()),
    stack
  };
}
function createForwardingProxy(target) {
  const handler = {
    get(_, prop, receiver) {
      const v = Reflect.get(_, prop, receiver);
      if (typeof v === "object") {
        return new Proxy(v, handler);
      }
      return v;
    },
    apply(_, __, args) {
      Reflect.apply(_, __, args);
      return void 0;
    }
  };
  return new Proxy(target, handler);
}
function replayProxyRecordings(target, stack) {
  stack.forEach((recordings) => {
    let context = target;
    let prevContext = target;
    recordings.forEach(({ type, key, args }) => {
      if (type === "get") {
        prevContext = context;
        context = context[key];
      } else if (type === "apply") {
        context = context.call(prevContext, ...args);
      }
    });
  });
}
function resolveScriptKey$1(input) {
  return input.key || input.src || (typeof input.innerHTML === "string" ? input.innerHTML : "");
}
const PreconnectServerModes = ["preconnect", "dns-prefetch"];
function useScript$2(head, _input, _options) {
  const input = typeof _input === "string" ? { src: _input } : _input;
  const options = _options || {};
  const id = resolveScriptKey$1(input);
  const prevScript = head._scripts?.[id];
  if (prevScript) {
    prevScript.setupTriggerHandler(options.trigger);
    return prevScript;
  }
  options.beforeInit?.();
  const syncStatus = (s) => {
    script.status = s;
    head.hooks.callHook(`script:updated`, hookCtx);
  };
  ScriptNetworkEvents.forEach((fn) => {
    const k = fn;
    const _fn = typeof input[k] === "function" ? input[k].bind(options.eventContext) : null;
    input[k] = (e) => {
      syncStatus(fn === "onload" ? "loaded" : fn === "onerror" ? "error" : "loading");
      _fn?.(e);
    };
  });
  const _cbs = { loaded: [], error: [] };
  const _uniqueCbs = /* @__PURE__ */ new Set();
  const _registerCb = (key, cb, options2) => {
    if (head.ssr) {
      return;
    }
    if (options2?.key) {
      const key2 = `${options2?.key}:${options2.key}`;
      if (_uniqueCbs.has(key2)) {
        return;
      }
      _uniqueCbs.add(key2);
    }
    if (_cbs[key]) {
      const i = _cbs[key].push(cb);
      return () => _cbs[key]?.splice(i - 1, 1);
    }
    cb(script.instance);
    return () => {
    };
  };
  const loadPromise = new Promise((resolve) => {
    if (head.ssr)
      return;
    const emit = (api) => requestAnimationFrame(() => resolve(api));
    const _ = head.hooks.hook("script:updated", ({ script: script2 }) => {
      const status = script2.status;
      if (script2.id === id && (status === "loaded" || status === "error")) {
        if (status === "loaded") {
          if (typeof options.use === "function") {
            const api = options.use();
            if (api) {
              emit(api);
            }
          } else {
            emit({});
          }
        } else if (status === "error") {
          resolve(false);
        }
        _();
      }
    });
  });
  const script = {
    _loadPromise: loadPromise,
    instance: !head.ssr && options?.use?.() || null,
    proxy: null,
    id,
    status: "awaitingLoad",
    remove() {
      script._triggerAbortController?.abort();
      script._triggerPromises = [];
      script._warmupEl?.dispose();
      if (script.entry) {
        script.entry.dispose();
        script.entry = void 0;
        syncStatus("removed");
        delete head._scripts?.[id];
        return true;
      }
      return false;
    },
    warmup(rel) {
      const { src } = input;
      const isCrossOrigin = !src.startsWith("/") || src.startsWith("//");
      const isPreconnect = rel && PreconnectServerModes.includes(rel);
      let href = src;
      if (!rel || isPreconnect && !isCrossOrigin) {
        return;
      }
      if (isPreconnect) {
        const $url = new URL(src);
        href = `${$url.protocol}//${$url.host}`;
      }
      const link = {
        href,
        rel,
        crossorigin: typeof input.crossorigin !== "undefined" ? input.crossorigin : isCrossOrigin ? "anonymous" : void 0,
        referrerpolicy: typeof input.referrerpolicy !== "undefined" ? input.referrerpolicy : isCrossOrigin ? "no-referrer" : void 0,
        fetchpriority: typeof input.fetchpriority !== "undefined" ? input.fetchpriority : "low",
        integrity: input.integrity,
        as: rel === "preload" ? "script" : void 0
      };
      script._warmupEl = head.push({ link: [link] }, { head, tagPriority: "high" });
      return script._warmupEl;
    },
    load(cb) {
      script._triggerAbortController?.abort();
      script._triggerPromises = [];
      if (!script.entry) {
        syncStatus("loading");
        const defaults = {
          defer: true,
          fetchpriority: "low"
        };
        if (input.src && (input.src.startsWith("http") || input.src.startsWith("//"))) {
          defaults.crossorigin = "anonymous";
          defaults.referrerpolicy = "no-referrer";
        }
        script.entry = head.push({
          script: [{ ...defaults, ...input }]
        }, options);
      }
      if (cb)
        _registerCb("loaded", cb);
      return loadPromise;
    },
    onLoaded(cb, options2) {
      return _registerCb("loaded", cb, options2);
    },
    onError(cb, options2) {
      return _registerCb("error", cb, options2);
    },
    setupTriggerHandler(trigger) {
      if (script.status !== "awaitingLoad") {
        return;
      }
      if ((typeof trigger === "undefined" || trigger === "client") && !head.ssr || trigger === "server") {
        script.load();
      } else if (trigger instanceof Promise) {
        if (head.ssr) {
          return;
        }
        if (!script._triggerAbortController) {
          script._triggerAbortController = new AbortController();
          script._triggerAbortPromise = new Promise((resolve) => {
            script._triggerAbortController.signal.addEventListener("abort", () => {
              script._triggerAbortController = null;
              resolve();
            });
          });
        }
        script._triggerPromises = script._triggerPromises || [];
        const idx = script._triggerPromises.push(Promise.race([
          trigger.then((v) => typeof v === "undefined" || v ? script.load : void 0),
          script._triggerAbortPromise
        ]).catch(() => {
        }).then((res) => {
          res?.();
        }).finally(() => {
          script._triggerPromises?.splice(idx, 1);
        }));
      } else if (typeof trigger === "function") {
        trigger(script.load);
      }
    },
    _cbs
  };
  loadPromise.then((api) => {
    if (api !== false) {
      script.instance = api;
      _cbs.loaded?.forEach((cb) => cb(api));
      _cbs.loaded = null;
    } else {
      _cbs.error?.forEach((cb) => cb());
      _cbs.error = null;
    }
  });
  const hookCtx = { script };
  script.setupTriggerHandler(options.trigger);
  if (options.use) {
    const { proxy, stack } = createNoopedRecordingProxy(head.ssr ? {} : options.use() || {});
    script.proxy = proxy;
    script.onLoaded((instance) => {
      replayProxyRecordings(instance, stack);
      script.proxy = createForwardingProxy(instance);
    });
  }
  if (!options.warmupStrategy && (typeof options.trigger === "undefined" || options.trigger === "client")) {
    options.warmupStrategy = "preload";
  }
  if (options.warmupStrategy) {
    script.warmup(options.warmupStrategy);
  }
  head._scripts = Object.assign(head._scripts || {}, { [id]: script });
  return script;
}
function registerVueScopeHandlers(script, scope) {
  if (!scope) {
    return;
  }
  const _registerCb = (key, cb) => {
    if (!script._cbs[key]) {
      cb(script.instance);
      return () => {
      };
    }
    let i = script._cbs[key].push(cb);
    const destroy = () => {
      if (i) {
        script._cbs[key]?.splice(i - 1, 1);
        i = null;
      }
    };
    onScopeDispose(destroy);
    return destroy;
  };
  script.onLoaded = (cb) => _registerCb("loaded", cb);
  script.onError = (cb) => _registerCb("error", cb);
  onScopeDispose(() => {
    script._triggerAbortController?.abort();
  });
}
function useScript$1(_input, _options) {
  const input = typeof _input === "string" ? { src: _input } : _input;
  const options = _options || {};
  const head = options?.head || injectHead();
  options.head = head;
  const scope = getCurrentInstance();
  options.eventContext = scope;
  if (scope && typeof options.trigger === "undefined") {
    options.trigger = onMounted;
  } else if (isRef(options.trigger)) {
    const refTrigger = options.trigger;
    let off;
    options.trigger = new Promise((resolve) => {
      off = watch(refTrigger, (val) => {
        if (val) {
          resolve(true);
        }
      }, {
        immediate: true
      });
      onScopeDispose(() => resolve(false), true);
    }).then((val) => {
      off?.();
      return val;
    });
  }
  head._scriptStatusWatcher = head._scriptStatusWatcher || head.hooks.hook("script:updated", ({ script: s }) => {
    s._statusRef.value = s.status;
  });
  const script = useScript$2(head, input, options);
  script._statusRef = script._statusRef || ref(script.status);
  registerVueScopeHandlers(script, scope);
  return new Proxy(script, {
    get(_, key, a) {
      return Reflect.get(_, key === "status" ? "_statusRef" : key, a);
    }
  });
}
function useNuxtScriptRuntimeConfig() {
  return useRuntimeConfig().public["nuxt-scripts"];
}
function resolveScriptKey(input) {
  return input.key || input.src || (typeof input.innerHTML === "string" ? input.innerHTML : "");
}
function useScript(input, options) {
  input = typeof input === "string" ? { src: input } : input;
  options = defu(options, useNuxtScriptRuntimeConfig()?.defaultScriptOptions);
  const id = String(resolveScriptKey(input));
  const nuxtApp = useNuxtApp();
  options.head = options.head || injectHead$1();
  if (!options.head) {
    throw new Error("useScript() has been called without Nuxt context.");
  }
  nuxtApp.$scripts = nuxtApp.$scripts || reactive({});
  !!nuxtApp.$scripts?.[id];
  if (options.trigger === "onNuxtReady" || options.trigger === "client") {
    if (!options.warmupStrategy) {
      options.warmupStrategy = "preload";
    }
    if (options.trigger === "onNuxtReady") {
      options.trigger = onNuxtReady;
    }
  }
  const instance = useScript$1(input, options);
  const _remove = instance.remove;
  instance.remove = () => {
    nuxtApp.$scripts[id] = void 0;
    return _remove();
  };
  nuxtApp.$scripts[id] = instance;
  return instance;
}
Object.freeze(
  Object.assign(
    () => {
    },
    { __mock__: true }
  )
);
function scriptRuntimeConfig(key) {
  return (useRuntimeConfig().public.scripts || {})[key];
}
function useRegistryScript(registryKey, optionsFn, _userOptions) {
  const scriptConfig = scriptRuntimeConfig(registryKey);
  const userOptions = Object.assign(_userOptions || {}, typeof scriptConfig === "object" ? scriptConfig : {});
  const options = optionsFn(userOptions);
  const scriptInput = defu(userOptions.scriptInput, options.scriptInput, { key: registryKey });
  const scriptOptions = Object.assign(userOptions?.scriptOptions || {}, options.scriptOptions || {});
  const init = scriptOptions.beforeInit;
  scriptOptions.beforeInit = () => {
    init?.();
  };
  return useScript(scriptInput, scriptOptions);
}
function useScriptYouTubePlayer(_options) {
  let readyPromise = Promise.resolve();
  const instance = useRegistryScript("youtubePlayer", () => ({
    scriptInput: {
      src: "https://www.youtube.com/iframe_api",
      crossorigin: false
      // crossorigin can't be set or it breaks
    },
    scriptOptions: {
      use() {
        return {
          YT: (void 0).YT || readyPromise.then(() => {
            return (void 0).YT;
          })
        };
      }
    },
    clientInit: void 0
  }), _options);
  return instance;
}
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "sr-only",
    "aria-label": "Loading...",
    role: "status"
  }, _attrs))} data-v-2b08c6e7></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/@nuxt+scripts@0.11.13_@netlify+blobs@9.1.2_@types+youtube@0.1.2_@unhead+vue@2.0.17_vue@_0ddb308a5351de5ca40023b0cfdffb84/node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ScriptAriaLoadingIndicator = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2b08c6e7"]]), { __name: "ScriptAriaLoadingIndicator" });
const _sfc_main$1 = {
  __name: "ScriptYouTubePlayer",
  __ssrInlineRender: true,
  props: {
    placeholderAttrs: { type: Object, required: false },
    rootAttrs: { type: Object, required: false },
    aboveTheFold: { type: Boolean, required: false },
    trigger: { type: [String, Array, Boolean], required: false, default: "mousedown" },
    videoId: { type: String, required: true },
    playerVars: { type: null, required: false, default: { autoplay: 0, playsinline: 1 } },
    width: { type: Number, required: false, default: 640 },
    height: { type: Number, required: false, default: 360 },
    cookies: { type: Boolean, required: false, default: false },
    playerOptions: { type: null, required: false },
    thumbnailSize: { type: String, required: false, default: "hq720" },
    webp: { type: Boolean, required: false, default: true }
  },
  emits: ["ready", "state-change", "playback-quality-change", "playback-rate-change", "error"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const rootEl = ref();
    ref();
    const ready = ref(false);
    const trigger = useScriptTriggerElement({ trigger: props.trigger, el: rootEl });
    const script = useScriptYouTubePlayer({
      scriptOptions: {
        trigger
      }
    });
    const { onLoaded, status } = script;
    const player = ref();
    if (props.trigger === "mousedown" && trigger instanceof Promise) {
      trigger.then((triggered) => {
      });
    }
    __expose({
      player
    });
    const rootAttrs = computed(() => {
      return defu(props.rootAttrs, {
        "aria-busy": status.value === "loading",
        "aria-label": status.value === "awaitingLoad" ? "YouTube Player - Placeholder" : status.value === "loading" ? "YouTube Player - Loading" : "YouTube Player - Loaded",
        "aria-live": "polite",
        "role": "application",
        "style": {
          cursor: "pointer",
          position: "relative",
          backgroundColor: "black",
          width: "100%",
          aspectRatio: `${props.width}/${props.height}`
        },
        ...trigger instanceof Promise ? trigger.ssrAttrs || {} : {}
      });
    });
    const fallbackPlaceHolder = computed(() => `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`);
    const placeholder = computed(() => `https://i.ytimg.com/${props.webp ? "vi_webp" : "vi"}/${props.videoId}/${props.thumbnailSize}.${props.webp ? "webp" : "jpg"}`);
    const isFallbackPlaceHolder = ref(false);
    {
      useHead({
        link: [
          {
            key: `nuxt-script-youtube-img`,
            rel: props.aboveTheFold ? "preconnect" : "dns-prefetch",
            href: "https://i.ytimg.com"
          },
          props.aboveTheFold ? {
            key: `nuxt-script-youtube-img`,
            rel: "preload",
            as: "image",
            href: placeholder.value
          } : {}
        ]
      });
    }
    const placeholderAttrs = computed(() => {
      return defu(props.placeholderAttrs, {
        src: isFallbackPlaceHolder.value ? fallbackPlaceHolder.value : placeholder.value,
        alt: "",
        loading: props.aboveTheFold ? "eager" : "lazy",
        style: {
          width: "100%",
          objectFit: "contain",
          height: "100%"
        },
        onLoad(payload) {
          const img = payload.target;
          if (img.naturalWidth === 120 && img.naturalHeight === 90) {
            isFallbackPlaceHolder.value = true;
          }
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "rootEl",
        ref: rootEl
      }, rootAttrs.value, _attrs))}><div style="${ssrRenderStyle({ "width": "100%", "height": "100%", "position": "absolute", "top": "0", "left": "0" })}"></div>`);
      if (!ready.value) {
        ssrRenderSlot(_ctx.$slots, "placeholder", { placeholder: placeholder.value }, () => {
          _push(`<img${ssrRenderAttrs(placeholderAttrs.value)}>`);
        }, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      if (unref(status) === "loading") {
        ssrRenderSlot(_ctx.$slots, "loading", {}, () => {
          _push(ssrRenderComponent(ScriptAriaLoadingIndicator, null, null, _parent));
        }, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      if (unref(status) === "awaitingLoad") {
        ssrRenderSlot(_ctx.$slots, "awaitingLoad", {}, null, _push, _parent);
      } else if (unref(status) === "error") {
        ssrRenderSlot(_ctx.$slots, "error", {}, null, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/@nuxt+scripts@0.11.13_@netlify+blobs@9.1.2_@types+youtube@0.1.2_@unhead+vue@2.0.17_vue@_0ddb308a5351de5ca40023b0cfdffb84/node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "C-Video",
  __ssrInlineRender: true,
  props: {
    tag: { default: "figure" },
    src: {},
    srcAlternates: {},
    title: {},
    fit: { default: "cover" },
    position: { default: "center center" },
    loop: { type: Boolean, default: false },
    playsinline: { type: Boolean, default: true },
    muted: { type: Boolean, default: false },
    controls: { type: Boolean, default: true },
    controlsDownload: { type: Boolean, default: false },
    controlsFullscreen: { type: Boolean, default: true },
    autoplay: { type: Boolean, default: false },
    poster: {},
    borderRadius: {},
    description: {},
    tracks: {},
    aspectRatios: {},
    colorMode: {}
  },
  setup(__props) {
    const properties = __props;
    const { componentName } = useComponentInstance();
    const partialClass = computed(() => {
      const aspectRatioClasses = {};
      if (properties.aspectRatios) {
        for (const aspectRatio in properties.aspectRatios) {
          aspectRatioClasses[useBem(void 0, `has-aspect-ratio-${aspectRatio}`)] = true;
        }
      }
      return normalizeClass(
        [
          componentName,
          useColorMode().getClasses(properties),
          aspectRatioClasses
        ]
      );
    });
    const videoClasses = computed(() => {
      const classes = {
        [useBem("video")]: true
      };
      if (properties.borderRadius) {
        classes[`border-radius-${properties.borderRadius}`] = true;
      }
      return classes;
    });
    const videoStyles = computed(() => {
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
    const isStreamingVideo = computed(() => {
      if (!properties.src) {
        return false;
      }
      return properties.src.includes("youtube.");
    });
    const streamingVideoId = computed(() => {
      if (isStreamingVideo.value) {
        if (properties.src.includes("youtube.")) {
          return properties.src.split("v=")[1];
        } else {
          return isStreamingVideo.value;
        }
      } else {
        return void 0;
      }
    });
    const formattedSources = computed(() => {
      const sources = [];
      if (!properties.srcAlternates || !Object.prototype.hasOwnProperty.call(properties.srcAlternates, "default")) {
        sources.push({
          src: properties.src
        });
      }
      if (properties.srcAlternates) {
        for (const srcAlternateMediaQuerySize in properties.srcAlternates) {
          let mediaQuerySize = "0px";
          if (srcAlternateMediaQuerySize !== "default") {
            mediaQuerySize = useCssVar(`breakpoint-${srcAlternateMediaQuerySize}`);
          }
          const alternates = properties.srcAlternates[srcAlternateMediaQuerySize];
          for (const alternate in alternates) {
            sources.push({
              src: alternates[alternate],
              media: mediaQuerySize != "0px" ? `(min-width: ${mediaQuerySize})` : void 0,
              type: `video/${alternate}`
            });
          }
        }
      }
      return sources.reverse();
    });
    const showPoster = computed(() => properties.poster?.length || 0 > 0);
    const isMuted = computed(() => !!(properties.muted || properties.autoplay));
    const isInlinePlay = computed(() => properties.autoplay || properties.playsinline);
    const captionTag = computed(() => properties.tag === "figure" ? "figcaption" : "span");
    const controlsList = computed(() => {
      let controlsList2 = "";
      if (!properties.controls) {
        return void 0;
      }
      if (!properties.controlsDownload) {
        controlsList2 += " nodownload";
      }
      if (!properties.controlsFullscreen) {
        controlsList2 += " nofullscreen";
      }
      return controlsList2;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ScriptYouTubePlayer = _sfc_main$1;
      const _component_c_button = __nuxt_component_1;
      const _component_c_text = __nuxt_component_2;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.tag), mergeProps({ class: partialClass.value }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (isStreamingVideo.value) {
              _push2(ssrRenderComponent(_component_ScriptYouTubePlayer, {
                class: videoClasses.value,
                "video-id": streamingVideoId.value,
                "player-vars": { controls: _ctx.controls ? 1 : 0, loop: _ctx.loop ? 1 : 0, playsinline: isInlinePlay.value ? 1 : 0 }
              }, createSlots({
                awaitingLoad: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_c_button, {
                      icon: "play-circle-outline",
                      class: unref(useBem)("play-button"),
                      text: "Video starten",
                      appearance: "primary"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_c_button, {
                        icon: "play-circle-outline",
                        class: unref(useBem)("play-button"),
                        text: "Video starten",
                        appearance: "primary"
                      }, null, 8, ["class"])
                    ];
                  }
                }),
                _: 2
              }, [
                _ctx.poster ? {
                  name: "placeholder",
                  fn: withCtx(({}, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", _ctx.poster)}${ssrRenderAttr("alt", _ctx.title)}${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: _ctx.poster,
                          alt: _ctx.title
                        }, null, 8, ["src", "alt"])
                      ];
                    }
                  }),
                  key: "0"
                } : void 0
              ]), _parent2, _scopeId));
            } else {
              _push2(`<video class="${ssrRenderClass(videoClasses.value)}" style="${ssrRenderStyle(videoStyles.value)}"${ssrRenderAttr("tabindex", showPoster.value ? -1 : void 0)}${ssrIncludeBooleanAttr(_ctx.controls) ? " controls" : ""}${ssrIncludeBooleanAttr(_ctx.loop) ? " loop" : ""}${ssrIncludeBooleanAttr(isMuted.value) ? " muted" : ""}${ssrRenderAttr("controlsList", controlsList.value)}${ssrIncludeBooleanAttr(_ctx.autoplay) ? " autoplay" : ""}${ssrRenderAttr("playsinline", isInlinePlay.value)}${ssrRenderAttr("poster", _ctx.poster)}${ssrRenderAttr("title", _ctx.title)}${ssrRenderAttr("aria-label", _ctx.title)} preload="metadata" crossorigin="anonymous" disablePictureInPicture="true"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(formattedSources.value, (source, index) => {
                  _push2(`<source${ssrRenderAttrs(mergeProps({ key: index }, { ref_for: true }, source))}${_scopeId}>`);
                });
                _push2(`<!--]--><!--[-->`);
                ssrRenderList(_ctx.tracks, (track, index) => {
                  _push2(`<track${ssrRenderAttr("src", track.url)}${ssrRenderAttr("label", track.label)}${ssrRenderAttr("srclang", track.srclang)}${ssrRenderAttr("kind", track.type)}${ssrIncludeBooleanAttr(track.default) ? " default" : ""}${_scopeId}>`);
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</video>`);
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
              isStreamingVideo.value ? (openBlock(), createBlock(_component_ScriptYouTubePlayer, {
                key: 0,
                class: videoClasses.value,
                "video-id": streamingVideoId.value,
                "player-vars": { controls: _ctx.controls ? 1 : 0, loop: _ctx.loop ? 1 : 0, playsinline: isInlinePlay.value ? 1 : 0 }
              }, createSlots({
                awaitingLoad: withCtx(() => [
                  createVNode(_component_c_button, {
                    icon: "play-circle-outline",
                    class: unref(useBem)("play-button"),
                    text: "Video starten",
                    appearance: "primary"
                  }, null, 8, ["class"])
                ]),
                _: 2
              }, [
                _ctx.poster ? {
                  name: "placeholder",
                  fn: withCtx(({}) => [
                    createVNode("img", {
                      src: _ctx.poster,
                      alt: _ctx.title
                    }, null, 8, ["src", "alt"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["class", "video-id", "player-vars"])) : (openBlock(), createBlock("video", {
                key: 1,
                class: videoClasses.value,
                style: videoStyles.value,
                tabindex: showPoster.value ? -1 : void 0,
                controls: _ctx.controls,
                loop: _ctx.loop,
                muted: isMuted.value,
                controlsList: controlsList.value,
                autoplay: _ctx.autoplay,
                playsinline: isInlinePlay.value,
                poster: _ctx.poster,
                title: _ctx.title,
                "aria-label": _ctx.title,
                preload: "metadata",
                crossorigin: "anonymous",
                disablePictureInPicture: "true"
              }, [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  (openBlock(true), createBlock(Fragment, null, renderList(formattedSources.value, (source, index) => {
                    return openBlock(), createBlock("source", mergeProps({ key: index }, { ref_for: true }, source), null, 16);
                  }), 128)),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.tracks, (track, index) => {
                    return openBlock(), createBlock("track", {
                      key: index,
                      src: track.url,
                      label: track.label,
                      srclang: track.srclang,
                      kind: track.type,
                      default: track.default
                    }, null, 8, ["src", "label", "srclang", "kind", "default"]);
                  }), 128))
                ])
              ], 14, ["tabindex", "controls", "loop", "muted", "controlsList", "autoplay", "playsinline", "poster", "title", "aria-label"])),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../src/runtime/partials/components/c-video/C-Video.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CVideo = Object.assign(_sfc_main, { __name: "CVideo" });

export { CVideo as default };
//# sourceMappingURL=C-Video-AF6Kwm2z.mjs.map
