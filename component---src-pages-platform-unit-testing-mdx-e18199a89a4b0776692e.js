(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{397:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p})),a.d(t,"_frontmatter",(function(){return c}));a(7),a(6),a(4),a(9),a(10);var n=a(1),r=a.n(n),o=a(2),s=a(333);var m={},p=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).layout=s.a,a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,a),components:t},r.a.createElement("h2",{id:"how-do-unit-tests-work"},"How do unit tests work?"),r.a.createElement(o.MDXTag,{name:"p",components:t},r.a.createElement(o.MDXTag,{name:"strong",components:t,parentName:"p"},"File format"),": *.unit.spec.js"),r.a.createElement(o.MDXTag,{name:"p",components:t},r.a.createElement(o.MDXTag,{name:"strong",components:t,parentName:"p"},"Where"),": Any *.unit.spec.js file located in the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"/src")," folder. Typically located in a directory close to the code being tested."),r.a.createElement(o.MDXTag,{name:"p",components:t},r.a.createElement(o.MDXTag,{name:"strong",components:t,parentName:"p"},"When"),": Locally through npm script commands, Jenkins build (Unit), and After merging to master"),r.a.createElement(o.MDXTag,{name:"p",components:t},r.a.createElement(o.MDXTag,{name:"strong",components:t,parentName:"p"}," How "),": ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/getting-started/common-tasks/test"}},"/getting-started/common-tasks/test")),r.a.createElement(o.MDXTag,{name:"p",components:t},r.a.createElement(o.MDXTag,{name:"strong",components:t,parentName:"p"},"Process"),":"),r.a.createElement("div",{className:"mermaid"},'graph TB\n    A["Checks environment"] --\x3e B["Babel transpiles unit tests"];\n    B["Babel transpiles unit tests"] --\x3e C["Test files get built in the environment folder"];\n    C["Test files get built in the environment folder"] --\x3e D["CHOMA randomizes test execution order"];\n    D["CHOMA randomizes test execution order"] -- Unit tests are executed serially --\x3e F["mocha-junit-reporter generates XML report file"];\n    F["mocha-junit-reporter generates XML report file"] -- this file is used by Jenkins to trigger a failure or success --\x3e G["Jenkins will display a failure or success"];'),r.a.createElement(o.MDXTag,{name:"p",components:t},r.a.createElement(o.MDXTag,{name:"strong",components:t,parentName:"p"},"Libraries used"),":"),r.a.createElement(o.MDXTag,{name:"ul",components:t},r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://mochajs.org/"}},"mocha.js"),": Test framework."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.chaijs.com/"}},"chai.js"),": BDD / TDD assertion library."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/domenic/chai-as-promised"}},"chai-as-promised"),": Extends Chai with assertions about promises."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://sinonjs.org/"}},"sinon.js"),": Standalone test spies, stubs and mocks."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://airbnb.io/enzyme/"}},"enzyme"),": Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.npmjs.com/package/enzyme-adapter-react-16"}},"enzyme-adapter-react-16"),": Enzyme React 16 integration."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.npmjs.com/package/react-dom"}},"react-dom"),": React DOM Library needed for testing React Components."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://reactjs.org/docs/test-utils.html"}},"react-dom/test-utils"),": Test utilities for React DOM."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.npmjs.com/package/react-test-renderer"}},"react-test-renderer"),": This package provides an experimental React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://airbnb.io/enzyme/docs/guides/jsdom.html"}},"jsdom"),": A JavaScript implementation of the WHATWG DOM and HTML standards, for use with node.js."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.npmjs.com/package/mocha-junit-reporter"}},"mocha-junit-reporter"),": Produces JUnit-style XML test results. This is used specifically for Jenkins so it can output and track test results in its system."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/lennym/choma"}},"choma"),": Random execution order for mocha suites.")))},n}(r.a.Component),c={}}}]);
//# sourceMappingURL=component---src-pages-platform-unit-testing-mdx-e18199a89a4b0776692e.js.map