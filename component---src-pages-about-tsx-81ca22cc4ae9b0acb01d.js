"use strict";(self.webpackChunkgatsby_blog_stater_with_typescript=self.webpackChunkgatsby_blog_stater_with_typescript||[]).push([[49],{5429:function(M,D,A){A.d(D,{Z:function(){return w}});var N=A(7294),j=A(1597),I=A(9949),w=function(){var M,D=null===(M=(0,j.useStaticQuery)("4142162438").site.siteMetadata)||void 0===M?void 0:M.social,A=function(M){var A=M.url,j=M.img;return A?N.createElement("a",{className:"snslink--item",href:D[A],target:"_blank",rel:"noreferrer"},N.createElement("img",{src:j,alt:A+" icon"})):null};return N.createElement("div",{className:"contacts"},N.createElement("div",{className:"mail"},N.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjUiIHN0cm9rZT0iIzU1QUY3QSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=",alt:"circle icon",className:"tag-image"}),N.createElement("span",null,D.mail)),N.createElement("div",{className:"snslink"},N.createElement(A,{url:"git",img:I.Z}),N.createElement(A,{url:"twitter",img:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDIuNDIwNjNDMTMuNDg0OSAyLjY2MTgxIDEyLjkzMTMgMi44MjQyNCAxMi4zNTAzIDIuODk3NDZDMTIuOTQzNiAyLjUyMjc2IDEzLjM5OTIgMS45MjkwNCAxMy42MTMyIDEuMjIxNDlDMTMuMDU4NSAxLjU2ODUgMTIuNDQzNyAxLjgyMDc1IDExLjc4OTIgMS45NTY3M0MxMS4yNjU5IDEuMzY3OTIgMTAuNTE4NyAxIDkuNjkyNjcgMUM3LjgzODI1IDEgNi40NzU1OCAyLjgyNDg2IDYuODk0NDIgNC43MTkyNEM0LjUwOCA0LjU5MzExIDIuMzkxNjcgMy4zODcyIDAuOTc0NzUgMS41NTQzNUMwLjIyMjI1IDIuOTE1OTEgMC41ODQ1IDQuNjk3MDkgMS44NjMxNyA1LjU5OTA2QzEuMzkzIDUuNTgzMDYgMC45NDk2NjcgNS40NDcwOSAwLjU2MjkxNyA1LjIyMDA2QzAuNTMxNDE3IDYuNjIzNDYgMS40ODUxNyA3LjkzNjQyIDIuODY2NSA4LjIyODY3QzIuNDYyMjUgOC4zNDQzNCAyLjAxOTUgOC4zNzE0MSAxLjU2OTE3IDguMjgwMzVDMS45MzQzMyA5LjQ4MzggMi45OTQ4MyAxMC4zNTkzIDQuMjUyNSAxMC4zODM5QzMuMDQ1IDExLjM4MjUgMS41MjM2NyAxMS44Mjg1IDAgMTEuNjM5QzEuMjcxMDggMTIuNDk4NiAyLjc4MTMzIDEzIDQuNDAzIDEzQzkuNzM1ODMgMTMgMTIuNzQ4NyA4LjI0OTU5IDEyLjU2NjcgMy45ODg5MkMxMy4xMjc5IDMuNTYxMzIgMTMuNjE1IDMuMDI3ODkgMTQgMi40MjA2M1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="})))}},4350:function(M,D,A){A.d(D,{Z:function(){return c}});var N=A(7294),j=A(1597),I=A(9499),w="green",g=A(9949),z=function(M){var D=M.text,A=M.color,j=M.icon,I=M.handleClick;return N.createElement("button",{className:A,onClick:I},D,N.createElement("img",{src:j,alt:j+"-icon"}))},e=z;z.defaultProps={color:"green"};var T=A(5331),y=function(){if("undefined"!=typeof window){var M=window.localStorage.getItem(T.r.LOCAL_STORAGE_KEY);if("string"==typeof M)return M;var D=window.matchMedia(T.r.MEDIA_KEY);if("boolean"==typeof D.matches)return D.matches?T.r.DARK_MODE:T.r.LIGHT_MODE}return T.r.LIGHT_MODE},u=function(){var M=(0,N.useState)(y),D=M[0],A=M[1];return(0,N.useEffect)((function(){D===T.r.DARK_MODE?document.body.classList.add(T.r.DARK_MODE):document.body.classList.add(T.r.LIGHT_MODE)}),[D]),N.createElement("label",{className:"toggler"},N.createElement("input",{type:"checkbox","aria-label":"colorMode",className:"toggler-checkbox",onChange:function(){var M=D===T.r.DARK_MODE?T.r.LIGHT_MODE:T.r.DARK_MODE;document.body.classList.toggle(T.r.LIGHT_MODE),document.body.classList.toggle(T.r.DARK_MODE),"undefined"!=typeof window&&window.localStorage.setItem(T.r.LOCAL_STORAGE_KEY,M),A(M)},checked:D===T.r.DARK_MODE}),N.createElement("span",{className:"toggler-slider toggler-slider-"+D}),N.createElement("span",{className:"toggler-text toggler-text-"+D},D))};var L=function(M){var D,A=M.headerTitle,z=I.globalHistory.location.pathname,T=null===(D=(0,j.useStaticQuery)("508672574").site.siteMetadata.social)||void 0===D?void 0:D.git;return N.createElement("header",{className:"header-area"},N.createElement("div",{className:"header-contents"},N.createElement("h2",{className:"header-title"},A),N.createElement("div",{className:"header-category-container"},N.createElement(u,null),N.createElement(j.Link,{to:"/"},N.createElement("h3",{className:"/"===z?"active":""},"CONTENTS")),N.createElement(j.Link,{to:"/about"},N.createElement("h3",{className:"/about"===z?"active":""},"ABOUT")),N.createElement(e,{text:"GITHUB",color:w,icon:g.Z,handleClick:function(){"undefined"!=typeof window&&window.open(""+T)}}))))},c=function(M){M.location;var D,A,I=M.children,w=null===(D=(0,j.useStaticQuery)("3868140423").site.siteMetadata)||void 0===D?void 0:D.title;return A=N.createElement(j.Link,{to:"/",rel:"noreferrer"},w),(0,N.useEffect)((function(){var M=y();document.body.classList.add(M)}),[]),N.createElement("div",{className:"global-wrapper"},N.createElement(L,{headerTitle:A}),N.createElement("main",{className:"global-main"},I))}},5331:function(M,D,A){A.d(D,{r:function(){return N}});var N={LOCAL_STORAGE_KEY:"color-mode",MEDIA_KEY:"(prefers-color-scheme: dark)",DARK_MODE:"dark",LIGHT_MODE:"light"}},3314:function(M,D,A){A.r(D),A.d(D,{default:function(){return z}});var N=A(7294),j=A(1597),I=A(4350),w=A(5429),g=A(5331),z=function(M){var D,A=M.location,z=(0,j.useStaticQuery)("1646405109"),e=(0,N.useState)(""),T=e[0],y=e[1],u=null===(D=z.site.siteMetadata)||void 0===D?void 0:D.author,L=u.selfIntroduction.replace(/\n/g,"<br/>");(0,N.useEffect)((function(){y(window.localStorage.getItem(g.r.LOCAL_STORAGE_KEY))}),[]);var c=function(M){return"light"===T?""+M:M+"-dark"};return N.createElement(I.Z,{location:A},N.createElement("div",{className:"about-page"},N.createElement("h2",{className:c("about-name")},u.name),N.createElement("p",{className:c("self-introduction"),dangerouslySetInnerHTML:{__html:L}}),N.createElement("img",{className:"profile-image",src:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iMTAwJSIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQwMCA0MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjNUQ0MDM4IiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNMjAxLjAwMDAwMCw0MDEuMDAwMDAwIAoJQzEzNC40MDYyOTYsNDAxLjAwMDAwMCA2Ny44MTI1OTksNDAxLjAwMDAwMCAxLjAwMDAwMCw0MDEuMDAwMDAwIAoJQzEuMDAwMDAwLDMzNC42NDU5MzUgMS4wMDAwMDAsMjY4LjI5MTYyNiAxLjQ2ODY1NywyMDEuNDY4Njg5IAoJQzYzLjU3ODU4NywyMDEuMDAwMTY4IDEyNS4yMTk4NTYsMjAxLjAwODE2MyAxODYuODYxMTMwLDIwMC45ODQ1NTggCglDMTkxLjUxNTUzMywyMDAuOTgyNzg4IDE5Ni4xNjk4NDYsMjAwLjc1NjA4OCAyMDEuMDIzMzMxLDIwMC42OTAzOTkgCglDMjAxLjIyMjQ1OCwyMDAuNzQ2ODU3IDIwMS41NjIxMDMsMjAwLjk4NTM1MiAyMDEuNDc0Mzk2LDIwMS4yMzEzODQgCglDMjAxLjM2ODMwMSwyMDEuNjUwNTc0IDIwMS4zNDk5MTUsMjAxLjgyMzczMCAyMDEuMjc2MzUyLDIwMi40NjMxNjUgCglDMjAxLjE0OTEzOSwyMzEuNzAwNDI0IDIwMS4wMjI2NzUsMjYwLjQ3MTM3NSAyMDEuMDE4NzA3LDI4OS4yNDIzNDAgCglDMjAxLjAxMzYyNiwzMjYuMTYzNjA1IDIwMS4xMDcwMTAsMzYzLjA4NDgzOSAyMDEuMDk1NjEyLDQwMC4yNTA5NDYgCglDMjAxLjAyMjE1Niw0MDAuNjYzODQ5IDIwMS4wMTEwNzgsNDAwLjgzMTk0MCAyMDEuMDAwMDAwLDQwMS4wMDAwMDAgCnoiLz4KPHBhdGggZmlsbD0iI0ZFMDAwMCIgb3BhY2l0eT0iMS4wMDAwMDAiIHN0cm9rZT0ibm9uZSIgCglkPSIKTTIwMC44MjQyMDMsMjAwLjYzMzk0MiAKCUMxOTYuMTY5ODQ2LDIwMC43NTYwODggMTkxLjUxNTUzMywyMDAuOTgyNzg4IDE4Ni44NjExMzAsMjAwLjk4NDU1OCAKCUMxMjUuMjE5ODU2LDIwMS4wMDgxNjMgNjMuNTc4NTg3LDIwMS4wMDAxNjggMS40Njg2NTcsMjAxLjAwMDAzMSAKCUMxLjAwMDAwMCwxMzQuNDA2Mjk2IDEuMDAwMDAwLDY3LjgxMjU5OSAxLjAwMDAwMCwxLjAwMDAwMCAKCUM2Ny4zNTQwNjUsMS4wMDAwMDAgMTMzLjcwODM3NCwxLjAwMDAwMCAyMDAuNTMyNjIzLDEuNDY4NjU2IAoJQzIwMS4wMDI4NjksNDIuNjcyMDU0IDIwMS4wMTkxNTAsODMuNDA2ODA3IDIwMC45OTcwNDAsMTI0LjE0MTU0MSAKCUMyMDAuOTg0OTQwLDE0Ni40MTg4MzkgMjAwLjkwNzg1MiwxNjguNjk2MDkxIDIwMC41OTcwMTUsMTkxLjA4NjQ4NyAKCUMyMDAuNTI5MDIyLDE5MS44MDg1NzggMjAwLjcyNDA2MCwxOTIuNDE3NTI2IDIwMC45NDk0MDIsMTkzLjQ1NzU2NSAKCUMyMDAuOTI3ODU2LDE5Ni4xMzcwNzAgMjAwLjg3NjAyMiwxOTguMzg1NTEzIDIwMC44MjQyMDMsMjAwLjYzMzk0MiAKeiIvPgo8cGF0aCBmaWxsPSIjMDA3OTZBIiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNMjAxLjE1Nzk1OSw0MDAuMDA2MTA0IAoJQzIwMS4xMDcwMTAsMzYzLjA4NDgzOSAyMDEuMDEzNjI2LDMyNi4xNjM2MDUgMjAxLjAxODcwNywyODkuMjQyMzQwIAoJQzIwMS4wMjI2NzUsMjYwLjQ3MTM3NSAyMDEuMTQ5MTM5LDIzMS43MDA0MjQgMjAxLjQwNDkyMiwyMDIuMzI4NjEzIAoJQzIwMS43NTAyNzUsMjAxLjUzODMxNSAyMDEuODk0MzMzLDIwMS4zMzYzNDkgMjAyLjA2NDUxNCwyMDEuMDYxNjE1IAoJQzIwMi4xMDgxNzAsMjAxLjAwMTM1OCAyMDIuMTk4NDcxLDIwMC44ODMwNTcgMjAyLjU0MTQxMiwyMDAuOTAyNjQ5IAoJQzIwMy41NzQ2OTIsMjAwLjg5MzA1MSAyMDQuMjY1MDE1LDIwMC44NjM4NjEgMjA1LjM0MDUxNSwyMDAuODc5NDg2IAoJQzIwNi40OTcwODYsMjAxLjAwMjgzOCAyMDcuMjY4NDc4LDIwMS4wODE0MDYgMjA4LjQyNjE5MywyMDEuMjg0MjcxIAoJQzIxMS40NTg3ODYsMjAxLjYwNzg2NCAyMTQuMTA0OTUwLDIwMS45Nzk3NTIgMjE2Ljc1MTMyOCwyMDEuOTgxMDc5IAoJQzI3OC4xNjc1NDIsMjAyLjAxMTcwMyAzMzkuNTgzNzcxLDIwMi4wMDIxMzYgNDAxLjAwMDAwMCwyMDIuMDAwMDAwIAoJQzQwMS4wMDAwMDAsMjY4LjI2MDM3NiA0MDEuMDAwMDAwLDMzNC41MjA3MjEgNDAxLjAwMDAwMCw0MDEuMDAwMDAwIAoJQzMzNC45NzkyNzksNDAxLjAwMDAwMCAyNjguOTU4MjgyLDQwMS4wMDAwMDAgMjAyLjMzODY2OSw0MDAuODI1MTM0IAoJQzIwMS41NjQ3NTgsNDAwLjQxODYxMCAyMDEuMzcwNzQzLDQwMC4yMDM4ODggMjAxLjE1Nzk1OSw0MDAuMDA2MTA0IAp6Ii8+CjxwYXRoIGZpbGw9IiMyODM1OTMiIG9wYWNpdHk9IjEuMDAwMDAwIiBzdHJva2U9Im5vbmUiIAoJZD0iCk0yMDguMDM5ODcxLDIwMS4xNTk5NTggCglDMjA3LjI2ODQ3OCwyMDEuMDgxNDA2IDIwNi40OTcwODYsMjAxLjAwMjgzOCAyMDUuMTEzMDY4LDIwMC44MDI3OTUgCglDMjAzLjczMzEyNCwyMDAuNzQ4NTM1IDIwMi45NjU4MDUsMjAwLjgxNTc5NiAyMDIuMTk4NDcxLDIwMC44ODMwNTcgCglDMjAyLjE5ODQ3MSwyMDAuODgzMDU3IDIwMi4xMDgxNzAsMjAxLjAwMTM1OCAyMDEuOTUzMDE4LDIwMS4wMTYyODEgCglDMjAxLjc5Nzg2NywyMDEuMDMxMjA0IDIwMS41NjIxMDMsMjAwLjk4NTM1MiAyMDEuNTYyMTAzLDIwMC45ODUzNTIgCglDMjAxLjU2MjEwMywyMDAuOTg1MzUyIDIwMS4yMjI0NTgsMjAwLjc0Njg1NyAyMDEuMDIzMzMxLDIwMC42OTAzOTkgCglDMjAwLjg3NjAyMiwxOTguMzg1NTEzIDIwMC45Mjc4NTYsMTk2LjEzNzA3MCAyMDEuMDkxMTg3LDE5My4yNzE3MjkgCglDMjAxLjA4ODQ4NiwxOTIuMDk0MzMwIDIwMC45NzQyODksMTkxLjUzMzg1OSAyMDAuODYwMDc3LDE5MC45NzMzNzMgCglDMjAwLjkwNzg1MiwxNjguNjk2MDkxIDIwMC45ODQ5NDAsMTQ2LjQxODgzOSAyMDAuOTk3MDQwLDEyNC4xNDE1NDEgCglDMjAxLjAxOTE1MCw4My40MDY4MDcgMjAxLjAwMjg2OSw0Mi42NzIwNTQgMjAxLjAwMTI4MiwxLjQ2ODY1NiAKCUMyNjcuNTkzNTA2LDEuMDAwMDAwIDMzNC4xODcwMTIsMS4wMDAwMDAgNDAxLjAwMDAwMCwxLjAwMDAwMCAKCUM0MDEuMDAwMDAwLDY3LjAyMDcyOSA0MDEuMDAwMDAwLDEzMy4wNDE3MDIgNDAwLjUzMTM0MiwxOTkuNTMwMzk2IAoJQzMzOS41MTM5NDcsMTk5Ljk5NzQ5OCAyNzguOTY1MjEwLDE5OS45ODM3MTkgMjE4LjQxNjUwNCwyMDAuMDM0MDI3IAoJQzIxNS4yODgyODQsMjAwLjAzNjYzNiAyMTIuMTYwNTIyLDIwMC41ODc0NDggMjA4Ljc4MzczNywyMDAuOTQ5OTgyIAoJQzIwOC4zNjk5MDQsMjAxLjA2NDYwNiAyMDguMjA0ODk1LDIwMS4xMTIyODkgMjA4LjAzOTg3MSwyMDEuMTU5OTU4IAp6Ii8+CjxwYXRoIGZpbGw9IiMxMTZEN0EiIG9wYWNpdHk9IjEuMDAwMDAwIiBzdHJva2U9Im5vbmUiIAoJZD0iCk0yMDguNDI2MTkzLDIwMS4yODQyNzEgCglDMjA4LjIwNDg5NSwyMDEuMTEyMjg5IDIwOC4zNjk5MDQsMjAxLjA2NDYwNiAyMDkuMjQ3NjIwLDIwMC45NzQxODIgCglDMjczLjY0MDE5OCwyMDAuOTU0MzE1IDMzNy4zMjAwOTksMjAwLjk3NzE1OCA0MDEuMDAwMDAwLDIwMS4wMDAwMDAgCglDNDAxLjAwMDAwMCwyMDEuMDAwMDAwIDQwMS4wMDAwMDAsMjAxLjUwMDAwMCA0MDEuMDAwMDAwLDIwMS43NTAwMDAgCglDMzM5LjU4Mzc3MSwyMDIuMDAyMTM2IDI3OC4xNjc1NDIsMjAyLjAxMTcwMyAyMTYuNzUxMzI4LDIwMS45ODEwNzkgCglDMjE0LjEwNDk1MCwyMDEuOTc5NzUyIDIxMS40NTg3ODYsMjAxLjYwNzg2NCAyMDguNDI2MTkzLDIwMS4yODQyNzEgCnoiLz4KPHBhdGggZmlsbD0iIzE3NDE4MyIgb3BhY2l0eT0iMS4wMDAwMDAiIHN0cm9rZT0ibm9uZSIgCglkPSIKTTQwMS4wMDAwMDAsMjAwLjc1MDAwMCAKCUMzMzcuMzIwMDk5LDIwMC45NzcxNTggMjczLjY0MDE5OCwyMDAuOTU0MzE1IDIwOS40OTY0MjksMjAwLjkwNzI1NyAKCUMyMTIuMTYwNTIyLDIwMC41ODc0NDggMjE1LjI4ODI4NCwyMDAuMDM2NjM2IDIxOC40MTY1MDQsMjAwLjAzNDAyNyAKCUMyNzguOTY1MjEwLDE5OS45ODM3MTkgMzM5LjUxMzk0NywxOTkuOTk3NDk4IDQwMC41MzEzNDIsMTk5Ljk5OTA1NCAKCUM0MDEuMDAwMDAwLDIwMC4wMDAwMDAgNDAxLjAwMDAwMCwyMDAuNTAwMDAwIDQwMS4wMDAwMDAsMjAwLjc1MDAwMCAKeiIvPgo8cGF0aCBmaWxsPSIjMUE2RDY1IiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNMjAxLjA5NTYxMiw0MDAuMjUwOTQ2IAoJQzIwMS4zNzA3NDMsNDAwLjIwMzg4OCAyMDEuNTY0NzU4LDQwMC40MTg2MTAgMjAxLjg3MDAxMCw0MDAuODI1MTM0IAoJQzIwMi4wMDAwMDAsNDAxLjAwMDAwMCAyMDEuNTAwMDAwLDQwMS4wMDAwMDAgMjAxLjI1MDAwMCw0MDEuMDAwMDAwIAoJQzIwMS4wMTEwNzgsNDAwLjgzMTk0MCAyMDEuMDIyMTU2LDQwMC42NjM4NDkgMjAxLjA5NTYxMiw0MDAuMjUwOTQ2IAp6Ii8+CjxwYXRoIGZpbGw9IiMxQTZENjUiIG9wYWNpdHk9IjEuMDAwMDAwIiBzdHJva2U9Im5vbmUiIAoJZD0iCk0yMDEuNDc0Mzk2LDIwMS4yMzEzODQgCglDMjAxLjU2MjEwMywyMDAuOTg1MzUyIDIwMS43OTc4NjcsMjAxLjAzMTIwNCAyMDEuOTA5MzYzLDIwMS4wNzY1MzggCglDMjAxLjg5NDMzMywyMDEuMzM2MzQ5IDIwMS43NTAyNzUsMjAxLjUzODMxNSAyMDEuNDYwMTE0LDIwMS44NjIzMzUgCglDMjAxLjM0OTkxNSwyMDEuODIzNzMwIDIwMS4zNjgzMDEsMjAxLjY1MDU3NCAyMDEuNDc0Mzk2LDIwMS4yMzEzODQgCnoiLz4KPHBhdGggZmlsbD0iIzVCMjM2QSIgb3BhY2l0eT0iMS4wMDAwMDAiIHN0cm9rZT0ibm9uZSIgCglkPSIKTTIwMC41OTcwMTUsMTkxLjA4NjQ4NyAKCUMyMDAuOTc0Mjg5LDE5MS41MzM4NTkgMjAxLjA4ODQ4NiwxOTIuMDk0MzMwIDIwMS4wNjA5MTMsMTkyLjg0MDY1MiAKCUMyMDAuNzI0MDYwLDE5Mi40MTc1MjYgMjAwLjUyOTAyMiwxOTEuODA4NTc4IDIwMC41OTcwMTUsMTkxLjA4NjQ4NyAKeiIvPgo8cGF0aCBmaWxsPSIjMTc0MTgzIiBvcGFjaXR5PSIxLjAwMDAwMCIgc3Ryb2tlPSJub25lIiAKCWQ9IgpNMjAyLjU0MTQxMiwyMDAuOTAyNjQ5IAoJQzIwMi45NjU4MDUsMjAwLjgxNTc5NiAyMDMuNzMzMTI0LDIwMC43NDg1MzUgMjA0LjcyNzkwNSwyMDAuNzU3OTgwIAoJQzIwNC4yNjUwMTUsMjAwLjg2Mzg2MSAyMDMuNTc0NjkyLDIwMC44OTMwNTEgMjAyLjU0MTQxMiwyMDAuOTAyNjQ5IAp6Ii8+Cjwvc3ZnPg==",alt:"profile"}),N.createElement(w.Z,null)))}},9949:function(M,D){D.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMEMzLjEzNDgzIDAgMCAzLjEzNDI1IDAgN0MwIDEwLjA5MjggMi4wMDU1IDEyLjcxNjcgNC43ODc0MiAxMy42NDI0QzUuMTM2ODMgMTMuNzA3MiA1LjI1IDEzLjQ5MDIgNS4yNSAxMy4zMDU4VjEyLjAwMjdDMy4zMDI4MyAxMi40MjYyIDIuODk3NDIgMTEuMTc2NyAyLjg5NzQyIDExLjE3NjdDMi41Nzg5MiAxMC4zNjc2IDIuMTE5ODMgMTAuMTUyMyAyLjExOTgzIDEwLjE1MjNDMS40ODQ1OCA5LjcxNzc1IDIuMTY4MjUgOS43MjcwOCAyLjE2ODI1IDkuNzI3MDhDMi44NzExNyA5Ljc3NjA4IDMuMjQxIDEwLjQ0ODcgMy4yNDEgMTAuNDQ4N0MzLjg2NTE3IDExLjUxODUgNC44Nzg0MiAxMS4yMDkzIDUuMjc4IDExLjAzMDNDNS4zNDA0MiAxMC41NzgyIDUuNTIxODMgMTAuMjY5IDUuNzIyNSAxMC4wOTQ2QzQuMTY3OTIgOS45MTY2NyAyLjUzMzQyIDkuMzE2NDIgMi41MzM0MiA2LjYzNDgzQzIuNTMzNDIgNS44NzAwOCAyLjgwNyA1LjI0NTkyIDMuMjU0NDIgNC43NTU5MkMzLjE4MjA4IDQuNTc5MTcgMi45NDIzMyAzLjg2NjkyIDMuMzIyNjcgMi45MDMyNUMzLjMyMjY3IDIuOTAzMjUgMy45MTA2NyAyLjcxNTQyIDUuMjQ4MjUgMy42MjA3NUM1LjgwNjUgMy40NjU1OCA2LjQwNSAzLjM4OCA3IDMuMzg1MDhDNy41OTUgMy4zODggOC4xOTQwOCAzLjQ2NTU4IDguNzUzNSAzLjYyMDc1QzEwLjA4OTkgMi43MTU0MiAxMC42NzY3IDIuOTAzMjUgMTAuNjc2NyAyLjkwMzI1QzExLjA1NzcgMy44Njc1IDEwLjgxNzkgNC41Nzk3NSAxMC43NDU2IDQuNzU1OTJDMTEuMTk0NyA1LjI0NTkyIDExLjQ2NiA1Ljg3MDY3IDExLjQ2NiA2LjYzNDgzQzExLjQ2NiA5LjMyMzQyIDkuODI4NTggOS45MTU1IDguMjY5OTIgMTAuMDg4OEM4LjUyMDc1IDEwLjMwNTggOC43NSAxMC43MzE2IDguNzUgMTEuMzg0OVYxMy4zMDU4QzguNzUgMTMuNDkxOSA4Ljg2MiAxMy43MTA3IDkuMjE3MjUgMTMuNjQxOEMxMS45OTY4IDEyLjcxNDkgMTQgMTAuMDkxNyAxNCA3QzE0IDMuMTM0MjUgMTAuODY1NyAwIDcgMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="}}]);
//# sourceMappingURL=component---src-pages-about-tsx-81ca22cc4ae9b0acb01d.js.map