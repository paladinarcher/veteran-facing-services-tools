(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{362:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return p})),n.d(a,"_frontmatter",(function(){return c}));n(7),n(6),n(4),n(10),n(11);var t=n(1),m=n.n(t),o=n(2),r=n(336);var l={},p=function(e){var a,n;function t(a){var n;return(n=e.call(this,a)||this).layout=r.a,n}return n=e,(a=t).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n,t.prototype.render=function(){var e=this.props,a=e.components,n=function(e,a){if(null==e)return{};var n,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(m[n]=e[n]);return m}(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,n),components:a},m.a.createElement("h1",{id:"run-and-build-vagov"},"Run and build VA.gov"),m.a.createElement("h2",{id:"prerequisite"},"Prerequisite"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Complete the ",m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/getting-started"}},"first")," step in ",m.a.createElement(o.MDXTag,{name:"em",components:a,parentName:"li"},"Start up guide"),".")),m.a.createElement("h2",{id:"locally-run-vagov"},"Locally run VA.gov"),m.a.createElement(o.MDXTag,{name:"p",components:a},"Start the watch task:"),m.a.createElement(o.MDXTag,{name:"pre",components:a},m.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"yarn watch\n")),m.a.createElement("h3",{id:"build"},"Build"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"Metalsmith")," manages this build pipeline. At a high level, this process:",m.a.createElement(o.MDXTag,{name:"ol",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ol"},"retrieves and ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"builds")," all of the ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"static pages")," sourced from ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"vagov-content")," or Drupal"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ol"},"starts ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"Webpack"),"'s devevelopment server which",m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"builds")," the ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"JavaScript")," and ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"CSS")," bundles, and"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"serves")," the ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"JavaScript")," and ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"CSS")," bundles and the ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"static content")," built by Metalsmith at ",m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://localhost:3000"}},"http://localhost:3000"))))))),m.a.createElement("h3",{id:"output"},"Output"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"Metalsmith")," outputs ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"static pages")," to",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"build/localhost")),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"Webpack")," development server has ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"no output"),". ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"JavaScript")," and ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"CSS")," are kept in memory.")),m.a.createElement("h3",{id:"watch-and-rebuild"},"Watch and rebuild"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"Metalsmith")," will rebuild ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"static pages")," when changes are saved to ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"templates")," or content in ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"vagov-content")),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"Webpack")," development server will rebuild when changes are saved to ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"JavaScript")," or ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"SCSS")),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Both updates require a browser refresh to see changes."),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Changes to build process or configuration files are typically not picked up, and require a restart of the watch task to become active.")),m.a.createElement("h2",{id:"locally-build-and-run-for-specific-environment"},"Locally build and run for specific environment"),m.a.createElement(o.MDXTag,{name:"p",components:a},m.a.createElement(o.MDXTag,{name:"em",components:a,parentName:"p"},"Note: most of the time, it's better to use the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"watch")," task to build the site locally since it is the most developer-friendly experience.")),m.a.createElement(o.MDXTag,{name:"table",components:a},m.a.createElement(o.MDXTag,{name:"thead",components:a,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Environment"),m.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Build Command"),m.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Output directory"),m.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Run Command"))),m.a.createElement(o.MDXTag,{name:"tbody",components:a,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"localhost"),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"yarn build")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"build/localhost")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"npx http-server -p 3001 build/localhost"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"dev.va.gov"),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"yarn build --buildtype=vagovdev")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"build/vagovdev")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"npx http-server -p 3001 build/vagovdev"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"staging.va.gov"),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"NODE_ENV=production yarn build --buildtype=vagovstaging")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"build/vagovstaging")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"npx http-server -p 3001 build/vagovstaging"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"www.va.gov"),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"NODE_ENV=production yarn build --buildtype=vagovprod")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"build/vagovprod")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"npx http-server -p 3001 build/vagovprod"))))),m.a.createElement("h3",{id:"build-commands"},"Build commands"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"create")," the ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"static pages")," from the markdown content in the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"vagov-content")," repository and data queried from the Drupal API into their ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"output directory")),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"create")," the ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"JavaScript")," and ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"CSS")," files with Webpack into ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"/generated")," folder in their ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"output directory")," with Webpack")),m.a.createElement(o.MDXTag,{name:"p",components:a},m.a.createElement(o.MDXTag,{name:"em",components:a,parentName:"p"},"Production like builds are required for staging and production environments. ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"em"},"NODE_ENV=production")," environment variable is required to be set when running these build commands")),m.a.createElement("h3",{id:"run-commands"},"Run commands"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"start")," an ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"http-server")," that ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"serves")," the ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"static pages")," from the ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"li"},"output directory")," at ",m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://localhost:3001"}},"http://localhost:3001"))),m.a.createElement(o.MDXTag,{name:"p",components:a},m.a.createElement(o.MDXTag,{name:"em",components:a,parentName:"p"},"Typically, the reason for building the site locally like this is to build it in production mode and check that it is behaving as you'd expect.")),m.a.createElement(o.MDXTag,{name:"p",components:a},m.a.createElement(o.MDXTag,{name:"em",components:a,parentName:"p"},m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"em"},"Deep-linking")," to urls that are rendered by ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"em"},"React")," apps on VA.gov ",m.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"em"},"will not work")," when you run the site this way, as that relies on some server-side routing that is handled in nginx (or the Webpack dev server when running the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"watch")," task)")),m.a.createElement("h2",{id:"related-source"},"Related source"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops"}},"Metalsmith build script")),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/config/webpack.dev.config.js"}},"Webpack development server config"))))},t}(m.a.Component),c={}}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-run-build-mdx-a1aa96a37b509d01cc76.js.map