var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
const EMPTY_ARR = [];
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const extend = Object.assign;
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isObject = (val) => val !== null && typeof val === "object";
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx)
    return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    const res = fn(...args);
    setCurrentRenderingInstance(prevInstance);
    if (renderFnWithContext._d) {
      setBlockTracking(1);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
const isSuspense = (type) => type.__isSuspense;
function defineComponent(options) {
  return isFunction(options) ? { setup: options, name: options.name } : options;
}
const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
const isTeleport = (type) => type.__isTeleport;
const COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(Component);
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
const Fragment = Symbol(void 0);
const Text = Symbol(void 0);
const Comment = Symbol(void 0);
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref, ref_key, ref_for }) => {
  return ref != null ? isString(ref) || isRef(ref) || isFunction(ref) ? { i: currentRenderingInstance, r: ref, k: ref_key, f: !!ref_for } : ref : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(type, props, true);
    if (children) {
      normalizeChildren(cloned, children);
    }
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject(style)) {
      if (isProxy(style) && !isArray(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
  return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props, ref, patchFlag, children } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? mergeRef && ref ? isArray(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor
  };
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
    return createVNode("slot", name === "default" ? null : { name }, fallback && fallback());
  }
  let slot = slots[name];
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const rendered = createBlock(Fragment, { key: props.key || `_${name}` }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child))
      return true;
    if (child.type === Comment)
      return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
