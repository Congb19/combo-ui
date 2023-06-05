import { defineComponent as t, computed as l, onMounted as r, onUnmounted as u, openBlock as a, createElementBlock as c, normalizeStyle as s, unref as d } from "vue";
import "./index2.mjs";
const f = /* @__PURE__ */ t({
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
    }), u(() => {
      console.log("loadingbar unmounted");
    }), (m, p) => (a(), c("div", {
      class: "c-loadingbar",
      style: s(d(e))
    }, null, 4));
  }
});
export {
  f as default
};
