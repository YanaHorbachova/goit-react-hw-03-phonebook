(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={Form:"ContactForm_Form__31PxO"}},19:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(10),r=n.n(o),i=(n(19),n(14)),s=n(3),l=n(4),u=n(6),b=n(5),h=n(11),m=n.n(h),d=n(12),j=n(13),f=n.n(j),p=n(0),O=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsxs)("form",{className:f.a.Form,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{children:["Name",Object(p.jsx)("input",{type:"text",name:"name",value:e,onChange:this.handleChange})]}),Object(p.jsxs)("label",{children:["Number",Object(p.jsx)("input",{type:"tel",onChange:this.handleChange,value:n,name:"number"})]}),Object(p.jsx)("button",{type:"submit",children:"Add"})]})}}]),n}(a.Component),v=n(8),C=n.n(v),x=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:C.a.ContactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsxs)("li",{children:[Object(p.jsxs)("p",{children:[a,": ",c]}),Object(p.jsx)("button",{type:"button",className:C.a.btn,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},g=n(9),y=n.n(g),S=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:y.a.label,children:["Find contacts by name",Object(p.jsx)("input",{className:y.a.input,type:"text",value:e,onChange:n})]})},_=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleAddContact=function(e){var n=e.name,a=e.number;if(t.state.contacts.find((function(t){return t.name===n})))alert("".concat(n,"  is alredy in contacts"));else{var c={id:m.a.generate(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(i.a)(e))}}))}},t.handleRemoveContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilterChange=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleTodos=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleTodos();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(O,{onSubmit:this.handleAddContact}),Object(p.jsx)("h2",{children:"Contact List"}),Object(p.jsx)(S,{value:t,onChange:this.handleFilterChange}),Object(p.jsx)(x,{contacts:e,onDeleteContact:this.handleRemoveContact})]})}}]),n}(a.Component);n(29);r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(_,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__2m2La",btn:"ContactList_btn__3OdlM"}},9:function(t,e,n){t.exports={label:"Filter_label__2Le-L",input:"Filter_input__3Ft_N"}}},[[30,1,2]]]);
//# sourceMappingURL=main.e55bfe75.chunk.js.map