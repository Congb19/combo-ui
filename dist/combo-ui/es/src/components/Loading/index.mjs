var l = Object.defineProperty;
var u = (a, t, i) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : a[t] = i;
var s = (a, t, i) => (u(a, typeof t != "symbol" ? t + "" : t, i), i);
import { ref as o, createApp as r } from "vue";
import c from "./Loading.vue_vue_type_script_setup_true_lang.mjs";
import h from "./LoadingBar.vue_vue_type_script_setup_true_lang.mjs";
let n = null, e = null;
class v {
  constructor(t) {
    s(this, "component", c);
    s(this, "instance", null);
    s(this, "container", document.getElementById("c-loading-provider"));
    s(this, "options");
    s(this, "status", o(!1));
    this.options = t;
  }
  create() {
    this.container = document.getElementById("c-loading-provider"), this.instance = r(this.component, this.options);
  }
  start() {
    this.instance || this.create(), this.instance.mount(this.container), this.status.value = !0;
  }
  stop() {
    this.instance && this.instance.unmount(), this.instance = null, this.status.value = !1;
  }
}
class m {
  constructor(t) {
    s(this, "component", h);
    s(this, "instance", null);
    s(this, "container", document.getElementById("c-loading-provider"));
    s(this, "options");
    s(this, "finished", !1);
    s(this, "color", o("var(--c-color-primary-1)"));
    s(this, "timer");
    s(this, "status", o(0));
    this.options = t;
  }
  create() {
    this.container = document.getElementById("c-loading-provider"), this.instance = r(this.component, {
      ...this.options,
      status: this.status,
      color: this.color
    });
  }
  start() {
    this.unmount(), this.instance || this.create(), this.instance.mount(this.container), this.status.value = 0, this.timer = setInterval(() => {
      this.status.value >= 80 || this.status.value++;
    }, 10);
  }
  stop() {
    this.gogo(100);
  }
  error() {
    this.instance || this.start(), this.color.value = "var(--c-color-error-1)", this.stop();
  }
  finish() {
    this.instance || this.start(), this.color.value = "var(--c-color-success-1)", this.stop();
  }
  unmount() {
    clearInterval(this.timer), this.instance && this.instance.unmount(), this.instance = null, this.status.value = 0, this.color.value = "var(--c-color-primary-1)";
  }
  gogo(t) {
    if (t > this.status.value) {
      let i = setInterval(() => {
        this.status.value == 100 && (this.unmount(), this.status.value = 0, clearInterval(i)), t > this.status.value ? this.status.value++ : clearInterval(i);
      }, 1);
    } else if (t < this.status.value) {
      let i = setInterval(() => {
        this.status.value == 100 && (this.unmount(), this.status.value = 0, clearInterval(i)), t < this.status.value ? this.status.value-- : clearInterval(i);
      }, 1);
    }
  }
  goto(t) {
    this.instance || this.start(), clearInterval(this.timer), !(t < 0 || t > 100) && t !== this.status.value && this.gogo(t);
  }
}
const I = (a) => (n || (n = new v(a)), e || (e = new m(a)), {
  CLoading: n,
  CLoadingStatus: n.status,
  CLoadingBar: e,
  CLoadingBarStatus: e.status
});
export {
  I as useLoading
};
