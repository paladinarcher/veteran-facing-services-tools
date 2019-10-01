(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{349:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return i})),a.d(n,"_frontmatter",(function(){return s}));a(7),a(6),a(4),a(10),a(11);var t=a(1),o=a.n(t),r=a(2),m=a(336);var c={},i=function(e){var n,a;function t(n){var a;return(a=e.call(this,n)||this).layout=m.a,a}return a=e,(n=t).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a,t.prototype.render=function(){var e=this.props,n=e.components,a=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},c,a),components:n},o.a.createElement("h1",{id:"creating-a-form-config-file"},"Creating a form config file"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Your form is generated from a JSON Schema configuration file called ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"form.js"),", along with a few other key configuration files."),o.a.createElement("h3",{id:"in-this-guide"},"In this guide"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#elements-of-the-form-config"}},"Elements of the form config")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#how-react-components-are-rendered"}},"How React components are rendered"))),o.a.createElement("h3",{id:"elements-of-the-form-config"},"Elements of the form config"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The form config itself is an object with many properties that determine how your form is rendered. It must contain these elements:"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Top level information about the form, such as title, URL, and whether or not certain features are enabled"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Nested objects for each ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"chapter")," of the form (if you're building a multi-page form). Within each ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"chapter"),", additional nested objects for each ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"page")," within that ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"chapter"),'. For more information, see "',o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/forms/creating-custom-fields-and-widgets.md#supporting-multi-page-forms"}},"Supporting multi-page forms"),'."'),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Top-level title and URL information about each ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"page")," of the form, as well as 2 essential objects:",o.a.createElement(r.MDXTag,{name:"ul",components:n,parentName:"li"},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"schema"),": Describes the form fields and the type of data each field accepts"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"uiSchema"),": Describes all UI elements of the form fields, such as label text, error message text, or CSS classes")))),o.a.createElement(r.MDXTag,{name:"p",components:n},"The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"schema")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),' contain the essential information to build all of the form fields. For more information, see "',o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/forms/about-the-schema-and-uischema-objects"}},"About the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"schema")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"uiSchema")," objects"),'." For a comprehensive example of a form config, with descriptions of the main properties you might include, see "',o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/forms/config-options"}},"config options"),'".'),o.a.createElement("h3",{id:"how-react-components-are-rendered"},"How React components are rendered"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The VAFS code uses the form config to determine which React components to render in order to build your form, usually automatically. React components require props to render properly. These are passed down through the top-level ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form")," component, which takes the entire form config itself as a prop. The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form")," component is also connected to the store, so it has access to the form data as well."),o.a.createElement(r.MDXTag,{name:"p",components:n},'For more information, see "',o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/forms/component-hierarchy"}},"About the component hierarchy"),'."'))},t}(o.a.Component),s={}}}]);
//# sourceMappingURL=component---src-pages-forms-creating-a-form-config-file-md-d525a7905517267d701c.js.map