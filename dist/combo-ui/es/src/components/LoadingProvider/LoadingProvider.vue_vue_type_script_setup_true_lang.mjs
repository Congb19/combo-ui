import { defineComponent as o, openBlock as t, createElementBlock as n, Fragment as r, renderSlot as l, createElementVNode as d } from "vue";
import "./index2.mjs";
const a = /* @__PURE__ */ d("div", { id: "c-loading-provider" }, null, -1), c = {
  name: "CLoadingProvider"
}, p = /* @__PURE__ */ o({
  ...c,
  setup(i) {
    return (e, _) => (t(), n(r, null, [
      a,
      l(e.$slots, "default")
    ], 64));
  }
});
export {
  p as default
};
