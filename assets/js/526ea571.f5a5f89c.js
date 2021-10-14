(self.webpackChunk=self.webpackChunk||[]).push([[99872],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,y=m["".concat(u,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11291:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>u,metadata:()=>c,toc:()=>s,default:()=>m});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],l={id:"fetch-query",title:"fetchQuery",original_id:"fetch-query"},u=void 0,c={unversionedId:"fetch-query",id:"version-v2.0.0/fetch-query",isDocsHomePage:!1,title:"fetchQuery",description:"You can use the fetchQuery function to imperatively make GraphQL Requests. This is useful for cases where you want to make requests outside of React but still utilize the Relay store and network layer.",source:"@site/versioned_docs/version-v2.0.0/Modern-fetchQuery.md",sourceDirName:".",slug:"/fetch-query",permalink:"/docs/v2.0.0/fetch-query",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v2.0.0/Modern-fetchQuery.md",version:"v2.0.0",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1634255257,formattedLastUpdatedAt:"10/14/2021",frontMatter:{id:"fetch-query",title:"fetchQuery",original_id:"fetch-query"},sidebar:"version-v2.0.0/docs",previous:{title:"Relay Store",permalink:"/docs/v2.0.0/relay-store"},next:{title:"Routing",permalink:"/docs/v2.0.0/routing"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Return Value",id:"return-value",children:[]}],p={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchQuery")," function to imperatively make GraphQL Requests. This is useful for cases where you want to make requests outside of React but still utilize the Relay store and network layer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {fetchQuery, graphql} from 'relay-runtime';\n\nconst query = graphql`\n  query ExampleQuery($pageID: ID!) {\n    page(id: $pageID) {\n      name\n    }\n  }\n`;\n\nconst variables = {\n  pageID: '110798995619330',\n};\n\nfetchQuery(environment, query, variables)\n  .then(data => {\n    // access the graphql response\n  });\n")),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"environment"),": The ",(0,o.kt)("a",{parentName:"li",href:"./relay-environment"},"Relay Environment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"query"),": The ",(0,o.kt)("inlineCode",{parentName:"li"},"graphql")," tagged query. ",(0,o.kt)("strong",{parentName:"li"},"Note:")," To enable ",(0,o.kt)("a",{parentName:"li",href:"./relay-compat"},"compatibility mode"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"relay-compiler")," enforces the query to be named as ",(0,o.kt)("inlineCode",{parentName:"li"},"<FileName>Query"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"variables"),": Object containing set of variables to pass to the GraphQL query, i.e. a mapping from variable name to value.")),(0,o.kt)("h2",{id:"return-value"},"Return Value"),(0,o.kt)("p",null,"The function returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," that resolves with an object containing data obtained from the query."))}m.isMDXComponent=!0}}]);