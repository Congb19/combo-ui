import "./styles/index.mjs";
import * as s from "./components/index.mjs";
import { All as u, CBlock as m, CButton as p, CCheckbox as C, CDropdown as n, CIcon as g, CInput as c, CLoadingProvider as h, CMessageProvider as v, CSelect as P, CSwitch as T, CTag as k, CThemeProvider as w } from "./components/index.mjs";
import { useTheme as I } from "./components/Theme/index.mjs";
import { useMsg as L } from "./components/Message/index.mjs";
import { useLoading as b } from "./components/Loading/index.mjs";
import { default as A } from "./components/Block/Block.vue_vue_type_script_setup_true_lang.mjs";
import { default as j } from "./components/Button/Button.vue_vue_type_script_setup_true_lang.mjs";
import { default as y } from "./components/Checkbox/Checkbox.mjs";
import { default as F } from "./components/Dropdown/Dropdown.vue_vue_type_script_setup_true_lang.mjs";
import { default as H } from "./components/Icon/Icon.vue_vue_type_script_setup_true_lang.mjs";
import { default as K } from "./components/Input/Input.vue_vue_type_script_setup_true_lang.mjs";
import { default as O } from "./components/Select/Select.vue_vue_type_script_setup_true_lang.mjs";
import { default as R } from "./components/Switch/Switch.vue_vue_type_script_setup_true_lang.mjs";
import { default as V } from "./components/Tag/Tag.vue_vue_type_script_setup_true_lang.mjs";
import { default as X } from "./components/MessageProvider/MessageProvider.vue_vue_type_script_setup_true_lang.mjs";
import { default as Z } from "./components/ThemeProvider/ThemeProvider.vue_vue_type_script_setup_true_lang.mjs";
import { default as $ } from "./components/LoadingProvider/LoadingProvider.vue_vue_type_script_setup_true_lang.mjs";
const f = (e, r, o) => {
  e.component(r) || e.component(r, o);
}, l = (e) => ({
  install: (o) => {
    (e == null ? void 0 : e.length) && e.length > 0 && e.forEach((t) => {
      const { name: a } = t;
      f(o, a, t);
    });
  }
});
export {
  u as All,
  A as Block,
  j as Button,
  s as C,
  m as CBlock,
  p as CButton,
  C as CCheckbox,
  n as CDropdown,
  g as CIcon,
  c as CInput,
  h as CLoadingProvider,
  v as CMessageProvider,
  P as CSelect,
  T as CSwitch,
  k as CTag,
  w as CThemeProvider,
  y as Checkbox,
  F as Dropdown,
  H as Icon,
  K as Input,
  $ as LoadingProvider,
  X as MessageProvider,
  O as Select,
  R as Switch,
  V as Tag,
  Z as ThemeProvider,
  l as create,
  b as useLoading,
  L as useMsg,
  I as useTheme
};
