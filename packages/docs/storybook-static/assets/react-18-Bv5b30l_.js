import{r as s}from"./index-D7uoVdV3.js";import{c as m}from"./client-B5IlFylX.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C9rmetsa.js";import"./index-D-OUEn-9.js";var n=new Map;function l(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var a=({callback:e,children:r})=>{let t=s.useRef();return s.useLayoutEffect(()=>{t.current!==e&&(t.current=e,e())},[e]),r};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,r=null;return{promise:new Promise((t,o)=>{e=t,r=o}),resolve:e,reject:r}});var w=async(e,r,t)=>{let o=await c(r,t);if(l()){o.render(e);return}let{promise:i,resolve:u}=Promise.withResolvers();return o.render(s.createElement(a,{callback:u},e)),i},h=(e,r)=>{let t=n.get(e);t&&(t.unmount(),n.delete(e))},c=async(e,r)=>{let t=n.get(e);return t||(t=m.createRoot(e,r),n.set(e,t)),t};export{w as renderElement,h as unmountElement};
