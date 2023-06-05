var v = Object.defineProperty;
var w = (o, e, t) => e in o ? v(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var n = (o, e, t) => (w(o, typeof e != "symbol" ? e + "" : e, t), t);
import { ref as y, computed as M, createApp as E } from "vue";
import T from "./Message.vue_vue_type_script_setup_true_lang.mjs";
const l = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
let m = 1;
class x {
  info(e, t) {
    new a().create(e, "info", t);
  }
  error(e, t) {
    new a().create(e, "error", t);
  }
  success(e, t) {
    new a().create(e, "success", t);
  }
  warning(e, t) {
    new a().create(e, "warning", t);
  }
}
class a {
  constructor() {
    n(this, "component", T);
    n(this, "instance");
    n(this, "id", 0);
    n(this, "div", null);
    n(this, "props", null);
    n(this, "top", y(68));
    n(this, "containerStyle");
  }
  create(e, t, i) {
    this.id = m, m++;
    let s = {
      type: t,
      position: "mid"
    };
    typeof e == "string" ? s.msg = e : s = { ...s, ...e, msg: e.msg ? e.msg : "" }, i && (s.duration = i), this.props = s;
    let d = document.createElement("div");
    this.div = document.getElementById("c-message-provider").appendChild(d), this.div.className = "c-message-container";
    let r = s.position == "mid" ? l : s.position == "left" ? p : h;
    r.set(this.id, this);
    let f = s.position == "mid" ? "left: 50%; transform: translateX(-50%);" : s.position == "left" ? "left: 0px" : "right: 0px";
    this.containerStyle = M(() => {
      let c = 0;
      return r.forEach((g, u) => {
        u < this.id && (c += g.top.value);
      }), f + "; top: " + c + "px";
    }), this.recalcTop(), this.instance = E(this.component, {
      ...s,
      destroy: () => this.destroy.call(this)
    }), this.instance.mount(this.div);
  }
  destroy() {
    let e = this.props.position == "mid" ? l : this.props.position == "left" ? p : h;
    if (e.has(this.id)) {
      this.div.className = "c-message-container c-message-container-hide";
      let t = setInterval(() => {
        this.top.value <= 0 && clearInterval(t), this.recalcTop(), e.forEach((i, s) => {
          s > this.id && i.recalcTop();
        }), this.top.value -= 2;
      }, 6);
      setTimeout(() => {
        var i;
        this.instance.unmount(), (i = document.getElementById("c-message-provider")) == null || i.removeChild(this.div), e.delete(this.id);
      }, 400);
    }
  }
  recalcTop() {
    this.div.style = this.containerStyle.value;
  }
}
const B = () => new x();
export {
  B as useMsg
};
