(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{287:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return g}),a.d(n,"_frontmatter",function(){return d});a(42);var t=a(43),o=a.n(t),m=a(3),r=a.n(m),s=a(2),i=a.n(s),c=a(4),l=a(350),p={},g=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=l.a,a}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:n},i.a.createElement("h1",{id:"available-form-widgets"},"Available form widgets"),i.a.createElement(c.MDXTag,{name:"p",components:n},"Widgets are React components that return specific form elements. Set these widgets in a config file while building your form."),i.a.createElement(c.MDXTag,{name:"p",components:n},"Some widgets are associated with particular schema types or formats. There are additional widgets available, but VAFS uses definitions they're included in, rather than just the field."),i.a.createElement(c.MDXTag,{name:"p",components:n},"Widgets from the ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"./about-the-schema-and-uischema-objects.md#understanding-the-uischema-object"}},"react-jsonschema-form library")," include string mappings. Widgets created specifically for VAFS do not have mappings, and therefore must be specified by passing the component for the widget directly to the config. To include such widgets, import the widget at the top of the file:"),i.a.createElement(c.MDXTag,{name:"pre",components:n},i.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import CurrencyWidget from 'platform/forms-system/src/js/widgets/CurrencyWidget';\n")),i.a.createElement(c.MDXTag,{name:"p",components:n},"Then, set the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ui:widget")," field to the imported widget name:"),i.a.createElement(c.MDXTag,{name:"pre",components:n},i.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"uiSchema: {\n  ...\n  'ui:widget': CurrencyWidget,\n  ...\n}\n")),i.a.createElement(c.MDXTag,{name:"p",components:n},"Available widgets are:"),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#arraycountwidget"}},"ArrayCountWidget")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#checkboxwidget"}},"CheckboxWidget")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#currencywidget"}},"CurrencyWidget")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#datewidget"}},"DateWidget")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#emailwidget"}},"EmailWidget")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#phonenumberwidget"}},"PhoneNumberWidget")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#radiowidget"}},"RadioWidget")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#selectwidget"}},"SelectWidget")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#ssnwidget"}},"SSNWidget")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#textwidget"}},"TextWidget")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#yesnowidget"}},"YesNoWidget"))),i.a.createElement("h2",{id:"arraycountwidget"},"ArrayCountWidget"),i.a.createElement(c.MDXTag,{name:"p",components:n},"Renders a ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},'<input type="number">'),' HTML element, and is used when determining how many times a group of questions should be rendered. For more information about grouping common questions, see "',i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/veteran-facing-services-tools/forms/available-features-and-usage-guidelines.md#sequential-duplicate-form-groups"}},"Sequential duplicate form groups"),'."'),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/ArrayCountWidget.jsx"}},"ArrayCountWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Usage:")," In the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"uiSchema"),", specify ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"'ui:widget': ArrayCountWidget")," for the given field.")),i.a.createElement("h2",{id:"checkboxwidget"},"CheckboxWidget"),i.a.createElement(c.MDXTag,{name:"p",components:n},"Renders a single ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},'<input type="checkbox">'),' HTML element. For information about rendering multiple checkboxes together, see "',i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/veteran-facing-services-tools/forms/available-features-and-usage-guidelines.md#checkbox-group"}},"Checkbox Group"),'."'),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/CheckboxWidget.jsx"}},"CheckboxWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Usage:")," Usually the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"CheckboxWidget")," is not specified directly in the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"uiSchema")," because it renders by default for a schema that specifies ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"type: 'boolean'"),".")),i.a.createElement("h2",{id:"currencywidget"},"CurrencyWidget"),i.a.createElement(c.MDXTag,{name:"p",components:n},"Renders a ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<input>")," HTML element with some additional logic to handle parsing currency inputs."),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/CurrencyWidget.jsx"}},"CurrencyWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Usage:")," In the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"uiSchema"),", specify ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"'ui:widget': CurrencyWidget")," for the given field.")),i.a.createElement("h2",{id:"datewidget"},"DateWidget"),i.a.createElement(c.MDXTag,{name:"p",components:n},"Renders three separate fields for dates, two ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<select>")," elements for month and day and one ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<input>")," element for the year."),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/DateWidget.jsx"}},"DateWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Usage:")," In the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"uiSchema"),", specify ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"'ui:widget': 'date'")," for the given field.")),i.a.createElement("h2",{id:"emailwidget"},"EmailWidget"),i.a.createElement(c.MDXTag,{name:"p",components:n},"Renders a ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"TextWidget")," with the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},'type: "email"')," passed to the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<input>")," element."),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/EmailWidget.jsx"}},"EmailWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Usage:")," In the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"uiSchema"),", specify ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"'ui:widget': 'email'")," for the given field.")),i.a.createElement("h2",{id:"phonenumberwidget"},"PhoneNumberWidget"),i.a.createElement(c.MDXTag,{name:"p",components:n},"Renders a ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"TextWidget")," with additional logic to strip non-numeric characters from the input before saving the input."),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/PhoneNumberWidget.jsx"}},"PhoneNumberWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Usage:")," In the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"uiSchema"),", specify ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"'ui:widget': PhoneNumberWidget")," for the given field.")),i.a.createElement("h2",{id:"radiowidget"},"RadioWidget"),i.a.createElement(c.MDXTag,{name:"p",components:n},"Renders a single radio button for each ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"enum")," value. This overrides the default ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"SelectWidget")," that is normally rendered where ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"enum")," exists."),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/RadioWidget.jsx"}},"RadioWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Usage:")," In the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"uiSchema"),", specify ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"'ui:widget': 'radio'")," for the given field. Usually used with ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"'ui:options': { labels: {}}")," so you can specify the label for each radio button. To see a code example, refer to ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"/veteran-facing-services-tools/forms/available-features-and-usage-guidelines.md#radio-button-group"}},"radio button group in form features"),".")),i.a.createElement("h2",{id:"selectwidget"},"SelectWidget"),i.a.createElement(c.MDXTag,{name:"p",components:n},"Renders a ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<select>")," HTML element. This is the default widget for data of ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"type: 'string'")," with an ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"enum")," property."),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/SelectWidget.jsx"}},"SelectWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Usage:")," Usually the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"SelectWidget")," is not specified directly in the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"uiSchema")," because it renders by default for a schema that specifies ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"type: 'string'")," with an ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"enum")," property.")),i.a.createElement("h2",{id:"ssnwidget"},"SSNWidget"),i.a.createElement(c.MDXTag,{name:"p",components:n},"Renders a ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"TextWidget")," with additional logic to strip the dashes before saving the input."),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/SSNWidget.jsx"}},"SSNWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Usage:")," In the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"uiSchema"),", specify ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"'ui:widget': SSNWidget")," for the given field.")),i.a.createElement("h2",{id:"textwidget"},"TextWidget"),i.a.createElement(c.MDXTag,{name:"p",components:n},"Renders a ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<input>")," HTML element, and is the default widget for data of ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"type: 'string'"),"."),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/TextWidget.jsx"}},"TextWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Usage:")," Usually the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"TextWidget")," is not specified directly in the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"uiSchema")," because it renders by default for a schema that specifies ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"type: 'string'"),".")),i.a.createElement("h2",{id:"yesnowidget"},"YesNoWidget"),i.a.createElement(c.MDXTag,{name:"p",components:n},'Renders two radio buttons, one with a value of "Yes" and one with a value of "No".'),i.a.createElement(c.MDXTag,{name:"ul",components:n},i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"File:")," ",i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/forms-system/src/js/widgets/YesNoWidget.jsx"}},"YesNoWidget.jsx")),i.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"li"},"Usage:")," In the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"uiSchema"),", specify ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"'ui:widget': 'yesNo'")," for the given field.")))},n}(i.a.Component),d={}},349:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},350:function(e,n,a){"use strict";var t=a(2),o=a.n(t),m=a(13),r=a.n(m),s=a(353),i=(a(133),a(134),a(135),a(17),a(349)),c=a(351);function l(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(g,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function p(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(c.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function g(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(g,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(p,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):o.a.createElement(p,{item:e,key:e.name})})):null}var d=a(352),u=a.n(d);function h(e){var n=e.location,a=u.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(g,{items:a.items}))):null}function E(e){var n=e.children,a=e.location;return o.a.createElement(s.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return E}),E.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-available-widgets-mdx-ecf96d6f6a862c2cf629.js.map