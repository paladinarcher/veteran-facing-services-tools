(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{410:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return i})),t.d(a,"_frontmatter",(function(){return l}));t(7),t(6),t(4),t(10),t(11);var n=t(1),o=t.n(n),r=t(2),m=t(336);var s={},i=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).layout=m.a,t}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){var e=this.props,a=e.components,t=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},s,t),components:a},o.a.createElement("h1",{id:"languages-and-tech-stack"},"Languages and Tech Stack"),o.a.createElement(r.MDXTag,{name:"table",components:a},o.a.createElement(r.MDXTag,{name:"thead",components:a,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}}))),o.a.createElement(r.MDXTag,{name:"tbody",components:a,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"td"},"Last Decision Made:")),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Yes"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"td"},"Decision Date:")),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"05/2016")),o.a.createElement(r.MDXTag,{name:"tr",components:a,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"td"},"Revisit Decision:")),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Yes"),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"td"},"Revisit Date:")),o.a.createElement(r.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"05/2017")))),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"Revisit Criteria:")," The technical choices that were made inhibit writing maintainable code in a timely fashion, and/or an inability to hire new developers because the tech stack is out-of-date or not mainstream enough."),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"July 2017 Update:")," The technical decisions in this document are working effectively for the team at this time. This should likely be revisited again in another year (5/2018) to see if this is still the case."),o.a.createElement("h2",{id:"summary"},"Summary"),o.a.createElement(r.MDXTag,{name:"p",components:a},"For building web applications, the team has made the following decision for building stuff:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Backend Language"),": Ruby"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Backend Web Framework"),": Rails"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Frontend / Component Library Framework"),": React"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Content Management"),": Metal Smith")),o.a.createElement(r.MDXTag,{name:"p",components:a},"The below describes how we got to the decision. The nutshell of why ultimately feel to Ruby having a slight edge in the team already using it, vendor being hired to work in that stack, and maintaining a common stack across Appeals and Vets.gov."),o.a.createElement("h2",{id:"history"},"History"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Prior to August 2015, USDS @ VA had a handful of application stacks in play across several applications:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Connect VBMS: Ruby + Java"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Appeals Database: Python (Django Framework)"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Caseflow: Ruby (Rails Framework, running on JRuby) + Angular JS Framework"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Veteran Employment Center: Ruby (Rails Framework)"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"eFolder Express: Python (Twisted Framework) + Connect VBMS (Ruby + Java)")),o.a.createElement(r.MDXTag,{name:"p",components:a},"For a team with less than 10 developers (including contractors), there was clearly tech stack sprawl. This made it hard for developers to move from project-to-project, requiring them to often learn one or more ecosystems each time."),o.a.createElement(r.MDXTag,{name:"p",components:a},"To alleviate this, the DSVA team made the decision to standardize around a few things:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Language"),": Ruby"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Web Framework"),": Rails"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Single Page App Framework"),": React",o.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"To be used only for high traffic pages, otherwise just use ERBs")))),o.a.createElement(r.MDXTag,{name:"p",components:a},"The biggest reason for choosing the above was that the majority of our existing applications were in Ruby and that it seemed to be a prevalent stack within the civic tech community (i.e. 18F and civic tech organizations seemed to use it more than other languages)."),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"strong"},"NOTE: The remainder of this document is more vets.gov specific, when that side of the team was re-evaluating its stance on the decision above"))),o.a.createElement(r.MDXTag,{name:"p",components:a},"When 2016 began, the vets.gov team began exploring how to build its platform. The platform included two key things:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Make it easy to build forms via a re-usable component library"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Be able to provide a consistent API layer capable of communicating with internal systems (and provide an SLA consistent with industry web application)")),o.a.createElement(r.MDXTag,{name:"p",components:a},"The first point led us to building reusable components with React, and this hypothesis was tested in building HCA (Healthcare Application). This technology was settled on unanimously by developers involved that this is the approach we should continue to use."),o.a.createElement(r.MDXTag,{name:"p",components:a},'However, it wasn\'t clear what to use to build the API parts of the vets.gov Platform. The team could either stick to building things in Ruby (possibly, but not necessarily, in the Rails Framework) or experiment with Node.js (a stack used for server-side Javascript that is known for good asynchronous I/O performance). The HCA team opted to experiment with Node.js to see if it reduced learning overhead (i.e. front and backend developers only needed to know Javascript), share build architecture (use webpack), improve performance (Node.js is reportedly hyper fast for building APIs in terms of performance), and be able to re-use JS code (example: validation code shared between the front and backend). While the experiment was given the "green light" to build the first version of the HCA backend in Node.js, the expectation was set that if we decided as a team to use Ruby, we would eventually have to port the second version into Ruby at a later point.'),o.a.createElement(r.MDXTag,{name:"p",components:a},"The experiment left us with the following results:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"It did not reduce learning overhead in our case. Frontend developers avoided involvement in the backend. Despite the shared language, frontend JS is not the same as backend JS, and conceptually different things happen at each tier."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Builds did become similar between the front and the backend, both using Webpack. This simplifies knowledge around build systems (not needing to know both Webpack and Ruby Gems)."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"The application will not experience high enough volumes such that performance gains by using Node.js over Ruby are noticeable."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Isomorphic JS (JS used between both the front and the backend) did not provide noteworthy time/cost savings.")),o.a.createElement(r.MDXTag,{name:"p",components:a},"As a result of the experiment, it was not a \"no brainer\" that the team change its direction of building things in Ruby, but rather left the question open. It's clear that Node.js would be an equally good choice to Ruby, but not overwhelming such that it mandated a change in direction. Despite this, a decision wasn't clearly decided upon by the team's tech lead and the door to the decision remained open."),o.a.createElement(r.MDXTag,{name:"p",components:a},"With the vets.gov contract getting signed, it became necessary to make a decision on the language ecosystem in order to hire contract staff. Large parts of the contract, being that they were written ahead of the Node.js experiment, requested Ruby/Rails developers and a contracting firm that is familiar with this ecosystem was selected. Simultaneously, two new vets.gov team members were hired for the Platform team that are experienced and knowledgeable with the Node.js ecosystem."),o.a.createElement(r.MDXTag,{name:"p",components:a},"The contractor is leaning towards Ruby due to their organization being proficient in this ecosystem. The vets.gov Platform team members have similar reasoning for their experience with Node.js."),o.a.createElement("h2",{id:"decision-meeting---may-10-2016"},"Decision Meeting - May 10, 2016"),o.a.createElement(r.MDXTag,{name:"p",components:a},"The meeting included several folks:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Jeff Maher (vets.gov Tech Lead)"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Albert Wong (vets.gov HCA and Platform Teams)"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Alex Ose (vets.gov Platform Team Lead)"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Robbie Holmes (vets.gov Platform Team)"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Greg Gershman (Ad Hoc Co-Lead)"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Paul Smith (Ad Hoc Co-Lead)")),o.a.createElement(r.MDXTag,{name:"p",components:a},"The team settled on the following criteria for making a decision:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Good for APIs"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Good performance for I/O"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Ecosystem is stable and active"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Operational complexity for DevOps is low"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Maintainable"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Can we afford to retrain folks?")),o.a.createElement(r.MDXTag,{name:"p",components:a},"The discussion bounced around across several topics, but addressed our criteria in the following ways:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Good for APIs"),": Both can easily be utilized to build APIs."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Good performance for I/O"),": Node.js is slightly faster in terms of runtime performance, but speed benefits negligible for our use case."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Ecosystem is stable and active"),": Both ecosystems are active, with ample documentation, libraries, and build systems. Problems that impact one ecosystem, impact the other. Node.js's ecosystem moves more rapidly, making it slightly less stable, but this concern is alleviated due to LTS releases."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Operational complexity for DevOps is low"),": Same for both languages."),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Maintainable"),": Both inherently have the same maintainability levels"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Can we afford to retrain folks?"),": If we chose Node.js, Ad Hoc would have to change its hiring criteria and might make folks that have received offers no longer eligible. If we chose Ruby, Alex Ose and Robbie Holmes on the Platform team would have to adjust to using Ruby.")),o.a.createElement(r.MDXTag,{name:"p",components:a},"Based on our criteria, the team essentially winds up back at a crossroads, with one language not being the obvious choice over the other."),o.a.createElement("h2",{id:"other-factors"},"Other Factors"),o.a.createElement(r.MDXTag,{name:"p",components:a},"With the stacks being equal, what are reasons to choose one language over the other? What will get us to functioning products the quickest over the next six months?"),o.a.createElement("h3",{id:"why-ruby"},"Why Ruby?"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Team has existing applications in this stack already"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"We've already figured out tools needed to comply with VA processes (security compliance, 508 accessibility, unit testing)"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Maintains parity with the Appeals team's tech stack (Makes ATO paperwork similar, and team members can transition teams easily)"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Ad Hoc can use existing hires to send to vets.gov team")),o.a.createElement("h3",{id:"why-nodejs"},"Why Node.js"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Alex Ose and Robbie Holmes are already onboard and can start building the Platform in a stack they are familiar with",o.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"USDS's hiring process hones in on polyglot developers that are able to learn new things, so this might be a non-point"))),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"According to the Stack Overflow Annual Developer Survey, this ecosystem has already gained a popularity that has surpassed Ruby (might be easier to hire folks)")),o.a.createElement("h3",{id:"content-management-decision"},"Content Management Decision"),o.a.createElement(r.MDXTag,{name:"p",components:a},"The initial decision around tech stack include ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://jekyllrb.com/"}},"Jekyll")," for content management. However, when the decision was made to combine all frontend React applications into a ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website"}},"single repo"),", it made sense to move to a content management system driven by Node.js. The content management system chosen is ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://www.metalsmith.io/"}},"Metal Smith"),".  The driving factor was to simplify and streamline our build process for the vets-website content and dynamic front-end components to a single process. We were using ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://webpack.js.org/"}},"Webpack")," for to bundle and transpile our ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://facebook.github.io/react/"}},"React.js")," components into code that could be consumed by web browsers, and the content was in Jekyll and required Ruby, and a seperate build process.  By moving to Metalsmith we were able to align our build process to one language, and because the build script for the content was just Node.js we could call Webpack from within that script."),o.a.createElement("h2",{id:"the-decision"},"The Decision"),o.a.createElement(r.MDXTag,{name:"p",components:a},"For building web applications, the team has made the following decision for building stuff:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Backend Language"),": Ruby"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Backend Web Framework"),": Undefined (Rails is preferred, but other frameworks acceptable too based on use cases)"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Frontend / Component Library Framework"),": React"),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"li"},"Content Management"),": Metal Smith")),o.a.createElement(r.MDXTag,{name:"p",components:a},"In the short term, standardizing on these languages and frameworks enables our small team to have a consistent tech stack to learn and hire against. In the long term, we'll aim to utilize API-driven development (i.e. REST/JSON) such that it is easy for the future version of our team to pivot to newer technologies as becomes needed."))},n}(o.a.Component),l={}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-language-and-tech-stack-mdx-1386b2896a21a135fb38.js.map