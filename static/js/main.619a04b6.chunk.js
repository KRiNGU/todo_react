(this.webpackJsonpsnp_todo_react=this.webpackJsonpsnp_todo_react||[]).push([[0],{16:function(t,e,o){},17:function(t,e,o){},23:function(t,e,o){"use strict";o.r(e);var n,c,i=o(0),l=o.n(i),r=o(7),s=o.n(r),d=(o(16),o(17),o(8)),a=(o(6),o(2)),u=o(5),b=o(4),j={todos:null!==(n=JSON.parse(localStorage.getItem("todos")))&&void 0!==n?n:[]},f=Object(b.b)({name:"todos",initialState:j,reducers:{deleteToDo:function(t,e){var o=e.payload;t.todos=t.todos.filter((function(t){return t.id!==o.id}))},addToDo:function(t,e){var o=e.payload,n=t.todos,c=Object(u.a)({isComplete:!1},o);n.push(c),t.todos=n},deleteCompletedToDos:function(t,e){t.todos=t.todos.filter((function(t){return!1===t.isComplete}))},toggleComplete:function(t,e){var o=e.payload;t.todos=t.todos.map((function(t){return t.id===o.id?Object(u.a)(Object(u.a)({},t),{},{isComplete:!t.isComplete}):t}))},editToDoText:function(t,e){var o=e.payload;t.todos=t.todos.map((function(t){return t.id===o.id?Object(u.a)(Object(u.a)({},t),{},{text:o.text}):t}))}}}),m=f.actions,p=f.reducer,O=m.deleteToDo,x=m.addToDo,_=m.deleteCompletedToDos,h=m.toggleComplete,v=m.editToDoText,C=p,g=o(1);function N(t){var e=Object(i.useState)(!1),o=Object(d.a)(e,2),n=o[0],c=o[1],l=Object(a.b)(),r=function(e){l(v({text:e,id:t.id}))},s=function(){l(O({id:t.id}))};return Object(g.jsxs)("li",{type:"none",className:"todo todo_active ".concat(t.isComplete?"todo_complete":"todo_incomplete"),children:[n&&Object(g.jsx)("input",{type:"text",className:"todo__change-label",onChange:function(t){return r(t.target.value)},onBlur:function(){c(!1),r(t.text),""===t.text.trim()&&s()},onKeyDown:function(e){"Enter"!==e.code&&"Escape"!==e.code||(c(!1),r(t.text))},value:t.text,autoFocus:!0}),!n&&Object(g.jsxs)("div",{className:"todo__container todo__container_active",children:[Object(g.jsx)("button",{className:"button todo__button-complete",onClick:function(){return l(h({id:t.id}))},children:t.isComplete?"Y":"N"}),Object(g.jsx)("div",{className:"todo__text",onDoubleClick:function(){return c(!0)},children:t.text}),Object(g.jsx)("button",{className:"button todo__button-delete",onClick:s,children:"\xd7"})]})]})}function D(){var t=Object(a.c)((function(t){return t.todo.todos})),e=Object(a.c)((function(t){return t.todo.todos})).filter((function(t){return!0===t.isComplete})).length,o=Object(a.c)((function(t){return t.filter.filter})),n=Object(i.useState)(""),c=Object(d.a)(n,2),l=c[0],r=c[1],s=Object(a.b)();Object(i.useEffect)((function(){return localStorage.setItem("todos",JSON.stringify(t))}));return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("input",{className:"todo__input",type:"text",placeholder:"What needs to be done",value:l,onChange:function(t){return r(t.target.value)},onKeyDown:function(t){"Enter"===t.code&&function(){var t=l.trim();""!==t&&s(x({text:t,id:Date.now()})),r("")}()}}),Object(g.jsx)("ul",{type:"none",className:"todos ".concat(o),children:t.map((function(t){return Object(g.jsx)(N,{text:t.text,id:t.id,isComplete:t.isComplete},t.id)}))}),Object(g.jsxs)("footer",{className:"footer",children:[Object(g.jsxs)("div",{className:"todos__completed",children:["Completed: ",Object(g.jsx)("span",{className:"completed__number",children:e})]}),0!==e&&Object(g.jsx)("button",{className:"button todo__delete-completed",onClick:function(){return s(_())},children:"Delete completed"})]})]})}var T={filter:null!==(c=localStorage.getItem("filter"))&&void 0!==c?c:""},y=Object(b.b)({name:"filter",initialState:T,reducers:{editFilter:function(t,e){var o=e.payload;t.filter=o.filter}}}),S=y.actions,k=y.reducer,F=S.editFilter,I=k;function w(){var t=Object(a.b)(),e=Object(a.c)((function(t){return t.filter.filter}));localStorage.setItem("filter",e);var o=function(e){return t(F({filter:e}))};return Object(g.jsxs)("ul",{className:"todos__filters",children:[Object(g.jsx)("li",{className:"filter",children:Object(g.jsx)("button",{className:"button filter__button all ".concat(""===e?"current":""),onClick:function(){return o("")},children:"All"})}),Object(g.jsx)("li",{className:"filter",children:Object(g.jsx)("button",{className:"button filter__button completed ".concat("todos_completed"===e?"current":""),onClick:function(){return o("todos_completed")},children:"Completed"})}),Object(g.jsx)("li",{className:"filter",children:Object(g.jsx)("button",{className:"button filter__button incompleted ".concat("todos_incompleted"===e?"current":""),onClick:function(){return o("todos_incompleted")},children:"Incompleted"})})]})}var E=function(){return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h1",{className:"title",children:"TODOS"}),Object(g.jsx)(w,{}),Object(g.jsx)(D,{})]})},J=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,24)).then((function(e){var o=e.getCLS,n=e.getFID,c=e.getFCP,i=e.getLCP,l=e.getTTFB;o(t),n(t),c(t),i(t),l(t)}))},B=o(3),K=Object(B.b)({todo:C,filter:I}),L=Object(b.a)({reducer:K,devTools:!1});s.a.render(Object(g.jsxs)(a.a,{store:L,children:[Object(g.jsx)(l.a.StrictMode,{children:Object(g.jsx)(E,{})}),","]}),document.getElementById("root")),J()},6:function(t,e,o){}},[[23,1,2]]]);
//# sourceMappingURL=main.619a04b6.chunk.js.map