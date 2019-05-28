(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{334:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"_frontmatter",function(){return d});t(42);var o=t(43),a=t.n(o),s=t(3),r=t.n(s),c=t(2),i=t.n(c),m=t(4),l=t(351),p={},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=a()(e,["components"]);return i.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:n},i.a.createElement("h2",{id:"about-the-platform"},"About the platform"),i.a.createElement(m.MDXTag,{name:"p",components:n},"In this documentation we will discuss our platform and how it is setup, This Platform section will detail\nspecifics on how things work, site structure, architecture, tools, technologies, and any relavent\ninformation regarding the platform."),i.a.createElement(m.MDXTag,{name:"p",components:n},"The platform is made up of 4 major components."),i.a.createElement(m.MDXTag,{name:"ul",components:n},i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"MetalSmith"),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"React/Redux"),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"Drupal CMS"),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"TeamSite")),i.a.createElement("h3",{id:"metalsmith"},"MetalSmith"),i.a.createElement(m.MDXTag,{name:"p",components:n},"MetalSmith is a static site generator made from Node.js. It is based off a plugin architecture which\nmakes it very flexible when needing to customize the build process or integrating other systems into it."),i.a.createElement("h3",{id:"reactredux"},"React/Redux"),i.a.createElement(m.MDXTag,{name:"p",components:n},"React is a front-end single page application library that helps you create painless interactive UIs.\nWe use React in our platform to create web components and also individual applications within the website.\nThe React applications are injected into specific pages. All applications can be found in ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/applications"),".\nWe use Redux to manage our data and the state of that data."),i.a.createElement("h3",{id:"drupal-cms"},"Drupal CMS"),i.a.createElement(m.MDXTag,{name:"p",components:n},"Drupal content is retrieved via GraphQL and pushed into the Metalsmith pipeline with a custom plugin,\nwhere it is then transformed into static html pages using Liquid templates."),i.a.createElement("h3",{id:"teamsite"},"TeamSite"),i.a.createElement(m.MDXTag,{name:"p",components:n},"TeamSite is a content management system built with PERL. This is the original system VA.gov was built on. Vets.gov and VA.gov were merged and needed to be integrated to use both systems without feeling like different systems. Some webpages still live under TeamSite and will eventually get ported over into the new Platform. Some components are shared such as the the MegaMenu adn the Footer. These components are injected using a script to render on TeamSite pages."))},n}(i.a.Component),d={}},350:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},351:function(e,n,t){"use strict";var o=t(2),a=t.n(o),s=t(13),r=t.n(s),c=t(354),i=(t(133),t(134),t(135),t(17),t(350)),m=t(352);function l(){return a.a.createElement(m.b,{query:"157057713",render:function(e){return a.a.createElement(u,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function p(e){var n=e.item;return n.href?a.a.createElement("li",{key:n.name},a.a.createElement(m.a,{to:n.href},n.name)):a.a.createElement("li",{key:n.name},n.name," (future)")}function u(e){var n=e.items,t=e.isSublist,o=void 0!==t&&t;return n.length?a.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?a.a.createElement("li",{key:e.name},o&&a.a.createElement(p,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(u,{isSublist:!0,items:e.items})):"componentList"===e.query?a.a.createElement("li",{key:e.name},o&&a.a.createElement(p,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(l,null)):a.a.createElement(p,{item:e,key:e.name})})):null}var d=t(353),h=t.n(d);function g(e){var n=e.location,t=h.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?a.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},a.a.createElement("div",{className:"site-c-sidenav"},a.a.createElement(u,{items:t.items}))):null}function v(e){var n=e.children,t=e.location;return a.a.createElement(c.a,{location:t},a.a.createElement("div",{className:"vads-l-row"},a.a.createElement(g,{location:t}),a.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return v}),v.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-index-mdx-a72acdbbb281ff346a91.js.map