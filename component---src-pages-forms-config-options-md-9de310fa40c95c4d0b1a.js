(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{343:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return h})),t.d(n,"_frontmatter",(function(){return c}));t(7),t(6),t(4),t(9),t(10);var a=t(1),o=t.n(a),r=t(2),i=t(333);var s={},h=function(e){var n,t;function a(n){var t;return(t=e.call(this,n)||this).layout=i.a,t}return t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,a.prototype.render=function(){var e=this.props,n=e.components,t=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},s,t),components:n},o.a.createElement("h1",{id:"form-config-options"},"Form config options"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"const formConfig = {\n  // Prefix string to add to the path for each page.\n  urlPrefix: '',\n\n  // The introduction page component. To exclude an introduction page, remove\n  // this component.\n  introduction: IntroductionComponent,\n\n  // The confirmation page component that will render after the user\n  // successfully submits the form.\n  confirmation: ConfirmationComponent,\n\n  // The prefix for Google Analytics events that are sent for different form\n  // actions.\n  trackingPrefix: '',\n\n  // The title of the form, rendered on all pages.\n  title: '',\n\n  // The subtitle of the form, usually the form number. The subtitle is rendered\n  // on all pages when there's also a title.\n  subTitle: '',\n\n  // Schema definitions that can be referenced on any page. These are added to\n  // each page's schema in the reducer code, so that you don't have to put all\n  // of the common fields in the definitions property in each page schema. For\n  // more information on definitions, see schema.definitions below.\n  defaultDefinitions: {},\n\n  // When a user begins completing a pre-filled form, this function is called\n  // after data migrations are run for pre-filled data in order to make\n  // necessary updates to the data or form schema ahead of time.\n  prefillTransformer: (pages, formData, metadata ) => { pages, formData, metadata },\n\n  // The object that contains the configuration for each chapter.\n  chapters: {\n    // Each property is the key for a chapter.\n    chapterOne: {\n      // The title of the chapter.\n      title: '',\n\n      // The object that contains the pages in each chapter.\n      pages: {\n        // Each property is the key for a page, and should be unique across\n        // chapters.\n        pageOne: {\n          // The URL for the page.\n          path: 'some-path',\n\n          // The title of the page that renders on the review page.\n          title: '',\n          // `title` can also be a function that receives the current data as a\n          // parameter:\n          title: formData => `A title for ${formData.thing}`,\n\n          // Any initial data that should be set for the form.\n          initialData: {\n            field1: 'Default string'\n          },\n\n          // Specifies that a page will turn its schema into a page for each\n          // item in an array, such as an array of children with a page for each\n          // child. The schema/uiSchema for this type of page should be built as\n          // usual for an array field.\n          showPagePerItem: true,\n          // The path to the array.\n          arrayPath: 'children',\n          // Items in the array that should not have a page.\n          itemFilter: () => true,\n          // You must specify a path with an :index parameter.\n          path: 'some-path/:index',\n\n          // The JSON schema object for the page, following the JSON Schema\n          // format.\n          schema: {\n            type: 'object',\n            // A schema's properties refer to definitions. For example:\n            // \"homePhone\": { \"$ref\": \"#/definitions/phone\" } In the\n            // configuration file, the definition for `phone` must be added into\n            // definitions in order to be parsed correctly and added to\n            // `homePhone`.\n            definitions: {},\n            properties: {\n              field1: {\n                type: 'string'\n              },\n              // Fields of type `string`, `boolean`, `number`, and `array` that\n              // begin with `view:` are excluded from data that's sent to the\n              // server. Instead, their children are merged into the parent\n              // object and sent to the server. Use these to exclude fields from\n              // being sent to the server, such as a question that's only used\n              // to reveal other questions, or to group related questions\n              // together to be conditionally revealed that aren't in an object\n              // in the schema.\n              'view:field2': {\n                type: 'string'\n              },\n              'view:artificialGroup': {\n                type: 'object',\n                properties: {\n                  // `view:artificialGroup` is flattened. `subField1` and\n                  // `subField2` are siblings of `field1` when sent to the API.\n                  subField1: {\n                    type: 'string'\n                  },\n                  subField2: {\n                    type: 'boolean'\n                  }\n                }\n              }\n            }\n          },\n\n          // See \"About the `schema` and `uiSchema` objects\" below.\n          uiSchema: {\n            'ui:title': 'My form',\n            field1: {\n              'ui:title': 'My field'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nexport default formConfig\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/veteran-facing-services-tools/about-the-schema-and-uischema-objects"}},"About the schema and uiSchema objects")))},a}(o.a.Component),c={}}}]);
//# sourceMappingURL=component---src-pages-forms-config-options-md-9de310fa40c95c4d0b1a.js.map