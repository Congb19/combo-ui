"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=require("../index.js");require("./index2.js");const m=require("../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/CheckmarkCircle.js"),f=require("../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/InformationCircle.js"),k=require("../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/AlertCircle.js"),_=require("../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/CloseCircle.js"),C=require("../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/CaretUp.js"),y=require("../../../node_modules/.pnpm/@vicons_ionicons5@0.12.0/node_modules/@vicons/ionicons5/es/CaretDown.js"),v={class:"c-block__icon"},B={class:"c-block__title"},h={key:0,class:"c-block__arrow"},w={name:"CBlock"},x=e.defineComponent({...w,props:{type:{default:"default"},title:{default:""},content:null,detail:{type:Boolean,default:!1},expanded:{type:Boolean,default:!0},width:null},emits:["c_expand"],setup(t,{emit:i}){const o=t,s={c_expand:()=>{i("c_expand",n.value)}},n=e.ref(o.expanded),a=e.computed(()=>`
    c-block
    c-block-${o.type}
    ${o.detail?"c-block-detail":""}
  `),d=e.computed(()=>({width:o.width?o.width+"px":"100%"}));e.computed(()=>({width:o.width?o.width+"px":"100%"}));const c=e.computed(()=>`var(--c-color-${o.type=="info"?"primary":o.type}-1)`);e.computed(()=>`var(--c-color-${o.type=="info"?"primary":o.type}-6)`);const u=()=>{!o.detail||(n.value=!n.value,s.c_expand())},p=l=>{!o.detail||l.stopPropagation()};return(l,N)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(a)),onClick:u,style:e.normalizeStyle(e.unref(d))},[e.createElementVNode("span",v,[e.createVNode(e.unref(r.CIcon),{size:20,color:e.unref(c)},{default:e.withCtx(()=>[t.type=="success"?(e.openBlock(),e.createBlock(e.unref(m.default),{key:0})):e.createCommentVNode("",!0),t.type=="info"||t.type=="default"?(e.openBlock(),e.createBlock(e.unref(f.default),{key:1})):e.createCommentVNode("",!0),t.type=="warning"?(e.openBlock(),e.createBlock(e.unref(k.default),{key:2})):e.createCommentVNode("",!0),t.type=="error"?(e.openBlock(),e.createBlock(e.unref(_.default),{key:3})):e.createCommentVNode("",!0)]),_:1},8,["color"])]),e.createElementVNode("span",B,e.toDisplayString(o.title?o.title:o.type),1),e.createVNode(e.Transition,{name:"block"},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",{class:"c-block__body",onClick:p},e.toDisplayString(o.content),513),[[e.vShow,n.value]])]),_:1}),o.detail?(e.openBlock(),e.createElementBlock("div",h,[e.createVNode(e.unref(r.CIcon),{size:14,color:e.unref(c)},{default:e.withCtx(()=>[n.value?(e.openBlock(),e.createBlock(e.unref(C.default),{key:0})):(e.openBlock(),e.createBlock(e.unref(y.default),{key:1}))]),_:1},8,["color"])])):e.createCommentVNode("",!0)],6))}});exports.default=x;
