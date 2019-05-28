(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{315:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return g}),a.d(n,"_frontmatter",function(){return u});a(42);var t=a(43),o=a.n(t),r=a(3),s=a.n(r),m=a(2),c=a.n(m),l=a(4),i=a(351),p={},g=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=i.a,a}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return c.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:n},c.a.createElement("h1",{id:"review"},"Review"),c.a.createElement("h2",{id:"submit-pull-request"},"Submit pull request"),c.a.createElement(l.MDXTag,{name:"ul",components:n},c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"Pull master")," and ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"push feature branch")," to ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"vets-website")," repository")),c.a.createElement(l.MDXTag,{name:"pre",components:n},c.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"git pull origin master\ngit push origin 12345-issue-title\n")),c.a.createElement(l.MDXTag,{name:"p",components:n},c.a.createElement(l.MDXTag,{name:"em",components:n,parentName:"p"},"Always ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"em"},"pull master")," into your feature branch before creating a pull request.")),c.a.createElement(l.MDXTag,{name:"ul",components:n},c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"Create a pull request")," indicating that your code is ready for review."),c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"Request peer review")," on Github by tagging a fellow team member who you feel is qualified to review the code (this prevents the pull request from just sitting). You may also want to tag developers on other teams if the changes cover more than one application.")),c.a.createElement(l.MDXTag,{name:"p",components:n},c.a.createElement(l.MDXTag,{name:"em",components:n,parentName:"p"},"Depending on the type of work done, you may need a product person to review and / or a developer to review. See ",c.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"em",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Code%20Review%20Norms.md"}},"Code Review Norms")," for more information on how we do code reviews.")),c.a.createElement(l.MDXTag,{name:"ul",components:n},c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Use Zenhub to ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"connect")," pull request with a ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"linked issue"))),c.a.createElement(l.MDXTag,{name:"p",components:n},c.a.createElement(l.MDXTag,{name:"em",components:n,parentName:"p"},"If you use the Zenhub Chrome ",c.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"em",props:{href:"https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd"}},"extension"),', there will be a "Connect this pull request with an existing issue" section at the bottom of Github\'s create pull request UI. You can click the "Connect with an issue" button to link the PR to the original issue in Zenhub.')),c.a.createElement(l.MDXTag,{name:"p",components:n},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/d16a8f63d7f7ad20701141bbe9190083/8cae0/connect-issue.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"765px"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"9.934640522875817%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"PR deployment list",title:"",src:"/static/d16a8f63d7f7ad20701141bbe9190083/8cae0/connect-issue.png",srcSet:"/static/d16a8f63d7f7ad20701141bbe9190083/f4a45/connect-issue.png 259w,\n/static/d16a8f63d7f7ad20701141bbe9190083/ef0f6/connect-issue.png 518w,\n/static/d16a8f63d7f7ad20701141bbe9190083/8cae0/connect-issue.png 765w",sizes:"(max-width: 765px) 100vw, 765px"})))),c.a.createElement(l.MDXTag,{name:"ul",components:n},c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"Change status")," of the ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"linked issue")," to ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"validate"))),c.a.createElement("h2",{id:"run-tests-and-compliance-scans"},"Run tests and compliance scans"),c.a.createElement(l.MDXTag,{name:"ul",components:n},c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"Jenkins")," automatically ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"builds")," and ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"runs all tests")," your feature branch:",c.a.createElement(l.MDXTag,{name:"ul",components:n,parentName:"li"},c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"when the pull request is created"),c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"after a pull request is created when the feature branch is updated"))),c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Test results are displayed on the pull request page")),c.a.createElement(l.MDXTag,{name:"p",components:n},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/4faf58036ea7db547dd9a3340a594242/8d69c/test-results.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"699px"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.024320457796854%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"PR deployment list",title:"",src:"/static/4faf58036ea7db547dd9a3340a594242/8d69c/test-results.png",srcSet:"/static/4faf58036ea7db547dd9a3340a594242/f4a45/test-results.png 259w,\n/static/4faf58036ea7db547dd9a3340a594242/ef0f6/test-results.png 518w,\n/static/4faf58036ea7db547dd9a3340a594242/8d69c/test-results.png 699w",sizes:"(max-width: 699px) 100vw, 699px"})))),c.a.createElement(l.MDXTag,{name:"p",components:n},c.a.createElement(l.MDXTag,{name:"em",components:n,parentName:"p"},"See ",c.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"em",props:{href:"/getting-started/common-tasks/test"}},"Run Tests")," to run these tests locally")),c.a.createElement("h2",{id:"manually-test-change"},"Manually test change"),c.a.createElement(l.MDXTag,{name:"p",components:n},"Manual testing can involve some separate things:"),c.a.createElement(l.MDXTag,{name:"ul",components:n},c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Making sure the functionality works in the web browsers users are most likely to use"),c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Run the code on production-like environment. This could be done by spinning up a cloud instance that resembles production, or launching a container that is production like (such as a Docker image, etc.)"),c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"See if there are there any bugs or unexpected nuisances that users might encounter"),c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Does it meet the requirements?")),c.a.createElement(l.MDXTag,{name:"p",components:n},c.a.createElement(l.MDXTag,{name:"em",components:n,parentName:"p"},c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"em"},"The person making the change is responsible")," for ensuring the change is adequately tested. Testing can include automated tests or manual testing by stakeholders on the review instance or staging build.")),c.a.createElement("h3",{id:"review-instance-automatic-creation"},"Review instance automatic creation"),c.a.createElement(l.MDXTag,{name:"p",components:n},c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"Jenkins")," automatically ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"deploys")," two remote ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"review instances")," of a ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"feature branch")," when a pull request is created:"),c.a.createElement(l.MDXTag,{name:"ul",components:n},c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(l.MDXTag,{name:"p",components:n,parentName:"li"},"an instance that just includes static pages content deployed by ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"va-bot"))),c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(l.MDXTag,{name:"p",components:n,parentName:"li"},"an instance that includes static pages and the VA.gov client application deployed by ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"va-vfs-bot")),c.a.createElement(l.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement(l.MDXTag,{name:"em",components:n,parentName:"p"},"Example of deployment links:")),c.a.createElement(l.MDXTag,{name:"p",components:n,parentName:"li"},c.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/82df6872c5a0578f1ad667636438ad90/08b0d/PR-deployment-list.png",style:{display:"block"},target:"_blank",rel:"noopener"},c.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"709px"}},c.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.375176304654442%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),c.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"PR deployment list",title:"",src:"/static/82df6872c5a0578f1ad667636438ad90/08b0d/PR-deployment-list.png",srcSet:"/static/82df6872c5a0578f1ad667636438ad90/f4a45/PR-deployment-list.png 259w,\n/static/82df6872c5a0578f1ad667636438ad90/ef0f6/PR-deployment-list.png 518w,\n/static/82df6872c5a0578f1ad667636438ad90/08b0d/PR-deployment-list.png 709w",sizes:"(max-width: 709px) 100vw, 709px"})))))),c.a.createElement(l.MDXTag,{name:"p",components:n},"After a pull request is created, ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"Jenkins")," will automatically ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"rebuild")," these instances when feature branch ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"changes are pushed")),c.a.createElement(l.MDXTag,{name:"p",components:n},"  ",c.a.createElement(l.MDXTag,{name:"em",components:n,parentName:"p"},"You will need your browser configured to access the vetsgov-internal domain via the SOCKS proxy. Please see the ",c.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"em",props:{href:"/getting-started/internal-tools"}},"2. Access internal tools")," for detailed instructions.")),c.a.createElement("h3",{id:"review-instance-manual-creation"},"Review instance manual creation"),c.a.createElement(l.MDXTag,{name:"p",components:n},c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"Jenkins")," can be ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"manually triggered")," to build a ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"p"},"review instance"),"."),c.a.createElement(l.MDXTag,{name:"ol",components:n},c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ol"},"Visit ",c.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://jenkins.vetsgov-internal/job/vets-review-instance-deploy/"}},"http://jenkins.vetsgov-internal/job/vets-review-instance-deploy/")," and log in."),c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ol"},'Select "Build with Parameters"'),c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ol"},"Specify the branch names for ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"api_branch")," and ",c.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"web_branch"),". These branches will be deployed together with the review instance."),c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ol"},"When the process is completed, the URL for the review instance will be provided at the end of the output logs.")),c.a.createElement(l.MDXTag,{name:"p",components:n},c.a.createElement(l.MDXTag,{name:"em",components:n,parentName:"p"},"A Jenkins job will run periodically and remove review instances for which the source branches no longer exist. To ensure that your instance is cleaned up appropriately, just delete the branch from the origin repository.")),c.a.createElement("h2",{id:"peer-review-and-merge"},"Peer review and merge"),c.a.createElement(l.MDXTag,{name:"ul",components:n},c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Get at least one ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"pull request approval")," from a peer"),c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.blog/2016-04-01-squash-your-commits/"}},"Squash your commits")," and ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"merge")," into ",c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"master")),c.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},c.a.createElement(l.MDXTag,{name:"strong",components:n,parentName:"li"},"Delete")," pull request branch")),c.a.createElement(l.MDXTag,{name:"p",components:n},c.a.createElement(l.MDXTag,{name:"em",components:n,parentName:"p"},"See our team's ",c.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"em",props:{href:"https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/Code%20Review%20Norms.md"}},"code review norms")," for details on how code review work and what needs to be checked.")))},n}(c.a.Component),u={}},350:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},351:function(e,n,a){"use strict";var t=a(2),o=a.n(t),r=a(13),s=a.n(r),m=a(354),c=(a(133),a(134),a(135),a(17),a(350)),l=a(352);function i(){return o.a.createElement(l.b,{query:"157057713",render:function(e){return o.a.createElement(g,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function p(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(l.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function g(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(g,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(i,null)):o.a.createElement(p,{item:e,key:e.name})})):null}var u=a(353),d=a.n(u);function h(e){var n=e.location,a=d.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(g,{items:a.items}))):null}function b(e){var n=e.children,a=e.location;return o.a.createElement(m.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return b}),b.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-workflow-review-mdx-6d6358fe99a3b0976673.js.map