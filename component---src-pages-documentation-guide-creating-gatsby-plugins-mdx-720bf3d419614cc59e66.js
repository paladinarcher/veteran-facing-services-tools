(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{340:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return s}),n.d(a,"_frontmatter",function(){return l});n(8),n(7),n(4),n(9),n(10);var t=n(1),o=n.n(t),r=n(2),p=n(334);var m={},s=function(e){var a,n;function t(a){var n;return(n=e.call(this,a)||this).layout=p.a,n}return n=e,(a=t).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n,t.prototype.render=function(){var e=this.props,a=e.components,n=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,n),components:a},o.a.createElement("h2",{id:"how-to-create-a-gatsby-plugin"},"How to Create a Gatsby Plugin"),o.a.createElement("h3",{id:"creating-a-local-gatsby-plugin"},"Creating a Local Gatsby Plugin"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Here we are going to show you how to create a local plugin for Gatsby."),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Create a plugin folder in ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"/plugins")),o.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-shell"}},"$ mkdir gatsby-example-plugin\n"))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"CD into the folder"),o.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-shell"}},"$ cd gatsby-example-plugin\n"))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Initialize Node.js using npm. Plugins need to be a Node project."),o.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-shell"}},"$ npm init --yes\n"))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Now you can add the Gatsby specific files like gatsby-node.js, gatsby-browser, etc. in your plugin folder."),o.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"gatsby-example-plugin\n  - gatsby-node.js\n  - gatsby-browser.js\n"))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"To use the plugin you need to add it to the ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"gatsby-config.js")," file."),o.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-javascript"}},"// gatsby-config.js\n\nmodule.exports = {\n  siteMetadata: {\n    description: `Resources and documention for the Development within the VA.gov project`,\n    siteUrl: `https://department-of-veterans-affairs.github.io/veteran-facing-services-tools`,\n    title: `VA.gov Developer's Documentations`,\n    sidebar: require('./src/sidebar.js')\n  },\n  pathPrefix: '/veteran-facing-services-tools',\n  plugins: [\n    `gatsby-plugin-react-helmet`,\n    {\n      resolve: `gatsby-source-filesystem`,\n      options: {\n        name: `images`,\n        path: `${__dirname}/src/images`,\n      },\n    },\n    `gatsby-transformer-sharp`,\n    `gatsby-plugin-sharp`,\n    {\n      resolve: `gatsby-plugin-manifest`,\n      options: {\n        name: `vagov-documentation`,\n        short_name: `vagov-documentation`,\n        start_url: `/`,\n      },\n    },\n    `gatsby-example-plugin`,\n  ],\n}\n"))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"If you would like to debug your build process code, you can run"),o.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-shell"}},"$ yarn develop:inspect\n")))))},t}(o.a.Component),l={}}}]);
//# sourceMappingURL=component---src-pages-documentation-guide-creating-gatsby-plugins-mdx-720bf3d419614cc59e66.js.map