(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{118:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),r=n.n(a),s=n(53),i=n.n(s),o=n(54),h=n(55),u=n(57),j=n(56);n(63);var l=function(t){return Object(c.jsx)("ul",{children:t.name?Object(c.jsxs)("div",{children:[Object(c.jsxs)("h3",{children:[" pair ",t.name.pair," "]}),Object(c.jsxs)("h3",{children:[" buy ",t.name.buy," "]}),Object(c.jsxs)("h3",{children:[" sell ",t.name.sell," "]}),Object(c.jsxs)("h3",{children:[" 24hoursHigh ",t.name["24hoursHigh"]," "]}),Object(c.jsxs)("h3",{children:[" 24hoursLow ",t.name["24hoursLow"]," "]})]}):"data not available"})},b=(n(89),function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(o.a)(this,n),(c=e.call(this,t)).select=function(t){fetch("https://www.zebapi.com/pro/v1/market").then((function(t){return t.json()})).then((function(e){c.setState({data:e[t.target.value],coin:t.target.value})}))},c.refresh=function(){fetch("https://www.zebapi.com/pro/v1/market").then((function(t){return t.json()})).then((function(t){c.setState({data:t[c.state.coin]})}))},c.state={price:"0",data:[],coin:"40"},c}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://www.zebapi.com/pro/v1/market").then((function(t){return t.json()})).then((function(e){t.setState({data:e[t.state.coin]})}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("select",{onChange:this.select,children:[Object(c.jsx)("option",{value:"40",children:"xrp"}),Object(c.jsx)("option",{value:"19",children:"btc"})]}),Object(c.jsx)("button",{onClick:this.refresh,children:"refresh"}),Object(c.jsx)(l,{name:this.state.data})]})}}]),n}(r.a.Component)),d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,119)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),r(t),s(t)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),d()}},[[118,1,2]]]);
//# sourceMappingURL=main.1497ff32.chunk.js.map