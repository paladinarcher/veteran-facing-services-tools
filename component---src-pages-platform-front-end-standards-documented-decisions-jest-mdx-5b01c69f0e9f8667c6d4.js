(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{378:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p})),a.d(t,"_frontmatter",(function(){return l}));a(7),a(6),a(4),a(9),a(10);var n=a(1),o=a.n(n),r=a(2),s=a(333);var m={},p=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).layout=s.a,a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,a),components:t},o.a.createElement("h1",{id:"switching-to-jest"},"Switching to Jest"),o.a.createElement(r.MDXTag,{name:"table",components:t},o.a.createElement(r.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}))),o.a.createElement(r.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"td"},"Decision Made:")),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"No, but open to revisiting"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"td"},"Decision Date:")),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"12/2018")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"td"},"Revisit Decision:")),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Yes"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"td"},"Revisit Date:")),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"July 2019")))),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"Revisit Criteria:")," If a developer is interested in Jest and has time or suggestions for fixing the speed issues, we should revisit this."),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"Decision Makers:")," @rianfowler @jbalboni"),o.a.createElement(r.MDXTag,{name:"hr",components:t}),o.a.createElement("h2",{id:"tldr"},"tl;dr"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Jest is probably the most common testing framework in the React ecosystem and has some nice benefits, so we evaluated switching to it from our Mocha-based stack. However, we found that it made our tests twice as slow and were unable to address this in a reasonable amount of time."),o.a.createElement("h2",{id:"history"},"History"),o.a.createElement(r.MDXTag,{name:"p",components:t},"See ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/12874"}},"#12874")," for the full history. A Jest RFC was started by Ryan McAuliffe and some exploratory work was done by him and Claire Hsu. The overall consensus of developers here was that Jest has some nice features and is typically faster than Mocha based tests, so it seemed like a good improvement for us. However, during our evaluation we found that our tests were significantly slower than our current approach. Rian Fowler did some further testing around this issue and was unable to resolve it."),o.a.createElement("h2",{id:"pros"},"Pros"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Jest is widely supported in the React community"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"It has easy to use extensions for aXe and snapshot testing that we could use"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"It supports parallelization, and makes better use of all resources available to it")),o.a.createElement("h2",{id:"cons"},"Cons"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"It's approximately ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/12874#issuecomment-448280502"}},"2x slower than our current tests")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Some of the useful features (snapshots) could be adopted without switching to Jest")),o.a.createElement("h2",{id:"decision"},"Decision"),o.a.createElement(r.MDXTag,{name:"p",components:t},"We're putting the switch to Jest on hold for the time being. The slowdown is the primary reason for this, since the consensus otherwise was that Jest was an improvement. Any developer with time or ideas should feel free to attempt to address the performance issue and we will re-evaluate."))},n}(o.a.Component),l={}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-jest-mdx-5b01c69f0e9f8667c6d4.js.map