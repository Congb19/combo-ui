import{d as C,e as T,o as x,c as $,r as S,n as M,b as k,x as z,a as D,f as p,h as L,A as V}from"./framework.2bc6aaf2.js";const O=z("div",{class:"c-button__border"},null,-1),A=D("Button"),P={name:"CButton"},F=C({...P,props:{size:{type:String,default:"m"},round:{type:Boolean,default:!1},type:{type:String,default:""},disabled:{type:Boolean,default:!1},clean:{type:Boolean,default:!1}},emits:["c_click"],setup(d,{emit:a}){const c=d,{type:u,size:_,round:g,disabled:f,clean:t}=c,e={c_click:()=>{f||a("c_click")}},s=T(()=>`
    c-button 
    c-button-${u||"primary"} 
    c-button-${_} 
    ${g?"c-button-round":""}
    ${f?"c-button-disabled":""}
    c-button-${t?"clean":"dirty"} 
  `);return(r,m)=>(x(),$("div",{class:M(k(s)),onClick:m[0]||(m[0]=(...n)=>e.c_click&&e.c_click(...n))},[O,S(r.$slots,"default",{},()=>[A])],2))}});const H=["disabled","value"],j={name:"CButton"},q=C({...j,props:{size:{type:String,default:"m"},type:{type:String,default:"text"},maxLength:{type:Number,default:!1},align:{type:String,default:"left"},value:{type:[String,Number],default:""},disabled:{type:Boolean,default:!1}},emits:["update:value","c_change","c_blur","c_focus"],setup(d,{emit:a}){const c=d,{size:u,type:_,maxLength:g,value:f,disabled:t}=c,e=p(),s=p(!1);L(()=>{e.value.addEventListener("compositionstart",i=>{s.value=!0}),e.value.addEventListener("compositionend",i=>{s.value=!1,m(i)})});const r=p(f),m=i=>{s.value||(console.log("input,",i,i.target),r.value=i.target.value,a("update:value",r.value),a("c_change"))},n=p("default"),E=()=>{n.value!=="focus"&&!t&&(n.value="hover")},I=()=>{n.value!=="focus"&&!t&&(n.value="default")},h={c_change:()=>{a("c_change")},c_blur:()=>{n.value="default",a("c_blur")},c_focus:()=>{n.value="focus",a("c_focus")}},w=T(()=>`
    c-input
    c-input-${n.value}
    c-input-${u} 
    ${t?"c-input-disabled":""}
  `);return(i,b)=>(x(),$("div",{class:M(k(w))},[k(_)!=="textarea"?(x(),$("input",{key:0,ref_key:"c_input",ref:e,type:"text",disabled:k(t),value:r.value,onFocus:b[0]||(b[0]=(...N)=>h.c_focus&&h.c_focus(...N)),onBlur:b[1]||(b[1]=(...N)=>h.c_blur&&h.c_blur(...N)),onMouseenter:E,onMouseleave:I,onInput:m},null,40,H)):V("",!0)],2))}});let B=!1,l=p("light"),v=p("light"),o,y;const G=()=>{B=window.matchMedia("(prefers-color-scheme: dark)").matches,l.value=B?"dark":"light",v.value=B?"dark":"light",o=document.getElementsByTagName("html")[0],y=document.createElement("style"),y.id="c-theme-provider",document.head.appendChild(y);var d=window.matchMedia("(prefers-color-scheme: dark)");d.addEventListener("change",e=>{l.value!="custom"&&(e.matches?(t("dark"),v.value="dark"):(t("light"),v.value="light"))});const a=()=>o.className.indexOf("dark")>-1,c=()=>localStorage.getItem("vitepress-theme-appearance"),u=e=>{localStorage.setItem("vitepress-theme-appearance",e)},_=()=>c()=="auto",g=new MutationObserver((e,s)=>{for(let r of e)a()&&l.value=="light"?t("dark"):!a()&&l.value=="dark"&&t("light")}),f={attributes:!0,childList:!1,subTree:!1};g.observe(o,f);const t=e=>{let s=o.className.indexOf("dark");e=="light"?(l.value=e,u("light"),s>-1&&(o.className=o.className.substring(0,s)+o.className.substring(s+4))):e=="dark"?(l.value=e,u("dark"),s<0&&(o.className+=" dark")):(l.value="custom",y.innerHTML=e)};return _()?t(v.value):t(c()||"light"),{currentTheme:l,systemTheme:v,changeTheme:t}},J={id:"c-theme-provider-body"},K=C({setup(d){return L(()=>{G()}),(a,c)=>(x(),$("div",J,[S(a.$slots,"default")]))}});const R=F,U=q,W=K;export{R as C,U as a,W as b};
