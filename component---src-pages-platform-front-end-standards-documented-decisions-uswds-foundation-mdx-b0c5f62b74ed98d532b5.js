(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{384:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i})),a.d(t,"_frontmatter",(function(){return l}));a(7),a(6),a(4),a(9),a(10);var n=a(1),o=a.n(n),r=a(2),m=a(333);var s={},i=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).layout=m.a,a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},s,a),components:t},o.a.createElement("h1",{id:"uswdsfoundation"},"USWDS/Foundation"),o.a.createElement(r.MDXTag,{name:"table",components:t},o.a.createElement(r.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}))),o.a.createElement(r.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"td"},"Last Decision Made:")),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Keep Foundation for grid for now"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"td"},"Decision Date:")),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"05/2017")),o.a.createElement(r.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"td"},"Revisit Decision:")),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Yes"),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"td"},"Revisit Date:")),o.a.createElement(r.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"06/2017")))),o.a.createElement(r.MDXTag,{name:"p",components:t},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"p"},"Revisit Criteria:")," Once keeping Foundation with an older version of USWDS starts to create too much pain for developers, or once USWDS adds additional functionality that we need."),o.a.createElement("h2",{id:"summary"},"Summary"),o.a.createElement(r.MDXTag,{name:"p",components:t},"We needed to reach a decision on whether or not to finish the work of stripping out Foundation."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Pros:"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"It would streamline our front-end frameworks"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"It would reduce bloat"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"It would enable us to upgrade to the latest version of USWDS")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Cons:"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"It would be a huge investment of time and resources."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"It wasn't actually causing that much developer pain to continue to use Foundation."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"It might be possible to reduce bloat without having to totally remove Foundation"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"USWDS didn't have all the functionality we needed out of the box.")),o.a.createElement("h2",{id:"history"},"History"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Removing Foundation from vets-website became a project our team wanted to tackle for a few reasons:\n1. We wanted to remove bloat from our bundle (both in taking out Foundation and the JavaScript it relied upon)\n2. It seemed unnecessary to be including 2 separate grid frameworks in our codebase (Foundation and USWDS)\n3. Foundation had conflicts with the latest version of USWDS, preventing us from upgrading"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Tiffany Brown (front-end dev) had been working on trying to remove Foundation from vets-website for a few months. It was a tangled problem that touched every part of Vets.gov and had cascading effects."),o.a.createElement(r.MDXTag,{name:"p",components:t},"She left the team on Friday, May 12 with the following work:\n1. The ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/549"}},"original ticket")," that includes a ton of documentation\n2. An ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/pull/5353"}},"open PR"),"\n3. ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/2739"}},"Hand-off notes")),o.a.createElement(r.MDXTag,{name:"p",components:t},"Tiffany got us pretty far before she left, but there was still a good amount of work left to do to complete this project."),o.a.createElement("h2",{id:"decision-meeting---may-18-2017"},"Decision Meeting - May 18, 2017"),o.a.createElement(r.MDXTag,{name:"p",components:t},"We set up a meeting to decide on next steps for finishing the work of stripping out Foundation."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Attendees:"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Alex Yale-Loehr (Vets.gov tech lead)"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Anne Kainic (Front-end dev)"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Jeff Balboni (Front-end dev)"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Claire Hsu (Front-end dev)"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Raquel Romano (Front-end dev)"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Ben Shyong (Front-end dev)"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Eugene Doan (Front-end dev)"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Bill Hunt")),o.a.createElement(r.MDXTag,{name:"p",components:t},"There were 2 questions we had to answer:"),o.a.createElement(r.MDXTag,{name:"ol",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Was the work of stripping out Foundation and exclusively using USWDS worth the effort it was going to take?"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"If so, what was the best approach for doing it?")),o.a.createElement(r.MDXTag,{name:"p",components:t},"For question 1 (was the work worth the effort it would take), developers were not currently experiencing a lot of pain in having to work between USWDS and Foundation. We believed it might be possible to strip our jQuery and the Foundation JavaScript without having to remove the Foundation grid and visibility classes, the only part of Foundation we were currently using. This would take care of the bloat problem without having to go through the enormous effort of switching grid classes everywhere and fixing visual regression issues."),o.a.createElement(r.MDXTag,{name:"p",components:t},"An additional problem with removing Foundation was that USWDS did not provide all the functionality we needed that we currently got from Foundation (small width grid classes and visibility classes). We would either have to talk to the USWDS team and figure out a way to include those things in USWDS, or write our own styles on top of it so that we could do all the same things we were doing before with Foundation. This would mean additional time and resources."),o.a.createElement(r.MDXTag,{name:"p",components:t},"The one downside to deciding not to remove Foundation was that it seemed to conflict with the latest upgrade of USWDS. This would mean we could not keep up to date with USWDS releases."),o.a.createElement(r.MDXTag,{name:"p",components:t},"For question 2 (what was the best approach), if we decided to remove Foundation, we had 2 possible routes to do so:\n1. Have all the front-end developers devote 2-3 days of exclusively working on converting the grid classes for all the apps and content pages and get the changes merged as soon as possible."),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Advantages: the fastest solution to finishing this work."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Disadvantages: an investment of resources and probably some pain.")),o.a.createElement(r.MDXTag,{name:"ol",components:t,props:{start:2}},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Create a parallel set of styles that did not use Foundation, and move apps and content pages over to using the new set of styles when possible.")),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Advantages: gives us the flexibility to migrate when we have time."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Disadvantages: a lot of overhead work.")),o.a.createElement("h2",{id:"the-decision"},"The Decision"),o.a.createElement(r.MDXTag,{name:"p",components:t},"The short-term decision was to explore ways of not removing the Foundation grid."),o.a.createElement(r.MDXTag,{name:"p",components:t},"There were 3 action items that came out of this decision:\n1. Try removing jQuery and the Foundation JavaScript to ensure that everything continues to work without those two larger pieces of JavaScript.\n2. Investigate what we miss out on by not upgrading the newest version of USWDS --\x3e ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/issues/2873"}},"GH issue with documentation"),"\n3. Talk to the 18f team about some of the features that we would need in USWDS to be able to fully use their framework (small width grid classes and visibility classes)"))},n}(o.a.Component),l={}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-uswds-foundation-mdx-b0c5f62b74ed98d532b5.js.map