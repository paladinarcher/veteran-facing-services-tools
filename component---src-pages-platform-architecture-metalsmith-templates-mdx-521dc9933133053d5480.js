(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{316:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"_frontmatter",function(){return d});t(42);var a=t(43),o=t.n(a),r=t(3),m=t.n(r),c=t(2),s=t.n(c),p=t(4),l=t(347),i={},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return s.a.createElement(p.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,t),components:n},s.a.createElement("h1",{id:"how-templates-work-for-markdown-pages"},"How templates work for Markdown pages"),s.a.createElement(p.MDXTag,{name:"p",components:n},"Templates use ",s.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/leizongmin/tinyliquid/"}},"tinyliquid"),", a JavaScript implementation of ",s.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://shopify.github.io/liquid/"}},"Liquid"),"."),s.a.createElement(p.MDXTag,{name:"p",components:n},'There are three "wrapper" templates currently in use for Markdown content. They\'re all in ',s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/site/layouts"),"."),s.a.createElement(p.MDXTag,{name:"ul",components:n},s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"page-react"),": Houses our React pages."),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"page-react-sidebar"),": Houses our React pages that have a sidebar."),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"page-breadcrumbs"),": Houses our non-React content pages."),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"page-playbook"),": Houses Playbook pages."),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"home"),": Template for the home page"),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"home"),": Template for the home page without search")),s.a.createElement(p.MDXTag,{name:"p",components:n},s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"page-breadcrumbs")," is a container template that loads layouts for the content between the header and the footer. Those are in ",s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"content/layouts/includes/"),"."),s.a.createElement(p.MDXTag,{name:"p",components:n},"Templates are loaded based on the value of the ",s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"template")," property in the ",s.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://yaml.org/"}},"YAML"),"/front-page data of each content file -- the text between the ",s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"---"),". Content files can be found in ",s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"content/pages/"),"."),s.a.createElement("h2",{id:"adding-a-new-template"},"Adding a new template"),s.a.createElement(p.MDXTag,{name:"ul",components:n},s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"Add a new HTML + Liquid template file to ",s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"src/site/includes")),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"Update ",s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"page-breadcrumbs")," with a new case for the new layout."),s.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"Update the ",s.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"template")," YAML property for whichever pages should load the new template.")),s.a.createElement("h2",{id:"content-meta-data"},"Content meta data"),s.a.createElement(p.MDXTag,{name:"p",components:n},"To date, we've used ",s.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://yaml.org/"}},"YAML")," syntax in Markdown files as a way to structure data such as related links (majorlinks) and navigation cards."))},n}(s.a.Component),d={}},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},347:function(e,n,t){"use strict";var a=t(2),o=t.n(a),r=t(13),m=t.n(r),c=t(350),s=(t(133),t(134),t(135),t(17),t(346)),p=t(348);function l(){return o.a.createElement(p.b,{query:"157057713",render:function(e){return o.a.createElement(u,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:s})}function i(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(p.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function u(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(u,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(i,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):o.a.createElement(i,{item:e,key:e.name})})):null}var d=t(349),g=t.n(d);function h(e){var n=e.location,t=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(u,{items:t.items}))):null}function E(e){var n=e.children,t=e.location;return o.a.createElement(c.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return E}),E.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-metalsmith-templates-mdx-521dc9933133053d5480.js.map