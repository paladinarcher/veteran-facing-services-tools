(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{389:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c})),a.d(t,"_frontmatter",(function(){return m}));a(7),a(6),a(4),a(10),a(11);var n=a(1),o=a.n(n),r=a(2),s=a(336);var i={},c=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).layout=s.a,a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},i,a),components:t},o.a.createElement("h1",{id:"redux-action-guidelines"},"Redux Action Guidelines"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Actions are an important part of Redux and in order to making usage of Redux consistent and maintainable across applications, here are some guidelines to follow."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Important note: actions are the objects that are returned by action creator functions and used by reducers to generate a new state object. Guidelines for reducers and action creators will be in other documentation."),o.a.createElement(r.MDXTag,{name:"ol",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Follow the documentation on the ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://redux.js.org"}},"Redux site"),". The basics of actions are ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://redux.js.org/basics/actions"}},"here")," and some frequently asked questions can be found ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://redux.js.org/faq/actions"}},"here"),"."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Define constants for your action types. We typically do this in the same file as the actions, and import them in the reducer."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Actions should reflect something a user did or an external event. It's easy to get in the habit of choosing action types based on what's happening in a component or in the Redux state itself, but choosing them based on implementation details couples the action to that implementation and makes it confusing to change later. Actions are also meant to show the history of what has happened in your application, and a bunch of types like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"SET_FETCH_FORM_STATUS")," are not easy to understand just from the type itself."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Action types should be uppercase, separated by underscores."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ol"},"Action types should be in past tense. The user or external event already happened, you're updating the application state to reflect that fact. Most of our code uses present tense currently, but the consensus is that this is the better convention.")),o.a.createElement("h2",{id:"examples"},"Examples"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Say you have a modal that a user can open or close, which is controlled by a status property in the Redux state. One approach might be to create an action with a type of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"SET_MODAL_STATUS")," to handle this. This gets the job done, but that type doesn't reflect what a user is actually trying to do (open a particular modal), it reflects what is changing in the Redux state (the open/closed status flag is being set)."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Instead, a better approach is to think about what a user is trying to do by triggering that action. ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"MODAL_OPENED")," is a better action type, but you could still improve that by thinking about the context that modal is in. If the user is clicking on a link to show a modal window with some additional information about a subject, you could consider ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ADDITIONAL_INFORMATION_DISPLAYED")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ADDITIONAL_INFORMATION_TOGGLED"),". You should use your best judgment about what makes sense in your code, but the more your action type reflects what the user is trying to accomplish, the buetter."),o.a.createElement("h2",{id:"async-action-objects"},"Async action objects"),o.a.createElement(r.MDXTag,{name:"p",components:t},"A common pattern in Redux is to have several actions related to one asynchronous action, like a server request. You might be updating an address and have actions with types like like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"UPDATE_ADDRESS"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"UPDATE_ADDRESS_SUCCESS"),", and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"UPDATE_ADDRESS_FAILURE"),". To that end, we recommend that you use the suffixes:"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"_STARTED")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"_SUCCEEDED")),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"_FAILED"))),o.a.createElement(r.MDXTag,{name:"p",components:t},"For example, if the user trigger an action to update an address, you would have ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"UPDATE_ADDRESS_STARTED"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"UPDATE_ADDRESS_SUCCEEDED"),", and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"UPDATE_ADDRESS_FAILED"),"."),o.a.createElement(r.MDXTag,{name:"p",components:t},"We also suggest using the following properties for data in those action types:"),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"response"),": the response data in a successful action"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"error"),": the error data in a failed action")))},n}(o.a.Component),m={}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-redux-mdx-5e1fce0af6ec3a7f838e.js.map