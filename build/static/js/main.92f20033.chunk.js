(this["webpackJsonpplatos-services"]=this["webpackJsonpplatos-services"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(25),o=n.n(i),a=n(48),s=n(8),r=(n(84),n(3));function d(){var e=Object(s.f)();return Object(r.jsxs)("main",{children:[Object(r.jsxs)("section",{id:"home",children:[Object(r.jsx)("h1",{children:"PLATOS SERVICES"}),Object(r.jsxs)("section",{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{onClick:function(){e("person")},children:"Person list"}),Object(r.jsx)("h6",{children:"By Redux"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{onClick:function(){e("food")},children:"Food list"}),Object(r.jsx)("h6",{children:"By Hooks"})]})]})]}),Object(r.jsx)("h6",{style:{position:"absolute",bottom:"4px",right:"6px",fontWeight:"700"},children:"Rahul (+918448443891)"})]})}var u=n(9),j=n(65),l=n.n(j);n(86);function b(e){var t=e.pageTitle,n=Object(s.f)();return Object(r.jsxs)("div",{id:"sm-header",children:[Object(r.jsxs)("div",{onClick:function(){n("/")},children:[Object(r.jsx)(l.a,{}),Object(r.jsx)("p",{children:"Back"})]}),Object(r.jsx)("h1",{children:t})]})}var f=n(20),O=n.n(f),p=n(31),h=(n(92),n(125)),x=n(50),v=n.n(x),m=n(32),g=n(128),S=n(14),k=n(35),C=n(53);n(98);C.a.initializeApp({apiKey:"AIzaSyA35UivgW5GGi1_1TqGCmHD0_ECOCHyx3A",authDomain:"platos-services.firebaseapp.com",projectId:"platos-services",storageBucket:"platos-services.appspot.com",messagingSenderId:"360753971580",appId:"1:360753971580:web:e512210c6ba899e973a4f9"});var y,w=C.a.firestore(),T=(C.a,n(126)),P=Object(k.b)("person/saveUser",function(){var e=Object(p.a)(O.a.mark((function e(t,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var c=t.toSave,i=t.collection,o=Object(T.a)();w.collection(i).doc(o).set({id:o,person:c}).then((function(t){e("done")})).catch((function(){n("error")}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),A=Object(k.b)("person/editUser",function(){var e=Object(p.a)(O.a.mark((function e(t,n){var c,i,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.collection,i=t.id,o=t.person,e.abrupt("return",new Promise((function(e,t){w.collection(c).doc(i).update({person:o}).then((function(t){e("done")})).catch((function(){t("error")}))})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),E=Object(k.b)("person/deleteUser",function(){var e=Object(p.a)(O.a.mark((function e(t,n){var c,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.collection,i=t.id,e.abrupt("return",new Promise((function(e,t){w.collection(c).doc(i).delete().then((function(t){e("done")})).catch((function(){t("error")}))})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),U=Object(k.c)({name:"person",initialState:{status:"Typing.....",person:[]},reducers:{saveList:function(e,t){e.person=t.payload}},extraReducers:(y={},Object(S.a)(y,P.pending,(function(e,t){e.status="loading"})),Object(S.a)(y,P.fulfilled,(function(e,t){e.status="success"})),Object(S.a)(y,P.rejected,(function(e,t){e.status="failed"})),Object(S.a)(y,A.pending,(function(e,t){e.status="loading"})),Object(S.a)(y,A.fulfilled,(function(e,t){e.status="success"})),Object(S.a)(y,A.rejected,(function(e,t){e.status="failed"})),Object(S.a)(y,E.pending,(function(e,t){e.status="loading"})),Object(S.a)(y,E.fulfilled,(function(e,t){e.status="success"})),Object(S.a)(y,E.rejected,(function(e,t){e.status="failed"})),y)}),F=U.actions.saveList,I=U.reducer;function N(e){var t=e.type,n=Object(m.b)(),i=Object(c.useState)(!1),o=Object(u.a)(i,2),a=o[0],s=o[1],d=Object(c.useState)(""),j=Object(u.a)(d,2),l=j[0],b=j[1],f=Object(m.c)((function(e){return e.person})).status,x=Object(c.useState)(f),S=Object(u.a)(x,2),k=S[0],C=S[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(h.a,{open:a,onClose:function(){return null},children:Object(r.jsxs)("main",{id:"modal-add",children:[Object(r.jsx)("aside",{onClick:function(){return s(!1)},children:Object(r.jsx)(v.a,{})}),Object(r.jsxs)("p",{children:["STATUS : ","pending"==k?Object(r.jsx)(g.a,{}):k]}),Object(r.jsx)("input",{value:l,onChange:function(e){C("Typing......"),b(e.target.value)},placeholder:"Add ".concat(t)}),Object(r.jsx)("button",{onClick:Object(p.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C("pending"),setTimeout((function(){n(P({collection:t,toSave:l})).then((function(){C("successfully added"),b("")})).catch((function(){C("Error")}))}),1300);case 2:case"end":return e.stop()}}),e)}))),children:"Save"})]})}),Object(r.jsxs)("div",{className:"modal-add-div",onClick:function(){return s(!0)},children:[Object(r.jsx)("p",{children:"Add"}),Object(r.jsx)("p",{children:t})]})]})}n(99);var R=n(51),B=n.n(R),G=n(52),H=n.n(G);n(100);function L(e){var t=e.message;return Object(r.jsx)("div",{id:"message-alert",children:Object(r.jsxs)("p",{children:[t," !!!"]})})}function z(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.person})).person,n=Object(c.useState)("none"),i=Object(u.a)(n,2),o=i[0],a=i[1],s=Object(c.useState)(null),d=Object(u.a)(s,2),j=d[0],l=d[1],f=Object(c.useState)(null),O=Object(u.a)(f,2),p=O[0],h=O[1];Object(c.useEffect)((function(){return w.collection("Person").onSnapshot((function(t){e(F(t.docs))}))}),[]);var x=function(e){h(e),setTimeout((function(){h(null)}),1700)};return Object(r.jsxs)("div",{className:"main-body",children:[Object(r.jsx)(N,{type:"Person"}),Object(r.jsx)(b,{pageTitle:"Person"}),p&&Object(r.jsx)(L,{message:p||"Saved"}),Object(r.jsx)("main",{id:"person-page-list",children:t.map((function(t){return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{className:t.data().id!=o?"input-tobe-not-to-change":"input-tobe-change",value:t.data().id!=o?t.data().person:j,onChange:function(e){l(e.target.value)},disabled:t.data().id!=o}),Object(r.jsxs)("aside",{onClick:function(){a(t.data().id),l(null)},children:[" ",Object(r.jsx)(B.a,{})]}),Object(r.jsxs)("aside",{onClick:function(){e(E({collection:"Person",id:t.data().id})).then((function(){a(null),x("Removed")})).catch((function(){x("Error")}))},children:[" ",Object(r.jsx)(H.a,{})]}),j&&t.data().id==o&&j!=t.data().person&&Object(r.jsx)("p",{onClick:function(){e(A({collection:"Person",id:t.data().id,person:j})).then((function(){a(null),x("Updated")})).catch((function(){x("Error")}))},children:"Save changes"})]})}))})]})}n(101);function D(e){var t=e.type,n=Object(c.useState)(!1),i=Object(u.a)(n,2),o=i[0],a=i[1],s=Object(c.useState)(""),d=Object(u.a)(s,2),j=d[0],l=d[1],b=Object(c.useState)("Something to add"),f=Object(u.a)(b,2),x=f[0],m=f[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(h.a,{open:o,onClose:function(){return null},children:Object(r.jsxs)("main",{id:"modal-add",children:[Object(r.jsx)("aside",{onClick:function(){return a(!1)},children:Object(r.jsx)(v.a,{})}),Object(r.jsxs)("p",{children:["STATUS : ","pending"==x?Object(r.jsx)(g.a,{}):x]}),Object(r.jsx)("input",{value:j,onChange:function(e){m("Typing......"),l(e.target.value)},placeholder:"Add ".concat(t)}),Object(r.jsx)("button",{onClick:Object(p.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m("pending"),setTimeout((function(){var e;(e={collection:t,toSave:j},new Promise((function(t,n){var c=e.toSave,i=e.collection,o=Object(T.a)();w.collection(i).doc(o).set({id:o,food:c}).then((function(e){t("done")})).catch((function(){n("error")}))}))).then((function(){m("successfully added"),l("")})).catch((function(){m("Error")}))}),1300);case 2:case"end":return e.stop()}}),e)}))),children:"Save"})]})}),Object(r.jsxs)("div",{className:"modal-add-div",onClick:function(){return a(!0)},children:[Object(r.jsx)("p",{children:"Add"}),Object(r.jsx)("p",{children:t})]})]})}n(102);var J=n(71);function W(){var e=Object(J.a)(w.collection("Food")),t=Object(u.a)(e,3),n=t[0],i=t[1],o=(t[2],Object(c.useState)("none")),a=Object(u.a)(o,2),s=a[0],d=a[1],j=Object(c.useState)(null),l=Object(u.a)(j,2),f=l[0],O=l[1],p=Object(c.useState)(null),h=Object(u.a)(p,2),x=h[0],v=h[1],m=function(e){v(e),setTimeout((function(){v(null)}),1700)};return Object(r.jsxs)("div",{className:"main-body",children:[Object(r.jsx)(b,{pageTitle:"Food"}),Object(r.jsx)(D,{type:"Food"}),x&&Object(r.jsx)(L,{message:x||"Saved"}),Object(r.jsxs)("main",{id:"person-page-list",children:[i&&Object(r.jsx)(g.a,{}),n&&n.docs.map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{className:e.data().id!=s?"input-tobe-not-to-change":"input-tobe-change",value:e.data().id!=s?e.data().food:f,onChange:function(e){O(e.target.value)},disabled:e.data().id!=s}),Object(r.jsxs)("aside",{onClick:function(){d(e.data().id),O(null)},children:[" ",Object(r.jsx)(B.a,{})]}),Object(r.jsxs)("aside",{onClick:function(){var t;(t={collection:"Food",id:e.data().id},new Promise((function(e,n){var c=t.collection,i=t.id;w.collection(c).doc(i).delete().then((function(t){e("done")})).catch((function(){n("error")}))}))).then((function(){d(null),m("Removed")})).catch((function(){m("Error")}))},children:[" ",Object(r.jsx)(H.a,{})]}),f&&e.data().id==s&&f!=e.data().food&&Object(r.jsx)("p",{onClick:function(){var t;(t={collection:"Food",id:e.data().id,food:f},new Promise((function(e,n){var c=t.collection,i=t.id,o=t.food;w.collection(c).doc(i).set({id:i,food:o}).then((function(t){e("done")})).catch((function(){n("error")}))}))).then((function(){d(null),m("Updated")})).catch((function(){m("Error")}))},children:"Save changes"})]})}))]})]})}var _=function(){return Object(r.jsx)(a.a,{children:Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.a,{exact:!0,path:"/",element:Object(r.jsx)(d,{})}),Object(r.jsx)(s.a,{exact:!0,path:"/person",element:Object(r.jsx)(z,{})}),Object(r.jsx)(s.a,{exact:!0,path:"/food",element:Object(r.jsx)(W,{})})]})})},q=Object(k.a)({reducer:{person:I}});o.a.render(Object(r.jsx)(m.a,{store:q,children:Object(r.jsx)(_,{})}),document.getElementById("root"))},84:function(e,t,n){},86:function(e,t,n){},92:function(e,t,n){},99:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.92f20033.chunk.js.map