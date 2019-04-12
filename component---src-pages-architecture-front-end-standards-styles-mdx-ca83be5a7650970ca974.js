(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{290:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return u});n(42);var a=n(43),o=n.n(a),r=n(3),s=n.n(r),c=n(2),m=n.n(c),i=n(4),l=n(337),p={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return m.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},m.a.createElement(i.MDXTag,{name:"h1",components:t},"Guidelines for good SCSS / CSS"),m.a.createElement(i.MDXTag,{name:"p",components:t},"Some guidelines for writing good CSS that scales well and doesn't make your colleagues ragey."),m.a.createElement(i.MDXTag,{name:"h2",components:t},"Use low-specificity selectors"),m.a.createElement(i.MDXTag,{name:"p",components:t},"The more specific the selector is, the less reusable the accompanying CSS is and/or the longer a selector you need to override it. (Or you add ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"!important")," in places you shouldn't.)"),m.a.createElement(i.MDXTag,{name:"p",components:t},"The following should be used sparingly in CSS"),m.a.createElement(i.MDXTag,{name:"ul",components:t},m.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"id")," selectors."),m.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Complex element/type selectors with attributes such as ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"button[type=button]")," and ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"input[type=text]"),"."),m.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Descendant combinators such as ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"#main ol li ul")," or ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},".process p a"),"."),m.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Chaining class names. ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"button")," and ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"button.lg"),")")),m.a.createElement(i.MDXTag,{name:"p",components:t},"High specificity selectors are more likely to create side effects, that have to be undone with more CSS rules or longer selectors."),m.a.createElement(i.MDXTag,{name:"h2",components:t},"Avoid nesting SCSS selectors prematurely"),m.a.createElement(i.MDXTag,{name:"p",components:t},"SCSS compiles nested selectors into descendant combinators. For example:"),m.a.createElement(i.MDXTag,{name:"pre",components:t},m.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"#content {\n  ol {\n    p {}\n  }\n}\n")),m.a.createElement(i.MDXTag,{name:"p",components:t},"Compiles to:"),m.a.createElement(i.MDXTag,{name:"pre",components:t},m.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"#content ol p {}\n")),m.a.createElement(i.MDXTag,{name:"p",components:t},"There's a high likelihood, however that your selectors don't need to be that long; ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ol p")," would provide the same styling. If the worry is being overly broad, you can get the same results using a class name. This is related to the previous point. Specific selectors are often caused by SCSS nesting."),m.a.createElement(i.MDXTag,{name:"p",components:t},"Nesting selectors can be useful, however, when creating variants. For example:"),m.a.createElement(i.MDXTag,{name:"pre",components:t},m.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},".button {\n  &-link {\n  }\n}\n")),m.a.createElement(i.MDXTag,{name:"p",components:t},"Compiles to ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"button-link"),"."),m.a.createElement(i.MDXTag,{name:"h2",components:t},"Restrict class names to a single pattern or component type."),m.a.createElement(i.MDXTag,{name:"p",components:t},"For example, don't use ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},".process")," for lists ",m.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"p"},"and")," as a ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"div")," or ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"section")," type. Rules you introduce for ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"div.process")," probably aren't related to those for ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ol.process"),". Instead use ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},".list-process")," and ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},".section-process"),"."),m.a.createElement(i.MDXTag,{name:"h2",components:t},"Favor descriptive class names that describe what the class does or the kind of content it affects"),m.a.createElement(i.MDXTag,{name:"p",components:t},"Class names such as ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},".primary"),", or ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},".section")," are confusing and more likely to be misused by a colleague than ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},".intro-text")," or ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},".sidebar"),"."),m.a.createElement(i.MDXTag,{name:"h2",components:t},"Use a product-specific prefix to avoid class name collisions"),m.a.createElement(i.MDXTag,{name:"p",components:t},"This keeps selector specificity low, while also restricting the side-effects of any one selector."),m.a.createElement(i.MDXTag,{name:"h2",components:t},"Don't use ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"h2"},"@extend")),m.a.createElement(i.MDXTag,{name:"p",components:t},"SCSS ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"@extend")," repeats every instance of the extended selector for the extendee selector. (This will be flagged by our Sass-lint configuration.)"),m.a.createElement(i.MDXTag,{name:"pre",components:t},m.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"h4 {\n  color: #c09;\n  font-size: 1.2rem;\n  font-weight: 100;\n}\n\nlabel {\n  @extend h4;\n  cursor: pointer;\n}\n\n.footer h4 {\n  display: inline;\n}\n")),m.a.createElement(i.MDXTag,{name:"p",components:t},"Compiles to:"),m.a.createElement(i.MDXTag,{name:"pre",components:t},m.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"h4, label {\n  color: #c09;\n  font-size: 1.2rem;\n  font-weight: 100; }\n\nlabel {\n  cursor: pointer; }\n\n.header h4, .header label {\n  font-weight: bold; }\n\n.footer h4, .footer label {\n  display: inline; }\n")),m.a.createElement(i.MDXTag,{name:"p",components:t},"Every instance of ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"h4")," will also be applied to ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"label"),". This is usually not the behavior we want, particularly across an entire code base."),m.a.createElement(i.MDXTag,{name:"h1",components:t},"CHECK. YOUR. OUTPUT."),m.a.createElement(i.MDXTag,{name:"p",components:t},"Periodially check your generated CSS files (JavaScript too!) to ensure that you didn't introduce bloat with your selectors or asset imports."),m.a.createElement(i.MDXTag,{name:"p",components:t},"True story: we reduced the size of our home page CSS by ~400K by removing SVG fonts. Our Webpack configuration included base64-encoded versions of SVG fonts which dramatically inflated our file size. This fact was discovered only after viewing the generated CSS files."))},t}(m.a.Component),u={}},330:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var a=n(2),o=n.n(a),r=n(13),s=n.n(r),c=n(68),m=n.n(c);n.d(t,"a",function(){return m.a});n(332);var i=o.a.createContext({}),l=function(e){return o.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},331:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Accessing internal tools",href:"getting-started/internal-tools"},{name:"VA.gov environments",href:"getting-started/environments"},{name:"Development workflow",href:"getting-started/workflow"},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"},{name:"Releases",href:"getting-started/common-tasks/releases"},{name:"Reviewing feature branches",href:"getting-started/common-tasks/reviewing-feature-branches"}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"architecture/metalsmith/urls"},{name:"How templates work",href:"architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Topology",href:"architecture/site-structure/topology-overview"},{name:"Client overview",href:"architecture/site-structure/client-overview"},{name:"Styling",href:"architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Redux standards",href:"architecture/front-end-standards/redux"},{name:"Styles",href:"architecture/front-end-standards/styles"},{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Accessibility",href:"architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"architecture/visual-regression-testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"platform/feature-flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},332:function(e,t,n){var a;e.exports=(a=n(334))&&a.default||a},333:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},334:function(e,t,n){"use strict";n.r(t);var a=n(18),o=n.n(a),r=n(2),s=n.n(r),c=n(13),m=n.n(c),i=n(94),l=n(9),p=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return s.a.createElement(i.a,o()({location:t,pageResources:n},n.json))};p.propTypes={location:m.a.shape({pathname:m.a.string.isRequired}).isRequired},t.default=p},335:function(e,t,n){"use strict";var a=n(3),o=n.n(a),r=n(333),s=n(2),c=n.n(s),m=n(13),i=n.n(m),l=n(338),p=n.n(l),d=n(330),u=(n(17),n(133),n(134),n(331)),h=n.n(u),g=n(18),f=n.n(g),E=n(339),b=n.n(E),v=function(e){function t(t){var n;return(n=e.call(this,t)||this).state=h.a.sections.reduce(function(e,t){var n;return f()(((n={})[t.id]=!1,n),e)},{}),n}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.open,a=t.onClose,o=t.location;return c.a.createElement("div",{className:b()("site-c-mobile-nav",{"is-visible":n}),id:"mobile-nav"},c.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:a,"aria-label":"Close this menu"},c.a.createElement("i",{className:"fas fa-times"})),c.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(t){return c.a.createElement("div",{key:t.id},c.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},c.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var n;return e.setState(((n={})[t.id]=!e.state[t.id],n))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),c.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},c.a.createElement("ul",{className:"site-c-mobile-nav-list"},c.a.createElement("li",{className:"site-c-mobile-nav-list__item"},c.a.createElement(d.a,{className:b()("site-c-mobile-nav-list__link",{current:o.pathname===t.href}),to:t.href},"Overview")))))})))},t}(c.a.Component),y=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={navOpen:!1},n}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return c.a.createElement("div",null,c.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),c.a.createElement("header",{className:"site-c-header",role:"banner"},c.a.createElement("div",{className:"site-l-wrapper"},c.a.createElement("div",{className:"site-c-header__masthead"},c.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},c.a.createElement("em",{className:"site-c-header__logo-text"},c.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},c.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",c.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),c.a.createElement("div",{className:"site-c-header__utility-links"},c.a.createElement("div",{id:"search-container",className:"site-search-container"},c.a.createElement("i",{className:"fas fa-search search-icon"}),c.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),c.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),c.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},c.a.createElement("i",{className:"fas fa-search"})),c.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),c.a.createElement("nav",{className:"site-c-header__nav"},c.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return c.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},c.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),c.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},c.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),c.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),c.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&c.a.createElement("div",{className:"site-c-overlay is-visible"}),c.a.createElement(v,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(c.a.Component),T=(n(340),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,t=e.children,n=e.location;return c.a.createElement(d.b,{query:"1044757290",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(y,{location:n}),t)},data:r})},t}(c.a.Component));T.propTypes={children:i.a.node.isRequired};t.a=T},336:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},337:function(e,t,n){"use strict";var a=n(2),o=n.n(a),r=n(13),s=n.n(r),c=n(335),m=(n(17),n(133),n(134),n(135),n(330)),i=n(336);function l(){return o.a.createElement(m.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function p(e){var t=e.items;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return o.a.createElement("li",{key:e.name},!!e.items&&o.a.createElement("li",{key:e.name},o.a.createElement("h4",null,e.name),o.a.createElement(p,{items:e.items})),"componentList"===e.query&&o.a.createElement("li",{key:e.name},o.a.createElement("h4",null,e.name),o.a.createElement(l,null)),!!e.href&&o.a.createElement("li",{key:e.name},o.a.createElement(m.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&o.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var d=n(331),u=n.n(d);function h(e){var t=e.location,n=u.a.sections.find(function(e){return t.pathname.includes(e.href)});return o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},!!n&&o.a.createElement(p,{items:n.items}),!n&&o.a.createElement("ul",{className:"site-c-sidenav-list"},u.a.sections.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(m.a,{to:e.href},e.name))})))}function g(e){var t=e.children,n=e.location;return o.a.createElement(c.a,{location:n},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:n}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}n.d(t,"a",function(){return g}),g.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-architecture-front-end-standards-styles-mdx-ca83be5a7650970ca974.js.map