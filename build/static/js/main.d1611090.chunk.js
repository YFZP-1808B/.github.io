(window.webpackJsonpproject=window.webpackJsonpproject||[]).push([[0],{120:function(e,t,a){e.exports=a(218)},125:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),s=(a(125),a(126),a(18)),o=a(19),i=a(21),u=a(20),m=a(22),h=a(28),p=a(49),d=a.n(p);a(92);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var E={username:"",password:""},f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).reSetFrom=function(){e.setState(E)},e.handChange=function(t){var a=t.target;e.setState(Object(h.a)({},a.name,a.value))},e.register=function(){var t=e.state,a=t.username,n=t.password;return a.trim()?n.trim()?void d.a.get("/api/register.json",{username:a,password:n}).then(function(t){200===t.status?(sessionStorage.setItem("userRegister",JSON.stringify({username:a,password:n})),e.props.getstatus(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach(function(t){Object(h.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},t.data,{typename:"Login"}))):alert("\u7f51\u7edc\u9519\u8bef\uff0c\u7a0d\u540e\u91cd\u8bd5")}):alert("\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"):alert("\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a")},e.state=E,e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return l.a.createElement("form",{onReset:this.reSetFrom,autoComplete:"off",className:"ysb-form-001"},l.a.createElement("label",null,l.a.createElement("span",{className:"ysb-span-001"}," \u7528\u6237\u540d\uff1a"),l.a.createElement("input",{className:"ysb-input-001",type:"text",value:t,onChange:this.handChange,name:"username",placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u7528\u6237\u540d"})),l.a.createElement("label",null,l.a.createElement("span",{className:"ysb-span-001"},"\u5bc6\u7801\u6846\uff1a"),l.a.createElement("input",{className:"ysb-input-002",type:"password",value:a,onChange:this.handChange,name:"password",placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u5bc6\u7801"})),l.a.createElement("label",null,l.a.createElement("button",{type:"reset",className:"ysb-btn-001"},"\u91cd\u7f6e"),l.a.createElement("button",{type:"button",onClick:this.register,className:"ysb-btn-002"},"\u6ce8\u518c")))}}]),t}(n.Component);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){var a=t.target;e.setState(Object(h.a)({},a.name,a.value))},e.onSubmit=function(){var t=e.state,a=t.username,n=t.password;return a.trim()?n.trim()?void d.a.get("/api/register.json",{username:a,password:n}).then(function(t){var l=a,r=n,c=e.userInfo;return c?c.username!==l?alert("\u7528\u6237\u540d\u4e0d\u5bf9"):c.password!==r?alert("\u5bc6\u7801\u9519\u8bef"):void d.a.get("/api/login.json",{username:a,password:n}).then(function(t){200===t.status?(sessionStorage.setItem("userLogin",JSON.stringify({username:a,password:n})),e.props.getstatus(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach(function(t){Object(h.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},t.data,{typename:"Home"}))):alert("\u7f51\u7edc\u51fa\u9519\uff0c\u7a0d\u540e\u91cd\u8bd5")}):alert("\u8be5\u8d26\u53f7\u4e0d\u5b58\u5728\uff0c\u8bf7\u7406\u89e3\u6ce8\u518c")}):alert("\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"):alert("\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a")},e.userInfo=JSON.parse(sessionStorage.getItem("userRegister")),e.state={username:e.user&&e.user.name||"",password:""},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return l.a.createElement("form",{className:"ysb-form-002"},l.a.createElement("label",null,l.a.createElement("input",{autoComplete:"off",type:"text",name:"username",value:t,onChange:this.handleChange,placeholder:"\u7528\u6237\u540d",className:"ysb-input-003"})),l.a.createElement("label",null,l.a.createElement("input",{autoComplete:"off",type:"password",value:a,name:"password",onChange:this.handleChange,placeholder:"\u5bc6\u7801",className:"ysb-input-004"})),l.a.createElement("label",null,l.a.createElement("button",{type:"button",onClick:this.onSubmit,className:"ysb-login"},"Login...")))}}]),t}(n.Component),y=a(219),O=a(221),C=a(12),j=y.a.Header,k=y.a.Sider,w=y.a.Content,x=[{iconType:"video-camera",text:"\u53d7\u63a7\u7ec4\u4ef6\u548c\u975e\u53d7\u63a7\u7ec4\u4ef7",id:"ComponentType"},{iconType:"video-camera",text:"\u6761\u4ef6\u6e32\u67d3",id:"Install"},{iconType:"read",text:"\u8868\u5355\u7684\u4f7f\u7528",id:"Cass"},{iconType:"save",text:"\u8fb9\u754c\u9519\u8bef",id:"LifeCycle"},{iconType:"switcher",text:"React\u4e2d\u7684\u5217\u8868\u548cdiff",id:"PropsContent"},{iconType:"video-camera",text:"event\u4e8b\u4ef6\u5bf9\u8c61",id:"Classdiff"},{iconType:"video-camera",text:"\u8c03\u67e5\u95ee\u5377",id:"Questionnaire"}],S=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).toggle=function(){e.setState({collapsed:!e.state.collapsed})},e.state={collapsed:!1},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(y.a,null,l.a.createElement(k,{trigger:null,collapsible:!0,collapsed:this.state.collapsed},l.a.createElement("div",{className:"logo"}),l.a.createElement(O.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},x.map(function(t){return l.a.createElement(O.a.Item,{key:t.id,onClick:function(){e.props.getsoudata(t.id)}},l.a.createElement(C.a,{type:t.iconType}),l.a.createElement("span",null,t.text))}))),l.a.createElement(y.a,null,l.a.createElement(j,{style:{background:"#fff",padding:0}},l.a.createElement(C.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle})),l.a.createElement(w,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:280}},this.props.children)))}}]),t}(l.a.Component),N=a(222),P=function(e){return l.a.createElement(N.a,{title:"\u53d7\u63a7\u7ec4\u4ef6\u548c\u975e\u53d7\u63a7\u7ec4\u4ef6"},l.a.createElement(N.a.Item,{label:"",key:"1",span:3},l.a.createElement("div",null,l.a.createElement("h2",null,"\u53d7\u63a7\u7ec4\u4ef6"),l.a.createElement("div",null,"\u5982\u679c\u4e00\u4e2a input \u8868\u5355\u5143\u7d20\u7684\u503c\u662f\u6709 React \u63a7\u5236\uff0c\u5c31\u4f1a\u6210\u4e3a\u53d7\u63a7\u7ec4\u4ef6\u3002")),l.a.createElement("div",null,l.a.createElement("h2",null,"\u975e\u53d7\u63a7\u7ec4\u4ef6 "),l.a.createElement("div",null,"\u975e\u53d7\u63a7\u610f\u5473\u7740\u6211\u53ef\u4ee5\u4e0d\u9700\u8981\u8bbe\u7f6e\u5b83\u7684state\u5c5e\u6027\uff0c\u800c\u901a\u8fc7ref\u6765\u64cd\u4f5c\u771f\u5b9e\u7684DOM\u3002"))))},I=function(e){return l.a.createElement(N.a,{title:"\u6761\u4ef6\u6e32\u67d3\u7684\u51e0\u79cd\u65b9\u5f0f\uff1a"},l.a.createElement(N.a.Item,{key:"1",span:3},l.a.createElement("ul",null,l.a.createElement("ol",null," 1\u3001if "),l.a.createElement("ol",null,"2\u3001switch"),l.a.createElement("ol",null,"3\u3001||"),l.a.createElement("ol",null,"4\u3001&&"),l.a.createElement("ol",null,"5\u3001\uff01"),l.a.createElement("ol",null,"6\u3001 \u4e09\u76ee\u8fd0\u7b97\u7b26")),l.a.createElement("h2",null,"\u4e09\u76ee\u5199\u6cd5\u548c&&\u7684\u5bf9\u6bd4\uff1a"),l.a.createElement("p",null," 1.\u4e09\u76ee\u8fd8\u662fif\u7684\u6267\u884c\u903b\u8f91.\u53ca\u53ea\u8981\u6709\u4e00\u4e2a\u6761\u4ef6\u6210\u7acb\uff0c\u5219\u540e\u9762\u7684\u4e0d\u518d\u5224\u65ad"),l.a.createElement("p",null,l.a.createElement("span",null,"\u7f3a\u70b9\uff1a")," ","\u4e09\u76ee\u7684\u8bed\u6cd5\u4e0d\u5229\u4e8e\u9605\u8bfb\uff0c\u4ee3\u7801\u8fc7\u957f\uff0c\u8fd8\u5fc5\u987b\u6709\u4e00\u4e2a\u6ca1\u7528\u7684else"),l.a.createElement("p",null,"2.&&. \u5728\u4ee3\u7801\u9605\u8bfb\u8d77\u6765\u76f4\u89c2\uff0c\u4f46\u662f\uff0c\u6bcf\u4e00\u884c\u90fd\u4f1a\u8fdb\u884c\u6bd4\u8f83\uff0c\u9020\u6210\u4e86\u4e0d\u5fc5\u8981\u7684\u6d6a\u8d39")))},D=a(220),T=[" 2.\u5408\u7406\u5730\u4f7f\u7528\u8868\u5355\u5143\u7d20\uff1a\u4f7f\u7528label\u53bb\u5305\u88f9input\u53ca\u5176\u5b83\u8868\u5355\u7684\u5143\u7d20","3.\u5728from\u8868\u5355\u91ccbutton\u6309\u94ae\u7c7b\u578b\u5fc5\u987b\u6307\u5b9a\uff0c\u5426\u5219\u4f1a\u89e6\u53d1\u8868\u5355\u7684\u9ed8\u8ba4\u4e8b\u4ef6"," 4.\u5177\u4f53\u4f7f\u7528\uff1a","\u2463.\u2460\uff1a\u4f7f\u7528input\u7684\u65f6\u5019\u9700\u8981\u6dfb\u52a0name\u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u662freact\u5185\u7f6e\u7684\uff0c\u6dfb\u52a0\u5176\u5b83\u81ea\u5b9a\u4e49\u5c5e\u6027\u65e0\u6548\uff1aname\u7684\u503c\u4e00\u5b9a\u662f\u548c\u8be5input\u7ed1\u5b9a\u7684value\u53d8\u91cf\u540d\u4e00\u81f4","\u2463.\u2461\uff1a\u4fee\u6539\u503c\u7684\u65f6\u5019\uff0c\u4f7f\u7528\u5143\u7d20\u7684name\u5c5e\u6027\u53bb\u505a\u952e\u540d"],R=function(e){return l.a.createElement("div",null,l.a.createElement("h2",{style:{margin:"16px 0"}},"\u8868\u5355\u7684\u4f7f\u7528\uff1a"),l.a.createElement(D.a,{size:"large",header:l.a.createElement("div",null,l.a.createElement("h2",null,"1.\u8868\u5355\u91cc\u7684\u5143\u7d20\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,"1\u3001input"),l.a.createElement("li",null,"2\u3001textarea"),l.a.createElement("li",null,"3\u3001select>option"),l.a.createElement("li",null,"4\u3001button"),l.a.createElement("li",null,"5\u3001label"))),bordered:!0,dataSource:T,renderItem:function(e){return l.a.createElement(D.a.Item,null,e)}}))},A=function(e){return l.a.createElement(N.a,{title:"\u8fb9\u754c\u9519\u8bef"},l.a.createElement(N.a.Item,{label:"",key:"1",span:3},l.a.createElement("div",null,l.a.createElement("h2",null,"\u5b9a\u4e49\uff1a"),l.a.createElement("div",null,"\u4f7f\u7528\u79c1\u6709\u94a9\u5b50\u51fd\u6570\uff0c\u6355\u83b7\u5b50\u7ec4\u4ef6\u7684\u9519\u8bef\uff0c\u5e76\u4e14\u4f18\u96c5\u7684\u4f7f\u7528\u5907\u7528ui\u6765\u66ff\u4ee3\u9519\u8bef\u63d0\u793a\u3002 \u51e1\u662f\u5bfc\u81f4\u9875\u9762\u65e0\u6cd5\u6e32\u67d3\u7684\u9519\u8bef")),l.a.createElement("div",{className:"careful"},l.a.createElement("h2",null,"\u6ce8\u610f\uff1a"),l.a.createElement("h3",null,"\u9519\u8bef\u8fb9\u754c\u65e0\u6cd5\u6355\u83b7\u4ee5\u4e0b\u573a\u666f\u4e2d\u4ea7\u751f\u7684\u9519\u8bef\uff1a"),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,"1.\u63a5\u53e3\u9519\u8bef"),l.a.createElement("li",null,"2.\u4e8b\u4ef6\u91cc\u7684\u9519\u8bef"),l.a.createElement("li",null,"3.\u670d\u52a1\u7aef\u9519\u8bef"),l.a.createElement("li",null,"4.\u975e\u5b50\u7ec4\u4ef6\u7684\u9519\u8bef")))),l.a.createElement("div",null,l.a.createElement("h2",null," \u4f7f\u7528\uff1a"),l.a.createElement("div",null," \u5728\u672c\u5730\u5f00\u53d1\u73af\u5883\u4e2d,\u8fd8\u662f\u4f1a\u6709\u9519\u8bef\u63d0\u793a\u7684\uff0c\u4f46\u662f\u6253\u5305\u4ee3\u7801\u4e0a\u7ebf\u540e\uff0c\u7ed9\u7528\u6237\u5c55\u793a\u7684\u5c31\u4e0d\u4f1a\u518d\u6709\u9519\u8bef\u63d0\u793a\u4e86\u3002"))))},L=function(e){return l.a.createElement(N.a,{title:"\u5217\u8868\u548cdiff"},l.a.createElement(N.a.Item,{label:"",key:"1",span:3},l.a.createElement("ul",null,l.a.createElement("li",null," 1\u3001key \u6982\u5ff5\u5229\u7528 diff \u7b97\u6cd5"),l.a.createElement("li",null,"2\u3001\u5143\u7d20\u7684 key \u53ea\u6709\u5728\u5b83\u548c\u5b83\u7684\u5144\u5f1f\u8282\u70b9\u5bf9\u6bd4\u65f6\u624d\u6709\u610f\u4e49\u3002"),l.a.createElement("li",null,"3\u3001 \u4e0a\u4e0b\u6587\u5bf9\u8c61\u662f this(\u4e00\u4e2a\u7a7a\u95f4\u7684\u4f5c\u7528\u57df)")),l.a.createElement("div",{className:"box"},l.a.createElement("h4",null," key:\u4e3a\u7684\u662f\u7ed9diff\u7b97\u6cd5\u8fdb\u884c\u4f18\u5316\uff0c\u964d\u4f4ejs\u6267\u884c\u6b21\u6570\uff0c\u4f18\u5316\u6e32\u67d3\u3002"),l.a.createElement("h4",null,"key\u5fc5\u987b\u5728\u6570\u7ec4\u4e0a\u4e0b\u6587\u73af\u5883\u7684\u5144\u5f1f\u5143\u7d20\u4e4b\u95f4\u6dfb\u52a0\uff0c\u5e76\u4e14\u6bcf\u4e00\u4e2akey\u90fd\u662f\u552f\u4e00\u7684\u3010\u4e0d\u80fd\u91cd\u590d\u3011"),l.a.createElement("h4",null,"key:\u5728\u5faa\u73af\u4f53\u6216\u6570\u7ec4\u73af\u5883\u4e2d.\u4e07\u4e0d\u5f97\u5df2\u65f6\u4f7f\u7528index\u3010\u4e0b\u6807\u3011.\u4e00\u822c\u5728\u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528id"),l.a.createElement("h3",null,"diff\u7b97\u6cd5\uff1a\u8ba1\u7b97\u865a\u62dfdom\u7684\u7b97\u6cd5: \u5176\u6267\u884c\u539f\u7406\u662f: \u540c\u7ea7\u5bf9\u6bd4,\u5c42\u5c42\u5339\u914d\uff0c\u53d1\u73b0\u4e0d\u4e00\u81f4\u65f6\u76f4\u63a5\u7528\u65b0\u7684\u66ff\u6362\u65e7\u7684")),l.a.createElement("div",{className:"box-bottom"},l.a.createElement("h2",null,"\u6ce8\u610f\uff1a"),l.a.createElement("h3",null,"1\u3001\u6700\u597d\u4e0d\u7528index\u4e0b\u6807 \u56e0\u4e3aindex\u662f\u53ef\u53d8\u7684\u4e0d\u786e\u5b9a\u7684\u5f53\u6570\u636e\u589e\u52a0\u6216\u5220\u9664\u65f6 \u4e00\u65e6\u53d1\u751f\u6539\u53d8 \u7d22\u5f15\u4f1a\u91cd\u65b0\u6392\u5217 \u91cd\u65b0\u6e32\u67d3 \u6ca1\u6709\u8d77\u5230diff\u7b97\u6cd5\u4f18\u5316\u6027\u80fd\u7684\u4f5c\u7528"),l.a.createElement("h3",null,"2\u3001key\u4e0d\u8981\u7528\u65f6\u95f4\u6233 \u548c \u968f\u673a\u6570 \u56e0\u4e3a\u5b83\u5728\u6bcf\u6b21\u90fd\u5728\u6539\u53d8\u6bcf\u6b21\u90fd\u8981\u91cd\u65b0\u6392\u5217 "))))},F=["1\u3001event.target:\u88ab\u89e6\u53d1\u7684\u5177\u4f53\u7684\u5143\u7d20.\u8fd9\u4e2a\u662f\u4e0d\u786e\u5b9a\u7684","2\u3001event.currentTarget:\u4e8b\u4ef6\u88ab\u7ed1\u5b9a\u5230\u7684\u5177\u4f53\u5143\u7d20","3\u3001event.nativeEvent:\u539f\u751f\u4e8b\u4ef6\u5bf9\u8c61","4\u3001event.preventDefault() \u6e05\u9664\u9ed8\u8ba4\u4e8b\u4ef6","5\u3001event.stopPropagation() \u6e05\u9664\u5192\u6ce1    \u6e05\u9664\u5192\u6ce1\u5199\u5728\u8981\u6e05\u9664\u7684\u5b50\u7ea7\u4e0a,\u56e0\u4e3a\u5192\u6ce1\u662f\u4ece\u5185\u5411\u5916\u7684(\u4ece\u5b50\u5411\u7236) "],J=function(e){return l.a.createElement("div",null,l.a.createElement("h3",{style:{margin:"16px 0"}},"event\u4e8b\u4ef6\u5bf9\u8c61"),l.a.createElement(D.a,{size:"small",header:l.a.createElement("div",null,l.a.createElement("b",null,"event\uff1a\u4e8b\u4ef6\u5bf9\u8c61--- react\u4e2d\u53eb\u505a\u5408\u6210\u7684\u4e8b\u4ef6\u5bf9\u8c61\u3010react\u5c01\u88c5\u7684\u4e8b\u4ef6\u5bf9\u8c61\u3011"),l.a.createElement("h1",{className:"top"}," ",l.a.createElement("b",null,"event\u4e8b\u4ef6\u5bf9\u8c61\u5305\u542b\u7684\u901a\u7528\u5c5e\u6027:")," ")),footer:l.a.createElement("div",null,l.a.createElement("h2",null,"event.persist()"),l.a.createElement("h3",null,"event.persist()\u5c06event\u5bf9\u8c61\u7684\u5c5e\u6027\u503c\u5f3a\u5236\u4fdd\u7559"),l.a.createElement("h1",null,"\u89e3\u51b3\u7684\u95ee\u9898\uff1a"),"event\u5bf9\u8c61\u5728\u5f02\u6b65\u65b9\u6cd5\u91cc\u4e22\u5931\u5c5e\u6027\u503c\u7684\u95ee\u9898\u3002"),bordered:!0,dataSource:F,renderItem:function(e){return l.a.createElement(D.a.Item,null,e)}}))},H=a(81),z=(a(217),{text:"",password:"",selest:"",checkbox:[!1,!1],radio:"1",textarea:"",sex:"",hobby:""}),B=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handonSubmit=function(e){var t=e.target;e.preventDefault(),console.log(t.querySelectorAll("input[name=text]")[0].value)},e.fn=function(){return l.a.createElement("div",null,l.a.createElement("p",{style:{textAlign:"center",fontSize:"20px",color:"white"}},"\u8fd9\u662f\u4f60\u7684\u4e2a\u4eba\u8d44\u6599"),l.a.createElement("br",null),"\u59d3\u540d:",e.state.text,l.a.createElement("br",null),"\u8eab\u9ad8\uff1a",e.state.password,l.a.createElement("br",null),"\u6027\u522b\uff1a",e.state.sex,l.a.createElement("br",null),"\u4e2a\u4eba\u7231\u597d\uff1a",e.state.hobby,l.a.createElement("br",null),"\u6240\u5728\u57ce\u5e02\uff1a",e.state.selest,l.a.createElement("br",null),"\u4e2a\u4eba\u7b80\u4ecb",e.state.textarea,l.a.createElement("br",null))},e.reSetFrom=function(){e.setState(z)},e.handChange=function(t){var a=t.target;if("checkbox"===a.name){var n=Object(H.a)(e.state.checkbox);return n[a.value]=a.checked,console.log(Object(H.a)(e.state.checkbox)[a.value]=a.checked),e.setState(Object(h.a)({},a.name,n))}e.setState(Object(h.a)({},a.name,a.value))},e.ooo=function(t){console.log(t.target.getAttribute("sex")),e.setState({sex:t.target.getAttribute("sex")})},e.eee=function(t){console.log(t.target.getAttribute("hobby")),e.setState({hobby:t.target.getAttribute("hobby")})},e.register=function(){console.log(e.state.selest),console.log(e.state.text),console.log(e.state.password),console.log(e.state.checkbox),console.log(e.state.textarea),console.log(e.state.sex);var t=e.state,a=t.text,n=t.password;return a?n?void 0:alert("\u8eab\u9ad8\u4e0d\u80fd\u4e3a\u7a7a"):alert("\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a")},e.state=z,e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.text,a=e.password,n=(e.selest,e.checkbox),r=e.radio,c=e.textarea;return l.a.createElement("div",{className:"t-box"},l.a.createElement("form",{onSubmit:this.handonSubmit,onReset:this.reSetFrom,autoComplete:"off"},l.a.createElement("label",null,"\u7528\u6237\u540d\uff1a",l.a.createElement("input",{type:"text",value:t,onChange:this.handChange,name:"text",className:"shuru"})),l.a.createElement("label",null,"\u8eab\u9ad8\uff1a",l.a.createElement("input",{type:"text",value:a,onChange:this.handChange,name:"password",className:"shuru"})),l.a.createElement("label",null,"\u6240\u5728\u57ce\u5e02\uff1a",l.a.createElement("select",{name:"selest",onChange:this.handChange},l.a.createElement("option",{value:"\u5317\u4eac"},"\u5317\u4eac"),l.a.createElement("option",{value:"\u5b89\u5fbd"},"\u5b89\u5fbd"),l.a.createElement("option",{value:"\u6cb3\u5317"},"\u6cb3\u5317"))),l.a.createElement("label",null,"\u4e2a\u4eba\u7231\u597d\uff1a \u8db3\u7403\uff1a",l.a.createElement("input",{type:"checkbox",checked:n[0],value:"0",name:"checkbox",hobby:"\u8db3\u7403",onClick:this.eee,onChange:this.handChange}),"\u7bee\u7403\uff1a ",l.a.createElement("input",{type:"checkbox",checked:n[1],value:"1",name:"checkbox",hobby:"\u7bee\u7403",onClick:this.eee,onChange:this.handChange})),l.a.createElement("label",null,"\u6027\u522b\uff1a \u7537 ",l.a.createElement("input",{type:"radio",name:"radio",checked:"1"===r,value:"1",sex:"\u7537",onClick:this.ooo,onChange:this.handChange}),"\u5973",l.a.createElement("input",{type:"radio",name:"radio",checked:"2"===r,value:"2",sex:"\u5973",onClick:this.ooo,onChange:this.handChange})),l.a.createElement("label",null,"\u4e2a\u4eba\u7b80\u4ecb\uff1a",l.a.createElement("textarea",{name:"textarea",value:c,onChange:this.handChange})),l.a.createElement("label",null,l.a.createElement("button",{type:"button",onClick:this.register},"\u63d0\u4ea4"),l.a.createElement("button",{type:"reset"},"\u91cd\u65b0\u8f93\u5165"))),this.fn.call(this))}}]),t}(n.Component),Q=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).getSouData=function(e){window.location.hash=e},e.state={isCom:window.location.hash.slice(1)||"componentType"},window.onhashchange=function(){e.setState({isCom:window.location.hash.slice(1)})},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="";switch(this.state.isCom){case"ComponentType":e=l.a.createElement(P,null);break;case"Install":e=l.a.createElement(I,null);break;case"Cass":e=l.a.createElement(R,null);break;case"LifeCycle":e=l.a.createElement(A,null);break;case"Classdiff":e=l.a.createElement(J,null);break;case"PropsContent":e=l.a.createElement(L,null);break;case"Questionnaire":e=l.a.createElement(B,null)}return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,{getsoudata:this.getSouData},e))}}]),t}(n.Component),W=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).getstatus=function(t){e.setState({isCom:t.typename})},e.state={isCom:"Register"},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="";switch(this.state.isCom){case"Register":e=l.a.createElement(f,{getstatus:this.getstatus});break;case"Login":e=l.a.createElement(v,{getstatus:this.getstatus});break;case"Home":e=l.a.createElement(Q,null)}return l.a.createElement("div",null,e)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},92:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.d1611090.chunk.js.map