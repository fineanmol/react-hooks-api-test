(this["webpackJsonpreact-hooks-api-test"]=this["webpackJsonpreact-hooks-api-test"]||[]).push([[0],{24:function(t,e,c){},44:function(t,e,c){"use strict";c.r(e);var n=c(2),o=c(18),a=c.n(o),r=c(9),s=c(4),i=(c(24),c(19)),u=c.n(i),j=c(1),b=function(t){return u.a.get("https://randomuser.me/api?page".concat(t)).then((function(t){var e=t.data;return console.log(e),e})).catch((function(t){console.log(t)}))},l=function(t){var e=t.name,c=e.first,n=e.last;return"".concat(c," ").concat(n)},d=function(t){var e=t.picture;return"".concat(e.thumbnail)};function h(){var t=Object(n.useState)(1),e=Object(s.a)(t,2),c=e[0],o=e[1],a=Object(n.useState)(""),i=Object(s.a)(a,2),u=(i[0],i[1],Object(n.useState)([])),h=Object(s.a)(u,2),O=h[0],f=h[1],p=Object(n.useState)(1),x=Object(s.a)(p,2),v=x[0],m=x[1],g=function(){b(v).then((function(t){var e=[].concat(Object(r.a)(O),Object(r.a)(t.results));f(e),m(t.info.page+1)}))};return Object(n.useEffect)((function(){g()}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Hello CodeSandbox"}),Object(j.jsxs)("h2",{children:["Hii I have ",c," Friends"]}),Object(j.jsx)("button",{onClick:function(){o((function(t){return t+1})),console.log("foo")},children:"Add a friend"}),Object(j.jsx)("button",{onClick:b,children:"Fetch user data"}),Object(j.jsx)("button",{onClick:g,children:"Fetch next User"}),O.map((function(t,e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:l(t)}),Object(j.jsx)("img",{src:d(t)})]},e)}))]})}var O=document.getElementById("root");a.a.render(Object(j.jsx)(n.StrictMode,{children:Object(j.jsx)(h,{})}),O)}},[[44,1,2]]]);
//# sourceMappingURL=main.8b3f0305.chunk.js.map