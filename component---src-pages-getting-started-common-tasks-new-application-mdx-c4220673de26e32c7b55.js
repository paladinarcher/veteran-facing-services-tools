(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{295:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"_frontmatter",function(){return d});t(42);var a=t(43),o=t.n(a),r=t(3),c=t.n(r),s=t(2),p=t.n(s),i=t(4),m=t(355),l={},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=m.a,t}return c()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return p.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,t),components:n},p.a.createElement("h1",{id:"creating-a-new-application"},"Creating a new application"),p.a.createElement(i.MDXTag,{name:"p",components:n},"Note: Check out the ",p.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/veteran-facing-services-tools/getting-started/common-tasks/new-feature"}},"Adding a new feature")," doc to make sure you're trying to add the right type of feature to VA.gov."),p.a.createElement("h2",{id:"yeoman-generator"},"Yeoman generator"),p.a.createElement(i.MDXTag,{name:"p",components:n},"The easiest way to create a new application is with the Yeoman application generator. You can use the ",p.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/veteran-facing-services-tools/platform/tools/generator"}},"walkthrough")," to create your own regular or form application. The manual set up process is below, which you can read through to get a better understanding of the different pieces that are needed."),p.a.createElement("h2",{id:"manual-set-up"},"Manual set up"),p.a.createElement(i.MDXTag,{name:"p",components:n},'Here are the steps for manually setting up a new application. We\'re going to walk through setting up an application called "my new application."'),p.a.createElement(i.MDXTag,{name:"ol",components:n},p.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Create a new folder for your application in ",p.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"src/applications/"),". In our case, we're using ",p.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"my-new-application"),":")),p.a.createElement(i.MDXTag,{name:"p",components:n},p.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/ff4ea6577c5ba2ce4ec94c9b5de5b2c2/91d6a/new-application-folder.png",style:{display:"block"},target:"_blank",rel:"noopener"},p.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"364px"}},p.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"114.83516483516483%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),p.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Folder tree with new application folder added",title:"",src:"/veteran-facing-services-tools/static/ff4ea6577c5ba2ce4ec94c9b5de5b2c2/91d6a/new-application-folder.png",srcSet:"/veteran-facing-services-tools/static/ff4ea6577c5ba2ce4ec94c9b5de5b2c2/f4a45/new-application-folder.png 259w,\n/veteran-facing-services-tools/static/ff4ea6577c5ba2ce4ec94c9b5de5b2c2/91d6a/new-application-folder.png 364w",sizes:"(max-width: 364px) 100vw, 364px"})))),p.a.createElement(i.MDXTag,{name:"ol",components:n,props:{start:2}},p.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Add a manifest.json file in the new folder. This file contains important information about your application:")),p.a.createElement(i.MDXTag,{name:"pre",components:n},p.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json"}},'{\n  // Name of your application, not Veteran facing\n  appName: "My new application",\n  // The Webpack entry point to the bundle for your application\n  entryFile: "./my-new-application-entry.jsx",\n  // The Webpack bundle name for your app. Must be unique.\n  entryName: "my-new-application",\n  // The root url where your application lives\n  rootUrl: "/my-new-application",\n}\n')),p.a.createElement(i.MDXTag,{name:"ol",components:n,props:{start:3}},p.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Create the file you referenced in the ",p.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"entryFile")," property above:")),p.a.createElement(i.MDXTag,{name:"pre",components:n},p.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import 'platform/polyfills';\nimport './sass/my-new-application.scss';\n\nimport startApp from '../../platform/startup';\n\nimport routes from './routes';\nimport reducer from './reducers';\nimport manifest from './manifest';\n\nstartApp({\n  url: manifest.rootUrl,\n  reducer,\n  routes,\n  entryName: manifest.entryName,\n});\n")),p.a.createElement(i.MDXTag,{name:"p",components:n},"This file uses our ",p.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"startApp")," helper to create a React/Redux app that has client-side routes handled with ",p.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"react-router"),". You can leave out the routes or reducer if you don't need Redux or ",p.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"react-router"),". There's also a reference to a Sass file, which will set up the styles for your application."),p.a.createElement(i.MDXTag,{name:"ol",components:n,props:{start:4}},p.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Create Sass file (",p.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"src/applications/my-new-application/sass/my-new-application.sass"),"):")),p.a.createElement(i.MDXTag,{name:"pre",components:n},p.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-scss"}},'@import "~@department-of-veterans-affairs/formation/sass/shared-variables";\n\n// Your custom sass\n')),p.a.createElement(i.MDXTag,{name:"ol",components:n,props:{start:5}},p.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Create reducer (",p.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"src/applications/my-new-application/reducers/index.js"),"):")),p.a.createElement(i.MDXTag,{name:"pre",components:n},p.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"const initialState = {\n  // whatever initial state you have\n};\n\nfunction myNewApplication(state = initialState, action) {\n  switch (action.type) {\n    case SOME_ACTION:\n      return state;\n    default:\n      return state;\n  }\n}\n\nexport default {\n  myNewApplication\n};\n")),p.a.createElement(i.MDXTag,{name:"p",components:n},"This is a normal Redux reducer, and can be broken up into different state slices as needed. The only thing to note is that it needs to return an object, not a function. This object will get merged with other state data and then turned into a function using Redux's ",p.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"combineReducers")," function."),p.a.createElement(i.MDXTag,{name:"ol",components:n,props:{start:6}},p.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ol"},"Create routes file (",p.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"src/applications/my-new-application/routes.jsx"),"):")),p.a.createElement(i.MDXTag,{name:"pre",components:n},p.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import React from 'react';\nimport { Route, IndexRedirect } from 'react-router';\n\nimport MyPage from './containers/MyPage.jsx';\nimport MyNewApplicationApp from './containers/MyNewApplicationApp.jsx';\n\nconst routes = (\n  <Route path=\"/\" component={MyNewApplicationApp}>\n    <Route component={MyPage} path=\"my-page\"></Route>\n    <IndexRedirect to=\"my-page\" />\n  </Route>\n);\n\nexport default routes;\n")),p.a.createElement(i.MDXTag,{name:"p",components:n},"You can add new pages and whatever routed components you need in this file."),p.a.createElement(i.MDXTag,{name:"p",components:n},"And that's it! If you fill out the routes.jsx file with pages that exist, you should be able to start up VA.gov and see it working locally."),p.a.createElement("h2",{id:"going-to-production"},"Going to production"),p.a.createElement(i.MDXTag,{name:"p",components:n},"The above steps will only enable your application in our staging and dev environments. In order to enable it in production, you'll have to create a content page for your application. In dev/staging, our Metalsmith pipeline will create a temporary one."),p.a.createElement(i.MDXTag,{name:"p",components:n},"In ",p.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vagov-content"),", you can add a page with the following frontmatter:"),p.a.createElement(i.MDXTag,{name:"pre",components:n},p.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-md"}},"---\ntitle: My new application \nentryname: my-new-application\nlayout: page-react.html\n---\n")),p.a.createElement(i.MDXTag,{name:"p",components:n},"The most important thing to note is that the ",p.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"entryname")," property should match the ",p.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"entryName")," property in your manifest file and that the page should be in the location that matches the ",p.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"rootUrl")," path. In this case, that would be ",p.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pages/my-new-application.md")," or ",p.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pages/my-new-application/index.md")," in ",p.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vagov-content"),"."))},n}(p.a.Component),d={}},354:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},355:function(e,n,t){"use strict";var a=t(2),o=t.n(a),r=t(13),c=t.n(r),s=t(358),p=(t(133),t(134),t(135),t(17),t(354)),i=t(356);function m(){return o.a.createElement(i.b,{query:"157057713",render:function(e){return o.a.createElement(u,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:p})}function l(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(i.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function u(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(u,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(m,null)):o.a.createElement(l,{item:e,key:e.name})})):null}var d=t(357),g=t.n(d);function h(e){var n=e.location,t=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(u,{items:t.items}))):null}function f(e){var n=e.children,t=e.location;return o.a.createElement(s.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return f}),f.propTypes={children:c.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-new-application-mdx-c4220673de26e32c7b55.js.map