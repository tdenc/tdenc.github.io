(self.webpackChunkgatsby_blog_stater_with_typescript=self.webpackChunkgatsby_blog_stater_with_typescript||[]).push([[691],{7091:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(o){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],a(r),a(n))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},a=n.exec(e);a;){try{r[a[0]]=decodeURIComponent(a[0])}catch(t){var i=o(a[0]);i!==a[0]&&(r[a[0]]=i)}a=n.exec(e)}r["%C2"]="�";for(var c=Object.keys(r),u=0;u<c.length;u++){var s=c[u];e=e.replace(new RegExp(s,"g"),r[s])}return e}(e)}}},8616:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),a=Array.isArray(t),o=0;o<n.length;o++){var i=n[o],c=e[i];(a?-1!==t.indexOf(i):t(i,c,e))&&(r[i]=c)}return r}},2203:function(e,t,r){"use strict";var n=r(8416),a=r(7424),o=r(861);function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=r(8936),s=r(7091),l=r(4734),f=r(8616),g=Symbol("encodeFragmentIdentifier");function y(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function M(e,t){return t.encode?t.strict?u(e):encodeURIComponent(e):e}function m(e,t){return t.decode?s(e):e}function p(e){return Array.isArray(e)?e.sort():"object"==typeof e?p(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function d(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function N(e){var t=(e=d(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function I(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function j(e,t){y((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return function(e,r,n){t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var a="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!a&&m(r,e).includes(e.arrayFormatSeparator);r=o?m(r,e):r;var i=a||o?r.split(e.arrayFormatSeparator).map((function(t){return m(t,e)})):null===r?r:m(r,e);n[t]=i};case"bracket-separator":return function(t,r,n){var a=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),a){var o=null===r?[]:r.split(e.arrayFormatSeparator).map((function(t){return m(t,e)}));void 0!==n[t]?n[t]=[].concat(n[t],o):n[t]=o}else n[t]=r?m(r,e):r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var o,c=i(e.split("&"));try{for(c.s();!(o=c.n()).done;){var u=o.value;if(""!==u){var s=l(t.decode?u.replace(/\+/g," "):u,"="),f=a(s,2),g=f[0],M=f[1];M=void 0===M?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?M:m(M,t),r(m(g,t),M,n)}}}catch(A){c.e(A)}finally{c.f()}for(var d=0,N=Object.keys(n);d<N.length;d++){var j=N[d],x=n[j];if("object"==typeof x&&null!==x)for(var D=0,v=Object.keys(x);D<v.length;D++){var b=v[D];x[b]=I(x[b],t)}else n[j]=I(x,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=p(r):e[t]=r,e}),Object.create(null))}t.extract=N,t.parse=j,t.stringify=function(e,t){if(!e)return"";y((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[M(t,e),"[",a,"]"].join("")]:[[M(t,e),"[",M(a,e),"]=",M(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[M(t,e),"[]"].join("")]:[[M(t,e),"[]=",M(n,e)].join("")])}};case"colon-list-separator":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[M(t,e),":list="].join("")]:[[M(t,e),":list=",M(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===e.arrayFormat?"[]=":"=";return function(r){return function(n,a){return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[M(r,e),t,M(a,e)].join("")]:[[n,M(a,e)].join(e.arrayFormatSeparator)])}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[M(t,e)]:[[M(t,e),"=",M(n,e)].join("")])}}}}(t),a={},i=0,c=Object.keys(e);i<c.length;i++){var u=c[i];r(u)||(a[u]=e[u])}var s=Object.keys(a);return!1!==t.sort&&s.sort(t.sort),s.map((function(r){var a=e[r];return void 0===a?"":null===a?M(r,t):Array.isArray(a)?0===a.length&&"bracket-separator"===t.arrayFormat?M(r,t)+"[]":a.reduce(n(r),[]).join("&"):M(r,t)+"="+M(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=l(e,"#"),n=a(r,2),o=n[0],i=n[1];return Object.assign({url:o.split("?")[0]||"",query:j(N(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign(n({encode:!0,strict:!0},g,!0),r);var a=d(e.url).split("?")[0]||"",o=t.extract(e.url),i=t.parse(o,{sort:!1}),c=Object.assign(i,e.query),u=t.stringify(c,r);u&&(u="?".concat(u));var s=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(s="#".concat(r[g]?M(e.fragmentIdentifier,r):e.fragmentIdentifier)),"".concat(a).concat(u).concat(s)},t.pick=function(e,r,a){a=Object.assign(n({parseFragmentIdentifier:!0},g,!1),a);var o=t.parseUrl(e,a),i=o.url,c=o.query,u=o.fragmentIdentifier;return t.stringifyUrl({url:i,query:f(c,r),fragmentIdentifier:u},a)},t.exclude=function(e,r,n){var a=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,a,n)}},4734:function(e){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},8936:function(e){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},5429:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294),a=r(1597),o=r(9949),i=function(){var e,t=null===(e=(0,a.useStaticQuery)("4142162438").site.siteMetadata)||void 0===e?void 0:e.social,r=function(e){var r=e.url,a=e.img;return r?n.createElement("a",{className:"snslink--item",href:t[r],target:"_blank",rel:"noreferrer"},n.createElement("img",{src:a,alt:r+" icon"})):null};return n.createElement("div",{className:"contacts"},n.createElement("div",{className:"mail"},n.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjUiIHN0cm9rZT0iIzU1QUY3QSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=",alt:"circle icon",className:"tag-image"}),n.createElement("span",null,t.mail)),n.createElement("div",{className:"snslink"},n.createElement(r,{url:"git",img:o.Z}),n.createElement(r,{url:"twitter",img:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDIuNDIwNjNDMTMuNDg0OSAyLjY2MTgxIDEyLjkzMTMgMi44MjQyNCAxMi4zNTAzIDIuODk3NDZDMTIuOTQzNiAyLjUyMjc2IDEzLjM5OTIgMS45MjkwNCAxMy42MTMyIDEuMjIxNDlDMTMuMDU4NSAxLjU2ODUgMTIuNDQzNyAxLjgyMDc1IDExLjc4OTIgMS45NTY3M0MxMS4yNjU5IDEuMzY3OTIgMTAuNTE4NyAxIDkuNjkyNjcgMUM3LjgzODI1IDEgNi40NzU1OCAyLjgyNDg2IDYuODk0NDIgNC43MTkyNEM0LjUwOCA0LjU5MzExIDIuMzkxNjcgMy4zODcyIDAuOTc0NzUgMS41NTQzNUMwLjIyMjI1IDIuOTE1OTEgMC41ODQ1IDQuNjk3MDkgMS44NjMxNyA1LjU5OTA2QzEuMzkzIDUuNTgzMDYgMC45NDk2NjcgNS40NDcwOSAwLjU2MjkxNyA1LjIyMDA2QzAuNTMxNDE3IDYuNjIzNDYgMS40ODUxNyA3LjkzNjQyIDIuODY2NSA4LjIyODY3QzIuNDYyMjUgOC4zNDQzNCAyLjAxOTUgOC4zNzE0MSAxLjU2OTE3IDguMjgwMzVDMS45MzQzMyA5LjQ4MzggMi45OTQ4MyAxMC4zNTkzIDQuMjUyNSAxMC4zODM5QzMuMDQ1IDExLjM4MjUgMS41MjM2NyAxMS44Mjg1IDAgMTEuNjM5QzEuMjcxMDggMTIuNDk4NiAyLjc4MTMzIDEzIDQuNDAzIDEzQzkuNzM1ODMgMTMgMTIuNzQ4NyA4LjI0OTU5IDEyLjU2NjcgMy45ODg5MkMxMy4xMjc5IDMuNTYxMzIgMTMuNjE1IDMuMDI3ODkgMTQgMi40MjA2M1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="})))}},9068:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(5785),a=r(7294),o=r(2203),i=r(9499),c=r(4350),u=r(4125);function s(e){var t=e.categories,r=e.category,n=e.setCategory;return a.createElement("div",{className:"category"},t.map((function(e){return a.createElement(i.Link,{key:"badge-"+e,to:"/?category="+e,className:"category--item "+(e===r?"active":""),onClick:function(){return n(e)}},e)})))}var l=r(5429),f=r(1597);function g(e){var t=e.post,r=(e.thumbnail,t.frontmatter.title||t.fields.slug),n=t.frontmatter,o=n.category,i=n.description;return a.createElement(f.Link,{to:t.fields.slug},a.createElement("div",{className:"card"},a.createElement("div",{className:"card--desc"},a.createElement("div",{className:"card--desc__top"},a.createElement("h2",{className:"title"},r),a.createElement("p",{className:"contents"},i||t.excerpt)),a.createElement("div",{className:"card--desc__bottom"},a.createElement("p",{className:"card-category"},a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMyAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzQ0MzcgMEgwVjUuNzQ2NTRMNi41NDY1MiAxMi4yOTMxQzYuOTM2OTggMTIuNjgzNSA3LjU3MDAxIDEyLjY4MzYgNy45NjA1NyAxMi4yOTMyTDEyLjI5MjYgNy45NjMyNUMxMi42ODMzIDcuNTcyNzYgMTIuNjgzMyA2LjkzOTQ5IDEyLjI5MjggNi41NDg4OUw1Ljc0NDM3IDBaTTMuNDc0MjUgMy40NzQyNUMzLjA1MTIxIDMuODk3MjkgMi4zNjYgMy44OTcyOSAxLjk0MTg4IDMuNDc0NzlDMS41MTg4MyAzLjA1MDY3IDEuNTE4ODMgMi4zNjU0NiAxLjk0MTg4IDEuOTQyNDJDMi4zNjU0NiAxLjUxODgzIDMuMDUxMjEgMS41MTkzOCAzLjQ3NDI1IDEuOTQxODhDMy44OTc4MyAyLjM2NTQ2IDMuODk3MjkgMy4wNTA2NyAzLjQ3NDI1IDMuNDc0MjVaIiBmaWxsPSIjQjhCOEI4Ii8+Cjwvc3ZnPgo=",alt:"category icon",className:"card-category-icon"}),a.createElement("span",{className:"card-category-text"},o))))))}var y=function(e){var t,r=e.data,f=e.location,y=["All"].concat((0,n.Z)(r.allMarkdownRemark.group.map((function(e){return e.fieldValue})))),M=(0,a.useState)((null===(t=(0,o.parse)(i.globalHistory.location.search))||void 0===t?void 0:t.category)||"All"),m=M[0],p=M[1],d=r.allMarkdownRemark.nodes.filter((function(e){return"All"===m?e:m===e.frontmatter.category})),N=function(e){var t=d.map((function(t,r){return e===r?t.html:null})),r=/<img[^>]+src\s*=\s*['"]([^'"]+)['"][^>]*>/g.exec(t);return r&&r.length?r[0].split("srcset")[0]+"/>":null};return 0===d.length?a.createElement(c.Z,{location:f},a.createElement(u.Z,{title:"All contents"}),a.createElement("p",null,'No contents found. Add markdown contents to "content/blog" (or the directory you specified for the gatsby-source-filesystem plugin in gatsby-config.js).')):a.createElement(c.Z,{location:f},a.createElement(u.Z,{title:"All contents"}),a.createElement("div",{className:"main"},a.createElement("aside",{className:"aside main-aside"},a.createElement(s,{categories:y,category:m,setCategory:p}),a.createElement(l.Z,null)),a.createElement("div",{className:"index"},a.createElement("h2",{className:"index-title"},a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxMSAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuMDA1OTkgMTJMNy44NjQ0MyA3Ljc4MDc0QzguNDIxMDggNy4zNzk4NCA4LjQxOCA2LjU1MDI3IDcuODU4MzkgNi4xNTM1MUwyIDIiIHN0cm9rZT0iIzU1QUY3QSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K",alt:"title icon"}),"CONTENTS"),a.createElement("div",{className:"index-content"},a.createElement("div",{className:"max-width-1024 card-container"},d.filter((function(e){return"All"===m?e:m===e.frontmatter.category})).map((function(e,t){return a.createElement(g,{key:e.fields.slug,post:e,thumbnail:N(t)})})))))))}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},5372:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,r){var n=r(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8872:function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(u){c=!0,a=u}finally{try{i||null==r.return||r.return()}finally{if(c)throw a}}return o}},e.exports.__esModule=!0,e.exports.default=e.exports},2218:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},7424:function(e,t,r){var n=r(5372),a=r(8872),o=r(6116),i=r(2218);e.exports=function(e,t){return n(e)||a(e,t)||o(e,t)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(3405),a=r(9498),o=r(6116),i=r(2281);e.exports=function(e){return n(e)||a(e)||o(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,r){var n=r(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7e3108b18511b7154e1f.js.map