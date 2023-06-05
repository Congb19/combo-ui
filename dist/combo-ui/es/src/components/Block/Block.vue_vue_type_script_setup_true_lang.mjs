import { defineComponent as x, ref as b, computed as n, openBlock as o, createElementBlock as m, normalizeClass as B, unref as t, normalizeStyle as z, createElementVNode as i, createVNode as d, withCtx as s, createBlock as c, createCommentVNode as a, toDisplayString as f, Transition as N, withDirectives as S, vShow as $ } from "vue";
import { CIcon as y } from "../index.mjs";
import "./index2.mjs";
import g from "../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/CheckmarkCircle.mjs";
import D from "../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/InformationCircle.mjs";
import V from "../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/AlertCircle.mjs";
import E from "../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/CloseCircle.mjs";
import I from "../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/CaretUp.mjs";
import A from "../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/CaretDown.mjs";
const P = { class: "c-block__icon" }, T = { class: "c-block__title" }, U = {
  key: 0,
  class: "c-block__arrow"
}, j = {
  name: "CBlock"
}, R = /* @__PURE__ */ x({
  ...j,
  props: {
    type: { default: "default" },
    title: { default: "" },
    content: null,
    detail: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !0 },
    width: null
  },
  emits: ["c_expand"],
  setup(r, { emit: k }) {
    const e = r, _ = {
      c_expand: () => {
        k("c_expand", l.value);
      }
    }, l = b(e.expanded), C = n(() => `
    c-block
    c-block-${e.type}
    ${e.detail ? "c-block-detail" : ""}
  `), h = n(() => ({
      width: e.width ? e.width + "px" : "100%"
    }));
    n(() => ({
      width: e.width ? e.width + "px" : "100%"
    }));
    const p = n(() => `var(--c-color-${e.type == "info" ? "primary" : e.type}-1)`);
    n(() => `var(--c-color-${e.type == "info" ? "primary" : e.type}-6)`);
    const v = () => {
      !e.detail || (l.value = !l.value, _.c_expand());
    }, w = (u) => {
      !e.detail || u.stopPropagation();
    };
    return (u, q) => (o(), m("div", {
      class: B(t(C)),
      onClick: v,
      style: z(t(h))
    }, [
      i("span", P, [
        d(t(y), {
          size: 20,
          color: t(p)
        }, {
          default: s(() => [
            r.type == "success" ? (o(), c(t(g), { key: 0 })) : a("", !0),
            r.type == "info" || r.type == "default" ? (o(), c(t(D), { key: 1 })) : a("", !0),
            r.type == "warning" ? (o(), c(t(V), { key: 2 })) : a("", !0),
            r.type == "error" ? (o(), c(t(E), { key: 3 })) : a("", !0)
          ]),
          _: 1
        }, 8, ["color"])
      ]),
      i("span", T, f(e.title ? e.title : e.type), 1),
      d(N, { name: "block" }, {
        default: s(() => [
          S(i("div", {
            class: "c-block__body",
            onClick: w
          }, f(e.content), 513), [
            [$, l.value]
          ])
        ]),
        _: 1
      }),
      e.detail ? (o(), m("div", U, [
        d(t(y), {
          size: 14,
          color: t(p)
        }, {
          default: s(() => [
            l.value ? (o(), c(t(I), { key: 0 })) : (o(), c(t(A), { key: 1 }))
          ]),
          _: 1
        }, 8, ["color"])
      ])) : a("", !0)
    ], 6));
  }
});
export {
  R as default
};
