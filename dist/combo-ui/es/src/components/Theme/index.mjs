import { ref as d } from "vue";
import "../../styles/colors.mjs";
import "../../styles/colors-dark.mjs";
let o = !1, t = d("light"), l = d("light"), a, i;
const T = () => {
  o = window.matchMedia("(prefers-color-scheme: dark)").matches, t.value = o ? "dark" : "light", l.value = o ? "dark" : "light", a = document.getElementsByTagName("html")[0], i = document.createElement("style"), i.id = "c-theme-provider", document.head.appendChild(i);
  var u = window.matchMedia("(prefers-color-scheme: dark)");
  u.addEventListener("change", (e) => {
    t.value != "custom" && (e.matches ? (r("dark"), l.value = "dark") : (r("light"), l.value = "light"));
  });
  const c = () => a.className.indexOf("dark") > -1, n = () => localStorage.getItem("vitepress-theme-appearance"), m = (e) => {
    localStorage.setItem("vitepress-theme-appearance", e);
  }, h = () => n() == "auto", g = new MutationObserver((e, s) => {
    for (let v of e)
      c() && t.value == "light" ? r("dark") : !c() && t.value == "dark" && r("light");
  }), f = {
    attributes: !0,
    childList: !1,
    subTree: !1
  };
  g.observe(a, f);
  const r = (e) => {
    let s = a.className.indexOf("dark");
    e == "light" ? (t.value = e, m("light"), s > -1 && (a.className = a.className.substring(0, s) + a.className.substring(s + 4))) : e == "dark" ? (t.value = e, m("dark"), s < 0 && (a.className += " dark")) : (t.value = "custom", i.innerHTML = e);
  };
  return h() ? r(l.value) : r(n() || "light"), {
    currentTheme: t,
    systemTheme: l,
    changeTheme: r
  };
};
export {
  T as useTheme
};
