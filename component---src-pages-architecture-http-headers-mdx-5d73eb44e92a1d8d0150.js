(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{291:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return u}),n.d(a,"_frontmatter",function(){return d});n(42);var t=n(43),o=n.n(t),r=n(3),m=n.n(r),c=n(2),l=n.n(c),s=n(4),i=n(337),p={},u=function(e){function a(a){var n;return(n=e.call(this,a)||this).layout=i.a,n}return m()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,n=o()(e,["components"]);return l.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:a},l.a.createElement(s.MDXTag,{name:"h1",components:a},"HTTP Headers used on VA.gov"),l.a.createElement(s.MDXTag,{name:"hr",components:a}),l.a.createElement(s.MDXTag,{name:"h2",components:a},"Overview"),l.a.createElement(s.MDXTag,{name:"ul",components:a},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"HTTP headers control browser behavior"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"Browser behavior is a front end concern"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"Shared responsibility between devops and front end",l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"configuration"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"management"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"user experience"))),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"Typically",l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"devops responsible for the how (e.g. Terraform)"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"front end responsible for the why (e.g. security, caching behavior)")))),l.a.createElement(s.MDXTag,{name:"hr",components:a}),l.a.createElement(s.MDXTag,{name:"h2",components:a},"HTTP Example"),l.a.createElement(s.MDXTag,{name:"ul",components:a},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"raw request and response")),l.a.createElement(s.MDXTag,{name:"pre",components:a},l.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-mermaidjs"}},"graph TB\n    subgraph HTTP\n      F[HTTP <br/>Headers]\nsubgraph HTTP Body\n       G[HTML<br />Head]\n       A[HTML Body]\n       end\n    end\n")),l.a.createElement(s.MDXTag,{name:"hr",components:a}),l.a.createElement(s.MDXTag,{name:"h2",components:a},"HTTP Request Example"),l.a.createElement(s.MDXTag,{name:"ul",components:a},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"GET /health-care/ HTTP/1.1"),l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"action to perform, resource location, http version"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"GET"),", ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"POST"),", ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"PUT"),", ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"DELETE")))),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Host: www.va.gov")," - derived from URI"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Connection: keep-alive"),l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"HTTP persistent connection"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"reduces latency and traffic by reusing TCP connection"))),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Upgrade-Insecure-Requests: 1"),l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"supports ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Content-Security-Policy: upgrade-insecure-requests")),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"basically tells server to redirect http requests to https"))),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"User-Agent: ...")," - identifying information about client software e.g. OS, version")),l.a.createElement(s.MDXTag,{name:"hr",components:a}),l.a.createElement(s.MDXTag,{name:"h2",components:a},"HTTP Request Example continued"),l.a.createElement(s.MDXTag,{name:"ul",components:a},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Accepts: ..."),l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"MIME types supported"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"Server chooses one as the ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Content-Type")," on the response"))),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Accept-Encoding: gzip, defat, br")," - supported compression algorithms"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Accept-Language: en-US,en;q=0.9"),l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"supported language and localization preference"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"q=0.9")," expresses order of preference")))),l.a.createElement(s.MDXTag,{name:"hr",components:a}),l.a.createElement(s.MDXTag,{name:"h2",components:a},"HTTP Response Example"),l.a.createElement(s.MDXTag,{name:"ul",components:a},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"HTTP/1.1 200 OK")," - response version and status code"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Date: ...")),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"x-amz-...: ...")," -  Amazon custom response headers"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Referrer-Policy: no-referrer-when-downgrade"),l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"determines ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Referer")," header behavior i.e. previous page link"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"no-referrer-when-downgrade")," is default behavior- sends previous page link when security protocol is the same"))),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Strict-Transport-Security: ..."),l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"tells the browser to only connect to website via https"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"impacts all future connections to a site")))),l.a.createElement(s.MDXTag,{name:"hr",components:a}),l.a.createElement(s.MDXTag,{name:"h2",components:a},"HTTP Response Example continued"),l.a.createElement(s.MDXTag,{name:"ul",components:a},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"X-Content-Type-Options: no-sniff"),l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"follow the mime-types in the http content-type"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"only applies to scripts and styles right now"))),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"X-Frame-Options: deny"),l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"determines if browser can render page in a frame"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"prevents clickjacking attacks"))),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"X-XSS-Protection: 1; report=/csp-report"),l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"used by older browsers- tells them to stop loading the page if cross-site scripting attack is detected"))),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Content-Encoding: gzip")," - encoding used on body"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Set-Cookie: ...")," - cookie from server")),l.a.createElement(s.MDXTag,{name:"hr",components:a}),l.a.createElement(s.MDXTag,{name:"h2",components:a},"HTTP Response Example continued 2"),l.a.createElement(s.MDXTag,{name:"ul",components:a},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Transfer-Encoding: chunked"),l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"form of encoding used between nodes (hop-by-hop)"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"chunked: ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Content-Length")," is unknown"))),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Connection: Keep-alive")," - see request example")),l.a.createElement(s.MDXTag,{name:"hr",components:a}),l.a.createElement(s.MDXTag,{name:"h2",components:a},"Cache Control Response"),l.a.createElement(s.MDXTag,{name:"ul",components:a},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Cache-Control: public, max-age=86400"),l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"can be stored by any cache"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"private")," indicates response can be cached but contains user specific info"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"max-age=86400")," - number of minutes cache can be used before checking if updated (60 days)"))),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Etag: [hash]"),l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"file hash used when checking if file is updated"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"when matched, server will return status code ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"304 Not Modified"))))),l.a.createElement(s.MDXTag,{name:"hr",components:a}),l.a.createElement(s.MDXTag,{name:"h2",components:a},"Cache Control Request"),l.a.createElement(s.MDXTag,{name:"ul",components:a},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Cache-Control: no-cache")," & ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Pragma: no-cache"),l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"HTTP 1.1 and 1.0"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"check if resource has changed using ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"ETag")," or ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Last-Modified")))),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"If-None-Match: [hash]")," & ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"If-Modified-Since: [date]"),l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"when ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"max-age")," is reached, browser includes in request"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"[date]")," header is used only if ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"[hash]")," is not supported")))),l.a.createElement(s.MDXTag,{name:"hr",components:a}),l.a.createElement(s.MDXTag,{name:"h2",components:a},"Cross-Origin Resource Sharing (CORS)"),l.a.createElement(s.MDXTag,{name:"ul",components:a},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"Applies to all XHR requests not on the same origin"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"CORS headers are returned by the server allowing it to control a range of permissions",l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Access-Control-Allow-Origin: https://www.va.gov")," - if allowed origin doesn't match the current origin, then the browser will not load the resource",l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"... has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.")),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"VA.gov is configured to only add this header when the request contains an origin that matches our whitelist"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"Server ",l.a.createElement(s.MDXTag,{name:"em",components:a,parentName:"li"},"can")," block the request- ours do not opting to always return the resource")))))),l.a.createElement(s.MDXTag,{name:"hr",components:a}),l.a.createElement(s.MDXTag,{name:"h2",components:a},"Cross-Origin Resource Sharing (CORS) OPTIONS"),l.a.createElement(s.MDXTag,{name:"ul",components:a},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"Preflight checks are required for methods that can cause change: POST, DELETE, UPDATE"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"OPTIONS request",l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Access-Control-Request-Headers")," - list of headers client intends to send"))),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"OPTIONS response",l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Access-Control-Allow-Methods: GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS")),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Access-Control-Allow-Headers: x-key-inflection")),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Access-Control-Expose-Headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset")))),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"If any of these permissions don't match the intended request, the browser will cancel it")),l.a.createElement(s.MDXTag,{name:"hr",components:a}),l.a.createElement(s.MDXTag,{name:"h2",components:a},"Cross-Origin Resource Sharing (CORS) Other directives"),l.a.createElement(s.MDXTag,{name:"ul",components:a},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Vary: Origin, Access-Control-Request-Headers, Access-Control-Request-Method"),l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"indicates that response will vary depending on the value of these headers"))),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"Other controls: ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Access-Control-Allow-Methods: GET"),", ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Access-Countrol-Max-Age: 0"),", ",l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Access-Control-Allow-Credentials: true"))),l.a.createElement(s.MDXTag,{name:"hr",components:a}),l.a.createElement(s.MDXTag,{name:"h2",components:a},"Content Security Policy (CSP)"),l.a.createElement(s.MDXTag,{name:"ul",components:a},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"can be an HTTP header or an HTML meta tag"),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"whitelist of valid sources of scripts",l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"script-src: http://search.usa.gov")))),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"can set set up to report CSP violations")),l.a.createElement(s.MDXTag,{name:"hr",components:a}),l.a.createElement(s.MDXTag,{name:"h2",components:a},"Configs"),l.a.createElement(s.MDXTag,{name:"ul",components:a},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"CSP",l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-prod.yml"}},"prod")),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-staging.yml"}},"staging")),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-dev.yml"}},"dev")))),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"CORS (requires manual deployment)",l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-prod/main.tf"}},"prod")),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-staging/main.tf"}},"staging")),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-dev/main.tf"}},"dev")))),l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},"cache-control",l.a.createElement(s.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"https://github.com/department-of-veterans-affairs/devops/blob/d928cbfab6fd791c3b05464bc759a0cd9b4cd6b2/ansible/deployment/roles/deploy-static-assets/tasks/upload-public.yml"}},"prod"))))))},a}(l.a.Component),d={}},330:function(e,a,n){"use strict";n.d(a,"b",function(){return i});var t=n(2),o=n.n(t),r=n(13),m=n.n(r),c=n(68),l=n.n(c);n.d(a,"a",function(){return l.a});n(332);var s=o.a.createContext({}),i=function(e){return o.a.createElement(s.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};i.propTypes={data:m.a.object,query:m.a.string.isRequired,render:m.a.func,children:m.a.func}},331:function(e,a){e.exports={sections:[{id:"getting-started",name:"Getting started",href:"/getting-started",items:[{name:"Start up guide",items:[{name:"Set up VA.gov locally",href:"getting-started"},{name:"Accessing internal tools",href:"getting-started/internal-tools"},{name:"VA.gov environments",href:"getting-started/environments"},{name:"Development workflow",href:"getting-started/workflow"},{name:"Bundes and Code organization",href:"getting-started/bundles-and-code-organization"}]},{name:"Common tasks",items:[{name:"Running VA.gov locally",href:"getting-started/common-tasks/local"},{name:"Building VA.gov",href:"getting-started/common-tasks/build"},{name:"Running tests",href:"getting-started/common-tasks/tests"},{name:"Linting your code",href:"getting-started/common-tasks/lint"},{name:"Creating a new React application",href:"getting-started/common-tasks/new-app"},{name:"Writing a unit test"},{name:"Writing an end-to-end test"},{name:"Updating Formation"},{name:"Adding new pages to this site",href:"getting-started/common-tasks/doc-page"},{name:"Adding pages from Github to this site",href:"getting-started/common-tasks/external-doc-page"},{name:"Add Graphs to MDX",href:"getting-started/common-tasks/add-graphs-to-mdx"},{name:"Creating A Gatsby Plugin",href:"getting-started/common-tasks/creating-gatsby-plugins"},{name:"Releases",href:"getting-started/common-tasks/releases"},{name:"Reviewing feature branches",href:"getting-started/common-tasks/reviewing-feature-branches"}]},{name:"Standards and conventions",items:[]}]},{id:"architecture",name:"Architecture",href:"/architecture",items:[{name:"Metalsmith",items:[{name:"How are URLs created",href:"architecture/metalsmith/urls"},{name:"How templates work",href:"architecture/metalsmith/templates"},{name:"How to create collections and related links",href:"architecture/metalsmith/collections"}]},{name:"Site structure",items:[{name:"Topology",href:"architecture/site-structure/topology-overview"},{name:"Client overview",href:"architecture/site-structure/client-overview"},{name:"Styling",href:"architecture/site-structure/styling-overview"}]},{name:"Front End Standards",items:[{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Redux standards",href:"architecture/front-end-standards/redux"},{name:"Styles",href:"architecture/front-end-standards/styles"},{name:"React standards",href:"architecture/front-end-standards/react"},{name:"Accessibility",href:"architecture/front-end-standards/accessibility"},{name:"Documented Decisions",href:"architecture/front-end-standards/documented-decisions/summary"}]},{name:"How does the build work?"},{name:"How do unit tests work?"},{name:"How do end-to-end tests work?"},{name:"Visual regression testing",href:"architecture/visual-regression-testing"},{name:"Teamsite",href:"architecture/teamsite"}]},{id:"forms",name:"Forms",href:"/forms",items:[{name:"Introduction",href:"forms/when-to-use-fs"},{name:"Tutorial",items:[{name:"Form Tutorial - Basic",href:"forms/form-tutorial-basic"},{name:"Form Tutorial - Intermediate",href:"forms/form-tutorial-intermediate"},{name:"Form Tutorial - Advanced",href:"forms/form-tutorial-advanced"},{name:"Setting up Save in Progress",href:"forms/save-in-progress"},{name:"Forms in Production",href:"forms/forms-in-production"}]},{name:"Architecture",items:[]},{name:"Common tasks",items:[]}]},{id:"platform",name:"Platform",href:"/platform",items:[{name:"Formation",items:[]},{name:"Formation components",query:"componentList"},{name:"Feature flags",href:"platform/feature-flags"},{name:"Identity",items:[]},{name:"Static content",items:[]},{name:"Monitoring",items:[]}]}]}},332:function(e,a,n){var t;e.exports=(t=n(334))&&t.default||t},333:function(e){e.exports={data:{site:{siteMetadata:{title:"VA.gov Developer's Documentations"}}}}},334:function(e,a,n){"use strict";n.r(a);var t=n(18),o=n.n(t),r=n(2),m=n.n(r),c=n(13),l=n.n(c),s=n(94),i=n(9),p=function(e){var a=e.location,n=i.default.getResourcesForPathnameSync(a.pathname);return m.a.createElement(s.a,o()({location:a,pageResources:n},n.json))};p.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=p},335:function(e,a,n){"use strict";var t=n(3),o=n.n(t),r=n(333),m=n(2),c=n.n(m),l=n(13),s=n.n(l),i=n(338),p=n.n(i),u=n(330),d=(n(17),n(133),n(134),n(331)),g=n.n(d),h=n(18),E=n.n(h),f=n(339),T=n.n(f),M=function(e){function a(a){var n;return(n=e.call(this,a)||this).state=g.a.sections.reduce(function(e,a){var n;return E()(((n={})[a.id]=!1,n),e)},{}),n}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props,n=a.open,t=a.onClose,o=a.location;return c.a.createElement("div",{className:T()("site-c-mobile-nav",{"is-visible":n}),id:"mobile-nav"},c.a.createElement("button",{id:"close_mobile_nav_button",className:"site-c-mobile-nav__close-button",type:"button",onClick:t,"aria-label":"Close this menu"},c.a.createElement("i",{className:"fas fa-times"})),c.a.createElement("div",{className:"usa-accordion "},g.a.sections.map(function(a){return c.a.createElement("div",{key:a.id},c.a.createElement("p",{className:"usa-accordion-heading site-c-mobile-nav__accordion-heading vads-u-border-top--0"},c.a.createElement("button",{className:"usa-accordion-button site-c-mobile-nav__accordion-button",onClick:function(){var n;return e.setState(((n={})[a.id]=!e.state[a.id],n))},"aria-expanded":e.state[a.id]?"true":"false","aria-controls":"nav-"+a.id},a.name)),c.a.createElement("div",{id:"nav-"+a.id,"aria-hidden":e.state[a.id]?"false":"true",className:"usa-accordion-content site-c-mobile-nav__accordion-content"},c.a.createElement("ul",{className:"site-c-mobile-nav-list"},c.a.createElement("li",{className:"site-c-mobile-nav-list__item"},c.a.createElement(u.a,{className:T()("site-c-mobile-nav-list__link",{current:o.pathname===a.href}),to:a.href},"Overview")))))})))},a}(c.a.Component),D=function(e){function a(a){var n;return(n=e.call(this,a)||this).state={navOpen:!1},n}return o()(a,e),a.prototype.render=function(){var e=this,a=this.props.location;return c.a.createElement("div",null,c.a.createElement("a",{className:"usa-skipnav",href:"#main-content"},"Skip to main content"),c.a.createElement("header",{className:"site-c-header",role:"banner"},c.a.createElement("div",{className:"site-l-wrapper"},c.a.createElement("div",{className:"site-c-header__masthead"},c.a.createElement("div",{className:"site-c-header__logo",id:"extended-logo"},c.a.createElement("em",{className:"site-c-header__logo-text"},c.a.createElement(u.a,{className:"site-c-header__logo-link",title:"VA.gov client application documentation homepage",to:"/"},c.a.createElement("strong",{className:"vads-u-display--block small-screen:vads-u-display--inline"},"VA.gov")," ",c.a.createElement("span",{className:"vads-u-display--none small-screen:vads-u-display--inline"},"|")," ","Client application documentation"))),c.a.createElement("div",{className:"site-c-header__utility-links"},c.a.createElement("div",{id:"search-container",className:"site-search-container"},c.a.createElement("i",{className:"fas fa-search search-icon"}),c.a.createElement("input",{type:"search",className:"site-search-container__input",id:"search-input",placeholder:"Search...","aria-label":"Search"}),c.a.createElement("ul",{id:"results-container",className:"site-search-results",role:"listbox"}))),c.a.createElement("button",{type:"button",id:"toggle-mobile-search","aria-label":"Show search",className:"site-toggle-search","aria-controls":"mobile-search-container"},c.a.createElement("i",{className:"fas fa-search"})),c.a.createElement("button",{className:"site-c-header__open-mobile-nav-button",id:"open-mobile-nav-button","aria-label":"Open navigation menu",type:"button",onClick:function(){return e.setState({navOpen:!0})}},"Menu")),c.a.createElement("nav",{className:"site-c-header__nav"},c.a.createElement("ul",{className:"site-c-header__nav-list"},g.a.sections.map(function(e){return c.a.createElement("li",{key:e.id,className:"site-c-header__nav-item"},c.a.createElement(u.a,{className:"site-c-header__nav-item__link "+(a.pathname.includes(e.href)?"current":""),to:e.href},e.name))}))))),c.a.createElement("div",{id:"mobile-search-container",className:"site-search-container site-seach-container--mobile"},c.a.createElement("i",{className:"fas fa-search search-icon search-icon--mobile"}),c.a.createElement("input",{type:"search",className:"site-search-container__input vads-u-max-width--none",id:"mobile-search-input",placeholder:"Search...","aria-label":"Search"}),c.a.createElement("ul",{id:"mobile-results-container",className:"site-search-results site-search-results--mobile",role:"listbox"})),this.state.navOpen&&c.a.createElement("div",{className:"site-c-overlay is-visible"}),c.a.createElement(M,{location:a,open:this.state.navOpen,onClose:function(){return e.setState({navOpen:!1})}}))},a}(c.a.Component),X=(n(340),function(e){function a(){return e.apply(this,arguments)||this}o()(a,e);var n=a.prototype;return n.componentDidMount=function(){window.mermaid_config={theme:"default",startOnLoad:!0};var e=document.createElement("script");e.setAttribute("src","https://unpkg.com/mermaid@7.1.0/dist/mermaid.min.js"),document.head.appendChild(e),window.mermaid&&window.mermaid.init(void 0,document.getElementsByClassName("mermaid"))},n.getSitePages=function(e){return e.filter(function(e){return"/"!==e.node.fields.slug})},n.render=function(){var e=this.props,a=e.children,n=e.location;return c.a.createElement(u.b,{query:"1044757290",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Template for creating design system documentatation"},{name:"docsearch:language",content:"en"},{name:"docsearch:version",content:"1.0.0"},{name:"keywords",content:"design system, style guide, documentation"}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(D,{location:n}),a)},data:r})},a}(c.a.Component));X.propTypes={children:s.a.node.isRequired};a.a=X},336:function(e){e.exports={data:{components:{edges:[{node:{path:"/platform/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/platform/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/platform/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/platform/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/platform/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/platform/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/platform/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/platform/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/platform/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/platform/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/platform/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/platform/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/platform/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/platform/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/platform/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/platform/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/platform/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/platform/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/platform/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/platform/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/platform/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/platform/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/platform/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/platform/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/platform/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/platform/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/platform/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/platform/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/platform/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/platform/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/platform/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/platform/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/platform/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/platform/modal/",context:{source:"component",name:"Modal"}}}]}}}},337:function(e,a,n){"use strict";var t=n(2),o=n.n(t),r=n(13),m=n.n(r),c=n(335),l=(n(17),n(133),n(134),n(135),n(330)),s=n(336);function i(){return o.a.createElement(l.b,{query:"157057713",render:function(e){return o.a.createElement(p,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:s})}function p(e){var a=e.items;return a.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},a.map(function(e){return o.a.createElement("li",{key:e.name},!!e.items&&o.a.createElement("li",{key:e.name},o.a.createElement("h4",null,e.name),o.a.createElement(p,{items:e.items})),"componentList"===e.query&&o.a.createElement("li",{key:e.name},o.a.createElement("h4",null,e.name),o.a.createElement(i,null)),!!e.href&&o.a.createElement("li",{key:e.name},o.a.createElement(l.a,{to:e.href},e.name)),!e.href&&!e.items&&!e.query&&o.a.createElement("li",{key:e.name},e.name," (future)"))})):null}var u=n(331),d=n.n(u);function g(e){var a=e.location,n=d.a.sections.find(function(e){return a.pathname.includes(e.href)});return o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},!!n&&o.a.createElement(p,{items:n.items}),!n&&o.a.createElement("ul",{className:"site-c-sidenav-list"},d.a.sections.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(l.a,{to:e.href},e.name))})))}function h(e){var a=e.children,n=e.location;return o.a.createElement(c.a,{location:n},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:n}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},a)))}n.d(a,"a",function(){return h}),h.propTypes={children:m.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-architecture-http-headers-mdx-5d73eb44e92a1d8d0150.js.map