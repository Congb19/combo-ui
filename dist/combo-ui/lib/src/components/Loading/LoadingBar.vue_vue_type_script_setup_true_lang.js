"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("./index2.js");const l=e.defineComponent({props:{status:null,color:null},setup(n){const o=n,t=e.computed(()=>({width:`${o.status.value}vw`,backgroundColor:`${o.color.value}`}));return e.onMounted(()=>{console.log("loadingbar mounted")}),e.onUnmounted(()=>{console.log("loadingbar unmounted")}),(u,r)=>(e.openBlock(),e.createElementBlock("div",{class:"c-loadingbar",style:e.normalizeStyle(e.unref(t))},null,4))}});exports.default=l;
