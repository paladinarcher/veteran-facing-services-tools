(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{287:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"_frontmatter",function(){return u});a(42);var n=a(43),o=a.n(n),r=a(3),s=a.n(r),i=a(2),m=a.n(i),c=a(4),l=a(337),p={},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=l.a,a}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=o()(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:t},m.a.createElement(c.MDXTag,{name:"h1",components:t},"USWDS/Foundation"),m.a.createElement(c.MDXTag,{name:"table",components:t},m.a.createElement(c.MDXTag,{name:"thead",components:t,parentName:"table"},m.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"thead"},m.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),m.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),m.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),m.a.createElement(c.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}))),m.a.createElement(c.MDXTag,{name:"tbody",components:t,parentName:"table"},m.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"td"},"Last Decision Made:")),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Keep Foundation for grid for now"),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"td"},"Decision Date:")),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"05/2017")),m.a.createElement(c.MDXTag,{name:"tr",components:t,parentName:"tbody"},m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"td"},"Revisit Decision:")),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Yes"),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"td"},"Revisit Date:")),m.a.createElement(c.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"06/2017")))),m.a.createElement(c.MDXTag,{name:"p",components:t},m.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"Revisit Criteria:")," Once keeping Foundation with an older version of USWDS starts to create too much pain for developers, or once USWDS adds additional functionality that we need."),m.a.createElement(c.MDXTag,{name:"h2",components:t},"Summary"),m.a.createElement(c.MDXTag,{name:"p",components:t},"We needed to reach a decision on whether or not to finish the work of stripping out Foundation."),m.a.createElement(c.MDXTag,{name:"p",components:t},"Pros:"),m.a.createElement(c.MDXTag,{name:"ul",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"It would streamline our front-end frameworks"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"It would reduce bloat"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"It would enable us to upgrade to the latest version of USWDS")),m.a.createElement(c.MDXTag,{name:"p",components:t},"Cons:"),m.a.createElement(c.MDXTag,{name:"ul",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"It would be a huge investment of time and resources."),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"It wasn't actually causing that much developer pain to continue to use Foundation."),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"It might be possible to reduce bloat without having to totally remove Foundation"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"USWDS didn't have all the functionality we needed out of the box.")),m.a.createElement(c.MDXTag,{name:"h2",components:t},"History"),m.a.createElement(c.MDXTag,{name:"p",components:t},"Removing Foundation from vets-website became a project our team wanted to tackle for a few reasons:\n1. We wanted to remove bloat from our bundle (both in taking out Foundation and the JavaScript it relied upon)\n2. It seemed unnecessary to be including 2 separate grid frameworks in our codebase (Foundation and USWDS)\n3. Foundation had conflicts with the latest version of USWDS, preventing us from upgrading"),m.a.createElement(c.MDXTag,{name:"p",components:t},"Tiffany Brown (front-end dev) had been working on trying to remove Foundation from vets-website for a few months. It was a tangled problem that touched every part of Vets.gov and had cascading effects."),m.a.createElement(c.MDXTag,{name:"p",components:t},"She left the team on Friday, May 12 with the following work:\n1. The ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/549"}},"original ticket")," that includes a ton of documentation\n2. An ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/pull/5353"}},"open PR"),"\n3. ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/2739"}},"Hand-off notes")),m.a.createElement(c.MDXTag,{name:"p",components:t},"Tiffany got us pretty far before she left, but there was still a good amount of work left to do to complete this project."),m.a.createElement(c.MDXTag,{name:"h2",components:t},"Decision Meeting - May 18, 2017"),m.a.createElement(c.MDXTag,{name:"p",components:t},"We set up a meeting to decide on next steps for finishing the work of stripping out Foundation."),m.a.createElement(c.MDXTag,{name:"p",components:t},"Attendees:"),m.a.createElement(c.MDXTag,{name:"ul",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Alex Yale-Loehr (Vets.gov tech lead)"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Anne Kainic (Front-end dev)"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Jeff Balboni (Front-end dev)"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Claire Hsu (Front-end dev)"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Raquel Romano (Front-end dev)"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Ben Shyong (Front-end dev)"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Eugene Doan (Front-end dev)"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Bill Hunt")),m.a.createElement(c.MDXTag,{name:"p",components:t},"There were 2 questions we had to answer:"),m.a.createElement(c.MDXTag,{name:"ol",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"Was the work of stripping out Foundation and exclusively using USWDS worth the effort it was going to take?"),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"If so, what was the best approach for doing it?")),m.a.createElement(c.MDXTag,{name:"p",components:t},"For question 1 (was the work worth the effort it would take), developers were not currently experiencing a lot of pain in having to work between USWDS and Foundation. We believed it might be possible to strip our jQuery and the Foundation JavaScript without having to remove the Foundation grid and visibility classes, the only part of Foundation we were currently using. This would take care of the bloat problem without having to go through the enormous effort of switching grid classes everywhere and fixing visual regression issues."),m.a.createElement(c.MDXTag,{name:"p",components:t},"An additional problem with removing Foundation was that USWDS did not provide all the functionality we needed that we currently got from Foundation (small width grid classes and visibility classes). We would either have to talk to the USWDS team and figure out a way to include those things in USWDS, or write our own styles on top of it so that we could do all the same things we were doing before with Foundation. This would mean additional time and resources."),m.a.createElement(c.MDXTag,{name:"p",components:t},"The one downside to deciding not to remove Foundation was that it seemed to conflict with the latest upgrade of USWDS. This would mean we could not keep up to date with USWDS releases."),m.a.createElement(c.MDXTag,{name:"p",components:t},"For question 2 (what was the best approach), if we decided to remove Foundation, we had 2 possible routes to do so:\n1. Have all the front-end developers devote 2-3 days of exclusively working on converting the grid classes for all the apps and content pages and get the changes merged as soon as possible."),m.a.createElement(c.MDXTag,{name:"ul",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Advantages: the fastest solution to finishing this work."),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Disadvantages: an investment of resources and probably some pain.")),m.a.createElement(c.MDXTag,{name:"ol",components:t,props:{start:2}},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ol"},"Create a parallel set of styles that did not use Foundation, and move apps and content pages over to using the new set of styles when possible.")),m.a.createElement(c.MDXTag,{name:"ul",components:t},m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Advantages: gives us the flexibility to migrate when we have time."),m.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Disadvantages: a lot of overhead work.")),m.a.createElement(c.MDXTag,{name:"h2",components:t},"The Decision"),m.a.createElement(c.MDXTag,{name:"p",components:t},"The short-term decision was to explore ways of not removing the Foundation grid."),m.a.createElement(c.MDXTag,{name:"p",components:t},"There were 3 action items that came out of this decision:\n1. Try removing jQuery and the Foundation JavaScript to ensure that everything continues to work without those two larger pieces of JavaScript.\n2. Investigate what we miss out on by not upgrading the newest version of USWDS --\x3e ",m.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/2873"}},"GH issue with documentation"),"\n3. Talk to the 18f team about some of the features that we would need in USWDS to be able to fully use their framework (small width grid classes and visibility classes)"))},t}(m.a.Component),u={}},330:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(2),o=a.n(n),r=a(13),s=a.n(r),i=a(68),m=a.n(i);a.d(t,"a",function(){return m.a});a(332);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},331:function(e,t){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"1. Set up VA.gov locally",href:"/getting-started"},{name:"2. Access internal tools",href:"/getting-started/internal-tools"}]},{name:"VA.gov workflow",items:[{name:"Overview",href:"/getting-started/workflow/overview"},{name:"Write",href:"/getting-started/workflow/write"},{name:"Review",href:"/getting-started/workflow/review"},{name:"Deploy",href:"/getting-started/workflow/deploy"}]},{name:"Common tasks",items:[{name:"Run and build VA.gov",href:"/getting-started/common-tasks/run-build"},{name:"Run tests",href:"/getting-started/common-tasks/test"},{name:"Creating a new React application"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"}]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"/architecture/metalsmith/urls"},{name:"How templates work",href:"/architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"/architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Client overview",href:"/architecture/site-structure/client-overview"},{name:"VA.gov environments",href:"architecture/site-structure/environments"},{name:"Bundles and code organization",href:"architecture/site-structure/bundles-and-code-organization"},{name:"Styling",href:"/architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"/architecture/front-end-standards/react"},{name:"Redux standards",href:"/architecture/front-end-standards/redux"},{name:"Styles",href:"/architecture/front-end-standards/styles"},{name:"Accessibility",href:"/architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"/architecture/visual-regression-testing"},{name:"Teamsite",href:"/architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Tutorial",items:[{name:"1. Basic",href:"/forms/form-tutorial-basic"},{name:"2. Intermediate",href:"/forms/form-tutorial-intermediate"},{name:"3. Advanced",href:"/forms/form-tutorial-advanced"},{name:"4. Setting up Save in Progress",href:"/forms/save-in-progress"},{name:"5. Forms in production",href:"/forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"/platform/feature-flags"},{name:"Application generator",href:"/platform/generator"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]},{id:"documentation",name:"Documentation guide",href:"/documentation-guide",items:[{name:"Adding new pages to this site",href:"/documentation-guide/doc-page"},{name:"Adding pages from Github to this site",href:"/documentation-guide/external-doc-page"},{name:"Add graphs to MDX",href:"/documentation-guide/add-graphs-to-mdx"},{name:"Creating a Gatsby plugin",href:"/documentation-guide/creating-gatsby-plugins"}]}]}},332:function(e,t,a){var n;e.exports=(n=a(334))&&n.default||n},333:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},334:function(e,t,a){"use strict";a.r(t);var n=a(18),o=a.n(n),r=a(2),s=a.n(r),i=a(13),m=a.n(i),c=a(94),l=a(9),p=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return s.a.createElement(c.a,o()({location:t,pageResources:a},a.json))};p.propTypes={location:m.a.shape({pathname:m.a.string.isRequired}).isRequired},t.default=p},335:function(e,t,a){"use strict";var n=a(3),o=a.n(n),r=a(333),s=a(2),i=a.n(s),m=a(13),c=a.n(m),l=a(338),p=a.n(l),d=a(330),u=(a(17),a(133),a(134),a(331)),h=a.n(u),g=a(18),f=a.n(g),v=a(339),b=a.n(v),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state=h.a.sections.reduce(function(e,t){var a;return f()(((a={})[t.id]=!1,a),e)},{}),a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.open,n=t.onClose,o=t.location;return i.a.createElement("div",{className:b()("site-c-mobile-nav",{"is-visible":a}),id:"mobile-nav"},i.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},i.a.createElement("i",{className:"fas fa-times"})),i.a.createElement("div",{className:"usa-accordion "},h.a.sections.map(function(t){return i.a.createElement("div",{key:t.id},i.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},i.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var a;return e.setState(((a={})[t.id]=!e.state[t.id],a))},"aria-expanded":e.state[t.id]?"true":"false","aria-controls":"nav-"+t.id},t.name)),i.a.createElement("div",{id:"nav-"+t.id,"aria-hidden":e.state[t.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},i.a.createElement("ul",{className:"site-c-mobile-nav-list"},i.a.createElement("li",{className:"site-c-mobile-nav-list__item"},i.a.createElement(d.a,{className:b()("site-c-mobile-nav-list__link",{current:o.pathname===t.href}),to:t.href},"Overview")))))})))},t}(i.a.Component),w=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={navOpen:!1},a}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props.location;return i.a.createElement("div",null,i.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),i.a.createElement("header",{className:"site-c-header",role:"banner"},i.a.createElement("div",{className:"site-l-wrapper"},i.a.createElement("div",{className:"site-c-header__masthead"},i.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},i.a.createElement("em",{className:"site-c-header__logo-text"},i.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},i.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",i.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),i.a.createElement("div",{className:"site-c-header__utility-links"},i.a.createElement("div",{id:"search-container",className:"site-search-container"},i.a.createElement("i",{className:"fas fa-search search-icon"}),i.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),i.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},i.a.createElement("i",{className:"fas fa-search"})),i.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),i.a.createElement("nav",{className:"site-c-header__nav"},i.a.createElement("ul",{className:"site-c-header__nav-list"},h.a.sections.map(function(e){return i.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},i.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(t.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),i.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},i.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),i.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),i.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&i.a.createElement("div",{className:"site-c-overlay is-visible"}),i.a.createElement(E,{location:t,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},t}(i.a.Component),D=(a(340),function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},a.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},a.render=function(){var e=this.props,t=e.children,a=e.location;return i.a.createElement(d.b,{query:"1044757290",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(w,{location:a}),t)},data:r})},t}(i.a.Component));D.propTypes={children:c.a.node.isRequired};t.a=D},336:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}}]}}}},337:function(e,t,a){"use strict";var n=a(2),o=a.n(n),r=a(13),s=a.n(r),i=a(335),m=(a(133),a(134),a(135),a(17),a(336)),c=a(330);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function p(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},n&&e.name,!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):e.href?o.a.createElement("li",{key:e.name},o.a.createElement(c.a,{to:e.href},e.name)):o.a.createElement("li",{key:e.name},e.name," (future)")})):null}var d=a(331),u=a.n(d);function h(e){var t=e.location,a=u.a.sections.find(function(e){return t.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(p,{items:a.items}))):null}function g(e){var t=e.children,a=e.location;return o.a.createElement(i.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}a.d(t,"a",function(){return g}),g.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-architecture-front-end-standards-documented-decisions-uswds-foundation-mdx-342dde6fd41facdc06d7.js.map