let currentInstance = null;
function getComponentName(Component) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
var Button_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$2 = /* @__PURE__ */ createTextVNode("\u6309\u94AE");
const __default__$2 = {
  name: "CButton"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$2), {
  props: {
    size: {
      type: String,
      default: "m"
    },
    color: {
      type: String,
      default: "#aa0000"
    },
    round: {
      type: Number,
      default: 50
    },
    type: {
      type: String,
      default: "b"
    }
  },
  emits: ["c_click", "c_mouseover", "c_close"],
  setup(__props, { emit }) {
    const props = __props;
    const events = {
      c_click: () => {
        emit("c_click");
      }
    };
    const resolveType = (type) => {
      switch (type) {
        case "r":
          return {
            __backgroundColor: "pink",
            __borderColor: "red",
            __fontColor: "red"
          };
        case "g":
          return {
            __backgroundColor: "pink",
            __borderColor: "green",
            __fontColor: "green"
          };
        default:
          return {
            __backgroundColor: "pink",
            __borderColor: "blue",
            __fontColor: "blue"
          };
      }
    };
    const resolveSize = (size) => {
      switch (size) {
        case "s":
          return {
            __height: 22,
            __fontSize: 12
          };
        case "l":
          return {
            __height: 34,
            __fontSize: 14
          };
        default:
          return {
            __height: 28,
            __fontSize: 14
          };
      }
    };
    const styleVars = {
      __height: resolveSize(props.size).__height,
      __fontSize: resolveSize(props.size).__fontSize,
      __backgroundColor: resolveType(props.type).__backgroundColor,
      __borderColor: "#ccc",
      __fontColor: resolveType(props.type).__fontColor
    };
    const style = {
      padding: `
    ${(styleVars.__height - styleVars.__fontSize) / 2}px 
    ${7}px
  `,
      fontSize: `${styleVars.__fontSize}px`,
      lineHeight: `${styleVars.__fontSize}px`,
      height: `${styleVars.__height}px`
    };
    const styleBorder = {
      border: `3px ${styleVars.__borderColor} solid`,
      borderRadius: `${props.round * styleVars.__height / 200}px`,
      zIndex: -1,
      backgroundColor: styleVars.__backgroundColor
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "c-button",
        onClick: _cache[0] || (_cache[0] = (...args) => events.c_click && events.c_click(...args)),
        style
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          _hoisted_1$2
        ], true),
        createBaseVNode("div", {
          class: "c-button__border",
          style: styleBorder
        })
      ]);
    };
  }
}));
var CButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-01877c57"]]);
var Tag_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode("\u6807\u7B7E");
const __default__$1 = {
  name: "CTag"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  props: {
    size: {
      type: String,
      default: "m"
    },
    color: {
      type: String,
      default: "#aa0000"
    },
    round: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default"
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  emits: ["c_click", "c_mouseover", "c_close"],
  setup(__props, { emit }) {
    const props = __props;
    const resolveType = (type) => {
      switch (type) {
        case "primary":
          return {
            __backgroundColor: "pink",
            __borderColor: "red",
            __fontColor: "red"
          };
        case "info":
          return {
            __backgroundColor: "pink",
            __borderColor: "blue",
            __fontColor: "blue"
          };
        case "success":
          return {
            __backgroundColor: "pink",
            __borderColor: "green",
            __fontColor: "green"
          };
        case "warning":
          return {
            __backgroundColor: "yellow",
            __borderColor: "orange",
            __fontColor: "orange"
          };
        case "error":
          return {
            __backgroundColor: "pink",
            __borderColor: "red",
            __fontColor: "red"
          };
        default:
          return {
            __backgroundColor: "#eee",
            __borderColor: "#aaa",
            __fontColor: "#aaa"
          };
      }
    };
    const resolveSize = (size) => {
      switch (size) {
        case "s":
          return {
            __height: 22,
            __fontSize: 12
          };
        case "m":
          return {
            __height: 28,
            __fontSize: 14
          };
        case "l":
          return {
            __height: 34,
            __fontSize: 14
          };
        default:
          return {
            __height: 28,
            __fontSize: 14
          };
      }
    };
    const events = {
      c_click: () => {
        emit("c_click");
      },
      c_mouseover: () => {
        emit("c_mouseover");
      },
      c_close: (e) => {
        emit("c_close");
        e.stopPropagation();
      }
    };
    const styleVars = {
      __height: resolveSize(props.size).__height,
      __fontSize: resolveSize(props.size).__fontSize,
      __backgroundColor: resolveType(props.type).__backgroundColor,
      __borderColor: resolveType(props.type).__borderColor,
      __fontColor: resolveType(props.type).__fontColor
    };
    const style = {
      padding: `
    ${(styleVars.__height - styleVars.__fontSize) / 2}px 
    ${props.round ? styleVars.__height / 2 : 7}px
  `,
      fontSize: `${styleVars.__fontSize}px`,
      lineHeight: `${styleVars.__fontSize}px`,
      height: `${styleVars.__height}px`
    };
    const styleBorder = {
      border: `1px ${styleVars.__borderColor} solid`,
      borderRadius: `${props.round ? styleVars.__height / 2 : 2}px`,
      zIndex: -1,
      backgroundColor: styleVars.__backgroundColor
    };
    console.log(style);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "c-tag",
        style,
        onClick: _cache[1] || (_cache[1] = (...args) => events.c_click && events.c_click(...args)),
        onMouseover: _cache[2] || (_cache[2] = (...args) => events.c_mouseover && events.c_mouseover(...args))
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          _hoisted_1$1
        ], true),
        __props.closable ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: "c-tag__close",
          onClick: _cache[0] || (_cache[0] = (...args) => events.c_close && events.c_close(...args))
        }, " \xD7")) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: "c-tag__border",
          style: styleBorder
        })
      ], 32);
    };
  }
}));
var CTag = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-00c9bbae"]]);
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" 123 ");
const __default__ = {
  name: "CTabBar"
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    onClick: Function
  },
  setup(__props) {
    const props = __props;
    const className = ``;
    const handleClick = () => {
      if (props.onClick)
        props.onClick();
    };
    return (_ctx, _cache) => {
      const _component_component = resolveComponent("component");
      return openBlock(), createBlock(_component_component, {
        class: normalizeClass(className),
        onClick: handleClick
      }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      });
    };
  }
}));
const All = [CButton, CTag, _sfc_main];
var components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  All,
  CButton,
  CTag,
  CTabBar: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
const create = (components2) => {
  const registerComponent = (app, name, component) => {
    const registered = app.component(name);
    if (!registered)
      app.component(name, component);
  };
  const install = (app) => {
    if ((components2 == null ? void 0 : components2.length) && components2.length > 0)
      components2.forEach((component) => {
        const { name } = component;
        registerComponent(app, name, component);
      });
  };
  return {
    install
  };
};
export { components as C, create };
