import{f as T}from"./index-C_FWhylE.js";import{d as q,b as s,o as x,e as L,t as P,n as D,f as E}from"./vue.esm-bundler-Cv8evT8l.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";const k=q({__name:"Button",props:{label:{},primary:{type:Boolean,default:!1},size:{default:"medium"},backgroundColor:{}},emits:["click"],setup(B,{emit:S}){const e=B,_=S,z=s(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size}`]:!0})),C=s(()=>({backgroundColor:e.backgroundColor||(e.primary?"#1ea7fd":"#ccc")})),h=()=>{_("click",1)};return(v,V)=>(x(),L("button",{type:"button",class:D(z.value),onClick:h,style:E(C.value)},P(v.label),7))}}),N=I(k,[["__scopeId","data-v-29a0cb3e"]]);k.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"label",description:"The label of the button",required:!0,type:{name:"string"}},{name:"primary",description:"Set if the button is primary or secondary",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"The size of the button",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"backgroundColor",description:"The background color of the button",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["number"]}}],sourceFiles:["C:/Users/user/Desktop/storybook/storybook/src/stories/Button.vue"]};const $={title:"Test/Button",component:N,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},size:{control:"select",options:["small","medium","large"]}},args:{primary:!1,onClick:T()}},r={args:{primary:!0,label:"Primary Button"}},a={args:{primary:!1,label:"Secondary Button"}},o={args:{size:"large",label:"Large Button"}},t={args:{size:"small",label:"Small Button"}};var n,l,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Primary Button'
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,i,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    primary: false,
    label: 'Secondary Button'
  }
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,d,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Large Button'
  }
}`,...(y=(d=o.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var b,g,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Small Button'
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const j=["Primary","Secondary","Large","Small"];export{o as Large,r as Primary,a as Secondary,t as Small,j as __namedExportsOrder,$ as default};
