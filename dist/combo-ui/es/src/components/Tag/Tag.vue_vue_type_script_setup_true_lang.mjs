import { defineComponent as y, ref as k, computed as p, openBlock as a, createBlock as v, Transition as C, withCtx as d, createElementBlock as i, normalizeClass as B, unref as l, renderSlot as $, createVNode as f, createCommentVNode as m, createTextVNode as b } from "vue";
import { CIcon as z } from "../index.mjs";
import "./index2.mjs";
import N from "../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/Close.mjs";
const T = /* @__PURE__ */ b("\u6807\u7B7E"), V = {
  name: "CTag"
}, M = /* @__PURE__ */ y({
  ...V,
  props: {
    size: { default: "m" },
    round: { type: Boolean, default: !1 },
    type: { default: "default" },
    closable: { type: Boolean, default: !1 },
    clean: { type: Boolean, default: !1 }
  },
  emits: ["c_click", "c_mouseover", "c_close"],
  setup(r, { emit: s }) {
    const e = r, n = k(!0), o = {
      c_click: () => {
        s("c_click");
      },
      c_mouseover: () => {
        s("c_mouseover");
      },
      c_close: (u) => {
        n.value = !1, s("c_close");
      }
    }, _ = p(() => `
    c-tag
    c-tag-${e.clean ? "clean" : "dirty"}
    c-tag-${e.type}
    c-tag-${e.size}
    ${e.round ? "c-tag-round" : ""}
  `), g = p(() => e.clean ? `var(--c-color-${e.type}-1)` : "var(--c-color-text-dirty-1)"), x = {
      "--c-tag-padding-s": e.closable ? "0 16px 0 8px" : "0 8px",
      "--c-tag-padding-m": e.closable ? "0 18px 0 10px" : "0 10px",
      "--c-tag-padding-l": e.closable ? "0 20px 0 12px" : "0 12px"
    };
    return (u, t) => (a(), v(C, { name: "tag" }, {
      default: d(() => [
        n.value ? (a(), i("div", {
          key: 0,
          class: B(l(_)),
          onClick: t[1] || (t[1] = (...c) => o.c_click && o.c_click(...c)),
          onMouseover: t[2] || (t[2] = (...c) => o.c_mouseover && o.c_mouseover(...c)),
          style: x
        }, [
          $(u.$slots, "default", {}, () => [
            T
          ]),
          r.closable ? (a(), i("span", {
            key: 0,
            class: "c-tag__close",
            onClick: t[0] || (t[0] = (...c) => o.c_close && o.c_close(...c))
          }, [
            f(l(z), {
              size: 12,
              color: l(g),
              style: { cursor: "pointer" }
            }, {
              default: d(() => [
                f(l(N))
              ]),
              _: 1
            }, 8, ["color"])
          ])) : m("", !0)
        ], 34)) : m("", !0)
      ]),
      _: 3
    }));
  }
});
export {
  M as default
};
