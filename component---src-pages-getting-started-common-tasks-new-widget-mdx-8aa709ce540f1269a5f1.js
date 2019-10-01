(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{359:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m})),a.d(t,"_frontmatter",(function(){return c}));a(7),a(6),a(4),a(10),a(11);var n=a(1),o=a.n(n),s=a(2),r=a(336);var i={},m=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).layout=r.a,a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,a),components:t},o.a.createElement("h1",{id:"creating-a-new-react-widget"},"Creating a new React widget"),o.a.createElement(s.MDXTag,{name:"p",components:t},"Note: Check out the ",o.a.createElement(s.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/veteran-facing-services-tools/getting-started/common-tasks/new-feature"}},"Adding a new feature")," doc to make sure you're trying to add the right type of feature to VA.gov."),o.a.createElement("h2",{id:"adding-a-new-widget"},"Adding a new widget"),o.a.createElement(s.MDXTag,{name:"p",components:t},"All the static pages use the ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"static-pages")," entry bundle, so any JS code included from that file will be on all static pages. In order to add a widget, you'll want to create a function that loads your desired React components (or plain JS) asynchronously, and mounts to an element on the page with your widget id."),o.a.createElement(s.MDXTag,{name:"ol",components:t},o.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ol"},"Add a mount point element in the static content page your widget will live on:")),o.a.createElement(s.MDXTag,{name:"pre",components:t},o.a.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-html"}},'<div data-widget-type="my-new-widget" id="someId"></div>\n')),o.a.createElement(s.MDXTag,{name:"ol",components:t,props:{start:2}},o.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ol"},"Add a start up function to: ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"src/applications/static-pages/static-pages-entry.js"),":")),o.a.createElement(s.MDXTag,{name:"pre",components:t},o.a.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"...\ncreateMyWidget(store, widgetTypes.MY_NEW_WIDGET);\n...\n")),o.a.createElement(s.MDXTag,{name:"p",components:t},"You should also add a constant for your widget type in ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"src/applications/static-pages/widgetTypes.js"),":"),o.a.createElement(s.MDXTag,{name:"pre",components:t},o.a.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"export default {\n  ...\n  MY_NEW_WIDGET: 'my-new-widget',\n  ...\n}\n")),o.a.createElement(s.MDXTag,{name:"ol",components:t,props:{start:3}},o.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ol"},"Write your create widget function:")),o.a.createElement(s.MDXTag,{name:"pre",components:t},o.a.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},'export default async function createMyWidget(store, widgetType) {\n  const widget = document.querySelector(`[data-widget-type="${widgetType}"]`);\n\n  if (widget) {\n    // Load widget if there\'s a mount point for it\n    const {\n      default: MyNewWidget,\n    } = await import(/* webpackChunkName: "my-new-widget" */ \'../../platform/site-wide/my-new-widget\');\n\n    // Do whatever you need to do to start up your widget\n    ReactDOM.render(<MyNewWidget>, widget);\n  }\n}\n')),o.a.createElement(s.MDXTag,{name:"p",components:t},"Note that we don't import the widget code unless there's a mount point in the DOM. This function will run on every page, so we want to make sure we only download the bulk of the widget code when we're actually going to use it."),o.a.createElement("h2",{id:"guidelines-for-using-react-on-a-static-page"},"Guidelines for using React on a static page"),o.a.createElement(s.MDXTag,{name:"p",components:t},"We should be careful to not create a bad user experience when using React on static pages. Here are some guidelines you should follow:"),o.a.createElement(s.MDXTag,{name:"ol",components:t},o.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ol"},"JS and React take time to download, parse, and render. Make sure you are providing the appropriate feedback to users while that is happening, with a spinner or another method from the UX team."),o.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ol"},"Make sure the page is still usable if your React code fails to work. This can mean it fails to download, an error occurs, or just handling the different login states a user can be in."),o.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ol"},"Be aware of how much weight you're adding to the static-pages bundle and code-split/lazy load when it makes sense.")),o.a.createElement("h2",{id:"common-widget-code"},"Common widget code"),o.a.createElement(s.MDXTag,{name:"p",components:t},"There's a simple static page widget feature that you can use to help with the first two points above. The code is in ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"src/applications/static-pages/static-page-widgets.js"),". Using this will inline some JS that can handle displaying a loading spinner and showing an error message if something goes wrong before the React code can take over rendering. Several pension pages use this functionality (",o.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"pages/pension/index.md"),", ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"pages/pension/apply.md")," in ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"vagov-content"),"). It's controlled by defining a widgets list in the front matter for the static content page you're on. The options are:"),o.a.createElement(s.MDXTag,{name:"pre",components:t},o.a.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"- widgets\n  - root: someId \n    timeout: 20\n    showSpinnerUnauthed: false\n    slowLoadingThreshold: 6\n    loadingMessage: Loading\n    slowMessage: Sorry, this is taking longer than expected.\n    errorMessage: Sorry, something went wrong.\n")),o.a.createElement(s.MDXTag,{name:"ul",components:t},o.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},"root: The id of the div where the React component will mount."),o.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},"timeout: The amount of time in seconds before the error message is shown."),o.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},"showSpinnerUnauthed: By default, a spinner is shown only if a user has a session token. This will override that and show it always."),o.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},"slowLoadingThreshold: The amount of time in seconds before the slow loading message is shown. This is skipped if the threshold is greater than the overall timeout. Defaulted to 6 seconds."),o.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},"slowMessage: Message shown when the slowThreshold is passed. Defaulted to message above."),o.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},"loadingMessage: Message shown while the JS code is loading. This should probably match any loading message in your React code."),o.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},"errorMessage: Message shown when the JS code fails or times out.")))},n}(o.a.Component),c={}}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-new-widget-mdx-8aa709ce540f1269a5f1.js.map