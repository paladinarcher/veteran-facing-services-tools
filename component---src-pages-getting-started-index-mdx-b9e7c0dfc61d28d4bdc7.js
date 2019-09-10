(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{363:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return c})),n.d(a,"_frontmatter",(function(){return l}));n(7),n(6),n(4),n(9),n(10);var t=n(1),o=n.n(t),m=n(2),r=n(333);var s={},c=function(e){var a,n;function t(a){var n;return(n=e.call(this,a)||this).layout=r.a,n}return n=e,(a=t).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n,t.prototype.render=function(){var e=this.props,a=e.components,n=function(e,a){if(null==e)return{};var n,t,o={},m=Object.keys(e);for(t=0;t<m.length;t++)n=m[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},s,n),components:a},o.a.createElement("h1",{id:"set-up-vagov-locally"},"Set up VA.gov locally"),o.a.createElement(m.MDXTag,{name:"p",components:a},"These instructions cover the installation of dependencies needed for running VA.gov locally."),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Node setup")," - steps for installing ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"node")," which is needed for building, testing, and running the local development server"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Get the source code")," - steps for cloning the various repos needed to run VA.gov"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Start up the front end")," - installing and running VA.gov locally"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Backend and local tools setup")," - links to other setup instructions for running ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"vets-api")," and retrieving static content")),o.a.createElement("h2",{id:"prerequisites"},"Prerequisites"),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://brew.sh/"}},"homebrew")," is recommended for for installing ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"nvm")," but other installation approaches are on ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/creationix/nvm#installation-and-update"}},"nvm Github page"))),o.a.createElement("h2",{id:"node-setup"},"Node setup"),o.a.createElement(m.MDXTag,{name:"ol",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"Install ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"nvm"),":")),o.a.createElement(m.MDXTag,{name:"p",components:a},"Mac:"),o.a.createElement(m.MDXTag,{name:"pre",components:a},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"brew update && brew install nvm\n")),o.a.createElement(m.MDXTag,{name:"p",components:a},"Linux:"),o.a.createElement(m.MDXTag,{name:"p",components:a},"To get the latest version of NVM visit the official page. ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/nvm-sh/nvm"}},"NVM")),o.a.createElement(m.MDXTag,{name:"pre",components:a},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash\n")),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},"Follow the post install instructions in the success message.")),o.a.createElement(m.MDXTag,{name:"ol",components:a,props:{start:2}},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"Install ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"node 10.15.3")," (this also installs ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"npm"),"):")),o.a.createElement(m.MDXTag,{name:"pre",components:a},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"nvm install 10.15.3\n")),o.a.createElement(m.MDXTag,{name:"ol",components:a,props:{start:3}},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"Configure ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"nvm")," to use ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"node 10.15.3")," by default:")),o.a.createElement(m.MDXTag,{name:"pre",components:a},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"nvm alias default 10.15.3\n")),o.a.createElement(m.MDXTag,{name:"ol",components:a,props:{start:4}},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"Install ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"yarn 1.12.3")," globally:")),o.a.createElement(m.MDXTag,{name:"pre",components:a},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"npm i -g yarn@1.12.3\n")),o.a.createElement(m.MDXTag,{name:"ol",components:a,props:{start:5}},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"Verify correct versions of ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"node")," and ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"yarn")," are installed:")),o.a.createElement(m.MDXTag,{name:"pre",components:a},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"node --version # 10.15.3\nyarn --version # 1.12.3\n")),o.a.createElement("h2",{id:"get-the-source-code"},"Get the source code"),o.a.createElement(m.MDXTag,{name:"ol",components:a,props:{start:6}},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"Clone VA.gov git repos ",o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"as sibling directories"),":")),o.a.createElement(m.MDXTag,{name:"pre",components:a},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"git clone git@github.com:department-of-veterans-affairs/vets-website.git\ngit clone git@github.com:department-of-veterans-affairs/vagov-content.git\ngit clone git@github.com:department-of-veterans-affairs/vets-json-schema.git\ngit clone git@github.com:department-of-veterans-affairs/veteran-facing-services-tools.git\ngit clone git@github.com:department-of-veterans-affairs/vets-api.git\ngit clone git@github.com:department-of-veterans-affairs/vets-api-mockdata.git\n")),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},"Front end repos")),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"vets-website"),": Core front end platform and application code"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"vagov-content"),": Markdown content used to generate static pages"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"veteran-facing-services-tools"),": Shared front end components (including non VA.gov users) and front end documentation site")),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},"Back end repos")),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"vets-api"),": Core Rails API server application code"),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"vets-api-mockdata"),": Mock data used when running locally and on dev for the backend")),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},"Shared repos")),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"vets-json-schema"),": Shared JSON Schema definitions used by form applications and the APIs that they consume")),o.a.createElement("h2",{id:"start-up-the-front-end"},"Start up the front end"),o.a.createElement(m.MDXTag,{name:"ol",components:a,props:{start:7}},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"Install ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"vets-website")," dependencies")),o.a.createElement(m.MDXTag,{name:"pre",components:a},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"yarn install\n")),o.a.createElement(m.MDXTag,{name:"ol",components:a,props:{start:8}},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"Start the local development server")),o.a.createElement(m.MDXTag,{name:"pre",components:a},o.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"yarn watch\n")),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},"Build is complete when the CLI says")," ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Compiled successfully")),o.a.createElement(m.MDXTag,{name:"ol",components:a,props:{start:9}},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ol"},"Open ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"http://localhost:3001"}},"http://localhost:3001")," in a browser")),o.a.createElement("h2",{id:"backend-and-internal-tools-set-up"},"Backend and internal tools set up"),o.a.createElement(m.MDXTag,{name:"p",components:a},"Setting up the backend and internal tools allows local test account login and static content rendering."),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Backend set up")," instructions: ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-api"}},"vets-api"),".")),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},"Follow the Docker instructions, which are in the README for the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"vets-api")," repo.")),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Local test account login")," instructions: ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Administrative/Accessing-Staging.md"}},"Accessing Staging"))),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"Internal tools setup")," instructions: ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"internal-tools"}},"Accessing internal tools"),".")),o.a.createElement(m.MDXTag,{name:"p",components:a},o.a.createElement(m.MDXTag,{name:"em",components:a,parentName:"p"},"This proxy setup is required to access static content locally and to access to our reporting and monitoring tools. Running the watch task with the SOCK proxy active will automatically pull and cache the static content for ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"vets-website"))))},t}(o.a.Component),l={}}}]);
//# sourceMappingURL=component---src-pages-getting-started-index-mdx-b9e7c0dfc61d28d4bdc7.js.map