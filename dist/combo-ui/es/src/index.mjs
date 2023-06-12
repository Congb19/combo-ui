import "./styles/index.mjs";
import * as s from "./components/index.mjs";
import { All as x, CBlock as p, CButton as m, CCheckbox as g, CDropdown as n, CIcon as C, CInput as c, CLoadingProvider as h, CMessageProvider as v, CSelect as P, CSwitch as T, CTag as k, CThemeProvider as w } from "./components/index.mjs";
import { useTheme as I } from "./components/Theme/index.mjs";
import { useMsg as b } from "./components/Message/index.mjs";
import { useLoading as M } from "./components/Loading/index.mjs";
import { default as y } from "./components/Block/Block.vue_vue_type_script_setup_true_lang.mjs";
import { default as E } from "./components/Button/Button.vue_vue_type_script_setup_true_lang.mjs";
import { default as q } from "./components/Checkbox/Checkbox.mjs";
import { default as F } from "./components/Dropdown/Dropdown.vue_vue_type_script_setup_true_lang.mjs";
import { default as H } from "./components/Icon/Icon.vue_vue_type_script_setup_true_lang.mjs";
import { default as K } from "./components/Input/Input.vue_vue_type_script_setup_true_lang.mjs";
import { default as O } from "./components/Select/Select.vue_vue_type_script_setup_true_lang.mjs";
import { default as R } from "./components/Switch/Switch.vue_vue_type_script_setup_true_lang.mjs";
import { default as V } from "./components/Tag/Tag.vue_vue_type_script_setup_true_lang.mjs";
import { default as X } from "./components/MessageProvider/MessageProvider.vue_vue_type_script_setup_true_lang.mjs";
import { default as Z } from "./components/ThemeProvider/ThemeProvider.vue_vue_type_script_setup_true_lang.mjs";
import { default as $ } from "./components/LoadingProvider/LoadingProvider.vue_vue_type_script_setup_true_lang.mjs";
const f = (e, r, t) => {
  if (!r)
    return;
  e.component(r) || e.component(r, t);
}, d = (e) => ({
  install: (t) => {
    (e == null ? void 0 : e.length) && e.length > 0 && e.forEach((o) => {
      if (!o)
        return;
      const { name: a } = o;
      console.log("component registered globally, ", a), f(t, a, o);
    });
  }
});
export {
  x as All,
  y as Block,
  E as Button,
  s as C,
  p as CBlock,
  m as CButton,
  g as CCheckbox,
  n as CDropdown,
  C as CIcon,
  c as CInput,
  h as CLoadingProvider,
  v as CMessageProvider,
  P as CSelect,
  T as CSwitch,
  k as CTag,
  w as CThemeProvider,
  q as Checkbox,
  F as Dropdown,
  H as Icon,
  K as Input,
  $ as LoadingProvider,
  X as MessageProvider,
  O as Select,
  R as Switch,
  V as Tag,
  Z as ThemeProvider,
  d as create,
  M as useLoading,
  b as useMsg,
  I as useTheme
};
