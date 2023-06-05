import { defineComponent as C, computed as c, onMounted as g, onUnmounted as k, openBlock as r, createElementBlock as m, createElementVNode as d, normalizeClass as x, unref as e, normalizeStyle as N, createVNode as n, withCtx as u, createBlock as l, createCommentVNode as s, createTextVNode as h, toDisplayString as v } from "vue";
import { CIcon as f } from "../index.mjs";
import "./index2.mjs";
import z from "../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/CheckmarkCircle.mjs";
import B from "../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/InformationCircle.mjs";
import V from "../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/AlertCircle.mjs";
import b from "../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/CloseCircle.mjs";
import w from "../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/Close.mjs";
const S = { class: "c-message-wrapper" }, $ = { class: "c-message__icon" }, F = /* @__PURE__ */ C({
  props: {
    type: { default: "info" },
    msg: null,
    duration: { default: 5e3 },
    destroy: null,
    closable: { type: Boolean, default: !1 }
  },
  setup(o) {
    const t = o, y = c(() => `c-message
    c-message-${t.type}
  `), a = c(() => `var(--c-color-${t.type == "info" ? "primary" : t.type}-1)`), p = c(() => ({
      "--c-message-padding": `0 ${t.closable ? "44" : "20"}px 0 44px`
    }));
    return g(() => {
      t.duration && setTimeout(() => {
        t.destroy();
      }, t.duration);
    }), k(() => {
    }), (E, i) => (r(), m("div", S, [
      d("div", {
        class: x(e(y)),
        style: N(e(p))
      }, [
        d("div", $, [
          n(e(f), {
            size: 20,
            color: e(a)
          }, {
            default: u(() => [
              o.type == "success" ? (r(), l(e(z), { key: 0 })) : s("", !0),
              o.type == "info" ? (r(), l(e(B), { key: 1 })) : s("", !0),
              o.type == "warning" ? (r(), l(e(V), { key: 2 })) : s("", !0),
              o.type == "error" ? (r(), l(e(b), { key: 3 })) : s("", !0)
            ]),
            _: 1
          }, 8, ["color"])
        ]),
        h(" " + v(o.msg) + " ", 1),
        o.closable ? (r(), m("span", {
          key: 0,
          class: "c-message__close",
          onClick: i[0] || (i[0] = () => o.destroy())
        }, [
          n(e(f), {
            size: 20,
            color: e(a)
          }, {
            default: u(() => [
              n(e(w))
            ]),
            _: 1
          }, 8, ["color"])
        ])) : s("", !0)
      ], 6)
    ]));
  }
});
export {
  F as default
};
