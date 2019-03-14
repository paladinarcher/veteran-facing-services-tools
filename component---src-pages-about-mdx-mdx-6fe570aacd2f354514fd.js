(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{278:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"_frontmatter",function(){return d});t(41);var a=t(42),o=t.n(a),r=t(3),m=t.n(r),s=t(2),c=t.n(s),i=t(4),l=t(307),p={},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return m()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:n},c.a.createElement(i.MDXTag,{name:"h2",components:n},"About MDX"),c.a.createElement(i.MDXTag,{name:"h3",components:n},"What is MDX?"),c.a.createElement(i.MDXTag,{name:"p",components:n},"We will be using the .mdx format to create our documents.\nMDX is a format that lets you seamlessly use JSX in your Markdown documents.\nYou can import components, like interactive charts or notifs, and export metadata.\nThis makes writing long-form content with components a blast 🚀"),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://mdxjs.com/"}},"https://mdxjs.com/")),c.a.createElement(i.MDXTag,{name:"h3",components:n},"Examples"),c.a.createElement(i.MDXTag,{name:"p",components:n},"Here is a great page of examples of using MDX"),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://dump.jamesknelson.com/mdxc-playground.html"}},"http://dump.jamesknelson.com/mdxc-playground.html"))),c.a.createElement(i.MDXTag,{name:"h3",components:n},"Things you can do with MDX and gotchas"),c.a.createElement(i.MDXTag,{name:"p",components:n},"This is documentation of findings for using MDX in our projects. Please feel\nfree to add to this document if you find anything else."),c.a.createElement(i.MDXTag,{name:"h4",components:n},"Inline components"),c.a.createElement(i.MDXTag,{name:"p",components:n},"You can use components inline inside your MDX files. Below is an example\nof how to do it."),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"You will need to export it for it to work."),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"You can write both Function components and Class components."),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"The reason why you need to use this is when you need the parent state to change.")),c.a.createElement(i.MDXTag,{name:"p",components:n},"This example uses state to toggle the drop down."),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"// Class Component\nexport class InlineClassComponent extends React.Component {\n  constructor() {\n    super()\n    this.state = {\n      open: false\n    }\n  }\n  render() {\n    return (\n      <div className=\"rendered-component\">\n        <div style={{ backgroundColor: '#112e51' }}>\n          <DropDownPanel\n            buttonText='Helpdesk'\n            cssClass='va-dropdown'\n            isOpen={this.state.open}\n            contents='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper at eros eu suscipit. Ut imperdiet libero et luctus pretium.'\n            clickHandler={() => this.setState({ open: !this.state.open }) }>\n            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper at eros eu suscipit. Ut imperdiet libero et luctus pretium.'\n          </DropDownPanel>\n        </div>\n      </div>\n    )\n  }\n}\n\n<InlineClassComponent />\n\n// Function Component\nexport const InlinePresentationalComponent = () => (\n  <h1>Hello World</h1>\n)\n\n<InlinePresentationalComponent />\n")),c.a.createElement(i.MDXTag,{name:"p",components:n},c.a.createElement(i.MDXTag,{name:"strong",components:n,parentName:"p"},c.a.createElement(i.MDXTag,{name:"em",components:n,parentName:"strong"},"Gotchas"))),c.a.createElement(i.MDXTag,{name:"ul",components:n},c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"MDX doesn't like newlines in between methods in a class based component."),c.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Inline components need to begin with an uppercase letter. If it starts with a\nlowercase it will not render.")),c.a.createElement(i.MDXTag,{name:"p",components:n},"Bad:"),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'export class inlineClassComponent extends React.Component {\n  constructor() {\n    super()\n  }\n\n  render() {\n    return (\n      <div className="rendered-component">\n        Hello World\n      </div>\n    )\n  }\n}\n')),c.a.createElement(i.MDXTag,{name:"p",components:n},"Good:"),c.a.createElement(i.MDXTag,{name:"pre",components:n},c.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'export class InlineClassComponent extends React.Component {\n  constructor() {\n    super()\n  }\n  render() {\n    return (\n      <div className="rendered-component">\n        Hello World\n      </div>\n    )\n  }\n}\n')))},n}(c.a.Component),d={}},301:function(e,n,t){"use strict";t.d(n,"b",function(){return l});var a=t(2),o=t.n(a),r=t(13),m=t.n(r),s=t(66),c=t.n(s);t.d(n,"a",function(){return c.a});t(302);var i=o.a.createContext({}),l=function(e){return o.a.createElement(i.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:m.a.object,query:m.a.string.isRequired,render:m.a.func,children:m.a.func}},302:function(e,n,t){var a;e.exports=(a=t(304))&&a.default||a},303:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},304:function(e,n,t){"use strict";t.r(n);var a=t(18),o=t.n(a),r=t(2),m=t.n(r),s=t(13),c=t.n(s),i=t(93),l=t(9),p=function(e){var n=e.location,t=l.default.getResourcesForPathnameSync(n.pathname);return m.a.createElement(i.a,o()({location:n,pageResources:t},t.json))};p.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},n.default=p},305:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},306:function(e,n){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"getting-started",items:[{name:"Environment setup",items:[{name:"Internal Tools",href:"getting-started/internal-tools"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test",href:"getting-started/common-tasks/write-unit-test"},{name:"Writing an end-to-end test",href:"getting-started/common-tasks/write-e2e-test"},{name:"Updating Formation",href:"getting-started/common-tasks/update-formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"}]},{name:"Code organization",items:[]},{name:"Standards and conventions",items:[]},{name:"Development workflow",items:[]}]},{id:"architecture",name:"Architecture",href:"architecture",items:[{name:"Site structure",items:[]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing"},{name:"Teamsite"}]},{id:"forms",name:"Forms",href:"forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},307:function(e,n,t){"use strict";var a=t(3),o=t.n(a),r=t(303),m=t(2),s=t.n(m),c=t(13),i=t.n(c),l=t(308),p=t.n(l),u=t(301),d=(t(17),t(132),t(133),t(134),t(305));function h(){return s.a.createElement(u.b,{query:"2758471434",render:function(e){return s.a.createElement(f,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:d})}function f(e){var n=e.items;return n.length?s.a.createElement("ul",{className:"menu-list"},n.map(function(e){return s.a.createElement("li",{key:e.name},!!e.items&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(f,{items:e.items})),"componentList"===e.query&&s.a.createElement("li",{key:e.name},s.a.createElement("h4",null,e.name),s.a.createElement(h,null)),!!e.href&&s.a.createElement("li",{key:e.name},s.a.createElement(u.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&s.a.createElement("li",{key:e.href},s.a.createElement(u.a,{to:e.href},e.name)))})):null}var g=t(306),E=t.n(g);function x(e){var n=e.location,t=E.a.sections.find(function(e){return n.pathname.includes("/"+e.href)});return s.a.createElement("aside",{className:"sidebar"},s.a.createElement("div",{className:"search"},s.a.createElement("div",{className:"input-wrap"},s.a.createElement("input",{type:"search",value:"",onChange:function(){},placeholder:"Type to search"}))),!!t&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,t.name),s.a.createElement(u.a,{className:"home-link",to:""},"Home"),s.a.createElement(f,{items:t.items})),!t&&s.a.createElement("ul",{className:"menu-list"},E.a.sections.map(function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(u.a,{to:e.href},e.name))})))}t(309);var b=function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},t.render=function(){var e=this.props,n=e.children,t=e.location;return s.a.createElement(u.b,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(x,{location:t}),s.a.createElement("div",{className:"ContentArea docSearch-content"},n))},data:r})},n}(s.a.Component);b.propTypes={children:i.a.node.isRequired};n.a=b}}]);
//# sourceMappingURL=component---src-pages-about-mdx-mdx-6fe570aacd2f354514fd.js.map