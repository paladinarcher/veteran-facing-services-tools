(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{389:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p})),t.d(a,"_frontmatter",(function(){return c}));t(7),t(6),t(4),t(9),t(10);var n=t(1),o=t.n(n),r=t(2),s=t(333);var i={},p=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).layout=s.a,t}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){var e=this.props,a=e.components,t=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,t),components:a},o.a.createElement("h1",{id:"page-and-application-javascript-structure"},"Page and application Javascript structure"),o.a.createElement(r.MDXTag,{name:"p",components:a},"In this doc we'll go over how a page on VA.gov is related to the application code located in vets-website."),o.a.createElement("h2",{id:"javascript-bundles-and-static-pages"},"Javascript bundles and static pages"),o.a.createElement(r.MDXTag,{name:"p",components:a},"If you look at the source for the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"/my-va")," page when running locally you'll see a group of three script tags:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-html"}},'<script defer nomodule="" src="/generated/polyfills.entry.js"><\/script>\n<script defer src="/generated/vendor.entry.js"><\/script>\n<script defer src="/generated/dashboard.entry.js"><\/script>\n')),o.a.createElement(r.MDXTag,{name:"p",components:a},"The vendor and polyfills bundles are on every page, but the dashboard bundle is specific to this particular React app. In the source for the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"/my-va")," page, you'll see this frontmatter:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-md"}},"---\ntitle: My VA\nlayout: page-react.html\nentryname: dashboard\n---\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"When this page is built, the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"entryname")," property tells our build process how to construct the path for the third script tag in the above group. For pages that don't have an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"entryname"),", the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"static-pages")," bundle will be used."),o.a.createElement(r.MDXTag,{name:"p",components:a},"In ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"vets-website"),", there will be a manifest.json (or manifest.js) file with a matching entry name. In this case we can search for ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"entryName: 'dashboard'")," and find ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/dashboard/manifest.js"}},"src/applications/personalization/dashboard/manifest.js"),". The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"entryFile")," property in the manifest will tell you the entry point for this application, the file that Webpack uses as its entry for creating the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"dashboard")," bundle."),o.a.createElement("h2",{id:"structure-of-a-page"},"Structure of a page"),o.a.createElement(r.MDXTag,{name:"p",components:a},"A typical application page has several independent React components. Here's an abbreviated screenshot of the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"/my-va")," page:"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"878px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/401d3d456ce331b6fe486073d6ddbfac/8ee24/react-mount-points.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"89.17995444191345%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"Abbreviated dashboard with red boxes drawn around React mount points",title:"Abbreviated dashboard with red boxes drawn around React mount points",src:"/veteran-facing-services-tools/static/401d3d456ce331b6fe486073d6ddbfac/8ee24/react-mount-points.png",srcSet:"/veteran-facing-services-tools/static/401d3d456ce331b6fe486073d6ddbfac/f4a45/react-mount-points.png 259w,\n/veteran-facing-services-tools/static/401d3d456ce331b6fe486073d6ddbfac/ef0f6/react-mount-points.png 518w,\n/veteran-facing-services-tools/static/401d3d456ce331b6fe486073d6ddbfac/8ee24/react-mount-points.png 878w",sizes:"(max-width: 878px) 100vw, 878px",loading:"lazy"})))),o.a.createElement(r.MDXTag,{name:"p",components:a},"Each of the areas marked with a red box is a separately mounted React component. These React components shared a common Redux store:"),o.a.createElement("div",{className:"mermaid"},"graph TD\nA[Redux store]\nB[User navigation]--\x3eA\nC[Site navigation]--\x3eA\nD[Main application]--\x3eA\nE[Footer]\nF[Announcements]--\x3eA"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Static content pages work similarly, except the main content area is not a React component (though it may have one or more React widgets mounted within it)."),o.a.createElement(r.MDXTag,{name:"p",components:a},"As we covered in the last section, ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"/my-va")," uses the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"dashboard")," bundle, the entry file for which is located ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/dashboard/dashboard-entry.jsx"}},"here"),". There's not a lot of code in that file; most of the functionality is abstracted in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"startApp"),". The dashboard passes in a reducer and routes, which is the primary application. In the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js#L31"}},"startApp")," function, we create the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js#L44"}},"common Redux store"),", ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js#L64"}},"start the site-wide components"),", and ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js#L73"}},"mount the primary React application"),":"),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"884px"}},o.a.createElement("a",{className:"gatsby-resp-image-link",href:"/veteran-facing-services-tools/static/650acff1bcb085711b375017f15a5326/e326c/sitewide_primary.png",style:{display:"block"},target:"_blank",rel:"noopener"},o.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"89.70588235294117%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),o.a.createElement("img",{className:"gatsby-resp-image-image",alt:"Abbreviated dashboard with yellow boxes drawn around site wide components",title:"Abbreviated dashboard with yellow boxes drawn around site wide components",src:"/veteran-facing-services-tools/static/650acff1bcb085711b375017f15a5326/e326c/sitewide_primary.png",srcSet:"/veteran-facing-services-tools/static/650acff1bcb085711b375017f15a5326/f4a45/sitewide_primary.png 259w,\n/veteran-facing-services-tools/static/650acff1bcb085711b375017f15a5326/ef0f6/sitewide_primary.png 518w,\n/veteran-facing-services-tools/static/650acff1bcb085711b375017f15a5326/e326c/sitewide_primary.png 884w",sizes:"(max-width: 884px) 100vw, 884px",loading:"lazy"})))),o.a.createElement(r.MDXTag,{name:"p",components:a},"The components in the yellow boxes are the common site-wide components started by ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/site-wide/index.js#L26"}},"startSitewideComponents")," and the blue box is the primary React application."),o.a.createElement("h2",{id:"structure-of-a-react-application"},"Structure of a React application"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Our React applications can vary in structure depending on what their purpose is, but typically they have a reducer and actions for Redux related logic and routes and components for the rest of the application. Routes are typically the best place to start looking at an application. Again using ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"/my-va")," as an example, you can see the React components to start looking at in the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/dashboard/routes.jsx"}},"routes.jsx")," file:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx"}},"import DashboardApp from './containers/DashboardApp';\nimport DashboardAppNew from './containers/DashboardAppNew';\nimport DashboardAppWrapper from './containers/DashboardAppWrapper';\nimport SetPreferences from '../preferences/containers/SetPreferences';\n\nimport environment from 'platform/utilities/environment';\n\nconst component = environment.isProduction() ? DashboardApp : DashboardAppNew;\n\nexport const findBenefitsRoute = {\n  path: 'find-benefits',\n  component: SetPreferences,\n  key: 'find-benefits',\n  name: 'Find VA benefits',\n};\n\nconst routes = {\n  path: '/',\n  component: DashboardAppWrapper,\n  indexRoute: { component },\n  childRoutes: [findBenefitsRoute],\n};\n\nexport default routes;\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"There are only two routes in here, but you can see that there's a main ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"DashboardAppWrapper")," component and then a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"DashboardApp")," component for the main index route."),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/dashboard/containers/DashboardAppWrapper.jsx"}},"DashboardAppWrapper")," has some important functionality that's common to a lot of our applications. Here's the render method from that component:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx"}},'render() {\n  return (\n    <RequiredLoginView\n      serviceRequired={[backendServices.USER_PROFILE]}\n      user={this.props.user}\n    >\n      <DowntimeNotification\n        appTitle="user dashboard"\n        dependencies={[\n          externalServices.mvi,\n          externalServices.mhv,\n          externalServices.appeals,\n        ]}\n        render={this.renderDowntimeNotification}\n      >\n        <Breadcrumbs>\n          {this.renderBreadcrumbs(this.props.location)}\n        </Breadcrumbs>\n\n        {this.props.children}\n      </DowntimeNotification>\n    </RequiredLoginView>\n  );\n}\n')),o.a.createElement(r.MDXTag,{name:"p",components:a},"Because ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"/my-va")," requires a user to be signed in, we wrap all the child content with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"RequiredLoginView"),", which makes sure there's a signed in user and directs the user to sign in if not. Also, since the dashboard uses some internal VA services that may be down at times, it also wraps content in a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"DowntimeNotifications")," component, which will display a message to a user if one of the specified services is down. See the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/veteran-facing-services-tools/platform/tools/downtime-notifications"}},"downtime notifications documentation")," for more information."))},n}(o.a.Component),c={}}}]);
//# sourceMappingURL=component---src-pages-platform-site-structure-application-structure-mdx-e7c8711cc7bbc526c15d.js.map