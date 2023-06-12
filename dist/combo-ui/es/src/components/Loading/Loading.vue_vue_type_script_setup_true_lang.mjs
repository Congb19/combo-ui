import { defineComponent as r, ref as n, onMounted as i, onUnmounted as d, openBlock as u, createElementBlock as _, createElementVNode as l, createVNode as a, unref as c, withCtx as m, toDisplayString as s } from "vue";
import { CIcon as f } from "../index.mjs";
import "./index2.mjs";
import g from "../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/Snow.mjs";
const p = { class: "c-loading" }, v = { class: "c-loading__icon" }, h = { class: "c-loading__text" }, x = {
  name: "CLoading"
}, I = /* @__PURE__ */ r({
  ...x,
  props: {
    iconColor: { default: "var(--c-color-primary-1)" },
    text: { default: "Loading" }
  },
  setup(e) {
    const t = n(!1), o = n(".");
    return i(() => {
      console.log("loading mounted"), t.value = !0, setInterval(() => {
        o.value = o.value + ".", o.value.length > 3 && (o.value = "");
      }, 500);
    }), d(() => {
      console.log("loading unmounted"), t.value = !1;
    }), (C, w) => (u(), _("div", p, [
      l("div", v, [
        a(c(f), {
          color: e.iconColor,
          size: 80
        }, {
          default: m(() => [
            a(c(g))
          ]),
          _: 1
        }, 8, ["color"])
      ]),
      l("span", h, s(e.text) + s(o.value), 1)
    ]));
  }
});
export {
  I as default
};
