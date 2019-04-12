(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{302:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return d}),t.d(a,"_frontmatter",function(){return u});t(42);var n=t(43),o=t.n(n),r=t(3),i=t.n(r),s=t(2),m=t.n(s),c=t(4),l=t(337),p={},d=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=l.a,t}return i()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,t=o()(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:a},m.a.createElement(c.MDXTag,{name:"h2",components:a},"Form Tutorial - Basic"),m.a.createElement(c.MDXTag,{name:"h4",components:a},"Creating Your First Form"),m.a.createElement(c.MDXTag,{name:"p",components:a},"In this doc, we'll walk through creating a new form and making some simple changes."),m.a.createElement(c.MDXTag,{name:"h2",components:a},"Setting up"),m.a.createElement(c.MDXTag,{name:"p",components:a},"If you haven't already, get ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website"}},"vets-website")," set up and running on your machine."),m.a.createElement(c.MDXTag,{name:"p",components:a},"The first step after that is to get the basic scaffolding set up for a new application. We have a ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/GeneratorOptions.md"}},"generator tool")," to help you set up the files needed for the new React app and form. In the root of ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"vets-website"),", you should install and run Yeoman and the generator:"),m.a.createElement(c.MDXTag,{name:"pre",components:a},m.a.createElement(c.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-bash"}},"npm install -g yo\nnpm install -g @department-of-veterans-affairs/generator-vets-website\n\nyo @department-of-veterans-affairs/vets-website\n")),m.a.createElement(c.MDXTag,{name:"p",components:a},"You can answer the questions with the ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/GeneratorOptions.md"}},"documentation")," as a guide, or if you're just looking to try things out, here are the answers I'm using for this tutorial:"),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"What's the name of your application? This will be the default page title. ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"My new form")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"What folder in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"src/applications/")," should your app live in? This can be a subfolder. ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"new-form")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"What should be the name of your app's entry bundle? ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"newForm")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"What's the root url for this app? ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"/new-form")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Is this a form app? ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Y")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"What's your form number? ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"XX-230")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"What's the Google Analytics event prefix you want to use? ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"new-form-")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"What's the respondent burden of this form in minutes? ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"30")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"What's the OMB control number for this form? ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"XX3344")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"What's the OMB expiration date (in M/D/YYYY format) for this form? ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"5/31/2018")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"What's the benefit description for this form? ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"new form benefits")),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"Which form template would you like to start with? ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Choose 'BLANK: A form without any fields'"))),m.a.createElement(c.MDXTag,{name:"p",components:a},"After you run the generator, run ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"yarn watch")," (or restart it if you already had it running) and navigate to ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://localhost:3001/new-form"}},"http://localhost:3001/new-form"),". You should see something like this:"),m.a.createElement(c.MDXTag,{name:"p",components:a},m.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/627b2f096a0dfa6590c45a87621b3406/ac127/initial-form.png",style:{display:"block"},target:"_blank",rel:"noopener"},m.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"816px"}},m.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"94.36274509803923%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),m.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"initial form",title:"",src:"/static/627b2f096a0dfa6590c45a87621b3406/ac127/initial-form.png",srcSet:"/static/627b2f096a0dfa6590c45a87621b3406/f4a45/initial-form.png 259w,\n/static/627b2f096a0dfa6590c45a87621b3406/ef0f6/initial-form.png 518w,\n/static/627b2f096a0dfa6590c45a87621b3406/ac127/initial-form.png 816w",sizes:"(max-width: 816px) 100vw, 816px"})))),m.a.createElement(c.MDXTag,{name:"h2",components:a},"Updating your form"),m.a.createElement(c.MDXTag,{name:"p",components:a},"Now that you're up and running, we can add a new page and field to our form. If you open up ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"src/applications/new-form/config.js"),", you should see a ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"formConfig")," variable:"),m.a.createElement(c.MDXTag,{name:"pre",components:a},m.a.createElement(c.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"const formConfig = {\n  urlPrefix: '/',\n  submitUrl: '/v0/api',\n  trackingPrefix: 'new-form-',\n  introduction: IntroductionPage,\n  confirmation: ConfirmationPage,\n  formId: 'XX-230',\n  version: 0,\n  prefillEnabled: true,\n  savedFormMessages: {\n    notFound: 'Please start over to apply for new form benefits.',\n    noAuth: 'Please sign in again to continue your application for new form benefits.'\n  },\n  title: 'My new form',\n  defaultDefinitions: {\n  },\n  chapters: {\n    chapter1: {\n      title: 'Chapter 1',\n      pages: {\n        page1: {\n          path: 'first-page',\n          title: 'First Page',\n          uiSchema: {\n          },\n          schema: {\n            type: 'object',\n            properties: {\n            }\n          }\n        }\n      }\n    }\n  }\n};\n")),m.a.createElement(c.MDXTag,{name:"p",components:a},"There's a lot of information already there, and you can check out the ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/usds/us-forms-system/tree/master/docs"}},"form config specifications")," to see what each property means. For now, we're going to look at the content of the form, which lives in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"chapters"),"."),m.a.createElement(c.MDXTag,{name:"p",components:a},"At the most basic level, our forms consist of: widgets, fields, pages, and chapters."),m.a.createElement(c.MDXTag,{name:"ul",components:a},m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Widgets")," are the basic form controls, things like ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"<input/>")," and ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"<select/>")," elements."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Fields")," are the next level up and contain a widget and a ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"<label/>"),", plus some extra optional description information."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},"We then have ",m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"pages"),", which are collections of fields."),m.a.createElement(c.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"strong",components:a,parentName:"li"},"Chapters")," are collections of pages.")),m.a.createElement(c.MDXTag,{name:"p",components:a},"We can see in the config that there's already one chapter, with one page inside it, called ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"page1"),". In the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"page1")," object there are a few pieces of information, which we can mostly ignore for now. The important properties for us right now are ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"uiSchema")," and ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"schema"),". ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"schema")," is the initial structure of our page, in the form of a ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://spacetelescope.github.io/understanding-json-schema/"}},"JSON Schema"),". This describes the type of data that will result from a user filling in our form. It's also used by the form library to determine what fields and widgets to display in the application, except when overridden by ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"uiSchema"),". ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"uiSchema")," is an object that has extra, user interface-focused information to help render the form."),m.a.createElement(c.MDXTag,{name:"p",components:a},"Let's add a property to ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"schema"),":"),m.a.createElement(c.MDXTag,{name:"pre",components:a},m.a.createElement(c.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:a},"Now if you go to ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://localhost:3001/new-form/first-page"}},"http://localhost:3001/new-form/first-page")," you should see this:"),m.a.createElement(c.MDXTag,{name:"p",components:a},m.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/65b5f11ebcfadc7831092f6c2aa79637/61857/first-field.png",style:{display:"block"},target:"_blank",rel:"noopener"},m.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"674px"}},m.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.34124629080118%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),m.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"first field",title:"",src:"/static/65b5f11ebcfadc7831092f6c2aa79637/61857/first-field.png",srcSet:"/static/65b5f11ebcfadc7831092f6c2aa79637/f4a45/first-field.png 259w,\n/static/65b5f11ebcfadc7831092f6c2aa79637/ef0f6/first-field.png 518w,\n/static/65b5f11ebcfadc7831092f6c2aa79637/61857/first-field.png 674w",sizes:"(max-width: 674px) 100vw, 674px"})))),m.a.createElement(c.MDXTag,{name:"p",components:a},"That's not the most exciting field, but it's a field! We can add a title to it by adding to ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"uiSchema"),":"),m.a.createElement(c.MDXTag,{name:"pre",components:a},m.a.createElement(c.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:a},"That makes it look a little more presentable:"),m.a.createElement(c.MDXTag,{name:"p",components:a},m.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/8110d69efa83f373f2423126a7269553/8d582/field-with-label.png",style:{display:"block"},target:"_blank",rel:"noopener"},m.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"726px"}},m.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.3168044077135%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),m.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"field with label",title:"",src:"/static/8110d69efa83f373f2423126a7269553/8d582/field-with-label.png",srcSet:"/static/8110d69efa83f373f2423126a7269553/f4a45/field-with-label.png 259w,\n/static/8110d69efa83f373f2423126a7269553/ef0f6/field-with-label.png 518w,\n/static/8110d69efa83f373f2423126a7269553/8d582/field-with-label.png 726w",sizes:"(max-width: 726px) 100vw, 726px"})))),m.a.createElement(c.MDXTag,{name:"p",components:a},"Note that ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"uiSchema")," doesn't follow exactly the same structure as ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"schema"),": you don't need the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"properties")," object. This is because ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"uiSchema")," treats everything without a ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ui:")," prefix as a field name, with one exception for array fields."),m.a.createElement(c.MDXTag,{name:"p",components:a},"Changing the the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"type")," property in your field will change the data accepted and also the way it displays on the form. You can change it to be ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"boolean")," and get a checkbox and ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"number")," to get a number input. If you want a ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"select")," box, you use JSON Schema's ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"enum")," property:"),m.a.createElement(c.MDXTag,{name:"pre",components:a},m.a.createElement(c.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string',\n        'enum': [\n          'First option',\n          'Second option'\n        ]\n      }\n    }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:a},"That will get you a select box with options:"),m.a.createElement(c.MDXTag,{name:"p",components:a},m.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/dbf48af7f1578ec6af86a6dfb0f4389d/cbf4c/select-field.png",style:{display:"block"},target:"_blank",rel:"noopener"},m.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"692px"}},m.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.55491329479769%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),m.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"select field",title:"",src:"/static/dbf48af7f1578ec6af86a6dfb0f4389d/cbf4c/select-field.png",srcSet:"/static/dbf48af7f1578ec6af86a6dfb0f4389d/f4a45/select-field.png 259w,\n/static/dbf48af7f1578ec6af86a6dfb0f4389d/ef0f6/select-field.png 518w,\n/static/dbf48af7f1578ec6af86a6dfb0f4389d/cbf4c/select-field.png 692w",sizes:"(max-width: 692px) 100vw, 692px"})))),m.a.createElement(c.MDXTag,{name:"p",components:a},"Some types of data might have different valid ways of asking the user for input. For example, a field that uses ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"enum")," could also use radio buttons. You can change that with ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ui:widget"),":"),m.a.createElement(c.MDXTag,{name:"pre",components:a},m.a.createElement(c.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label',\n      'ui:widget': 'radio'\n    }\n  },\n  schema: {\n    type: 'object',\n    properties: {\n      myField: {\n        type: 'string',\n        'enum': [\n          'First option',\n          'Second option'\n        ]\n      }\n    }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:a},"Now the form offers two radio buttons to choose from:"),m.a.createElement(c.MDXTag,{name:"p",components:a},m.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/eca115081f915c328f66dd7d97edb9c3/4f3bc/radio-buttons.png",style:{display:"block"},target:"_blank",rel:"noopener"},m.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"688px"}},m.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.48837209302325%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),m.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"radio buttons",title:"",src:"/static/eca115081f915c328f66dd7d97edb9c3/4f3bc/radio-buttons.png",srcSet:"/static/eca115081f915c328f66dd7d97edb9c3/f4a45/radio-buttons.png 259w,\n/static/eca115081f915c328f66dd7d97edb9c3/ef0f6/radio-buttons.png 518w,\n/static/eca115081f915c328f66dd7d97edb9c3/4f3bc/radio-buttons.png 688w",sizes:"(max-width: 688px) 100vw, 688px"})))),m.a.createElement(c.MDXTag,{name:"p",components:a},"You can also mark fields as required, which will prevent you from moving to the next page without filling them out:"),m.a.createElement(c.MDXTag,{name:"pre",components:a},m.a.createElement(c.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"page1: {\n  path: 'first-page',\n  title: 'First Page',\n  uiSchema: {\n    myField: {\n      'ui:title': 'My field label',\n      'ui:widget': 'radio'\n    }\n  },\n  schema: {\n    type: 'object',\n    required: ['myField'],\n    properties: {\n      myField: {\n        type: 'string',\n        'enum': [\n          'First option',\n          'Second option'\n        ]\n      }\n    }\n  }\n}\n")),m.a.createElement(c.MDXTag,{name:"p",components:a},"If you do fill in the required information and click Continue, you'll end up on the review page. The review page for our forms is generated based on your chapters and pages and provides a quick way to review the data that you've entered:"),m.a.createElement(c.MDXTag,{name:"p",components:a},m.a.createElement("a",{className:"gatsby-resp-image-link",href:"/static/45223130f8b3010e7fd768288ea3799f/e6592/review.png",style:{display:"block"},target:"_blank",rel:"noopener"},m.a.createElement("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"695px"}},m.a.createElement("span",{className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.43884892086331%",position:"relative",bottom:"0px",left:"0px",backgroundSize:"cover",display:"block"}}),m.a.createElement("img",{className:"gatsby-resp-image-image",style:{width:"100%",height:"100%",margin:"0px",verticalAlign:"middle",position:"absolute",top:"0px",left:"0px",boxShadow:"inset 0px 0px 0px 400px white"},alt:"review",title:"",src:"/static/45223130f8b3010e7fd768288ea3799f/e6592/review.png",srcSet:"/static/45223130f8b3010e7fd768288ea3799f/f4a45/review.png 259w,\n/static/45223130f8b3010e7fd768288ea3799f/ef0f6/review.png 518w,\n/static/45223130f8b3010e7fd768288ea3799f/e6592/review.png 695w",sizes:"(max-width: 695px) 100vw, 695px"})))),m.a.createElement(c.MDXTag,{name:"p",components:a},"Note that if you refresh in the middle of the form, your data will be lost and the review page won't have any content to edit."),m.a.createElement(c.MDXTag,{name:"p",components:a},"Once you've reviewed your form, you have to click the checkbox to agree to the privacy policy and then you can submit! For now, though, that Submit button will fail because there's no api to submit the data to."),m.a.createElement(c.MDXTag,{name:"p",components:a},"That's it! Continue on in our documentation to learn about building more complex forms and the whole process for building and submitting a new form."),m.a.createElement("hr",null),m.a.createElement(c.MDXTag,{name:"p",components:a},"Next: ",m.a.createElement(c.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"./form-tutorial-intermediate"}},"Vets Website Form Tutorial - Intermediate")))},a}(m.a.Component),u={}},330:function(e,a,t){"use strict";t.d(a,"b",function(){return l});var n=t(2),o=t.n(n),r=t(13),i=t.n(r),s=t(68),m=t.n(s);t.d(a,"a",function(){return m.a});t(332);var c=o.a.createContext({}),l=function(e){return o.a.createElement(c.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},331:function(e,a){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Accessing internal tools",href:"getting-started/internal-tools"},{name:"VA.gov environments",href:"getting-started/environments"},{name:"Development workflow",href:"getting-started/workflow"},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"},{name:"Releases",href:"getting-started/common-tasks/releases"},{name:"Reviewing feature branches",href:"getting-started/common-tasks/reviewing-feature-branches"}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"architecture/metalsmith/urls"},{name:"How templates work",href:"architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Topology",href:"architecture/site-structure/topology-overview"},{name:"Client overview",href:"architecture/site-structure/client-overview"},{name:"Styling",href:"architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Redux standards",href:"architecture/front-end-standards/redux"},{name:"Styles",href:"architecture/front-end-standards/styles"},{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Accessibility",href:"architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"architecture/visual-regression-testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"platform/feature-flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},332:function(e,a,t){var n;e.exports=(n=t(334))&&n.default||n},333:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},334:function(e,a,t){"use strict";t.r(a);var n=t(18),o=t.n(n),r=t(2),i=t.n(r),s=t(13),m=t.n(s),c=t(94),l=t(9),p=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return i.a.createElement(c.a,o()({location:a,pageResources:t},t.json))};p.propTypes={location:m.a.shape({pathname:m.a.string.isRequired}).isRequired},a.default=p},335:function(e,a,t){"use strict";var n=t(3),o=t.n(n),r=t(333),i=t(2),s=t.n(i),m=t(13),c=t.n(m),l=t(338),p=t.n(l),d=t(330),u=(t(17),t(133),t(134),t(331)),g=t.n(u),f=t(18),h=t.n(f),b=t(339),y=t.n(b),E=function(e){function a(a){var t;return(t=e.call(this,a)||this).state=g.a.sections.reduce(function(e,a){var t;return h()(((t={})[a.id]=!1,t),e)},{}),t}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props,t=a.open,n=a.onClose,o=a.location;return s.a.createElement("div",{className:y()("site-c-mobile-nav",{"is-visible":t}),id:"mobile-nav"},s.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:n,"aria-label":"Close this menu"},s.a.createElement("i",{className:"fas fa-times"})),s.a.createElement("div",{className:"usa-accordion "},g.a.sections.map(function(a){return s.a.createElement("div",{key:a.id},s.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},s.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var t;return e.setState(((t={})[a.id]=!e.state[a.id],t))},"aria-expanded":e.state[a.id]?"true":"false","aria-controls":"nav-"+a.id},a.name)),s.a.createElement("div",{id:"nav-"+a.id,"aria-hidden":e.state[a.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},s.a.createElement("ul",{className:"site-c-mobile-nav-list"},s.a.createElement("li",{className:"site-c-mobile-nav-list__item"},s.a.createElement(d.a,{className:y()("site-c-mobile-nav-list__link",{current:o.pathname===a.href}),to:a.href},"Overview")))))})))},a}(s.a.Component),w=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={navOpen:!1},t}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props.location;return s.a.createElement("div",null,s.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),s.a.createElement("header",{className:"site-c-header",role:"banner"},s.a.createElement("div",{className:"site-l-wrapper"},s.a.createElement("div",{className:"site-c-header__masthead"},s.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},s.a.createElement("em",{className:"site-c-header__logo-text"},s.a.createElement(d.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},s.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",s.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),s.a.createElement("div",{className:"site-c-header__utility-links"},s.a.createElement("div",{id:"search-container",className:"site-search-container"},s.a.createElement("i",{className:"fas fa-search search-icon"}),s.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),s.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),s.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},s.a.createElement("i",{className:"fas fa-search"})),s.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),s.a.createElement("nav",{className:"site-c-header__nav"},s.a.createElement("ul",{className:"site-c-header__nav-list"},g.a.sections.map(function(e){return s.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},s.a.createElement(d.a,{className:"site-c-header__nav-item__link "+(a.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),s.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},s.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),s.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),s.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&s.a.createElement("div",{className:"site-c-overlay is-visible"}),s.a.createElement(E,{location:a,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},a}(s.a.Component),v=(t(340),function(e){function a(){return e.apply(this,arguments)||this}o()(a,e);var t=a.prototype;return t.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},t.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},t.render=function(){var e=this.props,a=e.children,t=e.location;return s.a.createElement(d.b,{query:"1044757290",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(w,{location:t}),a)},data:r})},a}(s.a.Component));v.propTypes={children:c.a.node.isRequired};a.a=v},336:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},337:function(e,a,t){"use strict";var n=t(2),o=t.n(n),r=t(13),i=t.n(r),s=t(335),m=(t(17),t(133),t(134),t(135),t(330)),c=t(336);function l(){return o.a.createElement(m.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function p(e){var a=e.items;return a.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},a.map(function(e){return o.a.createElement("li",{key:e.name},!!e.items&&o.a.createElement("li",{key:e.name},o.a.createElement("h4",null,e.name),o.a.createElement(p,{items:e.items})),"componentList"===e.query&&o.a.createElement("li",{key:e.name},o.a.createElement("h4",null,e.name),o.a.createElement(l,null)),!!e.href&&o.a.createElement("li",{key:e.name},o.a.createElement(m.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&o.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var d=t(331),u=t.n(d);function g(e){var a=e.location,t=u.a.sections.find(function(e){return a.pathname.includes(e.href)});return o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},!!t&&o.a.createElement(p,{items:t.items}),!t&&o.a.createElement("ul",{className:"site-c-sidenav-list"},u.a.sections.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(m.a,{to:e.href},e.name))})))}function f(e){var a=e.children,t=e.location;return o.a.createElement(s.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},a)))}t.d(a,"a",function(){return f}),f.propTypes={children:i.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-form-tutorial-basic-mdx-7636a95ca816a46ff69b.js.map