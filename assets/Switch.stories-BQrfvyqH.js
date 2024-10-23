import{f as b}from"./index-C_FWhylE.js";import{d as w,b as y,o as S,e as x,g as a}from"./vue.esm-bundler-Cv8evT8l.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";const F={class:"switch"},D=["checked"],f=w({__name:"Switch",props:{checked:{type:Boolean},activeColor:{}},emits:["update:checked"],setup(C,{emit:g}){const r=C,_=g,v=s=>{const e=s.target;_("update:checked",e.checked)};return y(()=>({backgroundColor:r.checked?r.activeColor||"#2196F3":"#ccc"})),(s,e)=>(S(),x("label",F,[a("input",{type:"checkbox",checked:s.checked,onChange:v},null,40,D),e[0]||(e[0]=a("span",{class:"slider"},null,-1))]))}}),N=B(f,[["__scopeId","data-v-48b1acb2"]]);f.__docgenInfo={exportName:"default",displayName:"Switch",description:"",tags:{},props:[{name:"checked",description:"The initial state of the switch",required:!1,type:{name:"boolean"}},{name:"activeColor",description:"Color of the switch when checked",required:!1,type:{name:"string"}}],events:[{name:"update:checked",type:{names:["boolean"]}}],sourceFiles:["C:/Users/user/Desktop/storybook/storybook/src/stories/Switch.vue"]};const E={title:"Test/Switch",component:N,tags:["autodocs"],argTypes:{activeColor:{control:"color"}},args:{checked:!1,onChange:b()}},o={args:{checked:!1}},c={args:{checked:!0,activeColor:"#4CAF50"}},t={args:{checked:!0,activeColor:"#ff6347"}};var n,d,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,l,m;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    checked: true,
    activeColor: '#4CAF50' // 當選中時顯示綠色
  }
}`,...(m=(l=c.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var h,u,k;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: true,
    activeColor: '#ff6347' // 當選中時顯示自定義顏色
  }
}`,...(k=(u=t.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};const I=["Default","Checked","CustomColor"];export{c as Checked,t as CustomColor,o as Default,I as __namedExportsOrder,E as default};
