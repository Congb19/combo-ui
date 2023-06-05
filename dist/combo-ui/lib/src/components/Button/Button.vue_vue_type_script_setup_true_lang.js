"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("./index2.js");const f=e.createElementVNode("div",{class:"c-button__border"},null,-1),b={name:"CButton"},_=e.defineComponent({...b,props:{size:{default:"m"},round:{type:Boolean,default:!1},type:{default:"default"},disabled:{type:Boolean,default:!1},clean:{type:Boolean,default:!1}},emits:["c_click"],setup(u,{emit:s}){const t=u,l=e.ref("normal"),n={c_click:()=>{t.disabled||s("c_click")}},a=e.computed(()=>`
    c-button 
    c-button-${t.type?t.type:"default"} 
    c-button-${t.size} 
    ${t.round?"c-button-round":""}
    ${t.disabled?"c-button-disabled":""}
    c-button-${t.clean?"clean":"dirty"} 
    c-button-${l.value} 
  `),d=()=>{l.value="focus"},r=()=>{l.value="normal"};return(o,c)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(a)),onClick:c[0]||(c[0]=(...i)=>n.c_click&&n.c_click(...i)),tabindex:1,onFocus:d,onBlur:r},[f,e.renderSlot(o.$slots,"default")],34))}});exports.default=_;
