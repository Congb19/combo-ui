import { defineComponent as m, computed as v, openBlock as r, createElementBlock as u, Fragment as f, renderList as y, normalizeClass as b, unref as g, normalizeStyle as k, toDisplayString as w } from "vue";
const C = ["onMouseup"], x = /* @__PURE__ */ m({
  props: {
    options: null,
    value: null
  },
  emits: ["update:value", "c_select"],
  setup(c, { emit: n }) {
    const t = c, a = (e) => {
      n("update:value", e), n("c_select", e);
    }, p = (e) => {
      e.preventDefault();
    }, d = (e) => {
      s(e) || a(e);
    }, i = v(() => `
    c-select__options__option
  `), _ = (e) => e == t.value, s = (e) => !!t.options.find((l) => l.value == e).disabled;
    return (e, l) => (r(!0), u(f, null, y(t.options, (o) => (r(), u("div", {
      class: b(g(i)),
      onMousedown: p,
      onMouseup: (M) => d(o.value),
      style: k(
        s(o.value) ? { cursor: "not-allowed", opacity: 0.3 } : _(o.value) ? { backgroundColor: "var(--c-color-primary-5)" } : {}
      )
    }, w(o.label), 47, C))), 256));
  }
});
export {
  x as default
};
