(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{302:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"_frontmatter",function(){return d});t(42);var a=t(43),o=t.n(a),s=t(3),r=t.n(s),c=t(2),i=t.n(c),m=t(4),p=t(347),l={},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=p.a,t}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return i.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,t),components:n},i.a.createElement("h1",{id:"add-a-new-application-or-feature-to-vagov"},"Add a new application or feature to VA.gov"),i.a.createElement(m.MDXTag,{name:"p",components:n},"Almost everyone working on VA.gov at some point will need to build a new feature, something that doesn't fit into the existing applications or widgets we have currently. This article will help guide you to the right way to implement that new feature."),i.a.createElement("h2",{id:"types-of-features-on-vagov"},"Types of features on VA.gov"),i.a.createElement(m.MDXTag,{name:"p",components:n},"Broadly, we have three kinds of features on VA.gov: static content pages, applications, and widgets."),i.a.createElement("h3",{id:"content-pages"},"Content pages"),i.a.createElement(m.MDXTag,{name:"p",components:n},"Static ",i.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/veteran-facing-services-tools/getting-started/common-tasks/new-page"}},"content pages")," are pages that are built through the Metalsmith build process and are static html stored in AWS. If you're reading this site, you're probably not the person who would be addding one of these pages. Typically these pages are added by content editors in the vagov-content repo or in the Drupal CMS. You may, however, be tasked with adding more complex behaviors to these pages, which is discussed later in the widgets section."),i.a.createElement("h3",{id:"widgets"},"Widgets"),i.a.createElement(m.MDXTag,{name:"p",components:n},'On VA.gov, we use the term "',i.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/veteran-facing-services-tools/getting-started/common-tasks/new-widget"}},"widgets"),'" to describe features that implement some kind of dynamic behavior in a contained place on a page. Examples of this include our saved application widgets, which display information about in progress applications a signed-in user may have, which is shown on various static content pages. Typically these widgets are written in React and are lazily loaded in separate bundles from the default static pages JS bundle.'),i.a.createElement("h3",{id:"applications"},"Applications"),i.a.createElement(m.MDXTag,{name:"p",components:n},"The third type of feature are ",i.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/veteran-facing-services-tools/getting-started/common-tasks/new-application"}},"applications"),". These are Javascript applications, written with React/Redux, that control all of the UI for a page and may have multiple client-side pages. There is a static content page for each of these applications that contains only a header, footer, and ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"div")," for the React application to mount to. These applications have their own JS bundle and the most flexibility for how to render content for a Veteran to interact with."),i.a.createElement(m.MDXTag,{name:"p",components:n},"Examples of applications include our multi page forms, the claim status tracker app, etc."),i.a.createElement("h2",{id:"choosing-the-right-type"},"Choosing the right type"),i.a.createElement(m.MDXTag,{name:"p",components:n},"Generally, you want to start with a simple content page, see if that will cover your needs, and if not, move up to an application widget. If that still isn't enough, then you can create an application. Full Javascript applications come at a cost for users, so we should make sure they're justified by the requirements of the feature you're building."),i.a.createElement(m.MDXTag,{name:"p",components:n},"Content pages are the best choice if:"),i.a.createElement(m.MDXTag,{name:"ul",components:n},i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"The content on the page or pages you need are completely static and don't change based on api or user data")),i.a.createElement(m.MDXTag,{name:"p",components:n},"Widgets are the best choice if:"),i.a.createElement(m.MDXTag,{name:"ul",components:n},i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"You need to implement some kind of dynamic behavior based on user input or api data"),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"The dynamic behavior you need is a small part of the overall page"),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"You want content editors to have control over most of what is on the page or pages"),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"You have multiple pages with the same dynamic behavior and want to share code between them")),i.a.createElement(m.MDXTag,{name:"p",components:n},"Applications are the best choice if:"),i.a.createElement(m.MDXTag,{name:"ul",components:n},i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Your feature has multiple pages that need to be dyanmically created based on user input or api data"),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Your feature requires a lot of interaction and very little of the page you need is static")))},n}(i.a.Component),d={}},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},347:function(e,n,t){"use strict";var a=t(2),o=t.n(a),s=t(13),r=t.n(s),c=t(350),i=(t(133),t(134),t(135),t(17),t(346)),m=t(348);function p(){return o.a.createElement(m.b,{query:"157057713",render:function(e){return o.a.createElement(u,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function l(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(m.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function u(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(u,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,null)):o.a.createElement(l,{item:e,key:e.name})})):null}var d=t(349),h=t.n(d);function g(e){var n=e.location,t=h.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(u,{items:t.items}))):null}function v(e){var n=e.children,t=e.location;return o.a.createElement(c.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return v}),v.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-new-feature-mdx-cc534c978ff574998fa4.js.map