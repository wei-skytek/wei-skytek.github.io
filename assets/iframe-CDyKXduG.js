const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Button.stories-CgX0iOll.js","./index-C_FWhylE.js","./vue.esm-bundler-Cv8evT8l.js","./_plugin-vue_export-helper-DlAUqK2U.js","./Button-DJc2z3v1.css","./Switch.stories-BQrfvyqH.js","./Switch-lO3pYTeP.css","./entry-preview-BG8e8Akx.js","./entry-preview-docs-BojMNZ5J.js","./index-CxISiSMm.js","./_commonjsHelpers-Cpj98o6Y.js","./preview-BhhEZcNS.js","./index-D-8MO0q_.js","./preview-D77C14du.js","./index-DrFu-skq.js","./preview-BWzBA1C2.js","./preview-D6j9glQR.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const R="modulepreload",T=function(t,s){return new URL(t,s).href},d={},r=function(s,a,l){let e=Promise.resolve();if(a&&a.length>0){const i=document.getElementsByTagName("link"),_=document.querySelector("meta[property=csp-nonce]"),p=(_==null?void 0:_.nonce)||(_==null?void 0:_.getAttribute("nonce"));e=Promise.allSettled(a.map(n=>{if(n=T(n,l),n in d)return;d[n]=!0;const u=n.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!l)for(let m=i.length-1;m>=0;m--){const E=i[m];if(E.href===n&&(!u||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${f}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":R,u||(c.as="script"),c.crossOrigin="",c.href=n,p&&c.setAttribute("nonce",p),document.head.appendChild(c),u)return new Promise((m,E)=>{c.addEventListener("load",m),c.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${n}`)))})}))}function o(i){const _=new Event("vite:preloadError",{cancelable:!0});if(_.payload=i,window.dispatchEvent(_),!_.defaultPrevented)throw i}return e.then(i=>{for(const _ of i||[])_.status==="rejected"&&o(_.reason);return s().catch(o)})},{createBrowserChannel:L}=__STORYBOOK_MODULE_CHANNELS__,{addons:S}=__STORYBOOK_MODULE_PREVIEW_API__,O=L({page:"preview"});S.setChannel(O);window.__STORYBOOK_ADDONS_CHANNEL__=O;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=O);const P={"./src/stories/Button.stories.ts":async()=>r(()=>import("./Button.stories-CgX0iOll.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),"./src/stories/Switch.stories.ts":async()=>r(()=>import("./Switch.stories-BQrfvyqH.js"),__vite__mapDeps([5,1,2,3,6]),import.meta.url)};async function I(t){return P[t]()}const{composeConfigs:y,PreviewWeb:V,ClientApi:v}=__STORYBOOK_MODULE_PREVIEW_API__,D=async(t=[])=>{const s=await Promise.all([t.at(0)??r(()=>import("./entry-preview-BG8e8Akx.js"),__vite__mapDeps([7,2]),import.meta.url),t.at(1)??r(()=>import("./entry-preview-docs-BojMNZ5J.js"),__vite__mapDeps([8,9,10,2]),import.meta.url),t.at(2)??r(()=>import("./preview-BhhEZcNS.js"),__vite__mapDeps([11,12]),import.meta.url),t.at(3)??r(()=>import("./preview-DOWVZlub.js"),[],import.meta.url),t.at(4)??r(()=>import("./preview-aVwhiz9X.js"),[],import.meta.url),t.at(5)??r(()=>import("./preview-D77C14du.js"),__vite__mapDeps([13,14]),import.meta.url),t.at(6)??r(()=>import("./preview-DFmD0pui.js"),[],import.meta.url),t.at(7)??r(()=>import("./preview-CFgKly6U.js"),[],import.meta.url),t.at(8)??r(()=>import("./preview-BWzBA1C2.js"),__vite__mapDeps([15,14]),import.meta.url),t.at(9)??r(()=>import("./preview-DGUiP6tS.js"),[],import.meta.url),t.at(10)??r(()=>import("./preview-D6j9glQR.js"),__vite__mapDeps([16,1]),import.meta.url),t.at(11)??r(()=>import("./preview-Ca6syT25.js"),[],import.meta.url),t.at(12)??r(()=>import("./preview-khojR4BK.js"),[],import.meta.url)]);return y(s)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new V(I,D);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{r as _};