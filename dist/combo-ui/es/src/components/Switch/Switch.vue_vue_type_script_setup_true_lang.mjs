import { defineComponent as w, ref as i, watch as C, computed as u, openBlock as t, createElementBlock as d, normalizeClass as b, unref as a, normalizeStyle as g, createElementVNode as k, createBlock as v, withCtx as z, toDisplayString as B, resolveDynamicComponent as x, createCommentVNode as S } from "vue";
import { CIcon as $ } from "../index.mjs";
import "./index2.mjs";
const N = { class: "c-switch__driver" }, D = { key: 0 }, E = {
  name: "CSwitch"
}, j = /* @__PURE__ */ w({
  ...E,
  props: {
    value: { type: Boolean },
    size: { default: "m" },
    color: { default: "var(--c-color-primary-1)" },
    disabled: { type: Boolean, default: !1 },
    icon: null
  },
  emits: ["c_change", "update:value"],
  setup(m, { emit: l }) {
    const e = m, o = i(e.value), c = i("normal");
    C(
      () => e.value,
      (n) => {
        o.value = n;
      }
    );
    const p = u(() => `
    c-switch
    c-switch-${e.size}
    ${e.disabled ? "c-switch-disabled" : ""}
    c-switch-${o.value + ""}
    c-switch-${c.value}
  `), f = u(() => ({
      backgroundColor: o.value ? e.color : "var(--c-color-default-1)"
    })), s = {
      c_change: () => {
        e.disabled || (o.value = !o.value, l("update:value", o.value), l("c_change", o.value));
      }
    }, _ = () => {
      c.value = "focus";
    }, h = () => {
      c.value = "normal";
    };
    return (n, r) => (t(), d("div", {
      class: b(a(p)),
      onClick: r[0] || (r[0] = (...y) => s.c_change && s.c_change(...y)),
      style: g(a(f)),
      tabindex: 1,
      onFocus: _,
      onBlur: h
    }, [
      k("div", N, [
        e.icon ? (t(), v(a($), {
          key: 0,
          style: { position: "absolute", top: "0", left: "0" },
          size: e.size == "s" ? 12 : e.size == "m" ? 16 : 20,
          color: "var(--c-color-text-1)"
        }, {
          default: z(() => [
            typeof e.icon == "string" ? (t(), d("span", D, B(e.icon), 1)) : (t(), v(x(e.icon), { key: 1 }))
          ]),
          _: 1
        }, 8, ["size"])) : S("", !0)
      ])
    ], 38));
  }
});
export {
  j as default
};
