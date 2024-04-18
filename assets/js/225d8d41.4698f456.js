"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[67008],{3905:(e,r,n)=>{n.r(r),n.d(r,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>s});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function d(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?d(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),s=function(e){return function(r){var n=m(r.components);return t.createElement(e,o({},r,{components:n}))}},m=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=m(e.components);return t.createElement(c.Provider,{value:r},e.children)},x={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=m(n),p=a,u=s["".concat(d,".").concat(p)]||s[p]||x[p]||o;return n?t.createElement(u,i(i({ref:r},c),{},{components:n})):t.createElement(u,i({ref:r},c))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,d=new Array(o);d[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,d[1]=i;for(var c=2;c<o;c++)d[c]=n[c];return t.createElement.apply(null,d)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97704:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var t=n(83117),a=n(80102),o=(n(67294),n(3905)),d=["components"],i={id:"relay-store",title:"Relay Store",original_id:"relay-store"},l=void 0,c={unversionedId:"relay-store",id:"version-v10.1.2/relay-store",title:"Relay Store",description:"The Relay Store can be used to programmatically update client-side data inside updater functions. The following is a reference of the Relay Store interface.",source:"@site/versioned_docs/version-v10.1.2/Modern-RelayStore.md",sourceDirName:".",slug:"/relay-store",permalink:"/docs/v10.1.2/relay-store",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v10.1.2/Modern-RelayStore.md",tags:[],version:"v10.1.2",lastUpdatedBy:"Monica Tang",lastUpdatedAt:1713476464,formattedLastUpdatedAt:"Apr 18, 2024",frontMatter:{id:"relay-store",title:"Relay Store",original_id:"relay-store"},sidebar:"version-v10.1.2/docs",previous:{title:"Subscriptions",permalink:"/docs/v10.1.2/subscriptions"},next:{title:"fetchQuery",permalink:"/docs/v10.1.2/fetch-query"}},s={},m=[{value:"RecordSourceSelectorProxy",id:"recordsourceselectorproxy",level:2},{value:"<code>create(dataID: string, typeName: string): RecordProxy</code>",id:"createdataid-string-typename-string-recordproxy",level:3},{value:"Example",id:"example",level:4},{value:"<code>delete(dataID: string): void</code>",id:"deletedataid-string-void",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>get(dataID: string): ?RecordProxy</code>",id:"getdataid-string-recordproxy",level:3},{value:"Example",id:"example-2",level:4},{value:"<code>getRoot(): RecordProxy</code>",id:"getroot-recordproxy",level:3},{value:"Example",id:"example-3",level:4},{value:"<code>getRootField(fieldName: string): ?RecordProxy</code>",id:"getrootfieldfieldname-string-recordproxy",level:3},{value:"Example",id:"example-4",level:4},{value:"<code>getPluralRootField(fieldName: string): ?Array&lt;?RecordProxy&gt;</code>",id:"getpluralrootfieldfieldname-string-arrayrecordproxy",level:3},{value:"Example",id:"example-5",level:4},{value:"<code>invalidateStore(): void</code>",id:"invalidatestore-void",level:3},{value:"Example",id:"example-6",level:4},{value:"RecordProxy",id:"recordproxy",level:2},{value:"<code>getDataID(): string</code>",id:"getdataid-string",level:3},{value:"Example",id:"example-7",level:4},{value:"<code>getType(): string</code>",id:"gettype-string",level:3},{value:"Example",id:"example-8",level:4},{value:"<code>getValue(name: string, arguments?: ?Object): mixed</code>",id:"getvaluename-string-arguments-object-mixed",level:3},{value:"Example",id:"example-9",level:4},{value:"Example",id:"example-10",level:4},{value:"<code>getLinkedRecord(name: string, arguments?: ?Object): ?RecordProxy</code>",id:"getlinkedrecordname-string-arguments-object-recordproxy",level:3},{value:"Example",id:"example-11",level:4},{value:"Example",id:"example-12",level:4},{value:"<code>getLinkedRecords(name: string, arguments?: ?Object): ?Array&lt;?RecordProxy&gt;</code>",id:"getlinkedrecordsname-string-arguments-object-arrayrecordproxy",level:3},{value:"Example",id:"example-13",level:4},{value:"Example",id:"example-14",level:4},{value:"<code>getOrCreateLinkedRecord(name: string, typeName: string, arguments?: ?Object)</code>",id:"getorcreatelinkedrecordname-string-typename-string-arguments-object",level:3},{value:"Example",id:"example-15",level:4},{value:"<code>setValue(value: mixed, name: string, arguments?: ?Object): RecordProxy</code>",id:"setvaluevalue-mixed-name-string-arguments-object-recordproxy",level:3},{value:"<code>copyFieldsFrom(sourceRecord: RecordProxy): void</code>",id:"copyfieldsfromsourcerecord-recordproxy-void",level:3},{value:"Example",id:"example-16",level:4},{value:"<code>setLinkedRecord(record: RecordProxy, name: string, arguments?: ?Object)</code>",id:"setlinkedrecordrecord-recordproxy-name-string-arguments-object",level:3},{value:"Example",id:"example-17",level:4},{value:"<code>setLinkedRecords(records: Array&lt;RecordProxy&gt;, name: string, variables?: ?Object)</code>",id:"setlinkedrecordsrecords-arrayrecordproxy-name-string-variables-object",level:3},{value:"Example",id:"example-18",level:4},{value:"<code>invalidateRecord(): void</code>",id:"invalidaterecord-void",level:3},{value:"Example",id:"example-19",level:4},{value:"ConnectionHandler",id:"connectionhandler",level:2},{value:"<code>getConnection(record: RecordProxy, key: string, filters?: ?Object)</code>",id:"getconnectionrecord-recordproxy-key-string-filters-object",level:3},{value:"Edge creation and insertion",id:"edge-creation-and-insertion",level:3},{value:"<code>createEdge(store: RecordSourceProxy, connection: RecordProxy, node: RecordProxy, edgeType: string)</code>",id:"createedgestore-recordsourceproxy-connection-recordproxy-node-recordproxy-edgetype-string",level:4},{value:"<code>insertEdgeBefore(connection: RecordProxy, newEdge: RecordProxy, cursor?: ?string)</code>",id:"insertedgebeforeconnection-recordproxy-newedge-recordproxy-cursor-string",level:4},{value:"<code>insertEdgeAfter(connection: RecordProxy, newEdge: RecordProxy, cursor?: ?string)</code>",id:"insertedgeafterconnection-recordproxy-newedge-recordproxy-cursor-string",level:4},{value:"Example",id:"example-20",level:4},{value:"<code>deleteNode(connection: RecordProxy, nodeID: string): void</code>",id:"deletenodeconnection-recordproxy-nodeid-string-void",level:3},{value:"Example",id:"example-21",level:4}],p={toc:m};function x(e){var r=e.components,n=(0,a.Z)(e,d);return(0,o.mdx)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The Relay Store can be used to programmatically update client-side data inside ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v10.1.2/mutations#using-updater-and-optimisticupdater"},(0,o.mdx)("inlineCode",{parentName:"a"},"updater")," functions"),". The following is a reference of the Relay Store interface."),(0,o.mdx)("p",null,"Table of Contents:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#recordsourceselectorproxy"},"RecordSourceSelectorProxy")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#recordproxy"},"RecordProxy")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#connectionhandler"},"ConnectionHandler"))),(0,o.mdx)("h2",{id:"recordsourceselectorproxy"},"RecordSourceSelectorProxy"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecordSourceSelectorProxy")," is the type of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"store")," that ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v10.1.2/mutations#using-updater-and-optimisticupdater"},(0,o.mdx)("inlineCode",{parentName:"a"},"updater")," functions")," receive as an argument. The following is the ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecordSourceSelectorProxy")," interface:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"interface RecordSourceSelectorProxy {\n  create(dataID: string, typeName: string): RecordProxy;\n  delete(dataID: string): void;\n  get(dataID: string): ?RecordProxy;\n  getRoot(): RecordProxy;\n  getRootField(fieldName: string): ?RecordProxy;\n  getPluralRootField(fieldName: string): ?Array<?RecordProxy>;\n  invalidateStore(): void;\n}\n")),(0,o.mdx)("h3",{id:"createdataid-string-typename-string-recordproxy"},(0,o.mdx)("inlineCode",{parentName:"h3"},"create(dataID: string, typeName: string): RecordProxy")),(0,o.mdx)("p",null,"Creates a new record in the store given a ",(0,o.mdx)("inlineCode",{parentName:"p"},"dataID")," and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"typeName")," as defined by the GraphQL schema. Returns a ",(0,o.mdx)("a",{parentName:"p",href:"#recordproxy"},(0,o.mdx)("inlineCode",{parentName:"a"},"RecordProxy"))," which serves as an interface to mutate the newly created record."),(0,o.mdx)("h4",{id:"example"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const record = store.create(dataID, 'Todo');\n")),(0,o.mdx)("h3",{id:"deletedataid-string-void"},(0,o.mdx)("inlineCode",{parentName:"h3"},"delete(dataID: string): void")),(0,o.mdx)("p",null,"Deletes a record from the store given its ",(0,o.mdx)("inlineCode",{parentName:"p"},"dataID"),"."),(0,o.mdx)("h4",{id:"example-1"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"store.delete(dataID);\n")),(0,o.mdx)("h3",{id:"getdataid-string-recordproxy"},(0,o.mdx)("inlineCode",{parentName:"h3"},"get(dataID: string): ?RecordProxy")),(0,o.mdx)("p",null,"Retrieves a record from the store given its ",(0,o.mdx)("inlineCode",{parentName:"p"},"dataID"),". Returns a ",(0,o.mdx)("a",{parentName:"p",href:"#recordproxy"},(0,o.mdx)("inlineCode",{parentName:"a"},"RecordProxy"))," which serves as an interface to mutate the record."),(0,o.mdx)("h4",{id:"example-2"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const record = store.get(dataID);\n")),(0,o.mdx)("h3",{id:"getroot-recordproxy"},(0,o.mdx)("inlineCode",{parentName:"h3"},"getRoot(): RecordProxy")),(0,o.mdx)("p",null,"Returns the ",(0,o.mdx)("a",{parentName:"p",href:"#recordproxy"},(0,o.mdx)("inlineCode",{parentName:"a"},"RecordProxy"))," representing the root of the GraphQL document."),(0,o.mdx)("h4",{id:"example-3"},"Example"),(0,o.mdx)("p",null,"Given the GraphQL document:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"viewer {\n  id\n}\n")),(0,o.mdx)("p",null,"Usage:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Represents root query\nconst root = store.getRoot();\n")),(0,o.mdx)("h3",{id:"getrootfieldfieldname-string-recordproxy"},(0,o.mdx)("inlineCode",{parentName:"h3"},"getRootField(fieldName: string): ?RecordProxy")),(0,o.mdx)("p",null,"Retrieves a root field from the store given the ",(0,o.mdx)("inlineCode",{parentName:"p"},"fieldName"),", as defined by the GraphQL document. Returns a ",(0,o.mdx)("a",{parentName:"p",href:"#recordproxy"},(0,o.mdx)("inlineCode",{parentName:"a"},"RecordProxy"))," which serves as an interface to mutate the record."),(0,o.mdx)("h4",{id:"example-4"},"Example"),(0,o.mdx)("p",null,"Given the GraphQL document:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"viewer {\n  id\n}\n")),(0,o.mdx)("p",null,"Usage:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const viewer = store.getRootField('viewer');\n")),(0,o.mdx)("h3",{id:"getpluralrootfieldfieldname-string-arrayrecordproxy"},(0,o.mdx)("inlineCode",{parentName:"h3"},"getPluralRootField(fieldName: string): ?Array<?RecordProxy>")),(0,o.mdx)("p",null,"Retrieves a root field that represents a collection from the store given the ",(0,o.mdx)("inlineCode",{parentName:"p"},"fieldName"),", as defined by the GraphQL document. Returns an array of ",(0,o.mdx)("a",{parentName:"p",href:"#recordproxy"},(0,o.mdx)("inlineCode",{parentName:"a"},"RecordProxies")),"."),(0,o.mdx)("h4",{id:"example-5"},"Example"),(0,o.mdx)("p",null,"Given the GraphQL document:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"nodes(first: 10) {\n  # ...\n}\n")),(0,o.mdx)("p",null,"Usage:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const nodes = store.getPluralRootField('nodes');\n")),(0,o.mdx)("h3",{id:"invalidatestore-void"},(0,o.mdx)("inlineCode",{parentName:"h3"},"invalidateStore(): void")),(0,o.mdx)("p",null,"Globally invalidates the Relay store. This will cause any data that was written to the store before invalidation occurred to be considered stale, and will be considered to require refetch the next time a query is checked with ",(0,o.mdx)("inlineCode",{parentName:"p"},"environment.check()"),"."),(0,o.mdx)("h4",{id:"example-6"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"store.invalidateStore();\n")),(0,o.mdx)("p",null,"After global invalidation, any query that is checked before refetching it will be considered stale:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"environment.check(query) === 'stale'\n\n")),(0,o.mdx)("h2",{id:"recordproxy"},"RecordProxy"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecordProxy")," serves as an interface to mutate records:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"interface RecordProxy {\n  copyFieldsFrom(sourceRecord: RecordProxy): void;\n  getDataID(): string;\n  getLinkedRecord(name: string, arguments?: ?Object): ?RecordProxy;\n  getLinkedRecords(name: string, arguments?: ?Object): ?Array<?RecordProxy>;\n  getOrCreateLinkedRecord(\n    name: string,\n    typeName: string,\n    arguments?: ?Object,\n  ): RecordProxy;\n  getType(): string;\n  getValue(name: string, arguments?: ?Object): mixed;\n  setLinkedRecord(\n    record: RecordProxy,\n    name: string,\n    arguments?: ?Object,\n  ): RecordProxy;\n  setLinkedRecords(\n    records: Array<?RecordProxy>,\n    name: string,\n    arguments?: ?Object,\n  ): RecordProxy;\n  setValue(value: mixed, name: string, arguments?: ?Object): RecordProxy;\n  invalidateRecord(): void;\n}\n")),(0,o.mdx)("h3",{id:"getdataid-string"},(0,o.mdx)("inlineCode",{parentName:"h3"},"getDataID(): string")),(0,o.mdx)("p",null,"Returns the dataID of the current record."),(0,o.mdx)("h4",{id:"example-7"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const id = record.getDataID();\n")),(0,o.mdx)("h3",{id:"gettype-string"},(0,o.mdx)("inlineCode",{parentName:"h3"},"getType(): string")),(0,o.mdx)("p",null,"Gets the type of the current record, as defined by the GraphQL schema."),(0,o.mdx)("h4",{id:"example-8"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const type = user.getType();  // User\n\n")),(0,o.mdx)("h3",{id:"getvaluename-string-arguments-object-mixed"},(0,o.mdx)("inlineCode",{parentName:"h3"},"getValue(name: string, arguments?: ?Object): mixed")),(0,o.mdx)("p",null,"Gets the value of a field in the current record given the field name."),(0,o.mdx)("h4",{id:"example-9"},"Example"),(0,o.mdx)("p",null,"Given the GraphQL document:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"viewer {\n  id\n  name\n}\n")),(0,o.mdx)("p",null,"Usage:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const name = viewer.getValue('name');\n")),(0,o.mdx)("p",null,"Optionally, if the field takes arguments, you can pass a bag of ",(0,o.mdx)("inlineCode",{parentName:"p"},"variables"),"."),(0,o.mdx)("h4",{id:"example-10"},"Example"),(0,o.mdx)("p",null,"Given the GraphQL document:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"viewer {\n  id\n  name(arg: $arg)\n}\n")),(0,o.mdx)("p",null,"Usage:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const name = viewer.getValue('name', {arg: 'value'});\n")),(0,o.mdx)("h3",{id:"getlinkedrecordname-string-arguments-object-recordproxy"},(0,o.mdx)("inlineCode",{parentName:"h3"},"getLinkedRecord(name: string, arguments?: ?Object): ?RecordProxy")),(0,o.mdx)("p",null,"Retrieves a record associated with the current record given the field name, as defined by the GraphQL document. Returns a ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecordProxy"),"."),(0,o.mdx)("h4",{id:"example-11"},"Example"),(0,o.mdx)("p",null,"Given the GraphQL document:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  viewer {\n    id\n    name\n  }\n}\n")),(0,o.mdx)("p",null,"Usage:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst viewer = rootField.getLinkedRecord('viewer');\n")),(0,o.mdx)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",(0,o.mdx)("inlineCode",{parentName:"p"},"variables")," as well."),(0,o.mdx)("h4",{id:"example-12"},"Example"),(0,o.mdx)("p",null,"Given the GraphQL document:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  viewer(arg: $arg) {\n    id\n  }\n}\n")),(0,o.mdx)("p",null,"Usage:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst viewer = rootField.getLinkedRecord('viewer', {arg: 'value'});\n")),(0,o.mdx)("h3",{id:"getlinkedrecordsname-string-arguments-object-arrayrecordproxy"},(0,o.mdx)("inlineCode",{parentName:"h3"},"getLinkedRecords(name: string, arguments?: ?Object): ?Array<?RecordProxy>")),(0,o.mdx)("p",null,"Retrieves the set of records associated with the current record given the field name, as defined by the GraphQL document. Returns an array of ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecordProxies"),"."),(0,o.mdx)("h4",{id:"example-13"},"Example"),(0,o.mdx)("p",null,"Given the GraphQL document:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  nodes {\n    # ...\n  }\n}\n")),(0,o.mdx)("p",null,"Usage:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst nodes = rootField.getLinkedRecords('nodes');\n")),(0,o.mdx)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",(0,o.mdx)("inlineCode",{parentName:"p"},"variables")," as well."),(0,o.mdx)("h4",{id:"example-14"},"Example"),(0,o.mdx)("p",null,"Given the GraphQL document:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  nodes(first: $count) {\n    # ...\n  }\n}\n")),(0,o.mdx)("p",null,"Usage:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst viewer = rootField.getLinkedRecord('viewer', {count: 10});\n")),(0,o.mdx)("h3",{id:"getorcreatelinkedrecordname-string-typename-string-arguments-object"},(0,o.mdx)("inlineCode",{parentName:"h3"},"getOrCreateLinkedRecord(name: string, typeName: string, arguments?: ?Object)")),(0,o.mdx)("p",null,"Retrieves the a record associated with the current record given the field name, as defined by the GraphQL document. If the linked record does not exist, it will be created given the type name. Returns a ",(0,o.mdx)("inlineCode",{parentName:"p"},"RecordProxy"),"."),(0,o.mdx)("h4",{id:"example-15"},"Example"),(0,o.mdx)("p",null,"Given the GraphQL document:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  viewer {\n    id\n  }\n}\n")),(0,o.mdx)("p",null,"Usage:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst newViewer = rootField.getOrCreateLinkedRecord('viewer', 'User'); // Will create if it doesn't exist\n\n")),(0,o.mdx)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",(0,o.mdx)("inlineCode",{parentName:"p"},"variables")," as well."),(0,o.mdx)("h3",{id:"setvaluevalue-mixed-name-string-arguments-object-recordproxy"},(0,o.mdx)("inlineCode",{parentName:"h3"},"setValue(value: mixed, name: string, arguments?: ?Object): RecordProxy")),(0,o.mdx)("p",null,"Mutates the current record by setting a new value on the specified field. Returns the mutated record."),(0,o.mdx)("p",null,"Given the GraphQL document:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"viewer {\n  id\n  name\n}\n")),(0,o.mdx)("p",null,"Usage:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"viewer.setValue('New Name', 'name');\n")),(0,o.mdx)("p",null,"Optionally, if the field takes arguments, you can pass a bag of ",(0,o.mdx)("inlineCode",{parentName:"p"},"variables"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"viewer.setValue('New Name', 'name', {arg: 'value'});\n")),(0,o.mdx)("h3",{id:"copyfieldsfromsourcerecord-recordproxy-void"},(0,o.mdx)("inlineCode",{parentName:"h3"},"copyFieldsFrom(sourceRecord: RecordProxy): void")),(0,o.mdx)("p",null,"Mutates the current record by copying the fields over from the passed in record ",(0,o.mdx)("inlineCode",{parentName:"p"},"sourceRecord"),"."),(0,o.mdx)("h4",{id:"example-16"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const record = store.get(id1);\nconst otherRecord = store.get(id2);\nrecord.copyFieldsFrom(otherRecord); // Mutates `record`\n\n")),(0,o.mdx)("h3",{id:"setlinkedrecordrecord-recordproxy-name-string-arguments-object"},(0,o.mdx)("inlineCode",{parentName:"h3"},"setLinkedRecord(record: RecordProxy, name: string, arguments?: ?Object)")),(0,o.mdx)("p",null,"Mutates the current record by setting a new linked record on the given the field name."),(0,o.mdx)("h4",{id:"example-17"},"Example"),(0,o.mdx)("p",null,"Given the GraphQL document:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  viewer {\n    id\n  }\n}\n")),(0,o.mdx)("p",null,"Usage:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst newViewer = store.create(/* ... */)''\nrootField.setLinkedRecord(newViewer, 'viewer'); //\n\n")),(0,o.mdx)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",(0,o.mdx)("inlineCode",{parentName:"p"},"variables")," as well."),(0,o.mdx)("h3",{id:"setlinkedrecordsrecords-arrayrecordproxy-name-string-variables-object"},(0,o.mdx)("inlineCode",{parentName:"h3"},"setLinkedRecords(records: Array<RecordProxy>, name: string, variables?: ?Object)")),(0,o.mdx)("p",null,"Mutates the current record by setting a new set of linked records on the given the field name."),(0,o.mdx)("h4",{id:"example-18"},"Example"),(0,o.mdx)("p",null,"Given the GraphQL document:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"rootField {\n  nodes {\n    # ...\n  }\n}\n")),(0,o.mdx)("p",null,"Usage:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const rootField = store.getRootField('rootField');\nconst newNode = store.create(/* ... */);\nconst newNodes = [...rootField.getLinkedRecords('nodes'), newNode];\nrootField.setLinkedRecords(newNodes, 'nodes'); //\n\n")),(0,o.mdx)("p",null,"Optionally, if the linked record takes arguments, you can pass a bag of ",(0,o.mdx)("inlineCode",{parentName:"p"},"variables")," as well."),(0,o.mdx)("h3",{id:"invalidaterecord-void"},(0,o.mdx)("inlineCode",{parentName:"h3"},"invalidateRecord(): void")),(0,o.mdx)("p",null,"Invalidates the record. This will cause any query that references this record to be considered stale until the next time it is refetched, and will be considered to require a refetch the next time such a query is checked with ",(0,o.mdx)("inlineCode",{parentName:"p"},"environment.check()"),"."),(0,o.mdx)("h4",{id:"example-19"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const record = store.get('4');\nrecord.invalidateRecord();\n")),(0,o.mdx)("p",null,"After invalidating a record, any query that references the invalidated record and that is checked before refetching it will be considered stale:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"environment.check(query) === 'stale'\n\n")),(0,o.mdx)("h2",{id:"connectionhandler"},"ConnectionHandler"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"ConnectionHandler")," is a utility module exposed by ",(0,o.mdx)("inlineCode",{parentName:"p"},"relay-runtime")," that aids in the manipulation of connections. ",(0,o.mdx)("inlineCode",{parentName:"p"},"ConnectionHandler")," exposes the following interface:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"interface ConnectionHandler {\n  getConnection(\n    record: RecordProxy,\n    key: string,\n    filters?: ?Object,\n  ): ?RecordProxy,\n  createEdge(\n    store: RecordSourceProxy,\n    connection: RecordProxy,\n    node: RecordProxy,\n    edgeType: string,\n  ): RecordProxy,\n  insertEdgeBefore(\n    connection: RecordProxy,\n    newEdge: RecordProxy,\n    cursor?: ?string,\n  ): void,\n  insertEdgeAfter(\n    connection: RecordProxy,\n    newEdge: RecordProxy,\n    cursor?: ?string,\n  ): void,\n  deleteNode(connection: RecordProxy, nodeID: string): void\n}\n")),(0,o.mdx)("h3",{id:"getconnectionrecord-recordproxy-key-string-filters-object"},(0,o.mdx)("inlineCode",{parentName:"h3"},"getConnection(record: RecordProxy, key: string, filters?: ?Object)")),(0,o.mdx)("p",null,"Given a record and a connection key, and optionally a set of filters, ",(0,o.mdx)("inlineCode",{parentName:"p"},"getConnection")," retrieves a ",(0,o.mdx)("a",{parentName:"p",href:"#recordproxy"},(0,o.mdx)("inlineCode",{parentName:"a"},"RecordProxy"))," that represents a connection that was annotated with a ",(0,o.mdx)("inlineCode",{parentName:"p"},"@connection")," directive."),(0,o.mdx)("p",null,"First, let's take a look at a plain connection:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"fragment FriendsFragment on User {\n  friends(first: 10) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n")),(0,o.mdx)("p",null,"Accessing a plain connection field like this is the same as other regular field:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"// The `friends` connection record can be accessed with:\nconst user = store.get(userID);\nconst friends = user && user.getLinkedRecord('friends');\n\n// Access fields on the connection:\nconst edges = friends && friends.getLinkedRecords('edges');\n")),(0,o.mdx)("p",null,"In a ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v10.1.2/pagination-container"},"pagination container"),", we usually annotate the actual connection field with ",(0,o.mdx)("inlineCode",{parentName:"p"},"@connection")," to tell Relay which part needs to be paginated:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'fragment FriendsFragment on User {\n  friends(first: 10, orderby: "firstname") @connection(\n    key: "FriendsFragment_friends",\n  ) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n')),(0,o.mdx)("p",null,"For connections like the above, ",(0,o.mdx)("inlineCode",{parentName:"p"},"ConnectionHandler")," helps us find the record:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"\nimport {ConnectionHandler} from 'relay-runtime';\n\n// The `friends` connection record can be accessed with:\nconst user = store.get(userID);\nconst friends = ConnectionHandler.getConnection(\n user,                        // parent record\n 'FriendsFragment_friends'    // connection key\n {orderby: 'firstname'}       // 'filters' that is used to identify the connection\n);\n// Access fields on the connection:\nconst edges = friends.getLinkedRecords('edges');\n")),(0,o.mdx)("h3",{id:"edge-creation-and-insertion"},"Edge creation and insertion"),(0,o.mdx)("h4",{id:"createedgestore-recordsourceproxy-connection-recordproxy-node-recordproxy-edgetype-string"},(0,o.mdx)("inlineCode",{parentName:"h4"},"createEdge(store: RecordSourceProxy, connection: RecordProxy, node: RecordProxy, edgeType: string)")),(0,o.mdx)("p",null,"Creates an edge given a ",(0,o.mdx)("a",{parentName:"p",href:"#recordsourceselectorproxy"},(0,o.mdx)("inlineCode",{parentName:"a"},"store")),", a connection, the edge type, and a record that holds that connection."),(0,o.mdx)("h4",{id:"insertedgebeforeconnection-recordproxy-newedge-recordproxy-cursor-string"},(0,o.mdx)("inlineCode",{parentName:"h4"},"insertEdgeBefore(connection: RecordProxy, newEdge: RecordProxy, cursor?: ?string)")),(0,o.mdx)("p",null,"Given a connection, inserts the edge at the beginning of the connection, or before the specified ",(0,o.mdx)("inlineCode",{parentName:"p"},"cursor"),"."),(0,o.mdx)("h4",{id:"insertedgeafterconnection-recordproxy-newedge-recordproxy-cursor-string"},(0,o.mdx)("inlineCode",{parentName:"h4"},"insertEdgeAfter(connection: RecordProxy, newEdge: RecordProxy, cursor?: ?string)")),(0,o.mdx)("p",null,"Given a connection, inserts the edge at the end of the connection, or after the specified ",(0,o.mdx)("inlineCode",{parentName:"p"},"cursor"),"."),(0,o.mdx)("h4",{id:"example-20"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"\nconst user = store.get(userID);\nconst friends = ConnectionHandler.getConnection(user, 'friends');\nconst edge = ConnectionHandler.createEdge(store, friends, user, 'UserEdge');\n\n// No cursor provided, append the edge at the end.\nConnectionHandler.insertEdgeAfter(friends, edge);\n\n// No cursor provided, Insert the edge at the front:\nConnectionHandler.insertEdgeBefore(friends, edge);\n")),(0,o.mdx)("h3",{id:"deletenodeconnection-recordproxy-nodeid-string-void"},(0,o.mdx)("inlineCode",{parentName:"h3"},"deleteNode(connection: RecordProxy, nodeID: string): void")),(0,o.mdx)("p",null,"Given a connection, deletes any edges whose id matches the given id."),(0,o.mdx)("h4",{id:"example-21"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"\nconst user = store.get(userID);\nconst friends = ConnectionHandler.getConnection(user, 'friends');\nConnectionHandler.deleteNode(friends, idToDelete);\n")))}x.isMDXComponent=!0}}]);