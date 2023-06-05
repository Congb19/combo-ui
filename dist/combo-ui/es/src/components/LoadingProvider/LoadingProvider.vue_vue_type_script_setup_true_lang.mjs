import { defineComponent as t, openBlock as o, createElementBlock as n, Fragment as r, renderSlot as l, createElementVNode as c } from "vue";
import "./index2.mjs";
const d = /* @__PURE__ */ c("div", { id: "c-loading-provider" }, null, -1), m = /* @__PURE__ */ t({
  setup(a) {
    return (e, i) => (o(), n(r, null, [
      d,
      l(e.$slots, "default")
    ], 64));
  }
});
export {
  m as default
};
