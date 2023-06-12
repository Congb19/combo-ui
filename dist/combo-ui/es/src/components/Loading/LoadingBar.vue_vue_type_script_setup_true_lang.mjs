import { defineComponent as t, computed as l, onMounted as r, onUnmounted as a, openBlock as u, createElementBlock as c, normalizeStyle as s, unref as d } from "vue";
import "./index2.mjs";
const m = {
  name: "CLoadingBar"
}, f = /* @__PURE__ */ t({
  ...m,
  props: {
    status: null,
    color: null
  },
  setup(n) {
    const o = n, e = l(() => ({
      width: `${o.status.value}vw`,
      backgroundColor: `${o.color.value}`
    }));
    return r(() => {
      console.log("loadingbar mounted");
    }), a(() => {
      console.log("loadingbar unmounted");
    }), (i, p) => (u(), c("div", {
      class: "c-loadingbar",
      style: s(d(e))
    }, null, 4));
  }
});
export {
  f as default
};
