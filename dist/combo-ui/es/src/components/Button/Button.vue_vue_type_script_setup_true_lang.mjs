import { defineComponent as i, ref as f, computed as m, openBlock as p, createElementBlock as b, normalizeClass as _, unref as k, renderSlot as y, createElementVNode as B } from "vue";
import "./index2.mjs";
const $ = /* @__PURE__ */ B("div", { class: "c-button__border" }, null, -1), v = {
  name: "CButton"
}, x = /* @__PURE__ */ i({
  ...v,
  props: {
    size: { default: "m" },
    round: { type: Boolean, default: !1 },
    type: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    clean: { type: Boolean, default: !1 }
  },
  emits: ["c_click"],
  setup(c, { emit: a }) {
    const e = c, t = f("normal"), o = {
      c_click: () => {
        e.disabled || a("c_click");
      }
    }, s = m(() => `
    c-button 
    c-button-${e.type ? e.type : "default"} 
    c-button-${e.size} 
    ${e.round ? "c-button-round" : ""}
    ${e.disabled ? "c-button-disabled" : ""}
    c-button-${e.clean ? "clean" : "dirty"} 
    c-button-${t.value} 
  `), u = () => {
      t.value = "focus";
    }, d = () => {
      t.value = "normal";
    };
    return (n, l) => (p(), b("div", {
      class: _(k(s)),
      onClick: l[0] || (l[0] = (...r) => o.c_click && o.c_click(...r)),
      tabindex: 1,
      onFocus: u,
      onBlur: d
    }, [
      $,
      y(n.$slots, "default")
    ], 34));
  }
});
export {
  x as default
};
