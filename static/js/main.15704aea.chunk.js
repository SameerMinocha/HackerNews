(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(5),s=n.n(r),i=(n(12),n(1)),o=n(4),u=n.n(o),j=n(6),l=n(7),b="SET_LOADING",d="SET_STORIES",p="REMOVE_STORY",h="HANDLE_PAGE",O="HANDLE_SEARCH",f=function(e,t){switch(t.type){case b:return Object(i.a)(Object(i.a)({},e),{},{isLoading:!0});case d:return Object(i.a)(Object(i.a)({},e),{},{isLoading:!1,hits:t.payload.hits,nbPages:t.payload.nbPages});case p:return Object(i.a)(Object(i.a)({},e),{},{hits:e.hits.filter((function(e){return e.objectID!==t.payload}))});case O:return Object(i.a)(Object(i.a)({},e),{},{query:t.payload,page:0});case h:if("inc"===t.payload){var n=e.page+1;return n>e.nbPages-1&&(n=0),Object(i.a)(Object(i.a)({},e),{},{page:n})}if("dec"===t.payload){var a=e.page-1;return a<0&&(a=e.nbPages-1),Object(i.a)(Object(i.a)({},e),{},{page:a})}default:throw new Error('no mathching "'.concat(t.type,'" action type'))}},g=n(0),x={isLoading:!0,hits:[],query:"react",page:0,nbPages:0},m=c.a.createContext(),y=function(e){var t=e.children,n=Object(a.useReducer)(f,x),c=Object(l.a)(n,2),r=c[0],s=c[1],o=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:b}),e.prev=1,e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,s({type:d,payload:{hits:a.hits,nbPages:a.nbPages}}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){o("".concat("https://hn.algolia.com/api/v1/search?","query=").concat(r.query,"&page=").concat(r.page))}),[r.query,r.page]),Object(g.jsx)(m.Provider,{value:Object(i.a)(Object(i.a)({},r),{},{removeStory:function(e){s({type:p,payload:e})},handleSearch:function(e){s({type:O,payload:e})},handlePage:function(e){s({type:h,payload:e})}}),children:t})},v=function(){return Object(a.useContext)(m)},N=function(){var e=v(),t=e.query,n=e.handleSearch;return Object(g.jsxs)("form",{className:"search-form",onSubmit:function(e){return e.preventDefault()},children:[Object(g.jsx)("h2",{children:"search hacker news"}),Object(g.jsx)("input",{type:"text",className:"form-input",value:t,onChange:function(e){return n(e.target.value)}})]})},E=function(){var e=v(),t=e.isLoading,n=e.hits,a=e.removeStory;return t?Object(g.jsx)("div",{className:"loading"}):Object(g.jsx)("section",{className:"stories",children:n.map((function(e){var t=e.objectID,n=e.title,c=e.num_comments,r=e.url,s=e.points,i=e.author;return Object(g.jsxs)("article",{className:"story",children:[Object(g.jsx)("h4",{className:"title",children:n}),Object(g.jsxs)("p",{className:"info",children:[s," points by ",Object(g.jsxs)("span",{children:[i," | "]})," ",c," ","comments"]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("a",{href:r,className:"read-link",target:"_blank",rel:"noopener noreferrer",children:"read more"}),Object(g.jsx)("button",{className:"remove-btn",onClick:function(){return a(t)},children:"remove"})]})]},t)}))})},P=function(){var e=v(),t=e.isLoading,n=e.page,a=e.nbPages,c=e.handlePage;return Object(g.jsxs)("div",{className:"btn-container",children:[Object(g.jsx)("button",{disabled:t,onClick:function(){return c("dec")},children:"prev"}),Object(g.jsxs)("p",{children:[n+1," of ",a]}),Object(g.jsx)("button",{disabled:t,onClick:function(){return c("inc")},children:"next"})]})};var S=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(N,{}),Object(g.jsx)(P,{}),Object(g.jsx)(E,{})]})};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(y,{children:Object(g.jsx)(S,{})})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.15704aea.chunk.js.map