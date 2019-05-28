(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{319:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return d}),a.d(n,"_frontmatter",function(){return g});a(42);var t=a(43),o=a.n(t),m=a(3),r=a.n(m),c=a(2),l=a.n(c),i=a(4),s=a(351),p={},d=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=s.a,a}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return l.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:n},l.a.createElement("h1",{id:"adding-a-collection-of-related-links-for-markdown-pages"},"Adding a collection of related links for Markdown pages"),l.a.createElement(i.MDXTag,{name:"p",components:n},"Our current publishing system, Metalsmith, provides a way to group related content using what it calls ",l.a.createElement(i.MDXTag,{name:"em",components:n,parentName:"p"},"collections"),". Using collections requires the ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"metalsmith-collections")," plugin (",l.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/segmentio/metalsmith-collections"}},"documentation"),")."),l.a.createElement(i.MDXTag,{name:"p",components:n},"Content grouped within a collection is displayed in the sidebar navigation, and the next/previous links. Next and previous links are set based on the sorting order (",l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sortBy")," property of the collection; see below)"),l.a.createElement(i.MDXTag,{name:"p",components:n},"Viewing ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/site/components/navigation-sidebar.html")," and ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/site/components/navigation-next-previous.html")," ",l.a.createElement(i.MDXTag,{name:"em",components:n,parentName:"p"},"may")," clarify some of what's in this document."),l.a.createElement("h2",{id:"add-a-new-collection"},"Add a new collection"),l.a.createElement(i.MDXTag,{name:"p",components:n},l.a.createElement(i.MDXTag,{name:"em",components:n,parentName:"p"},l.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"em"},"NOTE"),": Content team, you may wish to file a request with the DevOps team for this task.")),l.a.createElement(i.MDXTag,{name:"p",components:n},"To create a new collection, add a new collection object to ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-website/script/build.js"),"."),l.a.createElement(i.MDXTag,{name:"pre",components:n},l.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"  smith.use(collections({\n    collectionName: {\n      pattern: 'path/to/the/files/*.md',\n      sortBy: 'order',\n      metadata: {\n        name: 'Title for collection 1'\n      }\n    },\n    secondCollectionName: {\n      pattern: 'path/to/the/files/*.md',\n      sortBy: 'order',\n      metadata: {\n        name: 'Title for collection two'\n      }\n    }\n  }));\n")),l.a.createElement("h3",{id:"what-each-field-means"},"What each field means:"),l.a.createElement(i.MDXTag,{name:"ul",components:n},l.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"collectionName"),": should be a camel-cased or snake cased string that summarizes the name of the related documents.")),l.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pattern"),": should be a directory a relative to the site root (without a leading slash), and end with ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*.md")," or ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*.html")," (",l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*")," is a ",l.a.createElement(i.MDXTag,{name:"em",components:n,parentName:"p"},"wildcard")," character that will match every file with an ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".md")," or ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*.html")," extension.)")),l.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sortBy"),": is any current YAML property used in the front matter metadata (front matter data is the stuff between the ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"---")," at the beginning of each content file). This should be:"),l.a.createElement(i.MDXTag,{name:"ul",components:n,parentName:"li"},l.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"order")),l.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"title")),l.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"display_title")))),l.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(i.MDXTag,{name:"p",components:n,parentName:"li"},l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"metadata"),": must be a JavaScript object that contains a ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"name")," property. This field is optional. You may add additional properties as here."))),l.a.createElement("h3",{id:"adding-files-to-a-collection-even-when-it-is-not-in-the-collection-path"},"Adding files to a collection even when it is not in the collection path"),l.a.createElement(i.MDXTag,{name:"p",components:n},"Collections can also be defined or augmented by adding a ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"collection")," property to front matter fields. For example:"),l.a.createElement(i.MDXTag,{name:"pre",components:n},l.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"---\nlayout: page-breadcrumbs.html\ntitle: Agent Orange\nplainlanguage: 10-21-16 certified in compliance with the Plain Writing Act\ntemplate: detail-page\ncollection: disabilityExposureHazMat\n---\n")),l.a.createElement(i.MDXTag,{name:"p",components:n},"In general you should:"),l.a.createElement(i.MDXTag,{name:"ul",components:n},l.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"li"},"Use a collection objects to configure collections.")," Items within a collection directory will be added to the collection automatically"),l.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},l.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"li"},"Add a collection property to include an index or other file")," in the collection. For example, ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"exposure-to-hazardous-materials/agent-orange.md")," is also an index page for several Agent Orange-related disability pages and should have a ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"disabilityExposureHazMat")," property.")),l.a.createElement(i.MDXTag,{name:"p",components:n},l.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},"NOTE:")," Adding a ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"collection")," property in YAML will not override a path-based collection value. You'll actually need to move the file."),l.a.createElement("h2",{id:"ordering-pages-within-a-collection"},"Ordering pages within a collection"),l.a.createElement(i.MDXTag,{name:"p",components:n},"When defining a collection, you may choose to sort pages by date, or by title. In many cases, however, the desired page order may not use either of those fields."),l.a.createElement(i.MDXTag,{name:"p",components:n},"To control the order of display within a collection, add an ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"order")," property to the front matter of each page."),l.a.createElement(i.MDXTag,{name:"p",components:n},"The value of ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"order")," should be a number. Pages will be ordered in ascending order."),l.a.createElement("h2",{id:"adding-a-child-collection"},"Adding a child collection"),l.a.createElement(i.MDXTag,{name:"p",components:n},"Collections do not have a hierarchy by default. Create one by adding a ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"children")," property to the parent page or index page of a child collection."),l.a.createElement(i.MDXTag,{name:"pre",components:n},l.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"---\nlayout: page-breadcrumbs.html\ntitle: Agent Orange\nplainlanguage: 10-21-16 certified in compliance with the Plain Writing Act\ntemplate: detail-page\ncollection: disabilityExposureHazMat\nchildren: disabilityAgentOrange\norder: 1\n---\n")),l.a.createElement(i.MDXTag,{name:"p",components:n},l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"children")," should be the identifier for the child collection."),l.a.createElement("h2",{id:"current-collections-and-hierarchy"},"Current collections and hierarchy"),l.a.createElement(i.MDXTag,{name:"p",components:n},l.a.createElement(i.MDXTag,{name:"em",components:n,parentName:"p"},"See vets-website/script/build.js"),"."),l.a.createElement(i.MDXTag,{name:"table",components:n},l.a.createElement(i.MDXTag,{name:"thead",components:n,parentName:"table"},l.a.createElement(i.MDXTag,{name:"tr",components:n,parentName:"thead"},l.a.createElement(i.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Label"),l.a.createElement(i.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Path"),l.a.createElement(i.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Child collection(s)"))),l.a.createElement(i.MDXTag,{name:"tbody",components:n,parentName:"table"},l.a.createElement(i.MDXTag,{name:"tr",components:n,parentName:"tbody"},l.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"disabilityExposureHazMat")),l.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"disability-benefits/conditions/exposure-to-hazardous-materials/*.md"),l.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"disabilityAgentOrange"))),l.a.createElement(i.MDXTag,{name:"tr",components:n,parentName:"tbody"},l.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"disabilityAgentOrange")),l.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"disability-benefits/conditions/exposure-to-hazardous-materials/agent-orange/*.md"),l.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"–")),l.a.createElement(i.MDXTag,{name:"tr",components:n,parentName:"tbody"},l.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"education")),l.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"education/*.md"),l.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"educationGIBill"))),l.a.createElement(i.MDXTag,{name:"tr",components:n,parentName:"tbody"},l.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},l.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"educationGIBill")),l.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"education/gi-bill/*.md"),l.a.createElement(i.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"–")))))},n}(l.a.Component),g={}},350:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},351:function(e,n,a){"use strict";var t=a(2),o=a.n(t),m=a(13),r=a.n(m),c=a(354),l=(a(133),a(134),a(135),a(17),a(350)),i=a(352);function s(){return o.a.createElement(i.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:l})}function p(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(i.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(s,null)):o.a.createElement(p,{item:e,key:e.name})})):null}var g=a(353),u=a.n(g);function h(e){var n=e.location,a=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:a.items}))):null}function E(e){var n=e.children,a=e.location;return o.a.createElement(c.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return E}),E.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-architecture-metalsmith-collections-mdx-1e5fbedf5620a63ac999.js.map