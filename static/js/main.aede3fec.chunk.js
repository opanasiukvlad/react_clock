(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),r=n(3),i=n(5),l=n(4),s=n(1),u=(n(12),n(0)),m=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={date:new Date},t.timerId=0,t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){var e=new Date;t.setState({date:e}),console.log(e)}),1e3)}},{key:"componentDidUpdate",value:function(t){var e=this.props.clockName;e!==t.clockName&&console.log("Renamed from ".concat(t.clockName," to ").concat(e))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.props.clockName,e=this.state.date;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:e.toLocaleTimeString()})]})}}]),n}(s.Component);function d(){var t=Math.random().toString().slice(2,6);return"Clock-".concat(t)}var h=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0,clockName:d()},t.timerId=0,t.handleDocumentOnClick=function(e){e.preventDefault(),t.setState({hasClock:!0})},t.handleDocumentOnContext=function(e){e.preventDefault(),t.setState({hasClock:!1})},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){var e=d();t.setState({clockName:e})}),3300),document.addEventListener("click",this.handleDocumentOnClick,!1),document.addEventListener("contextmenu",this.handleDocumentOnContext,!1)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),e&&Object(u.jsx)(m,{clockName:n})]})}}]),n}(s.Component);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.aede3fec.chunk.js.map