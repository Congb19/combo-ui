import { defineComponent as o, onMounted as t, openBlock as r, createElementBlock as n, renderSlot as d } from "vue";
import { useTheme as s } from "../Theme/index.mjs";
const c = { id: "c-theme-provider-body" }, u = /* @__PURE__ */ o({
  setup(m) {
    return t(() => {
      s();
    }), (e, p) => (r(), n("div", c, [
      d(e.$slots, "default")
    ]));
  }
});
export {
  u as default
};
