import __nuxt_component_0 from './Section-Pcv06J42.mjs';
import __nuxt_component_1 from './Module-C_cUIPpr.mjs';
import { _ as __nuxt_component_2 } from './Slot-CnrEHEKS.mjs';
import __nuxt_component_2$1 from './C-Label-DSdCryq6.mjs';
import __nuxt_component_3 from './C-Headline-CV9hrUCv.mjs';
import __nuxt_component_2$2 from './C-Text-BR7y9aN_.mjs';
import __nuxt_component_6 from './C-Input-hPF-rZsa.mjs';
import __nuxt_component_7 from './C-Switch-DRZYaZ_F.mjs';
import __nuxt_component_8 from './C-Select-DhlWaa0Q.mjs';
import __nuxt_component_9 from './C-Textarea-B-7jv4WG.mjs';
import __nuxt_component_1$1 from './C-Button-ZPZkdLor.mjs';
import __nuxt_component_1$2 from './C-Image-Duq0THOF.mjs';
import __nuxt_component_1$3 from './C-Modal-BK3t3pW6.mjs';
import { defineComponent, ref, withCtx, createTextVNode, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import './useSpacing-7hsUgoqU.mjs';
import './useComponentInstance-CaQBHdps.mjs';
import './useColorMode-BHUoQmDp.mjs';
import './useCssVar-ulhRdbnU.mjs';
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
import './useBem-B6rIDc60.mjs';
import './C-Wrapper-DaL46UAI.mjs';
import './nuxt-link-Cziyx-rU.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const smallModal = ref(null);
    const largeModal = ref(null);
    const isLoading = ref(false);
    const toggleLoading = () => {
      isLoading.value = !isLoading.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
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
      const _component_C_Modal = __nuxt_component_1$3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Section, null, {
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
                          type: "text",
                          name: "lastname",
                          label: "Lastname",
                          value: "Mustermann"
                        }, null, _parent4, _scopeId3));
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
                        _push4(`<div style="${ssrRenderStyle({ "margin-top": "var(--spacing-l)", "display": "flex", "gap": "var(--spacing-s)" })}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_C_Button, {
                          appearance: "secondary",
                          text: "Small Modal",
                          onClick: ($event) => smallModal.value?.open()
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_C_Button, {
                          appearance: "secondary",
                          text: "Large Modal",
                          onClick: ($event) => largeModal.value?.open()
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(_component_C_Headline, {
                          headline: "Loading Spinner Test",
                          "headline-type": "h5",
                          "headline-tag": "h3",
                          style: { "margin-top": "var(--spacing-xl)" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_C_Text, { text: "Testing the loading spinner in different button states:" }, null, _parent4, _scopeId3));
                        _push4(`<div style="${ssrRenderStyle({ "display": "flex", "flex-wrap": "wrap", "gap": "var(--spacing-s)", "margin-top": "var(--spacing-m)" })}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_C_Button, {
                          appearance: "primary",
                          text: "Primary Loading",
                          loading: true
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_C_Button, {
                          appearance: "secondary",
                          text: "Secondary Loading",
                          loading: true
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_C_Button, {
                          appearance: "system",
                          text: "System Loading",
                          loading: true
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_C_Button, {
                          appearance: "primary",
                          text: "Toggle Loading",
                          loading: isLoading.value,
                          onClick: toggleLoading
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_C_Button, {
                          appearance: "primary",
                          icon: "renew",
                          "icon-package": "carbon",
                          loading: true,
                          rounded: true
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_C_Button, {
                          appearance: "secondary",
                          background: "outline",
                          text: "Outline Loading",
                          loading: true
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
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
                            type: "text",
                            name: "lastname",
                            label: "Lastname",
                            value: "Mustermann"
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
                          }),
                          createVNode("div", { style: { "margin-top": "var(--spacing-l)", "display": "flex", "gap": "var(--spacing-s)" } }, [
                            createVNode(_component_C_Button, {
                              appearance: "secondary",
                              text: "Small Modal",
                              onClick: ($event) => smallModal.value?.open()
                            }, null, 8, ["onClick"]),
                            createVNode(_component_C_Button, {
                              appearance: "secondary",
                              text: "Large Modal",
                              onClick: ($event) => largeModal.value?.open()
                            }, null, 8, ["onClick"])
                          ]),
                          createVNode(_component_C_Headline, {
                            headline: "Loading Spinner Test",
                            "headline-type": "h5",
                            "headline-tag": "h3",
                            style: { "margin-top": "var(--spacing-xl)" }
                          }),
                          createVNode(_component_C_Text, { text: "Testing the loading spinner in different button states:" }),
                          createVNode("div", { style: { "display": "flex", "flex-wrap": "wrap", "gap": "var(--spacing-s)", "margin-top": "var(--spacing-m)" } }, [
                            createVNode(_component_C_Button, {
                              appearance: "primary",
                              text: "Primary Loading",
                              loading: true
                            }),
                            createVNode(_component_C_Button, {
                              appearance: "secondary",
                              text: "Secondary Loading",
                              loading: true
                            }),
                            createVNode(_component_C_Button, {
                              appearance: "system",
                              text: "System Loading",
                              loading: true
                            }),
                            createVNode(_component_C_Button, {
                              appearance: "primary",
                              text: "Toggle Loading",
                              loading: isLoading.value,
                              onClick: toggleLoading
                            }, null, 8, ["loading"]),
                            createVNode(_component_C_Button, {
                              appearance: "primary",
                              icon: "renew",
                              "icon-package": "carbon",
                              loading: true,
                              rounded: true
                            }),
                            createVNode(_component_C_Button, {
                              appearance: "secondary",
                              background: "outline",
                              text: "Outline Loading",
                              loading: true
                            })
                          ])
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
                          type: "text",
                          name: "lastname",
                          label: "Lastname",
                          value: "Mustermann"
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
                        }),
                        createVNode("div", { style: { "margin-top": "var(--spacing-l)", "display": "flex", "gap": "var(--spacing-s)" } }, [
                          createVNode(_component_C_Button, {
                            appearance: "secondary",
                            text: "Small Modal",
                            onClick: ($event) => smallModal.value?.open()
                          }, null, 8, ["onClick"]),
                          createVNode(_component_C_Button, {
                            appearance: "secondary",
                            text: "Large Modal",
                            onClick: ($event) => largeModal.value?.open()
                          }, null, 8, ["onClick"])
                        ]),
                        createVNode(_component_C_Headline, {
                          headline: "Loading Spinner Test",
                          "headline-type": "h5",
                          "headline-tag": "h3",
                          style: { "margin-top": "var(--spacing-xl)" }
                        }),
                        createVNode(_component_C_Text, { text: "Testing the loading spinner in different button states:" }),
                        createVNode("div", { style: { "display": "flex", "flex-wrap": "wrap", "gap": "var(--spacing-s)", "margin-top": "var(--spacing-m)" } }, [
                          createVNode(_component_C_Button, {
                            appearance: "primary",
                            text: "Primary Loading",
                            loading: true
                          }),
                          createVNode(_component_C_Button, {
                            appearance: "secondary",
                            text: "Secondary Loading",
                            loading: true
                          }),
                          createVNode(_component_C_Button, {
                            appearance: "system",
                            text: "System Loading",
                            loading: true
                          }),
                          createVNode(_component_C_Button, {
                            appearance: "primary",
                            text: "Toggle Loading",
                            loading: isLoading.value,
                            onClick: toggleLoading
                          }, null, 8, ["loading"]),
                          createVNode(_component_C_Button, {
                            appearance: "primary",
                            icon: "renew",
                            "icon-package": "carbon",
                            loading: true,
                            rounded: true
                          }),
                          createVNode(_component_C_Button, {
                            appearance: "secondary",
                            background: "outline",
                            text: "Outline Loading",
                            loading: true
                          })
                        ])
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
                        type: "text",
                        name: "lastname",
                        label: "Lastname",
                        value: "Mustermann"
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
                      }),
                      createVNode("div", { style: { "margin-top": "var(--spacing-l)", "display": "flex", "gap": "var(--spacing-s)" } }, [
                        createVNode(_component_C_Button, {
                          appearance: "secondary",
                          text: "Small Modal",
                          onClick: ($event) => smallModal.value?.open()
                        }, null, 8, ["onClick"]),
                        createVNode(_component_C_Button, {
                          appearance: "secondary",
                          text: "Large Modal",
                          onClick: ($event) => largeModal.value?.open()
                        }, null, 8, ["onClick"])
                      ]),
                      createVNode(_component_C_Headline, {
                        headline: "Loading Spinner Test",
                        "headline-type": "h5",
                        "headline-tag": "h3",
                        style: { "margin-top": "var(--spacing-xl)" }
                      }),
                      createVNode(_component_C_Text, { text: "Testing the loading spinner in different button states:" }),
                      createVNode("div", { style: { "display": "flex", "flex-wrap": "wrap", "gap": "var(--spacing-s)", "margin-top": "var(--spacing-m)" } }, [
                        createVNode(_component_C_Button, {
                          appearance: "primary",
                          text: "Primary Loading",
                          loading: true
                        }),
                        createVNode(_component_C_Button, {
                          appearance: "secondary",
                          text: "Secondary Loading",
                          loading: true
                        }),
                        createVNode(_component_C_Button, {
                          appearance: "system",
                          text: "System Loading",
                          loading: true
                        }),
                        createVNode(_component_C_Button, {
                          appearance: "primary",
                          text: "Toggle Loading",
                          loading: isLoading.value,
                          onClick: toggleLoading
                        }, null, 8, ["loading"]),
                        createVNode(_component_C_Button, {
                          appearance: "primary",
                          icon: "renew",
                          "icon-package": "carbon",
                          loading: true,
                          rounded: true
                        }),
                        createVNode(_component_C_Button, {
                          appearance: "secondary",
                          background: "outline",
                          text: "Outline Loading",
                          loading: true
                        })
                      ])
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
      _push(ssrRenderComponent(_component_C_Modal, {
        ref_key: "smallModal",
        ref: smallModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "padding": "var(--spacing-m)", "max-width": "500px" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_C_Headline, {
              headline: "Small Modal",
              "headline-type": "h5",
              style: { "margin-bottom": "var(--spacing-m)" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_C_Text, { text: "This is a small modal with minimal content. It should be centered vertically and horizontally." }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { style: { "padding": "var(--spacing-m)", "max-width": "500px" } }, [
                createVNode(_component_C_Headline, {
                  headline: "Small Modal",
                  "headline-type": "h5",
                  style: { "margin-bottom": "var(--spacing-m)" }
                }),
                createVNode(_component_C_Text, { text: "This is a small modal with minimal content. It should be centered vertically and horizontally." })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_C_Modal, {
        ref_key: "largeModal",
        ref: largeModal,
        fullwidth: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "padding": "var(--spacing-m)" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_C_Headline, {
              headline: "Large Modal with Overflow",
              "headline-type": "h5",
              style: { "margin-bottom": "var(--spacing-m)" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_C_Text, {
              text: "This modal has a lot of content that will overflow. You should be able to scroll with equal spacing at the top and bottom.",
              style: { "margin-bottom": "var(--spacing-m)" }
            }, null, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(20, (i) => {
              _push2(`<div style="${ssrRenderStyle({ "margin-bottom": "var(--spacing-s)" })}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_C_Text, {
                text: `Section ${i}: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { style: { "padding": "var(--spacing-m)" } }, [
                createVNode(_component_C_Headline, {
                  headline: "Large Modal with Overflow",
                  "headline-type": "h5",
                  style: { "margin-bottom": "var(--spacing-m)" }
                }),
                createVNode(_component_C_Text, {
                  text: "This modal has a lot of content that will overflow. You should be able to scroll with equal spacing at the top and bottom.",
                  style: { "margin-bottom": "var(--spacing-m)" }
                }),
                (openBlock(), createBlock(Fragment, null, renderList(20, (i) => {
                  return createVNode("div", {
                    key: i,
                    style: { "margin-bottom": "var(--spacing-s)" }
                  }, [
                    createVNode(_component_C_Text, {
                      text: `Section ${i}: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`
                    }, null, 8, ["text"])
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-kbG5AYRZ.mjs.map
