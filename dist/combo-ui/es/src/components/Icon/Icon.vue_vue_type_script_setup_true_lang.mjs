import { defineComponent as s, openBlock as a, createElementBlock as d, renderSlot as u } from "vue";
import "./index2.mjs";
const p = {
  name: "CIcon"
}, _ = /* @__PURE__ */ s({
  ...p,
  props: {
    size: { default: 14 },
    color: { default: "var(--c-color-text-1)" },
    backgroundColor: { default: "transparent" },
    borderRadius: { default: 2 }
  },
  emits: ["c_click"],
  setup(r, { emit: t }) {
    const o = r, c = {
      c_click: () => {
        t("c_click");
      }
    }, l = {
      height: o.size + "px",
      width: o.size + "px",
      borderRadius: o.borderRadius + "px",
      color: o.color,
      backgroundColor: o.backgroundColor,
      "--c-size-icon": o.size + "px",
      "--c-color-icon": o.color
    };
    return (i, e) => (a(), d("div", {
      class: "c-icon",
      style: l,
      onClick: e[0] || (e[0] = (...n) => c.c_click && c.c_click(...n))
    }, [
      u(i.$slots, "default")
    ]));
  }
});
export {
  _ as default
};
