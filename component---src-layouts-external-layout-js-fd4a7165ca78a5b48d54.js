(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s}),n.d(t,"pageQuery",function(){return c});var a=n(6),r=n.n(a),o=n(0),m=n.n(o),i=n(210),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,n=e.location;return m.a.createElement(i.a,{location:n},m.a.createElement("h2",null,t.markdownRemark.fields.slug),m.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:t.markdownRemark.html}}))},t}(o.Component),c="666931849"},206:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},207:function(e,t,n){"use strict";var a=n(16),r=n(21),o=n(94),m="".startsWith;a(a.P+a.F*n(95)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return m?m.call(t,a,n):t.slice(n,n+a.length)===a}})},208:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}}]}}}},209:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"How to Add Documents",href:"getting-started/how-to"},{name:"How to Add Pages from Github",href:"getting-started/add-external-pages"}]},{name:"Code organization",items:[]},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing"},{name:"Teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction"},{name:"Tutorial",items:[]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},210:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(206),m=n(0),i=n.n(m),s=n(2),c=n.n(s),l=n(64),u=n.n(l),d=n(62),h=(n(93),n(207),n(96),n(208));function p(){return i.a.createElement(d.b,{query:"2758471434",render:function(e){return i.a.createElement(f,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:h})}function f(e){var t=e.items;return t.length?i.a.createElement("ul",{className:"menu-list"},t.map(function(e){return i.a.createElement("li",{key:e.name},!!e.items&&i.a.createElement("li",{key:e.name},i.a.createElement("h4",null,e.name),i.a.createElement(f,{items:e.items})),"componentList"===e.query&&i.a.createElement("li",{key:e.name},i.a.createElement("h4",null,e.name),i.a.createElement(p,null)),!!e.href&&i.a.createElement("li",{key:e.name},i.a.createElement(d.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&i.a.createElement("li",{key:e.href},i.a.createElement(d.a,{to:e.href},e.name)))})):null}var g=n(209),E=n.n(g);function y(e){var t=e.location,n=E.a.sections.find(function(e){return t.pathname.startsWith("/"+e.href)});return i.a.createElement("aside",{className:"sidebar"},i.a.createElement("div",{className:"search"},i.a.createElement("div",{className:"input-wrap"},i.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!n&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,n.name),i.a.createElement(d.a,{className:"home-link",to:""},"Home"),i.a.createElement(f,{items:n.items})),!n&&i.a.createElement("ul",{className:"menu-list"},E.a.sections.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(d.a,{to:e.href},e.name))})))}n(211);var v=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return i.a.createElement(d.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(y,{location:n}),i.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:o})},t}(i.a.Component);v.propTypes={children:c.a.node.isRequired};t.a=v}}]);
//# sourceMappingURL=component---src-layouts-external-layout-js-fd4a7165ca78a5b48d54.js.map