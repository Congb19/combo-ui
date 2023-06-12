import { defineComponent as o, onMounted as t, openBlock as r, createElementBlock as n, renderSlot as d } from "vue";
import { useTheme as m } from "../Theme/index.mjs";
const s = { id: "c-theme-provider-body" }, _ = {
  name: "CThemeProvider"
}, l = /* @__PURE__ */ o({
  ..._,
  setup(c) {
    return t(() => {
      m();
    }), (e, i) => (r(), n("div", s, [
      d(e.$slots, "default")
    ]));
  }
});
export {
  l as default
};
