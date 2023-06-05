import { defineComponent as y, ref as s, watch as g, computed as C, openBlock as a, createElementBlock as i, normalizeClass as z, unref as d, createVNode as B, Transition as $, withCtx as v, createBlock as m, toDisplayString as N, resolveDynamicComponent as S, createCommentVNode as w } from "vue";
import { CIcon as D } from "../index.mjs";
import "./index2.mjs";
import E from "../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/CheckmarkSharp.mjs";
const M = { key: 0 }, V = {
  name: "CCheckbox"
}, j = /* @__PURE__ */ y({
  ...V,
  props: {
    value: { type: Boolean },
    size: { default: "m" },
    color: { default: "var(--c-color-primary-1)" },
    disabled: { type: Boolean, default: !1 },
    icon: { default: E }
  },
  emits: ["c_change", "update:value"],
  setup(l, { emit: r }) {
    const e = l, o = s(e.value), c = s("normal");
    g(
      () => e.value,
      (n) => {
        o.value = n;
      }
    );
    const f = C(() => `
    c-checkbox
    c-checkbox-${e.size}
    ${e.disabled ? "c-checkbox-disabled" : ""}
    c-checkbox-${o.value + ""}
    c-checkbox-${c.value}
  `), k = {
      "--c-color-checkbox": e.color
    }, t = {
      c_change: (n) => {
        e.disabled || (o.value = !o.value, r("update:value", o.value), r("c_change", o.value));
      }
    }, b = () => {
      c.value != "focus" && (c.value = "hover");
    }, h = () => {
      c.value != "focus" && (c.value = "normal");
    }, p = () => {
      c.value = "focus";
    }, x = () => {
      c.value = "normal";
    };
    return (n, u) => (a(), i("div", {
      class: z(d(f)),
      style: k,
      onClick: u[0] || (u[0] = (..._) => t.c_change && t.c_change(..._)),
      onMouseenter: b,
      onMouseleave: h,
      onFocus: p,
      onBlur: x,
      tabindex: "1"
    }, [
      B($, { name: "icon" }, {
        default: v(() => [
          o.value ? (a(), m(d(D), {
            key: 0,
            class: "c-checkbox__inner",
            size: e.size == "s" ? 12 : e.size == "m" ? 14 : 16,
            "background-color": l.disabled ? "var(--c-color-default-1)" : "var(--c-color-checkbox)",
            color: "var(--c-color-text-dirty-1)",
            "border-radius": 2
          }, {
            default: v(() => [
              typeof e.icon == "string" ? (a(), i("span", M, N(e.icon), 1)) : (a(), m(S(l.icon), {
                key: 1,
                "background-color": e.color
              }, null, 8, ["background-color"]))
            ]),
            _: 1
          }, 8, ["size", "background-color"])) : w("", !0)
        ]),
        _: 1
      })
    ], 34));
  }
});
export {
  j as default
};
