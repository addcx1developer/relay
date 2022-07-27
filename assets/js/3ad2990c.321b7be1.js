"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[5281],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>f,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>s});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),s=function(e){return function(t){var n=u(t.components);return i.createElement(e,r({},t,{components:n}))}},u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},f=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,m=s["".concat(a,".").concat(f)]||s[f]||p[f]||r;return n?i.createElement(m,d(d({ref:t},c),{},{components:n})):i.createElement(m,d({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(39960),o=n(44256),r=n(67294);function a(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function d(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var l=function(){var e=r.useState(!1),t=e[0],n=e[1],i=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return i(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return i(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:a},"Filing a task"))},s=function(){return r.createElement("p",null,"Help us make the site even better by"," ",r.createElement(i.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return r.createElement(d,null,r.createElement(c,null),r.createElement(l,null),r.createElement(s,null))},f=function(){return r.createElement(d,null,r.createElement(l,null),r.createElement(s,null))};const p=function(){return(0,o.fbContent)({internal:r.createElement(u,null),external:r.createElement(f,null)})}},26407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>f});var i=n(83117),o=n(80102),r=(n(67294),n(3905)),a=n(68629),d=["components"],l={id:"disallowed-id-types-error",title:"Disallowed Types for `id` Fields",slug:"/debugging/disallowed-id-types-error",description:"Disallowed types for `id` fields",keywords:["debugging","troubleshooting","disallowed","id","Object Identification"]},c=void 0,s={unversionedId:"debugging/disallowed-id-types-error",id:"debugging/disallowed-id-types-error",title:"Disallowed Types for `id` Fields",description:"Disallowed types for `id` fields",source:"@site/docs/debugging/disallowed-id-types-error.md",sourceDirName:"debugging",slug:"/debugging/disallowed-id-types-error",permalink:"/docs/next/debugging/disallowed-id-types-error",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/debugging/disallowed-id-types-error.md",tags:[],version:"current",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1658948083,formattedLastUpdatedAt:"7/27/2022",frontMatter:{id:"disallowed-id-types-error",title:"Disallowed Types for `id` Fields",slug:"/debugging/disallowed-id-types-error",description:"Disallowed types for `id` fields",keywords:["debugging","troubleshooting","disallowed","id","Object Identification"]}},u={},f=[{value:"Disallowing <code>id</code> fields without type <code>ID</code>",id:"disallowing-id-fields-without-type-id",level:2},{value:"The significance of the <code>ID</code> type",id:"the-significance-of-the-id-type",level:3},{value:"Fix: Define your <code>id</code> fields as <code>ID</code>",id:"fix-define-your-id-fields-as-id",level:2}],p={toc:f};function m(e){var t=e.components,n=(0,o.Z)(e,d);return(0,r.mdx)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"If you see an error from the compiler that reads something like:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"Disallowed type `String` of field `id` on parent type `Foo` cannot be used by Relay to identify entities\n")),(0,r.mdx)("p",null,"This means that your GraphQL schema defines an object with a field named ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," that doesn't have a valid type. Valid types for this field are ",(0,r.mdx)("inlineCode",{parentName:"p"},"ID")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"ID!")," unless configured otherwise. While there may be a valid reason in your application to have that field defined that way, the Relay compiler and runtime will mishandle that field and cause refresh or data updating issues."),(0,r.mdx)("h2",{id:"disallowing-id-fields-without-type-id"},"Disallowing ",(0,r.mdx)("inlineCode",{parentName:"h2"},"id")," fields without type ",(0,r.mdx)("inlineCode",{parentName:"h2"},"ID")),(0,r.mdx)("p",null,"Recall that Relay uses ",(0,r.mdx)("a",{parentName:"p",href:"../../guides/graphql-server-specification/#object-identification"},"Object Identification")," to know which GraphQL objects to refetch. In the usual case, those GraphQL objects implement the ",(0,r.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/global-object-identification/#node-interface"},(0,r.mdx)("inlineCode",{parentName:"a"},"Node")," interface")," and thus come with an ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," field with type ",(0,r.mdx)("inlineCode",{parentName:"p"},"ID"),". However, there are types in your GraphQL model that may not require unique identification. For that reason, Relay (by default) does not restrict object definitions, allowing ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," fields with non-",(0,r.mdx)("inlineCode",{parentName:"p"},"ID")," types (e.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},"String"),") to be defined."),(0,r.mdx)("p",null,"This poses a bit of difficulty to both Relay's compiler and runtime. In short, the runtime and compiler only properly handle ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," fields as defined by the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Node")," interface. Any selections made with non-",(0,r.mdx)("inlineCode",{parentName:"p"},"Node")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," fields will likely exhibit undesirable and unintended Relay behavior on your components (e.g. components not re-rendering on re-fetched data)."),(0,r.mdx)("h3",{id:"the-significance-of-the-id-type"},"The significance of the ",(0,r.mdx)("inlineCode",{parentName:"h3"},"ID")," type"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/global-object-identification/"},"Global Object Identification in GraphQL"),") is what underlies Relay's Object Identification. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," field supplied by the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Node")," interface is specified to be a unique identifier that can be used for storage or caching."),(0,r.mdx)("h2",{id:"fix-define-your-id-fields-as-id"},"Fix: Define your ",(0,r.mdx)("inlineCode",{parentName:"h2"},"id")," fields as ",(0,r.mdx)("inlineCode",{parentName:"h2"},"ID")),(0,r.mdx)("p",null,"To ensure Relay correctly manages objects fetched to your application, here are two recommended courses of action:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Ensure all fields named ",(0,r.mdx)("inlineCode",{parentName:"li"},"id")," are typed with ",(0,r.mdx)("inlineCode",{parentName:"li"},"ID")),(0,r.mdx)("li",{parentName:"ul"},"Rename any fields named ",(0,r.mdx)("inlineCode",{parentName:"li"},"id")," (with a type that isn't ",(0,r.mdx)("inlineCode",{parentName:"li"},"ID"),") to a different name (e.g. ",(0,r.mdx)("inlineCode",{parentName:"li"},"special_purpose_id"),")")),(0,r.mdx)("p",null,"If your application truly requires that ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," field's definition to remain as-is and you are aware of the problems that may arise, you can add your GraphQL type and the type of its ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," field to the allowlist in ",(0,r.mdx)("inlineCode",{parentName:"p"},"nonNodeIdFields")," of the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/relay/tree/main/packages/relay-compiler"},"Relay Compiler's Configuration"),". Note that this will only bypass the error for that combination of object type and ",(0,r.mdx)("inlineCode",{parentName:"p"},"id")," field type."),(0,r.mdx)(a.Z,{mdxType:"DocsRating"}))}m.isMDXComponent=!0},47596:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{l(i.next(e))}catch(t){r(t)}}function d(e){try{l(i.throw(e))}catch(t){r(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,d)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const o=n(11737);t.getSpecInfo=function(e){return i(this,void 0,void 0,(function*(){return yield o.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,t){var n=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{l(i.next(e))}catch(t){r(t)}}function d(e){try{l(i.throw(e))}catch(t){r(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,d)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let i=!1,o=0;const r={};t.call=function(e){return n(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));i||(i=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in r||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?r[t].resolve(e.data.response):r[t].reject(new Error(e.data.error)),delete r[t]})));const t=o++,n=new Promise(((e,n)=>{r[t]={resolve:e,reject:n}})),a={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},d="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,d),n}))}},24855:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{l(i.next(e))}catch(t){r(t)}}function d(e){try{l(i.throw(e))}catch(t){r(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,d)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.reportFeatureUsage=t.reportContentCopied=void 0;const o=n(11737);t.reportContentCopied=function(e){return i(this,void 0,void 0,(function*(){const{textContent:t}=e;try{yield o.call({module:"feedback",api:"reportContentCopied",args:{textContent:t}})}catch(n){}}))},t.reportFeatureUsage=function(e){return i(this,void 0,void 0,(function*(){const{featureName:t,id:n}=e;console.log("used feature");try{yield o.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:t,id:n}})}catch(i){}}))}},44256:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.getEphemeralDiffNumber=t.hasEphemeralDiffNumber=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.inpageeditor=t.feedback=t.uidocs=t.bloks=void 0,t.bloks=r(n(47596)),t.uidocs=r(n(17483)),t.feedback=r(n(24855)),t.inpageeditor=r(n(27312));const a=["internal","external"];function d(e){return c(e),s()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function c(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${a}. Instead got ${e}`);if(!Object.keys(e).find((e=>a.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${a}`);const t=Object.keys(e).filter((e=>!a.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${a}`)}function s(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function u(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}t.fbContent=d,t.fbInternalOnly=function(e){return d({internal:e})},t.validateFbContentArgs=c,t.isInternal=s,t.hasEphemeralDiffNumber=function(){return Boolean(u())},t.getEphemeralDiffNumber=u,t.FbInternalOnly=function(e){return s()?e.children:null},t.OssOnly=function(e){return s()?null:e.children}},27312:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{l(i.next(e))}catch(t){r(t)}}function d(e){try{l(i.throw(e))}catch(t){r(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,d)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.submitDiff=void 0;const o=n(11737);t.submitDiff=function(e){return i(this,void 0,void 0,(function*(){const{file_path:t,new_content:n,project_name:i,diff_number:r}=e;try{return yield o.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:t,new_content:n,project_name:i,diff_number:r}})}catch(a){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${a}`)}}))}},17483:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{l(i.next(e))}catch(t){r(t)}}function d(e){try{l(i.throw(e))}catch(t){r(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,d)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getApi=t.docsets=void 0;const o=n(11737);t.docsets={BLOKS_CORE:"887372105406659"},t.getApi=function(e){return i(this,void 0,void 0,(function*(){const{name:t,framework:n,docset:i}=e;return yield o.call({module:"uidocs",api:"getApi",args:{name:t,framework:n,docset:i}})}))}}}]);