(window.webpackJsonpproject=window.webpackJsonpproject||[]).push([[0],{110:function(e){e.exports=JSON.parse('{"reactBase":[{"title":"react\u53d1\u5c55\u8d77\u6e90","content":"2013\u5e746\u6708,facebook\u516c\u53f8\u6b63\u5f0f\u53d1\u5e03"},{"title":"react\u73b0\u72b6","content":"GitHub\u4ed3\u5e93\u8d21\u732e\u4eba\u6570367\u4eba"}]}')},112:function(e,t,a){e.exports=a(193)},117:function(e,t,a){},193:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(8),r=a.n(c),m=(a(117),a(118),a(58)),o=a(59),s=a(66),u=a(60),i=a(67),p=a(196),E=a(199),d=a(14),b=p.a.Header,h=p.a.Sider,f=p.a.Content,y=[{iconType:"solution",text:"React\u6982\u8ff0",id:"ReactBase"},{iconType:"video-camera",text:"\u7ec4\u4ef6\u7c7b\u578b",id:"ComponentType"},{iconType:"video-camera",text:"\u5168\u5c40\u5b89\u88c5\u4e0e\u914d\u7f6e",id:"Install"},{iconType:"read",text:"cass\u4f7f\u7528",id:"Cass"},{iconType:"save",text:"\u751f\u547d\u5468\u671f",id:"LifeCycle"},{iconType:"switcher",text:"props\u4f7f\u7528",id:"PropsContent"},{iconType:"video-camera",text:"\u7ec4\u5efa\u533a\u522b",id:"Classdiff"},{iconType:"video-camera",text:"\u9876\u7ea7API",id:"Toplevelapi"},{iconType:"video-camera",text:"\u6e32\u67d3\u539f\u7406",id:"Rendering"},{iconType:"read",text:"\u4e8b\u4ef6\u5199\u6cd5\u4e0e\u8de8\u57df\u4f7f\u7528",id:"Blog"},{iconType:"video-camera",text:"jsconfig.json",id:"Route"},{iconType:"book",text:"antd\u6846\u67b6",id:"Frame"}],v=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).toggle=function(){e.setState({collapsed:!e.state.collapsed})},e.state={collapsed:!1},e}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(p.a,null,n.a.createElement(h,{trigger:null,collapsible:!0,collapsed:this.state.collapsed},n.a.createElement("div",{className:"logo"}),n.a.createElement(E.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},y.map(function(t){return n.a.createElement(E.a.Item,{key:t.id,onClick:function(){e.props.getsoudata(t.id)}},n.a.createElement(d.a,{type:t.iconType}),n.a.createElement("span",null,t.text))}))),n.a.createElement(p.a,null,n.a.createElement(b,{style:{background:"#fff",padding:0}},n.a.createElement(d.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle})),n.a.createElement(f,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:280}},this.props.children)))}}]),t}(n.a.Component),g=a(43),k=a(21),I=a(198),j=a(110),x=function(e){return n.a.createElement("div",null,n.a.createElement(g.a,{gutter:16},j.reactBase.map(function(e,t){return n.a.createElement(k.a,{span:8,key:t},n.a.createElement(I.a,{title:e.title,bordered:!0},e.content))})))},R=a(200),w=function(e){return n.a.createElement(R.a,{title:"\u7ec4\u4ef6\u5206\u7c7b"},n.a.createElement(R.a.Item,{label:"\u65e0\u72b6\u6001\u7ec4\u4ef6",key:"1",span:3},n.a.createElement("p",null,"\u5b9a\u4e49\uff1a(\u7bad\u5934\u51fd\u6570/\u51fd\u6570)\u7ec4\u4ef6 \u4e0d\u9700\u8981\u5b9e\u4f8b\u5316 \u6ca1\u6709this\u53ea\u63a5\u6536\u4e00\u4e2aprops"),n.a.createElement("p",null,"\u8bed\u6cd5\uff1aexport default props=>"),n.a.createElement("p",null,"\u4f18\u70b9\uff1a\u52a0\u8f7d\u5feb,\u6e32\u67d3\u5feb \u4e0d\u4f1a\u4ea7\u751f\u989d\u5916\u7684\u5185\u5b58\u5360\u7528"),n.a.createElement("p",null,"\u7f3a\u70b9\uff1a\u529f\u80fd\u5355\u4e00,\u6ca1\u6709react\u5176\u4ed6\u7279\u6027 \u53ea\u6709\u4e00\u4e2aprops\u53ef\u7528")),n.a.createElement(R.a.Item,{label:"class\u7ec4\u4ef6",key:"2",span:3},n.a.createElement("p",null,"\u5b9a\u4e49\uff1a\u4f1a\u88ab\u5b9e\u4f8b\u5316,\u62e5\u6709this\u6307\u5411\u62e5\u6709react\u4e00\u5207\u7279\u6027"),n.a.createElement("p",null,"\u8bed\u6cd5\uff1aexport default class Html extends React.Component"),n.a.createElement("p",null,"\u4f18\u70b9\uff1a\u529f\u80fd\u5f3a\u5927,\u529f\u80fd\u4e30\u5bcc,\u53ef\u6269\u5c55\u6027\u5f3a"),n.a.createElement("p",null,"\u7f3a\u70b9\uff1a\u6e32\u67d3\u6bd4\u65e0\u72b6\u6001\u7ec4\u4ef6\u8981\u6162,\u5bb9\u6613\u4ee3\u7801\u81c3\u80bf")),n.a.createElement(R.a.Item,{label:"\u9ad8\u9636\u7ec4\u4ef6",key:"3",span:3},n.a.createElement("p",null,"\u5b9a\u4e49\uff1a\u9ad8\u9636\u7ec4\u4ef6(HOC)\u662freact\u4e2d\u7528\u4e8e\u590d\u7528\u7ec4\u4ef6\u903b\u8f91\u7684\u4e00\u79cd\u9ad8\u7ea7\u6280\u5de7 \u4e0d\u662fAPI \u662f\u4e00\u79cd\u6a21\u5f0f"),n.a.createElement("p",null,"\u8bed\u6cd5\uff1a\u4e00\u4e2a\u51fd\u6570\u63a5\u6536\u4e00\u4e2a\u7ec4\u4ef6\u5e76\u8fd4\u56de\u4e00\u4e2aclass\u7ec4\u4ef6"),n.a.createElement("p",null,"\u4f7f\u7528:\u51fd\u6570\u8c03\u7528\u4f20\u5165\u4e00\u4e2a\u7ec4\u4ef6")))},C=function(e){return n.a.createElement(R.a,{title:"\u811a\u624b\u67b6\u5b89\u88c5\u4e0e\u914d\u7f6e"},n.a.createElement(R.a.Item,{label:"\u5b89\u88c5",key:"1",span:3},n.a.createElement("p",null,"1:\u5168\u5c40\u5b89\u88c5:npm install -g ceate-react-app"),n.a.createElement("p",null,"2:\u521d\u59cb\u9879\u76ee:create-react-app \u9879\u76ee\u540d"),n.a.createElement("p",null,"3:\u8fdb\u5165\u9879\u76ee:npm start \u76f4\u63a5\u8fd0\u884c\u5f00\u53d1\u73af\u5883 \u4e0d\u9700\u8981\u6211\u4eec\u5728\u624b\u52a8\u5b89\u88c5 node-module\u4f9d\u8d56,\u811a\u624b\u67b6\u5df2\u7ecf\u4e3a\u6211\u4eec\u5b89\u88c5\u597d\u4e86"),n.a.createElement("p",null,"npm run eject \u53ef\u4ee5\u89e3\u51b3\u54ea\u4e9b\u95ee\u9898"),n.a.createElement("p",null,"\u672c\u5730\u9879\u76ee\u91cc\u7684\u4f9d\u8d56\u548c\u5168\u5c40\u4f9d\u8d56\u5305\u7248\u672c\u4e0d\u4e00\u81f4\u5bfc\u81f4\u7684bug \u53ef\u4ee5\u4f7f\u7528\u6b64\u547d\u4ee4\u89e3\u51b3"),n.a.createElement("p",null,"\u6ce8\u610f:\u5982\u679c\u54b1\u4eec\u7684\u9879\u76ee\u521d\u59cb\u5316\u7684\u65f6\u5019\u5c31\u662f\u5728git\u4ed3\u5e93\u91cc\u9762\u7684,\u90a3\u4e48\u6211\u4eec\u5728\u4f7f\u7528\u6b64\u547d\u4ee4\u7684\u65f6\u5019\u5c31\u4f1a\u5931\u8d25,\u63a7\u5236\u53f0\u5c31\u4f1a\u63d0\u793a\u6211\u4eec\u5e94\u8be5\u5148\u50a8\u5b58\u4ee3\u7801\u5230\u672c\u5730git\u4ed3\u5e93"),n.a.createElement("p",null,"\u89e3\u51b3\u529e\u6cd5:\u8981\u4e48\u5220\u6389git\u672c\u5730\u4ed3\u5e93,\u8981\u4e48\u63d0\u4ea4\u5230\u4ed3\u5e93\u624d\u80fd\u6b63\u5e38\u4f7f\u7528\u6b64\u547d\u4ee4")))},S=function(e){return n.a.createElement(R.a,{title:"cass\u4f7f\u7528"},n.a.createElement(R.a.Item,{label:"",key:"1",span:3},n.a.createElement("div",null,n.a.createElement("h2",null,"1.\u5728\u5df2\u6709\u9879\u76ee\u4e0b\u5b89\u88c5node-sass"),n.a.createElement("p",null,"1:\u5168\u5c40\u5b89\u88c5:npm i -D node-sass ")),n.a.createElement("div",null,n.a.createElement("h2",null,"2.\u53ef\u4ee5\u6109\u5feb\u5730\u7528\u4e86"),n.a.createElement("p",null,"\u82e5\u8981\u4f7f\u7528SASS MODULE\uff0c\u5219\u9700\u8981\u5c06*.scss\u6587\u4ef6\u6539\u4e3a*.module.scss\u3002")),n.a.createElement("div",null,n.a.createElement("h1",null,"React\u63d0\u4f9b\u7684\u811a\u624b\u67b6create-react-app\u521b\u5efa\u7684\u5de5\u7a0b\u6587\u4ef6\u4e0d\u50cfvue\u90a3\u79cd\u66b4\u9732\u51fawebpack\u6765\uff0c\u6240\u4ee5\u6dfb\u52a0\u4f9d\u8d56\u9700\u8981\u62d0\u4e2a\u5f2f\u3002"),n.a.createElement("h1",null,"\u5b89\u88c5 sass-loader\u548cnode-sass\u4f9d\u8d56"),n.a.createElement("p",null,"npm install sass-loader \u548c node-sass --save-dev")),n.a.createElement("div",null,n.a.createElement("h2",null,"\u6253\u5f00react\u7684webpack\u914d\u7f6e"),n.a.createElement("p",null,"node_modules/react-scripts/config/webpack.config.dev.js"),n.a.createElement("p",null," \u627e\u5230module\u4e0b\u7684rules\uff0c\u7136\u540e\u627e\u5230\u6700\u540e\u4e00\u4e2a\u914d\u7f6e\uff0c\u4fee\u6539\u6210\u5982\u4e0b\u7684\u6837\u5b50"))))},T=function(e){return n.a.createElement(R.a,{title:"\u751f\u547d\u5468\u671f"},n.a.createElement(R.a.Item,{label:"",key:"1",span:3},n.a.createElement("div",null,n.a.createElement("h2",null,"1.\u6302\u8f7d\u9636\u6bb5"),n.a.createElement("div",null,"constructor\u3010\u521d\u59cb\u6302\u8f7d\u3011 render\u3010\u6e32\u67d3\u5448\u73b0\u3011 componentDidMount \u3010\u6e32\u67d3\u5b8c\u6210\u3011")),n.a.createElement("div",null,n.a.createElement("h2",null,"2.\u66f4\u65b0\u9636\u6bb5 "),n.a.createElement("div",null,"render\u3010\u6e32\u67d3\u3011 componentDidUpdate\u3010\u66f4\u65b0\u5b8c\u6210\u3011")),n.a.createElement("div",null,n.a.createElement("h2",null,"3.\u9500\u6bc1\u9636\u6bb5"),n.a.createElement("div",null,"componentWillUnmount\u3010\u51c6\u5907\u5378\u8f7d\u3011")),n.a.createElement("div",null,n.a.createElement("h2",null,"\u89e6\u53d1\u66f4\u65b0\u9636\u6bb5\u6709\u90a3\u4e9b\u9014\u5f84\uff1a"),n.a.createElement("p",null,"1.\u6539\u53d8props\u503c"),n.a.createElement("p",null,"2.state\u4fee\u6539"),n.a.createElement("p",null,"3.\u5f3a\u5236\u66f4\u65b0\uff1aforceUpdate"))))},O=function(e){return n.a.createElement(R.a,{title:"\u7ec4\u4ef6\u533a\u522b"},n.a.createElement(R.a.Item,{label:"class\u7ec4\u4ef6",key:"1",span:3},n.a.createElement("p",null,"\u6709\u72b6\u6001\u7ec4\u4ef6\u7684\u533a\u522b\u662f\u5b83\u5c5e\u4e8e\u4e00\u4e2aclass\u7c7b,"),n.a.createElement("p",null,"\u6709\u7ee7\u627f"),n.a.createElement("p",null,"\u53ef\u4ee5\u901a\u8fc7this\u6765\u63a5\u6536\u72b6\u6001\u548c\u5c5e\u6027"),n.a.createElement("p",null,"\u5982\u679c\u4f60\u60f3\u7528react\u7684\u751f\u547d\u5468\u671f"),n.a.createElement("p",null,"\u60f3\u5bf9\u4e00\u4e9b\u6570\u636e\u8fdb\u884c\u589e\u5220\u6539\u67e5\u7684\u8bdd\u5c31\u8981\u7528\u5230\u6709\u72b6\u6001\u7ec4\u4ef6")),n.a.createElement(R.a.Item,{label:"\u65e0\u72b6\u6001\u7ec4\u4ef6",key:"2",span:3},n.a.createElement("p",null,"\u65e0\u72b6\u6001\u7ec4\u4ef6\u662f\u5c5e\u4e8e\u4e00\u4e2a\u51fd\u6570,"),n.a.createElement("p",null,"\u6ca1\u6709\u7ee7\u627f\u529f\u80fd;"),n.a.createElement("p",null,"\u4e5f\u6ca1\u6709\u751f\u547d\u5468\u671f,"),n.a.createElement("p",null,"\u4ed6\u7684\u52a8\u6001\u6570\u636e\u90fd\u662f\u901a\u8fc7\u7236\u7ec4\u4ef6\u4f20\u503c\u5b50\u7ec4\u4ef6\u901a\u8fc7props\u63a5\u6536\u6e32\u67d3,"),n.a.createElement("p",null,"\u9488\u5bf9\u4e00\u4e9b\u7b80\u5355\u7684\u903b\u8f91\u5224\u65ad\u7b49\u7b49,\u9009 \u7528\u65e0\u72b6\u6001\u7ec4\u4ef6")),n.a.createElement(R.a.Item,{label:"\u6ce8\u610f",key:"3",span:3},n.a.createElement("div",{style:{color:"red"}},"\u5927\u90e8\u5206\u5efa\u8bae\u4f7f\u7528\u65e0\u72b6\u6001\u7ec4\u4ef6,\u56e0\u4e3a\u5982\u679c\u5927\u91cf\u7528\u6709\u72b6\u6001\u7684\u7ec4\u4ef6\u5bb9\u6613\u89e6\u53d1\u751f\u547d\u5468\u671f\u548c\u94a9\u5b50\u51fd\u6570,\u9875\u9762\u4f1a\u51fa\u9762\u52a0\u8f7d\u6162\u7b49\u95ee\u9898, \u4ec0\u4e48\u65f6\u5019\u7528\u6709\u72b6\u6001\u7ec4\u4ef6? \u5728\u4e0d\u786e\u5b9a\u6216\u8005\u786e\u5b9a\u8981\u7528\u5230\u6570\u636e\u589e\u5220\u6539\u67e5\u6a21\u5757\u5c31\u53ef\u4ee5 \u5728\u9700\u8981\u7ba1\u7406\u72b6\u6001,\u6216\u8005\u9700\u8981\u4f7f\u7528\u751f\u547d\u5468\u671f\u65f6\u518d\u7528 \u539f\u6587\u7ae0\u5730\u5740\uff1ahttps://blog.csdn.net/qq_40190624/article/details/88782811")))},B=function(e){return n.a.createElement(R.a,{title:"\u6e32\u67d3\u539f\u7406"},n.a.createElement(R.a.Item,{label:"\u6e32\u67d3\u539f\u7406",key:"1",span:3},n.a.createElement("p",null,"React\u7c7b \u662f\xa0React\u5e93\u7684\u5165\u53e3\uff0c\u5982\u679c\u901a\u8fc7\u6807\u7b7e\u52a0\u8f7d React\uff0c\u5c06\u4f1a\u5728\u5168\u5c40\u83b7\u53d6\u8be5\u5e93\u3002\u5982\u679c\u4f7f\u7528 ES6 npm \u52a0\u8f7d\u53ef\u4ee5\u901a\u8fc7\xa0import React from 'react' \u5f15\u5165\uff0c\u5982\u679c\u4f7f\u7528 ES5 npm \u52a0\u8f7d\u53ef\u4ee5\u901a\u8fc7\xa0var React = require('react') \u5f15\u5165"),n.a.createElement("p",null,"React\u7ec4\u4ef6 \u53ef\u4ee5\u5c06 UI\u5206\u5272\u6210\u72ec\u7acb\u7684\u3001\u53ef\u91cd\u7528\u7684\u90e8\u5206\uff0c\u5e76\u5355\u72ec\u8003\u8651\u6bcf\u4e00\u4ef6\u3002React\u7ec4\u4ef6\u53ef\u4ee5\u901a\u8fc7\u5b50\u7c7b  React.Component \u6216 React.PureComponent \u8fdb\u884c\u5b9a\u4e49\u3002\u5982\u679c\u4e0d\u4f7f\u7528 ES6\uff0c\u53ef\u4ee5\u4f7f\u7528 create-react-class \u6a21\u5757\u4ee3\u66ff"),n.a.createElement("p",null,"\u63a8\u8350\u4f7f\u7528 JSX \u6765\u63cf\u8ff0 UI \u754c\u9762\uff0c\u6bcf\u4e00\u4e2a  JSX \u5143\u7d20\u90fd\u662f\u8c03\u7528 React.createElement() \u8bed\u6cd5\u7cd6\uff0c\u8fd9\u6837\u5c31\u4e0d\u5fc5\u76f4\u63a5\u4f7f\u7528 createElement() createFactory() \u65b9\u6cd5")),n.a.createElement(R.a.Item,{label:"\u58f0\u660e",key:"1",span:3},n.a.createElement("div",{style:{color:"red"}},"\u6587\u7ae0\u6709\u6240\u501f\u9274 \u539f\u6587\u5730\u5740\uff1ahttps://blog.csdn.net/chenshun123/article/details/78999223")))},D=function(e){return n.a.createElement(R.a,{title:"\u9876\u7ea7API"},n.a.createElement(R.a.Item,{label:"\u5b9a\u4e49",key:"1",span:3},"\u51e1\u662f\u6302\u8f7d\u5230React\u548cReactDom\u4e0a\u7684\u65b9\u6cd5\u548c\u5c5e\u6027\u90fd\u53eb\u505a\u9876\u7ea7API React.createElement\uff1a\u521b\u5efa\u7684\u865a\u62dfDOM\uff0c\u63a5\u53d7\u4e09\u4e2a\u53c2\u6570"),n.a.createElement(R.a.Item,{label:"\u9876\u7ea7API",key:"1",span:3},n.a.createElement("p",null,"React.creatElement"),n.a.createElement("p",null,"React.cloneElement"),n.a.createElement("p",null,"React.child")))},U=function(e){return n.a.createElement(R.a,{title:""},n.a.createElement(R.a.Item,{label:"",key:"1",span:3},n.a.createElement("h2",null,"props\u4f7f\u7528"),n.a.createElement("div",null),n.a.createElement("div",null,n.a.createElement("h1",null,"props\uff1a"),n.a.createElement("span",null,"\u5728react\u91cc\u9762\u53eb\u5c5e\u6027\uff0c\u7236\u7ec4\u4ef6\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\u4e0a\u6240\u6709\u7684\u5c5e\u6027\u90fd\u4f1a\u5728props\u91cc\u9762\u62ff\u5230"),n.a.createElement("h1",null,"props\u7c7b\u578b\u662f\u5bf9\u8c61"),n.a.createElement("div",null,"state \u548c props \u4e3b\u8981\u7684\u533a\u522b\u5728\u4e8e props \u662f\u4e0d\u53ef\u53d8\u7684\uff0c\u800c state \u53ef\u4ee5\u6839\u636e\u4e0e\u7528\u6237\u4ea4\u4e92\u6765\u6539\u53d8\u3002\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u6709\u4e9b\u5bb9\u5668\u7ec4\u4ef6\u9700\u8981\u5b9a\u4e49 state \u6765\u66f4\u65b0\u548c\u4fee\u6539\u6570\u636e\u3002 \u800c\u5b50\u7ec4\u4ef6\u53ea\u80fd\u901a\u8fc7 props \u6765\u4f20\u9012\u6570\u636e\u3002")),n.a.createElement("div",null,n.a.createElement("h1",null,"props\u53ea\u80fd\u7531\u7236\u7ec4\u4ef6\u53bb\u4fee\u6539\uff0c\u5b50\u7ec4\u4ef6\u65f6\u65e0\u6cd5\u4fee\u6539\u7236\u7ec4\u4ef6\u4f20\u9012\u8fdb\u6765\u7684\u5c5e\u6027"),n.a.createElement("h1",null,"props\u66f4\u65b0\u540e\u4e5f\u4f1a\u89e6\u53d1\u5b50\u7ec4\u4ef6\u7684\u66f4\u65b0\u9636\u6bb5"))))},P=function(e){return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("b",null,"\u4e8b\u4ef6\u7684\u5199\u6cd5:"),n.a.createElement("p",null,"1.\u76f4\u63a5\u7528bind\uff08\uff09\u65b9\u6cd5\u7ed1\u5b9a"),n.a.createElement("p",null,"2.\u7528\u7bad\u5934\u51fd\u6570\u7ed1\u5b9a"),n.a.createElement("p",null,"3.\u6784\u9020\u5668\u5185\u58f0\u660e\uff0c\u4f18\u70b9\u4e3a\u4ec5\u9700\u8981\u4e00\u6b21\u7ed1\u5b9a\uff0c\u4e0d\u9700\u8981\u6bcf\u6b21\u8c03\u7528\u53bb\u6267\u884c\u7ed1\u5b9a\u3002")),n.a.createElement("div",null),n.a.createElement("div",null,n.a.createElement("h3",null,"\u8de8\u57df\u7684\u4f7f\u7528\uff1a"),n.a.createElement("p",null,"\u901a\u8fc7proxy\u89e3\u51b3\u8de8\u57df\u95ee\u9898\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728package.json\u4e0b\u914d\u7f6e:"),n.a.createElement("p",null,n.a.createElement("b",null,'1."proxy": "http://api.xxxx.com"')," "),n.a.createElement("div",null,n.a.createElement("p",null,"\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u6253\u5305\u540e\u4e0a\u4f20\u5230\u540c\u57df\u540d\u8def\u5f84\u5c31ok\u4e86\uff0c\u4e0d\u9700\u8981\u8bbe\u7f6ewebpack\u4ee3\u7406\u7684\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u5728\u6253\u5305\u7684\u65f6\u5019\u5c31\u9700\u8981\u5728package.json\u914d\u7f6e\u4e2d\u5173\u95ed\u521a\u624d\u8bbe\u7f6e\u7684proxy\uff0c\u633a\u9ebb\u70e6\u7684\uff0c\u96be\u514d\u6253\u5305\u7684\u65f6\u5019\u5fd8\u8bb0\u5c4f\u853d\u6389\u3002"),n.a.createElement("br",null),n.a.createElement("b",null,n.a.createElement("i",null,"\u89e3\u51b3\u65b9\u6cd5\uff1a")),n.a.createElement("br",null),"1.\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 create-react-app \u63d0\u4f9b\u7684 yarn run eject \u547d\u4ee4\u5c06\u6240\u6709\u5185\u5efa\u7684\u914d\u7f6e\u66b4\u9732\u51fa\u6765",n.a.createElement("br",null),"2.\u4fee\u6539webpackDevServer.config.js\u6587\u4ef6\u6dfb\u52a0 \u6ce8\u610f\uff1ayarn run eject\u53ef\u80fd\u5bfc\u81f4\u9879\u76ee\u8dd1\u4e0d\u8d77\u6765\uff0c\u8fd9\u65f6\u5019\u6267\u884cyarn \u6216\u8005 npm install\u5373\u53ef"," ")))},A=a(197),H=["\u2460.\u901a\u8fc7\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e2d\u914d\u7f6ejsconfig.json\u6216tsconfig.json\u6587\u4ef6\u6765\u5b8c\u6210\u3002\u5982\u679c\u4f60\u5728\u9879\u76ee\u4e2d\u4f7f\u7528TypeScript\uff0c\u5219\u4f60\u5c06\u62e5\u6709\u4e00\u4e2atsconfig.json\u6587\u4ef6\u3002","\u2461.\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662fTypeScript\uff0c\u5219\u53ef\u4ee5\u5728\u9879\u76ee\u6587\u4ef6\u4e2d\u914d\u7f6ebaseUrl\u8bbe\u7f6e\u3002compilerOptionstsconfig.json","\u2462.\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662fTypeScript\uff0c\u5219\u53ef\u4ee5\u5728\u9879\u76ee\u6587\u4ef6\u4e2d\u914d\u7f6ebaseUrl\u8bbe\u7f6e\u3002compilerOptionstsconfig.json","\u2463\u73b0\u5728\u60a8\u5df2\u5c06\u9879\u76ee\u914d\u7f6e\u4e3a\u652f\u6301\u7edd\u5bf9\u5bfc\u5165\uff0c\u5982\u679c\u8981\u5bfc\u5165\u4f4d\u4e8e\u7684\u6a21\u5757src/components/Button.js\uff0c\u53ef\u4ee5\u50cf\u8fd9\u6837\u5bfc\u5165\u6a21\u5757\uff1a","\u2463.\u2460\u5f15\u5165\uff1aimport Button from components/Button;"],J=function(e){return n.a.createElement("div",null,n.a.createElement("h3",{style:{margin:"16px 0"}},"jsconfig.json:\u914d\u7f6e\u7ec4\u4ef6\u5f15\u5165\u65f6\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84"),n.a.createElement(A.a,{size:"large",header:n.a.createElement("div",null,n.a.createElement("h2",null,"\u597d\u5904:"),n.a.createElement("ul",null,n.a.createElement("li",null,"1.\u8f93\u5165\u8def\u5f84\u66f4\u52a0\u5bb9\u6613, \u4e0d\u518d\u9700\u8981 ../../../../\u5730\u72f1\u6a21\u5f0f"),n.a.createElement("li",null,"2.\u4f60\u53ef\u4ee5\u590d\u5236/\u7c98\u8d34\u4ee3\u7801\u5305\u62ec\u5bfc\u5165\u5230\u5176\u4ed6\u6587\u4ef6\u4e2d\uff0c\u800c\u4e0d\u9700\u8981\u4fee\u6539\u5f15\u7528\u8def\u5f84"),n.a.createElement("li",null,"3.\u4f60\u53ef\u4ee5\u79fb\u52a8\u6587\u4ef6\u800c\u4e0d\u9700\u8981\u66f4\u65b0\u5f15\u7528\u8def\u5f84(\u5047\u5982\u4f60\u7684IDE\u6ca1\u6709\u5e2e\u4f60\u8fd9\u4e48\u505a)"),n.a.createElement("li",null,"4.\u7b80\u6d01"))),bordered:!0,dataSource:H,renderItem:function(e){return n.a.createElement(A.a.Item,null,e)}}))},F=function(e){return n.a.createElement(R.a,{title:"antd\u6846\u67b6:"},n.a.createElement(R.a.Item,{label:"",key:"1",span:3},n.a.createElement("div",null,n.a.createElement("h3",null,"\u7f51\u5740\uff1a https://ant.design/index-cn"),n.a.createElement("h2",null,"antd \u662f\u57fa\u4e8e Ant Design \u8bbe\u8ba1\u4f53\u7cfb\u7684 React UI \u7ec4\u4ef6\u5e93\uff0c\u4e3b\u8981\u7528\u4e8e\u7814\u53d1\u4f01\u4e1a\u7ea7\u4e2d\u540e\u53f0\u4ea7\u54c1\u3002")," "),n.a.createElement("br",null),n.a.createElement("b",null,"\u7279\u6027\uff1a"),n.a.createElement("p",null,"1:\u63d0\u70bc\u81ea\u4f01\u4e1a\u7ea7\u4e2d\u540e\u53f0\u4ea7\u54c1\u7684\u4ea4\u4e92\u8bed\u8a00\u548c\u89c6\u89c9\u98ce\u683c\u3002"),n.a.createElement("p",null,"2:\u5f00\u7bb1\u5373\u7528\u7684\u9ad8\u8d28\u91cf React \u7ec4\u4ef6"),n.a.createElement("p",null,"3:\u4f7f\u7528 TypeScript \u6784\u5efa\uff0c\u63d0\u4f9b\u5b8c\u6574\u7684\u7c7b\u578b\u5b9a\u4e49\u6587\u4ef6"),n.a.createElement("p",null,"4\uff1a\u5168\u94fe\u8def\u5f00\u53d1\u548c\u8bbe\u8ba1\u5de5\u5177\u4f53\u7cfb\u3002"),n.a.createElement("br",null),n.a.createElement("b",null,"\u652f\u6301\u73af\u5883"),n.a.createElement("p",null," \u73b0\u4ee3\u6d4f\u89c8\u5668\u548c IE9 \u53ca\u4ee5\u4e0a\uff08\u9700\u8981 polyfills\uff09\u3002"),n.a.createElement("p",null,"\u652f\u6301\u670d\u52a1\u7aef\u6e32\u67d3\u3002"),n.a.createElement("p",null,"Electron")))},q=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).getSouData=function(e){window.location.hash=e},e.state={isCom:window.location.hash.slice(1)||"ReactBase"},window.onhashchange=function(){e.setState({isCom:window.location.hash.slice(1)})},e}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="";switch(this.state.isCom){case"ReactBase":e=n.a.createElement(x,null);break;case"ComponentType":e=n.a.createElement(w,null);break;case"Install":e=n.a.createElement(C,null);break;case"Cass":e=n.a.createElement(S,null);break;case"LifeCycle":e=n.a.createElement(T,null);break;case"PropsContent":e=n.a.createElement(U,null);case"Classdiff":e=n.a.createElement(O,null);break;case"Toplevelapi":e=n.a.createElement(D,null);break;case"Rendering":e=n.a.createElement(B,null);break;case"Blog":e=n.a.createElement(P,null);break;case"Route":e=n.a.createElement(J,null);break;case"Frame":e=n.a.createElement(F,null)}return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,{getsoudata:this.getSouData},e))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[112,1,2]]]);
//# sourceMappingURL=main.ee7f5288.chunk.js.map