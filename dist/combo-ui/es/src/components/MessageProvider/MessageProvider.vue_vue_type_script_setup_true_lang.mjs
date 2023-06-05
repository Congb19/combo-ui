import { defineComponent as t, openBlock as o, createElementBlock as r, Fragment as n, renderSlot as l, createElementVNode as s } from "vue";
import "./index2.mjs";
const c = /* @__PURE__ */ s("div", { id: "c-message-provider" }, null, -1), i = /* @__PURE__ */ t({
  setup(a) {
    return (e, d) => (o(), r(n, null, [
      c,
      l(e.$slots, "default")
    ], 64));
  }
});
export {
  i as default
};
