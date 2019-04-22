(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{280:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"_frontmatter",function(){return u});a(42);var n=a(43),o=a.n(n),r=a(3),s=a.n(r),m=a(2),i=a.n(m),c=a(4),l=a(337),p={},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=l.a,a}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:t},i.a.createElement(c.MDXTag,{name:"h1",components:t},"Building forms"),i.a.createElement(c.MDXTag,{name:"table",components:t},i.a.createElement(c.MDXTag,{name:"thead",components:t,parentName:"table"},i.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"thead"},i.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),i.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),i.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),i.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}))),i.a.createElement(c.MDXTag,{name:"tbody",components:t,parentName:"table"},i.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"td"},"Decision Made:")),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Yes"),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"td"},"Decision Date:")),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"01/2017")),i.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"td"},"Revisit Decision:")),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Yes"),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"td"},"Revisit Date:")),i.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"December 2017")))),i.a.createElement(c.MDXTag,{name:"p",components:t},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"Revisit Criteria:")," As of 9/2017, all our forms are using RJSF. We should regroup and take a look at how it's going a few months after that."),i.a.createElement(c.MDXTag,{name:"p",components:t},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"Decision Makers:")," @annekainicUSDS @jbalboni @ayaleloehr @aub"),i.a.createElement(c.MDXTag,{name:"hr",components:t}),i.a.createElement(c.MDXTag,{name:"h2",components:t},"tl;dr"),i.a.createElement(c.MDXTag,{name:"p",components:t},"When bringing lengthy paper forms to Vets.gov, we use react-jsonschema-form and the common code we've built on top of it."),i.a.createElement(c.MDXTag,{name:"p",components:t},"A longer form ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://medium.com/the-u-s-digital-service/building-forms-faster-on-vets-gov-d8619f4e9db"}},"article on this decision")," can be found on the USDS Medium. The information below is meant to be a distilled version."),i.a.createElement(c.MDXTag,{name:"h2",components:t},"History"),i.a.createElement(c.MDXTag,{name:"p",components:t},"We built two forms (10-10EZ and 22-1990) with a basic React/Redux approach. The 10-10EZ (HCA) took 5 months and the 1990 took 2 months. We also had numerous production bugs to fix around validation and incorrectly formatted data. Based on those two forms, we thought we had a stable set of patterns for long forms and could make better use of shared code to make development faster and more reliable. We evaluated a few different form libraries for React and settled on ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/mozilla-services/react-jsonschema-form"}},"react-json-schemaform")," (RJSF). We used that to build the 22-1995 form. We found that building the 1995 with RJSF was a big improvement and have been building forms with RJSF since then."),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Pros"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Almost all form specific information is in a single configuration file, and has less boilerplate than building forms with React components"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"There's very little form-specific React code. Most form specific code are files that export configuration information, which is easy to modify and overwrite when necessary"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Forms are built using a JSON Schema file as a base and the backend uses the same file to validate submissions. So we're less likely to have schema errors than previously"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Building the config files is generally faster than building React components for each form")),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Cons"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"The application code for each form is very centralized, which makes it hard to use code splitting"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Overall form bundle size is still a little big (but generally smaller than before)"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Form-specific customizations that fall outside our expected patterns are more difficult to implement"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Handling different variations on our patterns means adding options to the config file, which can add noise to the form config files"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"The shared code built on top of RJSF is complicated")),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Example of an alternative approach"),i.a.createElement(c.MDXTag,{name:"p",components:t},"There are other React form libraries, most of which have you still building forms with React components (",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"redux-form.com"}},"redux-form"),", ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://react-form.js.org/#/story/readme-documentation"}},"react-form"),"). We could have gone with one of those, and put more effort into building reusable components, but we didn't feel like we would make as big of an improvement as with config file based approaches."),i.a.createElement(c.MDXTag,{name:"h2",components:t},"Decision"),i.a.createElement(c.MDXTag,{name:"p",components:t},"Long paper forms on Vets.gov will use RJSF and the shared code built on top of it."))},t}(i.a.Component),u={}},330:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(2),o=a.n(n),r=a(13),s=a.n(r),m=a(68),i=a.n(m);a.d(t,"a",function(){return i.a});a(332);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},331:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/architecture/metalsmith/urls"},{name:"How templates work",href:"/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Client overview",href:"/architecture/site-structure/client-overview"},{name:"VA.gov environments",href:"architecture/site-structure/environments"},{name:"Bundles and code organization",href:"architecture/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/architecture/front-end-standards/react"},{name:"Redux standards",href:"/architecture/front-end-standards/redux"},{name:"Styles",href:"/architecture/front-end-standards/styles"},{name:"Accessibility",href:"/architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"/architecture/visual-regression-testing"},{name:"Teamsite",href:"/architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"/platform/feature-flags"},{name:"Application generator",href:"/platform/generator"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},332:function(e,t,a){var n;e.exports=(n=a(334))&&n.default||n},333:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},334:function(e,t,a){"use strict";a.r(t);var n=a(18),o=a.n(n),r=a(2),s=a.n(r),m=a(13),i=a.n(m),c=a(94),l=a(9),p=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return s.a.createElement(c.a,o()({location:t,pageResources:a},a.json))};p.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=p},335:function(e,t,a){"use strict";var n=a(3),o=a.n(n),r=a(333),s=a(2),m=a.n(s),i=a(13),c=a.n(i),l=a(338),p=a.n(l),d=a(330),u=(a(17),a(133),a(134),a(331)),h=a.n(u),f=a(18),g=a.n(f),b=a(339),v=a.n(b),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state=h.a.sections.reduce(function(e,t){var a;return g()(((a={})[t.id]=!1,a),e)},{}),a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.open,n=t.onClose,o=t.location;return m.a.createElement("div",{className:v()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},m.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},m.a.createElement("i",{className:"fas fa-times"})),m.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(t){return m.a.createElement("div",{key:t.id},m.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},m.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[t.id]=!e.state[t.id],a))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),m.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},m.a.createElement("ul",{className:"site-c-mobile-nav-list"},m.a.createElement("li",{className:"site-c-mobile-nav-list__item"},m.a.createElement(d.a,{className:v()("site-c-mobile-nav-list__link",{current:o.pathname===t.href}),to:t.href},"Overview")))))})))},t}(m.a.Component),w=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={navOpen:!1},a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return m.a.createElement("div",null,m.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),m.a.createElement("header",{className:"site-c-header",role:"banner"},m.a.createElement("div",{className:"site-l-wrapper"},m.a.createElement("div",{className:"site-c-header__masthead"},m.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},m.a.createElement("em",{className:"site-c-header__logo-text"},m.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},m.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",m.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),m.a.createElement("div",{className:"site-c-header__utility-links"},m.a.createElement("div",{id:"search-container",className:"site-search-container"},m.a.createElement("i",{className:"fas fa-search search-icon"}),m.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),m.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),m.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},m.a.createElement("i",{className:"fas fa-search"})),m.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),m.a.createElement("nav",{className:"site-c-header__nav"},m.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return m.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},m.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),m.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},m.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),m.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),m.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&m.a.createElement("div",{className:"site-c-overlay is-visible"}),m.a.createElement(E,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(m.a.Component),N=(a(340),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return m.a.createElement(d.b,{query:"1044757290",render:function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},m.a.createElement("html",{lang:"en"})),m.a.createElement(w,{location:a}),t)},data:r})},t}(m.a.Component));N.propTypes={children:c.a.node.isRequired};t.a=N},336:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}}]}}}},337:function(e,t,a){"use strict";var n=a(2),o=a.n(n),r=a(13),s=a.n(r),m=a(335),i=(a(133),a(134),a(135),a(17),a(336)),c=a(330);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function p(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=a(331),u=a.n(d);function h(e){var t=e.location,a=u.a.sections.find(function(e){return t.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:a.items}))):null}function f(e){var t=e.children,a=e.location;return o.a.createElement(m.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}a.d(t,"a",function(){return f}),f.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-architecture-front-end-standards-documented-decisions-building-forms-mdx-5bd7f1f845dafa326c74.js.map