import __nuxt_component_0 from './Section-Pcv06J42.mjs';
import __nuxt_component_1 from './Module-C_cUIPpr.mjs';
import { _ as __nuxt_component_2 } from './Slot-CnrEHEKS.mjs';
import __nuxt_component_2$1 from './C-Label-DOKOTpeL.mjs';
import __nuxt_component_3 from './C-Headline-CV9hrUCv.mjs';
import __nuxt_component_2$2 from './C-Text-BR7y9aN_.mjs';
import __nuxt_component_6 from './C-Input-DZiVlGUJ.mjs';
import __nuxt_component_7 from './C-Switch-DRZYaZ_F.mjs';
import __nuxt_component_8 from './C-Select-DhlWaa0Q.mjs';
import __nuxt_component_9 from './C-Textarea-CwtbpsYj.mjs';
import __nuxt_component_1$1 from './C-Button-D3VyIvh8.mjs';
import __nuxt_component_1$2 from './C-Image-Duq0THOF.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './useSpacing-7hsUgoqU.mjs';
import './useComponentInstance-CaQBHdps.mjs';
import './useColorMode-BHUoQmDp.mjs';
import './useCssVar-ulhRdbnU.mjs';
import './C-Icon-DtEmzy2w.mjs';
import './index-B5dIXVXz.mjs';
import './composables-BNjskvIb.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';
import './useBem-B6rIDc60.mjs';
import './C-Wrapper-DaL46UAI.mjs';
import './nuxt-link-Cziyx-rU.mjs';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Section = __nuxt_component_0;
  const _component_Module = __nuxt_component_1;
  const _component_Slot = __nuxt_component_2;
  const _component_C_Label = __nuxt_component_2$1;
  const _component_C_Headline = __nuxt_component_3;
  const _component_C_Text = __nuxt_component_2$2;
  const _component_C_Input = __nuxt_component_6;
  const _component_C_Switch = __nuxt_component_7;
  const _component_C_Select = __nuxt_component_8;
  const _component_C_Textarea = __nuxt_component_9;
  const _component_C_Button = __nuxt_component_1$1;
  const _component_C_Image = __nuxt_component_1$2;
  _push(ssrRenderComponent(_component_Section, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Module, {
          start: 3,
          "padding-top": "l",
          "padding-bottom": "l",
          "vertical-alignment": "center"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Slot, { width: 6 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_C_Label, {
                      icon: "filter-vintage-outline",
                      background: true,
                      text: "KeyVisual/Text Example #1"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_C_Headline, {
                      headline: "Die <mark>Bedeutung</mark> von null Reibung",
                      "headline-type": "h4",
                      "headline-tag": "h2"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_C_Text, { text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat." }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_C_Input, {
                      type: "text",
                      name: "prename"
                    }, {
                      label: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Name `);
                        } else {
                          return [
                            createTextVNode(" Name ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_C_Input, {
                      type: "number",
                      name: "phone"
                    }, {
                      label: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Phone number `);
                        } else {
                          return [
                            createTextVNode(" Phone number ")
                          ];
                        }
                      }),
                      prefix: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` +49 `);
                        } else {
                          return [
                            createTextVNode(" +49 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_C_Switch, {
                      label: "I agree to the terms and conditions",
                      name: "terms"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_C_Select, {
                      label: "When we should call back?",
                      placeholder: "Choose a time slot",
                      options: [
                        { label: "18:00 Uhr", value: "18:00" },
                        { label: "19:30 Uhr", value: "19:30" },
                        { label: "21:15 Uhr", value: "21:15" }
                      ]
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_C_Textarea, { label: "Your Message" }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_C_Button, {
                      appearance: "primary",
                      text: "Request callback"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_C_Label, {
                        icon: "filter-vintage-outline",
                        background: true,
                        text: "KeyVisual/Text Example #1"
                      }),
                      createVNode(_component_C_Headline, {
                        headline: "Die <mark>Bedeutung</mark> von null Reibung",
                        "headline-type": "h4",
                        "headline-tag": "h2"
                      }),
                      createVNode(_component_C_Text, { text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat." }),
                      createVNode(_component_C_Input, {
                        type: "text",
                        name: "prename"
                      }, {
                        label: withCtx(() => [
                          createTextVNode(" Name ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_C_Input, {
                        type: "number",
                        name: "phone"
                      }, {
                        label: withCtx(() => [
                          createTextVNode(" Phone number ")
                        ]),
                        prefix: withCtx(() => [
                          createTextVNode(" +49 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_C_Switch, {
                        label: "I agree to the terms and conditions",
                        name: "terms"
                      }),
                      createVNode(_component_C_Select, {
                        label: "When we should call back?",
                        placeholder: "Choose a time slot",
                        options: [
                          { label: "18:00 Uhr", value: "18:00" },
                          { label: "19:30 Uhr", value: "19:30" },
                          { label: "21:15 Uhr", value: "21:15" }
                        ]
                      }),
                      createVNode(_component_C_Textarea, { label: "Your Message" }),
                      createVNode(_component_C_Button, {
                        appearance: "primary",
                        text: "Request callback"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Slot, { width: 6 }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_C_Image, {
                      src: "https://placehold.co/600x600/BDBDBD/fff",
                      "border-radius": "m"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_C_Image, {
                        src: "https://placehold.co/600x600/BDBDBD/fff",
                        "border-radius": "m"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Slot, { width: 6 }, {
                  default: withCtx(() => [
                    createVNode(_component_C_Label, {
                      icon: "filter-vintage-outline",
                      background: true,
                      text: "KeyVisual/Text Example #1"
                    }),
                    createVNode(_component_C_Headline, {
                      headline: "Die <mark>Bedeutung</mark> von null Reibung",
                      "headline-type": "h4",
                      "headline-tag": "h2"
                    }),
                    createVNode(_component_C_Text, { text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat." }),
                    createVNode(_component_C_Input, {
                      type: "text",
                      name: "prename"
                    }, {
                      label: withCtx(() => [
                        createTextVNode(" Name ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_C_Input, {
                      type: "number",
                      name: "phone"
                    }, {
                      label: withCtx(() => [
                        createTextVNode(" Phone number ")
                      ]),
                      prefix: withCtx(() => [
                        createTextVNode(" +49 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_C_Switch, {
                      label: "I agree to the terms and conditions",
                      name: "terms"
                    }),
                    createVNode(_component_C_Select, {
                      label: "When we should call back?",
                      placeholder: "Choose a time slot",
                      options: [
                        { label: "18:00 Uhr", value: "18:00" },
                        { label: "19:30 Uhr", value: "19:30" },
                        { label: "21:15 Uhr", value: "21:15" }
                      ]
                    }),
                    createVNode(_component_C_Textarea, { label: "Your Message" }),
                    createVNode(_component_C_Button, {
                      appearance: "primary",
                      text: "Request callback"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_Slot, { width: 6 }, {
                  default: withCtx(() => [
                    createVNode(_component_C_Image, {
                      src: "https://placehold.co/600x600/BDBDBD/fff",
                      "border-radius": "m"
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Module, {
            start: 3,
            "padding-top": "l",
            "padding-bottom": "l",
            "vertical-alignment": "center"
          }, {
            default: withCtx(() => [
              createVNode(_component_Slot, { width: 6 }, {
                default: withCtx(() => [
                  createVNode(_component_C_Label, {
                    icon: "filter-vintage-outline",
                    background: true,
                    text: "KeyVisual/Text Example #1"
                  }),
                  createVNode(_component_C_Headline, {
                    headline: "Die <mark>Bedeutung</mark> von null Reibung",
                    "headline-type": "h4",
                    "headline-tag": "h2"
                  }),
                  createVNode(_component_C_Text, { text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat." }),
                  createVNode(_component_C_Input, {
                    type: "text",
                    name: "prename"
                  }, {
                    label: withCtx(() => [
                      createTextVNode(" Name ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_C_Input, {
                    type: "number",
                    name: "phone"
                  }, {
                    label: withCtx(() => [
                      createTextVNode(" Phone number ")
                    ]),
                    prefix: withCtx(() => [
                      createTextVNode(" +49 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_C_Switch, {
                    label: "I agree to the terms and conditions",
                    name: "terms"
                  }),
                  createVNode(_component_C_Select, {
                    label: "When we should call back?",
                    placeholder: "Choose a time slot",
                    options: [
                      { label: "18:00 Uhr", value: "18:00" },
                      { label: "19:30 Uhr", value: "19:30" },
                      { label: "21:15 Uhr", value: "21:15" }
                    ]
                  }),
                  createVNode(_component_C_Textarea, { label: "Your Message" }),
                  createVNode(_component_C_Button, {
                    appearance: "primary",
                    text: "Request callback"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Slot, { width: 6 }, {
                default: withCtx(() => [
                  createVNode(_component_C_Image, {
                    src: "https://placehold.co/600x600/BDBDBD/fff",
                    "border-radius": "m"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DkK7NHdN.mjs.map
