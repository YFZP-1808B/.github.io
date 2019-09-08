// 引入核心依赖库React
import React from "react";
// 引入核心依赖ReactDOM他是基于react的所以必须在react依赖的下面引入
import ReactDOM from "react-dom";
// 自己写的全局样式
import "./asets/index.css";
// 引入antd样式
import "antd/dist/antd.css";
// 引入一个组件
import App from "./components/index";
// 引入离线缓存代码
import * as serviceWorker from "./serviceWorker";
// 使用ReactDOM渲染组件并挂载到根元素上
ReactDOM.render(<App />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// 离线缓存
serviceWorker.unregister();
