import { defineComponent as t, openBlock as o, createElementBlock as r, Fragment as n, renderSlot as s, createElementVNode as l } from "vue";
import "./index2.mjs";
const a = /* @__PURE__ */ l("div", { id: "c-message-provider" }, null, -1), c = {
  name: "CMessageProvider"
}, p = /* @__PURE__ */ t({
  ...c,
  setup(d) {
    return (e, _) => (o(), r(n, null, [
      a,
      s(e.$slots, "default")
    ], 64));
  }
});
export {
  p as default
};
