(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{364:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return i})),n.d(a,"_frontmatter",(function(){return c}));n(7),n(6),n(4),n(10),n(11);var t=n(1),o=n.n(t),r=n(2),m=n(336);var p={},i=function(e){var a,n;function t(a){var n;return(n=e.call(this,a)||this).layout=m.a,n}return n=e,(a=t).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n,t.prototype.render=function(){var e=this.props,a=e.components,n=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:a},o.a.createElement("h2",{id:"making-updates-to-formation"},"Making updates to formation"),o.a.createElement(r.MDXTag,{name:"p",components:a},"You can find a detailed guide on contributing to formation at ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://dev-design.va.gov/documentation/contributing-to-formation"}},"https://dev-design.va.gov/documentation/contributing-to-formation")),o.a.createElement("h2",{id:"making-updates-to-formation-react"},"Making updates to formation-react"),o.a.createElement(r.MDXTag,{name:"ol",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Components should be created and tested in vets-website first before being moved over to formation-react"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Transfer component to formation-react"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Test the formation-react version of the component in vets-website before publishing ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/previewing-changes"}},"Check out these instructions on how to do so")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},"Write component tests"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ol"},o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"/documentation-guide/doc-page"}},"Create your react component documentation"))),o.a.createElement("h2",{id:"publishing-module-to-npm"},"Publishing Module to NPM"),o.a.createElement(r.MDXTag,{name:"p",components:a},"After you've tested and previewed your changes locally it's time to publish a new version of the package to NPM."),o.a.createElement(r.MDXTag,{name:"blockquote",components:a},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"blockquote"},"Prerequisite: you must be ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://docs.npmjs.com/getting-started/publishing-npm-packages"}},"registered"),' with NPM, be a member of the "department-of-veterans-affairs" organization, and have the appropriate organization role to publish an update to the module. Verify that you are logged in correctly by running ',o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"npm whoami"),'. If you are unable to publish an update, confirm you are a member of the "department-of-veterans-affairs" organization by going to your Profile page on ',o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://www.npmjs.com"}},"npmjs.com"),".")),o.a.createElement("h3",{id:"1-submit-your-pr"},"1. Submit your PR"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Submit a PR that includes all of your code changes. This should include the bump in versions you need, which you can change directly in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"package.json")," files for the modules that are changing. Modules like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"formation-react")," depend on ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"formation")," via a peer dependency, so you may need to update that as well. We try to keep the peer dependency loose and only update it for breaking changes."),o.a.createElement(r.MDXTag,{name:"p",components:a},"You'll need to choose what type of version update to make:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"patch")," - for bug fixes and minor changes"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"minor")," - for new features that don't break current features or require changes in consuming applications"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"major")," - for backwards breaking changes")),o.a.createElement(r.MDXTag,{name:"blockquote",components:a},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"blockquote"},"If you are unsure of what to pick, do a major version update on modules that are changing.")),o.a.createElement("h3",{id:"2-merge-your-pr-to-master"},"2. Merge your PR to master"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Once your changes are approved, squash merge them to master. Also, if your change is a breaking change, please prefix your commit message with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"BREAKING CHANGE:"),". Also keep in mind that your commit messages will be in a changelog that people use to figure out what has changed between releases, so make sure it accurately describes your changes."),o.a.createElement("h3",{id:"3-build-and-publish"},"3. Build and publish"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Checkout the master branch"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Run ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"yarn build")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"For each module you need to publish, switch to its folder in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"packages/")," and run ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"npm publish"),".")),o.a.createElement("h3",{id:"4-create-a-release"},"4. Create a release"),o.a.createElement(r.MDXTag,{name:"p",components:a},"You will need a github ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line"}},"personal access token"),".\nThis should be set as ",o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"GITHUB_API_KEY")," in your environment variable."),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Navigate to the package folder"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Run the release script",o.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{}},"$ yarn release\n"))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Once the script has succeeded, go to the link provided in the console"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Edit the release and add any relevant information.")),o.a.createElement("h3",{id:"5-update-consuming-apps"},"5. Update consuming apps"),o.a.createElement(r.MDXTag,{name:"p",components:a},"The last step is to update the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"package.json")," files of consuming apps to use the latest version of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"@department-of-veterans-affairs/formation")," (or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"formation-react"),"). For example, if you are working with the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"vets-website")," project, open the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"vets-website"),"'s ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"package.json")," to update the version number of the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"@department-of-veterans-affairs/formation")," entry listed in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"dependencies")," section. The version number should match what you just published to NPM."))},t}(o.a.Component),c={}}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-updating-formation-mdx-8cbb904b5ec25f251f12.js.map