import { defineComponent as s, ref as d, watch as p, onMounted as c, computed as m, openBlock as i, createBlock as f, Transition as u, withCtx as w, withDirectives as h, createElementVNode as n, normalizeStyle as _, unref as x, renderSlot as v, vShow as y } from "vue";
import "./index2.mjs";
import { createPopper as g } from "../../../node_modules/.pnpm/@popperjs_core@2.11.7/node_modules/@popperjs/core/lib/popper.mjs";
const B = { name: "CDropdown" }, b = /* @__PURE__ */ s({
  ...B,
  props: {
    show: { type: Boolean },
    parent: null,
    placement: { default: "bottom-start" },
    maxHeight: null
  },
  setup(a) {
    const e = a, t = d();
    let o;
    p(
      () => e.show,
      (r) => {
        o == null || o.update();
      }
    ), c(() => {
      setTimeout(() => {
        o = g(e.parent, t.value, {
          placement: e.placement,
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 8]
              }
            }
          ]
        });
      }, 50);
    });
    const l = m(() => ({
      maxHeight: e.maxHeight ? e.maxHeight + "px" : "9999px",
      overflow: "scroll"
    }));
    return (r, H) => (i(), f(u, { name: "dropdown" }, {
      default: w(() => [
        h(n("div", {
          ref_key: "dropdown",
          ref: t,
          class: "c-dropdown"
        }, [
          n("div", {
            class: "c-dropdown__body",
            style: _(x(l))
          }, [
            v(r.$slots, "default")
          ], 4)
        ], 512), [
          [y, e.show]
        ])
      ]),
      _: 3
    }));
  }
});
export {
  b as default
};
