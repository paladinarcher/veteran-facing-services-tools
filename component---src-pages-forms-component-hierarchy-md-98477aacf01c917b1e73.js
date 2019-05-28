(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{290:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return d}),a.d(n,"_frontmatter",function(){return h});a(42);var t=a(43),o=a.n(t),m=a(3),r=a.n(m),c=a(2),i=a.n(c),p=a(4),l=a(350),s={},d=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=l.a,a}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return i.a.createElement(p.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},s,a),components:n},i.a.createElement("h1",{id:"about-the-react-component-hierarchy"},"About the React component hierarchy"),i.a.createElement(p.MDXTag,{name:"p",components:n},"The VAFS builds a React application of a form, and determines which React components to render based on the description of the form in the form configuration file."),i.a.createElement("h2",{id:"in-this-guide"},"In this guide"),i.a.createElement(p.MDXTag,{name:"ul",components:n},i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#about-the-form-component-fields-and-widgets"}},"About the ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"Form")," component, fields, and widgets"),i.a.createElement(p.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#example-schema-string-object"}},"Example schema: ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"string")," object")),i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#example-schema-string-with-enum-property"}},"Example schema: ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"string")," with ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"enum")," property")),i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#example-schema-object"}},"Example schema: ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"object"))),i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#example-schema-arrayfield"}},"Example schema: ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"ArrayField"))))),i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#field-component-props"}},"Field component props"),i.a.createElement(p.MDXTag,{name:"ul",components:n,parentName:"li"},i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#about-the-onchange-field-component"}},"About the ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"onChange")," field component")),i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#about-the-uischema-field-component"}},"About the ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"uiSchema")," field component"))))),i.a.createElement("h2",{id:"about-the-form-component-fields-and-widgets"},"About the Form component, fields, and widgets"),i.a.createElement(p.MDXTag,{name:"p",components:n},"At the top level, RJSF uses a ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form")," component to take the schema inputs and render a hierarchy of components for each field of the form:"),i.a.createElement(p.MDXTag,{name:"ul",components:n},i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"em",components:n,parentName:"li"},"Fields")," generally match the ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"type")," attribute in a ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"schema")," object. There are object fields, array fields, number fields, boolean fields, and string fields. Except for arrays and objects, the fields render a label (via ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"FieldTemplate"),") and a widget. To specify a particular field, set the ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ui:field")," property to a specific field."),i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},"A ",i.a.createElement(p.MDXTag,{name:"em",components:n,parentName:"li"},"widget")," is the html input element that accepts data from the user. To specify a particular widget, set the  ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ui:widget")," property to ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"text"),", ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"email"),", ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"checkbox"),", ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"radio"),", ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"select"),", and ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"textarea"),". While there are many widgets provided by RJSF, the defaults are overwritten with these versions.")),i.a.createElement("h3",{id:"example-schema-string-object"},"Example schema: string object"),i.a.createElement(p.MDXTag,{name:"pre",components:n},i.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"{\n  type: 'string'\n}\n")),i.a.createElement(p.MDXTag,{name:"p",components:n},"The two ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Field")," components determine which fields and widgets to render. ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"SchemaField")," uses the two schemas the library accepts, ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"schema")," and ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),", to determine what other ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Field")," component to render. The example chose ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"StringField")," because the schema type was ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"string"),". The ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"StringField")," component then rendered ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"TextWidget"),", based on ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"schema")," and ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),", because the only information provided was that the field is a string (the default widget type)."),i.a.createElement(p.MDXTag,{name:"pre",components:n},i.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"<SchemaField>\n  <StringField>\n    <FieldTemplate>\n      <TextWidget/>\n    </FieldTemplate>\n  </StringField>\n</SchemaField>\n")),i.a.createElement("h3",{id:"example-schema-string-with-enum-property"},"Example schema: string with enum property"),i.a.createElement(p.MDXTag,{name:"pre",components:n},i.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"{\n  type: 'string',\n  enum: ['first', 'second', 'third']\n}\n")),i.a.createElement(p.MDXTag,{name:"p",components:n},"The hierarchy for this field uses ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"SelectWidget")," instead of ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"TextWidget"),", because ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"StringField")," detected the ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"enum")," property in the schema."),i.a.createElement(p.MDXTag,{name:"pre",components:n},i.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"<SchemaField>\n  <StringField>\n    <FieldTemplate>\n      <SelectWidget/>\n    </FieldTemplate>\n  </StringField>\n</SchemaField>\n")),i.a.createElement(p.MDXTag,{name:"p",components:n},"While in most cases a field component is responsible for rendering a label and a widget, for ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"object")," and ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"array")," schema types, the field component renders additional field components for each of the elements they contain."),i.a.createElement("h3",{id:"example-schema-object"},"Example schema: object"),i.a.createElement(p.MDXTag,{name:"p",components:n},"This is an ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"object")," schema with two string fields."),i.a.createElement(p.MDXTag,{name:"pre",components:n},i.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"{\n  type: 'object',\n  properties: {\n    field1: {\n      type: 'string'\n    },\n    field2: {\n      type: 'string'\n    }\n  }\n}\n")),i.a.createElement(p.MDXTag,{name:"p",components:n},"The ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ObjectField")," component renders a ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"SchemaField")," component for each of its properties. Those properties are both ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"string")," types, so it looks like the first hierarchy, but nested."),i.a.createElement(p.MDXTag,{name:"pre",components:n},i.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"<SchemaField>\n  <ObjectField>\n    <SchemaField>\n      <StringField>\n        <FieldTemplate>\n          <TextWidget/>\n        </FieldTemplate>\n      </StringField>\n    </SchemaField>\n    <SchemaField>\n      <StringField>\n        <FieldTemplate>\n          <TextWidget/>\n        </FieldTemplate>\n      </StringField>\n    </SchemaField>\n  </ObjectField>\n</SchemaField>\n")),i.a.createElement("h3",{id:"example-schema-arrayfield"},"Example schema: ArrayField"),i.a.createElement(p.MDXTag,{name:"p",components:n},i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ArrayField")," renders a ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"SchemaField")," component for each item in the array. The library only uses the array field where each item is an object type schema."),i.a.createElement(p.MDXTag,{name:"pre",components:n},i.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      field1: {\n        type: 'string'\n      },\n      field2: {\n        type: 'string'\n      }\n    }\n  }\n}\n")),i.a.createElement("h2",{id:"field-component-props"},"Field component props"),i.a.createElement(p.MDXTag,{name:"p",components:n},"In order for each component to know what to render, field components pass a collection of props down through the component hierarchy. Most are passed to widget components."),i.a.createElement(p.MDXTag,{name:"ul",components:n},i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"name"),": The property name of the current field. For example, the object schema above would be named ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"field1"),"."),i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"required"),": If the field is required or not (i.e. the property name is in the schema's ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"required")," array)."),i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"schema"),": The schema for the specific field."),i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"uiSchema"),': The ui schema for this field. See "',i.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#about-the-uischema-field-component"}},"About the ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"uiSchema")," field component"),'."'),i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"errorSchema"),": An object that contains the list of errors for the current field and any child properties, if the field is an array or object."),i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"idSchema"),": An object that contains the field IDs for the current field and any child properties. The library generates IDs for each field by joining each property name with an underscore."),i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"formData"),": The actual data entered for the field so far."),i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onChange"),": The function that's called when data changes. See \"",i.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#about-the-onchange-field-component"}},"About the ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"onChange")," field component"),'."'),i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onBlur"),": The function that's called when focus is lost on a widget.")),i.a.createElement("h3",{id:"about-the-onchange-field-component"},"About the onChange field component"),i.a.createElement(p.MDXTag,{name:"p",components:n},"When a user enters data, each widget calls ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onChange"),". Each component in the hierarchy passes an ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onChange")," handler to child fields. When child data changes, the component combines it with the rest of the data and calls the ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onChange")," prop passed to it from its parent."),i.a.createElement(p.MDXTag,{name:"pre",components:n},i.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"{\n  type: 'object',\n  properties: {\n    field1: {\n      type: 'string'\n    }\n  }\n}\n")),i.a.createElement(p.MDXTag,{name:"p",components:n},"In this example:"),i.a.createElement(p.MDXTag,{name:"ol",components:n},i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ol"},"The user types 'a'."),i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ol"},"The ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"TextWidget")," for field1 calls ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onChange")," with 'a'."),i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ol"},"The ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onChange")," property came from the parent ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ObjectField")," component, which puts 'a' in an object as ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"field1")," (",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"{ field1: 'a' }"),"), then calls the ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onChange")," prop it was passed."),i.a.createElement(p.MDXTag,{name:"li",components:n,parentName:"ol"},"When it reaches the top-level ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Form")," component, RJSF runs the JSON Schema validation and passes the results through the component hierarchy.")),i.a.createElement(p.MDXTag,{name:"p",components:n},"Similar to Redux, all state is kept in the ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form")," component, or the root of the form. All data processing and validation happens in ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form"),", or is triggered by hooks provided by ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form"),". The VAFS code built on top of this processes the schemas and form data in Redux, triggered by events provided by ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form"),"."),i.a.createElement("h3",{id:"about-the-uischema-field-component"},"About the uiSchema field component"),i.a.createElement(p.MDXTag,{name:"p",components:n},"Along with the regular JSON Schema, a UI schema for UI-specific options that don't fit within the JSON Schema standard is also optionally defined for each field. The UI schema is passed to the form config file as an object, ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"uiSchema"),', for each field. For more information, see "',i.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/veteran-facing-services-tools/forms/about-the-schema-and-uischema-objects#understanding-the-uischema-object"}},"Understanding the ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"uiSchema")," object"),'."'))},n}(i.a.Component),h={}},349:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},350:function(e,n,a){"use strict";var t=a(2),o=a.n(t),m=a(13),r=a.n(m),c=a(353),i=(a(133),a(134),a(135),a(17),a(349)),p=a(351);function l(){return o.a.createElement(p.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function s(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(p.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(s,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(s,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):o.a.createElement(s,{item:e,key:e.name})})):null}var h=a(352),g=a.n(h);function u(e){var n=e.location,a=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:a.items}))):null}function E(e){var n=e.children,a=e.location;return o.a.createElement(c.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(u,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return E}),E.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-component-hierarchy-md-98477aacf01c917b1e73.js.map