import { defineComponent as s, ref as n, onMounted as i, onUnmounted as d, openBlock as u, createElementBlock as m, createElementVNode as l, createVNode as a, unref as c, withCtx as f, toDisplayString as r } from "vue";
import { CIcon as _ } from "../index.mjs";
import "./index2.mjs";
import p from "../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/Snow.mjs";
const v = { class: "c-loading" }, g = { class: "c-loading__icon" }, h = { class: "c-loading__text" }, E = /* @__PURE__ */ s({
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
    }), (x, C) => (u(), m("div", v, [
      l("div", g, [
        a(c(_), {
          color: e.iconColor,
          size: 80
        }, {
          default: f(() => [
            a(c(p))
          ]),
          _: 1
        }, 8, ["color"])
      ]),
      l("span", h, r(e.text) + r(o.value), 1)
    ]));
  }
});
export {
  E as default
};
