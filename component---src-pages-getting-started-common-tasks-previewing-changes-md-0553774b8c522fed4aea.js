(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{361:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return p})),a.d(n,"_frontmatter",(function(){return l}));a(7),a(6),a(4),a(10),a(11);var t=a(1),o=a.n(t),m=a(2),r=a(336);var i={},p=function(e){var n,a;function t(n){var a;return(a=e.call(this,n)||this).layout=r.a,a}return a=e,(n=t).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a,t.prototype.render=function(){var e=this.props,n=e.components,a=function(e,n){if(null==e)return{};var a,t,o={},m=Object.keys(e);for(t=0;t<m.length;t++)a=m[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,a),components:n},o.a.createElement("h1",{id:"making-changes-to-design-systemformation-and-previewing-them"},"Making changes to design-system/formation and previewing them"),o.a.createElement(m.MDXTag,{name:"p",components:n},"As you work in the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"design-system")," repo, you'll want to preview how your changes look in an app that uses ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation")," or ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react"),". To do this, we use ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/whitecolor/yalc"}},"Yalc")," to publish the modules locally, rather than to NPM, and tell the consuming app to install that local version. In these examples, for the sake of simplicity, we'll assume you are using ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-website")," as the consuming app and are trying to preview changes in ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react"),". But instructions should be similar for any app using ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react")," or ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation"),"."),o.a.createElement("h2",{id:"getting-set-up"},"Getting set up"),o.a.createElement(m.MDXTag,{name:"p",components:n},"First, install Yalc globally if you haven't already: ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"yarn global add yalc"),"."),o.a.createElement(m.MDXTag,{name:"p",components:n},"While in the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"design-system")," app:\n1. Run ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm run build")," to build the module into the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"packages/formation-react")," dir.\n2. ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"cd")," to ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"packages/formation-react"),"\n2. Run ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"yalc publish")," to publish the module to your local ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"~/.yalc")," dir."),o.a.createElement(m.MDXTag,{name:"p",components:n},"Then in the consuming app (",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-website"),"):\n1. Run ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"yalc link @department-of-veterans-affairs/formation-react")," to tell the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-website")," project to use the local version of ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react")," instead of the one installed via NPM (i.e. the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react")," dir in ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"node_modules")," will now be a symlink to a dir in ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"~/.yalc"),").\n2. Fire up the website locally with ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"yarn watch"),"."),o.a.createElement(m.MDXTag,{name:"p",components:n},"The locally running project, at ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"localhost:3001"),", will now be using the locally published version of ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation"),"."),o.a.createElement("h2",{id:"the-change-publish-preview-loop"},"The change-publish-preview loop"),o.a.createElement(m.MDXTag,{name:"p",components:n},"With each change you make to the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"design-system"),", you'll need to rebuild the module, republish the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react")," module to ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"~/.yalc"),", and also tell the consuming app to use the new version."),o.a.createElement(m.MDXTag,{name:"p",components:n},"While in the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"design-system")," app:\n1. Make some changes to the code.\n2. Build the module and publish it locally to ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"~/.yalc")," by running ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm run build"),", ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"cd"),"ing to ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"packages/formation-react"),", and running ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"yalc publish"),"."),o.a.createElement(m.MDXTag,{name:"p",components:n},"Then in the consuming app:\n1. Run ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"yalc update")," to bring in the latest version of ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react"),".\n2. If you are using ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vets-website")," as your consuming app and it is already running, it should notice the changes and rebuild. If not, restart the app locally.\n3. After rebuilding completes, your changes will now be visible locally at ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"localhost:3001"),"."),o.a.createElement("h2",{id:"tearing-down-the-local-testing-setup"},"Tearing down the local testing setup"),o.a.createElement(m.MDXTag,{name:"p",components:n},"When you are done testing your module locally, you'll want to get your consuming app back to normal; that is, tell it to stop using the version of ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react")," published to ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"~/.yalc")," and go back to using the version from NPM."),o.a.createElement(m.MDXTag,{name:"p",components:n},"In the consuming app:\n1. run ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"yalc remove @department-of-veterans-affairs/formation-react")," to remove the link from the consuming app's ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"node_modules")," dir to the local version of ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react"),".\n2. ",o.a.createElement(m.MDXTag,{name:"strong",components:n,parentName:"p"},"NOTE:")," There seems to be ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/whitecolor/yalc/issues/37"}},"an issue")," with Yalc not cleaning up after itself properly, so you'll have to also run ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"unlink node_modules/@department-of-veterans-affairs/formation-react"),"\n3. Run ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"yarn install --check-files")," to reinstall ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formation-react")," from NPM. (If you're curious about why you need the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"--check-files")," flag, ",o.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/yarnpkg/yarn/issues/2240"}},"check out this issue"),".)"),o.a.createElement(m.MDXTag,{name:"p",components:n},"Your consuming app should be back to normal!"))},t}(o.a.Component),l={}}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-previewing-changes-md-0553774b8c522fed4aea.js.map