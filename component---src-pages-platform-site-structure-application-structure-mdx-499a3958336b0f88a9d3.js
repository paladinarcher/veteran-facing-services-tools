(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{330:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d}),t.d(n,"_frontmatter",function(){return u});t(42);var a=t(43),o=t.n(a),r=t(3),s=t.n(r),i=t(2),c=t.n(i),p=t(4),m=t(355),l={},d=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=m.a,t}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return c.a.createElement(p.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,t),components:n},c.a.createElement("h1",{id:"page-and-application-javascript-structure"},"Page and application Javascript structure"),c.a.createElement(p.MDXTag,{name:"p",components:n},"In this doc we'll go over how a page on VA.gov is related to the application code located in vets-website."),c.a.createElement("h2",{id:"javascript-bundles-and-static-pages"},"Javascript bundles and static pages"),c.a.createElement(p.MDXTag,{name:"p",components:n},"If you look at the source for the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"/my-va")," page when running locally you'll see a group of three script tags:"),c.a.createElement(p.MDXTag,{name:"pre",components:n},c.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-html"}},'<script defer nomodule="" src="/generated/polyfills.entry.js"><\/script>\n<script defer src="/generated/vendor.entry.js"><\/script>\n<script defer src="/generated/dashboard.entry.js"><\/script>\n')),c.a.createElement(p.MDXTag,{name:"p",components:n},"The vendor and polyfills bundles are on every page, but the dashboard bundle is specific to this particular React app. In the source for the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"/my-va")," page, you'll see this frontmatter:"),c.a.createElement(p.MDXTag,{name:"pre",components:n},c.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-md"}},"---\ntitle: My VA\nlayout: page-react.html\nentryname: dashboard\n---\n")),c.a.createElement(p.MDXTag,{name:"p",components:n},"When this page is built, the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"entryname")," property tells our build process how to construct the path for the third script tag in the above group. For pages that don't have an ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"entryname"),", the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"static-pages")," bundle will be used."),c.a.createElement(p.MDXTag,{name:"p",components:n},"In ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-website"),", there will be a manifest.json (or manifest.js) file with a matching entry name. In this case we can search for ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"entryName: 'dashboard'")," and find ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/dashboard/manifest.js"}},"src/applications/personalization/dashboard/manifest.js"),". The ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"entryFile")," property in the manifest will tell you the entry point for this application, the file that Webpack uses as its entry for creating the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"dashboard")," bundle."),c.a.createElement("h2",{id:"structure-of-a-page"},"Structure of a page"),c.a.createElement(p.MDXTag,{name:"p",components:n},"A typical application page has several independent React components. Here's an abbreviated screenshot of the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"/my-va")," page:"),c.a.createElement(p.MDXTag,{name:"p",components:n},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/401d3d456ce331b6fe486073d6ddbfac/8ee24/react-mount-points.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"878px"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"89.17995444191345%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Abbreviated dashboard with red boxes drawn around React mount points",title:"",src:"/static/401d3d456ce331b6fe486073d6ddbfac/8ee24/react-mount-points.png",srcSet:"/static/401d3d456ce331b6fe486073d6ddbfac/f4a45/react-mount-points.png 259w,\n/static/401d3d456ce331b6fe486073d6ddbfac/ef0f6/react-mount-points.png 518w,\n/static/401d3d456ce331b6fe486073d6ddbfac/8ee24/react-mount-points.png 878w",sizes:"(max-width: 878px) 100vw, 878px"})))),c.a.createElement(p.MDXTag,{name:"p",components:n},"Each of the areas marked with a red box is a separately mounted React component. These React components shared a common Redux store:"),c.a.createElement("div",{className:"mermaid"},"graph TD\nA[Redux store]\nB[User navigation]--\x3eA\nC[Site navigation]--\x3eA\nD[Main application]--\x3eA\nE[Footer]\nF[Announcements]--\x3eA"),c.a.createElement(p.MDXTag,{name:"p",components:n},"Static content pages work similarly, except the main content area is not a React component (though it may have one or more React widgets mounted within it)."),c.a.createElement(p.MDXTag,{name:"p",components:n},"As we covered in the last section, ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"/my-va")," uses the ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"dashboard")," bundle, the entry file for which is located ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/dashboard/dashboard-entry.jsx"}},"here"),". There's not a lot of code in that file; most of the functionality is abstracted in ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"startApp"),". The dashboard passes in a reducer and routes, which is the primary application. In the ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js#L31"}},"startApp")," function, we create the ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js#L44"}},"common Redux store"),", ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js#L64"}},"start the site-wide components"),", and ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js#L73"}},"mount the primary React application"),":"),c.a.createElement(p.MDXTag,{name:"p",components:n},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/650acff1bcb085711b375017f15a5326/e326c/sitewide_primary.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"884px"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"89.70588235294117%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"Abbreviated dashboard with yellow boxes drawn around site wide components",title:"",src:"/static/650acff1bcb085711b375017f15a5326/e326c/sitewide_primary.png",srcSet:"/static/650acff1bcb085711b375017f15a5326/f4a45/sitewide_primary.png 259w,\n/static/650acff1bcb085711b375017f15a5326/ef0f6/sitewide_primary.png 518w,\n/static/650acff1bcb085711b375017f15a5326/e326c/sitewide_primary.png 884w",sizes:"(max-width: 884px) 100vw, 884px"})))),c.a.createElement(p.MDXTag,{name:"p",components:n},"The components in the yellow boxes are the common site-wide components started by ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/site-wide/index.js#L26"}},"startSitewideComponents")," and the blue box is the primary React application."),c.a.createElement("h2",{id:"structure-of-a-react-application"},"Structure of a React application"),c.a.createElement(p.MDXTag,{name:"p",components:n},"Our React applications can vary in structure depending on what their purpose is, but typically they have a reducer and actions for Redux related logic and routes and components for the rest of the application. Routes are typically the best place to start looking at an application. Again using ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"/my-va")," as an example, you can see the React components to start looking at in the ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/dashboard/routes.jsx"}},"routes.jsx")," file:"),c.a.createElement(p.MDXTag,{name:"pre",components:n},c.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import DashboardApp from './containers/DashboardApp';\nimport DashboardAppNew from './containers/DashboardAppNew';\nimport DashboardAppWrapper from './containers/DashboardAppWrapper';\nimport SetPreferences from '../preferences/containers/SetPreferences';\n\nimport environment from 'platform/utilities/environment';\n\nconst component = environment.isProduction() ? DashboardApp : DashboardAppNew;\n\nexport const findBenefitsRoute = {\n  path: 'find-benefits',\n  component: SetPreferences,\n  key: 'find-benefits',\n  name: 'Find VA benefits',\n};\n\nconst routes = {\n  path: '/',\n  component: DashboardAppWrapper,\n  indexRoute: { component },\n  childRoutes: [findBenefitsRoute],\n};\n\nexport default routes;\n")),c.a.createElement(p.MDXTag,{name:"p",components:n},"There are only two routes in here, but you can see that there's a main ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"DashboardAppWrapper")," component and then a ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"DashboardApp")," component for the main index route."),c.a.createElement(p.MDXTag,{name:"p",components:n},c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/dashboard/containers/DashboardAppWrapper.jsx"}},"DashboardAppWrapper")," has some important functionality that's common to a lot of our applications. Here's the render method from that component:"),c.a.createElement(p.MDXTag,{name:"pre",components:n},c.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},'render() {\n  return (\n    <RequiredLoginView\n      serviceRequired={[backendServices.USER_PROFILE]}\n      user={this.props.user}\n    >\n      <DowntimeNotification\n        appTitle="user dashboard"\n        dependencies={[\n          externalServices.mvi,\n          externalServices.mhv,\n          externalServices.appeals,\n        ]}\n        render={this.renderDowntimeNotification}\n      >\n        <Breadcrumbs>\n          {this.renderBreadcrumbs(this.props.location)}\n        </Breadcrumbs>\n\n        {this.props.children}\n      </DowntimeNotification>\n    </RequiredLoginView>\n  );\n}\n')),c.a.createElement(p.MDXTag,{name:"p",components:n},"Because ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"/my-va")," requires a user to be signed in, we wrap all the child content with ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"RequiredLoginView"),", which makes sure there's a signed in user and directs the user to sign in if not. Also, since the dashboard uses some internal VA services that may be down at times, it also wraps content in a ",c.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"DowntimeNotifications")," component, which will display a message to a user if one of the specified services is down. See the ",c.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/platform/tools/downtime-notifications"}},"downtime notifications documentation")," for more information."))},n}(c.a.Component),u={}},354:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},355:function(e,n,t){"use strict";var a=t(2),o=t.n(a),r=t(13),s=t.n(r),i=t(358),c=(t(133),t(134),t(135),t(17),t(354)),p=t(356);function m(){return o.a.createElement(p.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function l(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(p.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(m,null)):o.a.createElement(l,{item:e,key:e.name})})):null}var u=t(357),h=t.n(u);function g(e){var n=e.location,t=h.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:t.items}))):null}function b(e){var n=e.children,t=e.location;return o.a.createElement(i.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return b}),b.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-site-structure-application-structure-mdx-499a3958336b0f88a9d3.js.map