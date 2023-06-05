import { defineComponent as h, watch as g, ref as d, onMounted as x, computed as k, openBlock as v, createElementBlock as p, normalizeClass as y, unref as L } from "vue";
import "./index2.mjs";
const B = ["type", "disabled", "value", "placeholder", "maxlength"], M = ["disabled", "value", "placeholder", "maxlength"], C = {
  name: "CButton"
}, I = /* @__PURE__ */ h({
  ...C,
  props: {
    size: { default: "m" },
    type: { default: "text" },
    maxLength: null,
    value: { default: "" },
    disabled: { type: Boolean, default: !1 },
    placeholder: { default: "" }
  },
  emits: [
    "update:value",
    "c_change",
    "c_blur",
    "c_focus",
    "c_click"
  ],
  setup(m, { emit: s }) {
    const e = m;
    g(
      () => e.value,
      (a) => {
        e.maxLength ? n.value = (a + "").substring(0, e.maxLength) : n.value = a + "";
      }
    );
    const c = d(), r = d(!1);
    x(() => {
      c.value.addEventListener("compositionstart", (a) => {
        r.value = !0;
      }), c.value.addEventListener("compositionend", (a) => {
        r.value = !1, i(a);
      });
    });
    const n = d(e.value), i = (a) => {
      r.value || (n.value = a.target.value, s("update:value", n.value), s("c_change", n.value));
    }, o = d("default"), f = () => {
      o.value !== "focus" && !e.disabled && (o.value = "hover");
    }, _ = () => {
      o.value !== "focus" && !e.disabled && (o.value = "default");
    }, l = {
      c_change: () => {
        s("c_change");
      },
      c_blur: () => {
        o.value = "default", s("c_blur");
      },
      c_focus: () => {
        o.value = "focus", s("c_focus");
      },
      c_click: () => {
        c.value.focus(), s("c_click");
      }
    }, b = k(() => `
    c-input
    c-input-${o.value}
    c-input-${e.size} 
    ${e.disabled ? "c-input-disabled" : ""}
  `);
    return (a, u) => (v(), p("div", {
      class: y(L(b)),
      onClick: u[4] || (u[4] = (...t) => l.c_click && l.c_click(...t))
    }, [
      e.type !== "textarea" ? (v(), p("input", {
        key: 0,
        ref_key: "c_input",
        ref: c,
        type: e.type,
        disabled: e.disabled,
        value: n.value,
        placeholder: e.placeholder,
        maxlength: e.maxLength ? e.maxLength : void 0,
        onFocus: u[0] || (u[0] = (...t) => l.c_focus && l.c_focus(...t)),
        onBlur: u[1] || (u[1] = (...t) => l.c_blur && l.c_blur(...t)),
        onMouseenter: f,
        onMouseleave: _,
        onInput: i
      }, null, 40, B)) : (v(), p("textarea", {
        key: 1,
        ref_key: "c_input",
        ref: c,
        name: "",
        id: "",
        cols: "30",
        rows: "2 ",
        disabled: e.disabled,
        value: n.value,
        placeholder: e.placeholder,
        maxlength: e.maxLength ? e.maxLength : void 0,
        onFocus: u[2] || (u[2] = (...t) => l.c_focus && l.c_focus(...t)),
        onBlur: u[3] || (u[3] = (...t) => l.c_blur && l.c_blur(...t)),
        onMouseenter: f,
        onMouseleave: _,
        onInput: i
      }, `
    `, 40, M))
    ], 2));
  }
});
export {
  I as default
};
