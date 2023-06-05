import { defineComponent as g, computed as f, ref as o, watch as y, onMounted as k, openBlock as B, createElementBlock as N, normalizeClass as z, unref as r, createElementVNode as D, createVNode as v, withCtx as E } from "vue";
import { CInput as H, CDropdown as I } from "../index.mjs";
import S from "./SelectOptions.vue_vue_type_script_setup_true_lang.mjs";
import "./index2.mjs";
const V = {
  name: "CSelect"
}, q = /* @__PURE__ */ g({
  ...V,
  props: {
    size: { default: "m" },
    options: null,
    value: null,
    placement: { default: "bottom-start" },
    disabled: { type: Boolean, default: !1 },
    maxHeight: { default: 200 }
  },
  emits: ["c_select", "update:value"],
  setup(m, { emit: i }) {
    const e = m, _ = f(() => `
    c-select
    ${e.disabled ? "c-select-disabled" : ""}
  `), b = {}, s = o(!1), t = o(e.value);
    y(
      () => e.value,
      (l) => {
        t.value != e.value && (t.value = e.value, a.value = u.value);
      }
    );
    const u = f(() => t.value == null ? "" : e.options.find((l) => l.value == t.value).label), a = o(u.value), p = o();
    k(() => {
    });
    const h = () => {
      e.disabled || e.options.length < 1 || (s.value = !0);
    }, d = () => {
      s.value = !1;
    }, C = () => {
      if (d(), a.value != u.value)
        if (a.value == "")
          t.value = null, c(null);
        else {
          const l = e.options.find((n) => n.label == a.value);
          l ? (t.value = l.value, c(l.value)) : a.value = u.value;
        }
    }, c = (l) => {
      i("update:value", l), i("c_select", l), d(), a.value = u.value;
    }, x = (l) => {
      a.value = l;
    };
    return (l, n) => (B(), N("div", {
      class: z(r(_)),
      style: b
    }, [
      D("div", {
        ref_key: "input",
        ref: p,
        style: { display: "block" }
      }, [
        v(r(H), {
          value: a.value,
          onC_click: h,
          onC_blur: C,
          onC_change: x,
          disabled: e.disabled
        }, null, 8, ["value", "disabled"])
      ], 512),
      v(r(I), {
        show: s.value,
        parent: p.value,
        "max-height": e.maxHeight,
        placement: e.placement
      }, {
        default: E(() => [
          v(S, {
            options: e.options,
            value: t.value,
            "onUpdate:value": n[0] || (n[0] = (w) => t.value = w),
            onC_select: c
          }, null, 8, ["options", "value"])
        ]),
        _: 1
      }, 8, ["show", "parent", "max-height", "placement"])
    ], 2));
  }
});
export {
  q as default
};
