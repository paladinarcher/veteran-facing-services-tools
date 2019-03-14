(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{288:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return u});n(41);var a=n(42),o=n.n(a),r=n(3),m=n.n(r),c=n(2),i=n.n(c),s=n(4),l=n(307),p={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return m()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return i.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},i.a.createElement(s.MDXTag,{name:"h1",components:t},"Building VA.gov"),i.a.createElement(s.MDXTag,{name:"p",components:t},"Note: most of the time, it's better to use the ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"watch")," task to build the site locally. This is the most developer-friendly experience."),i.a.createElement(s.MDXTag,{name:"p",components:t},"In order to do a full build of the site, you can run ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn build"),". This will convert the Markdown content in the ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"vagov-content")," repository and data queried from the Drupal API into html pages, and copy those pages, along with other asssets, into ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"build/localhost"),". In addition, it will run Webpack to create bundles for the Javascript that runs on va.gov and will output those files in ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"build/localhost/generated"),"."),i.a.createElement(s.MDXTag,{name:"h2",components:t},"Building for other environments"),i.a.createElement(s.MDXTag,{name:"p",components:t},"There are four main environments for VA.gov: local, development, staging, and production. Each of those environments has an associated build type: ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"localhost"),", ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"vagovdev"),", ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"vagovstaging"),", ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"vagovprod"),", which you can pass as a flag: "),i.a.createElement(s.MDXTag,{name:"p",components:t},i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"yarn build --buildtype=vagovstaging")),i.a.createElement(s.MDXTag,{name:"p",components:t},"The results of the build will go in the a folder underneath ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"build/")," that matches the build type: ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"build/vagovdev"),", ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"build/vagovstaging"),", etc."),i.a.createElement(s.MDXTag,{name:"p",components:t},"For production-like environments (vagovstaging and vagovprod), you will also need to set the ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"NODE_ENV")," environment variable to be ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"production"),", so Webpack builds our Javascript and included dependencies in production mode: "),i.a.createElement(s.MDXTag,{name:"p",components:t},i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"NODE_ENV=production yarn build --buildtype=vagovprod")),i.a.createElement(s.MDXTag,{name:"h2",components:t},"Using the built output"),i.a.createElement(s.MDXTag,{name:"p",components:t},"Typically, the reason for building the site locally like this is to build it in production mode and check that it is behaving as you'd expect. To do that, you need to run a local http server, which you can do by running "),i.a.createElement(s.MDXTag,{name:"p",components:t},i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"npx http-server -p 3001 build/vagovprod")),i.a.createElement(s.MDXTag,{name:"p",components:t},"Be aware that deep-linking to urls that are rendered by React apps on va.gov will not work when you run the site this way, as that relies on some server-side routing that is handled in nginx (or the Webpack dev server when running the ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"watch")," task)."))},t}(i.a.Component),u={}},301:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var a=n(2),o=n.n(a),r=n(13),m=n.n(r),c=n(66),i=n.n(c);n.d(t,"a",function(){return i.a});n(302);var s=o.a.createContext({}),l=function(e){return o.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:m.a.object,query:m.a.string.isRequired,render:m.a.func,children:m.a.func}},302:function(e,t,n){var a;e.exports=(a=n(304))&&a.default||a},303:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},304:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),r=n(2),m=n.n(r),c=n(13),i=n.n(c),s=n(93),l=n(9),p=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return m.a.createElement(s.a,o()({location:t,pageResources:n},n.json))};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=p},305:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},306:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test",href:"getting-started/common-tasks/write-unit-test"},{name:"Writing an end-to-end test",href:"getting-started/common-tasks/write-e2e-test"},{name:"Updating Formation",href:"getting-started/common-tasks/update-formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"}]},{name:"Code organization",items:[]},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing"},{name:"Teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},307:function(e,t,n){"use strict";var a=n(3),o=n.n(a),r=n(303),m=n(2),c=n.n(m),i=n(13),s=n.n(i),l=n(308),p=n.n(l),d=n(301),u=(n(17),n(132),n(133),n(134),n(305));function h(){return c.a.createElement(d.b,{query:"2758471434",render:function(e){return c.a.createElement(g,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:u})}function g(e){var t=e.items;return t.length?c.a.createElement("ul",{className:"menu-list"},t.map(function(e){return c.a.createElement("li",{key:e.name},!!e.items&&c.a.createElement("li",{key:e.name},c.a.createElement("h4",null,e.name),c.a.createElement(g,{items:e.items})),"componentList"===e.query&&c.a.createElement("li",{key:e.name},c.a.createElement("h4",null,e.name),c.a.createElement(h,null)),!!e.href&&c.a.createElement("li",{key:e.name},c.a.createElement(d.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&c.a.createElement("li",{key:e.href},c.a.createElement(d.a,{to:e.href},e.name)))})):null}var f=n(306),b=n.n(f);function E(e){var t=e.location,n=b.a.sections.find(function(e){return t.pathname.includes("/"+e.href)});return c.a.createElement("aside",{className:"sidebar"},c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"input-wrap"},c.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!n&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,n.name),c.a.createElement(d.a,{className:"home-link",to:""},"Home"),c.a.createElement(g,{items:n.items})),!n&&c.a.createElement("ul",{className:"menu-list"},b.a.sections.map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(d.a,{to:e.href},e.name))})))}n(309);var v=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return c.a.createElement(d.b,{query:"1044757290",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(E,{location:n}),c.a.createElement("div",{className:"ContentArea docSearch-content"},t))},data:r})},t}(c.a.Component);v.propTypes={children:s.a.node.isRequired};t.a=v}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-build-mdx-81feeef042929de4fdcd.js.map