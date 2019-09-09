import React from "react";
// 引入描述列表组件
import { Descriptions } from "antd";
export default props => {
  return (
    <Descriptions title="渲染原理">
    <Descriptions.Item label="渲染原理" key="1" span={3}>
       <p>React类 是 React库的入口，如果通过标签加载 React，将会在全局获取该库。如果使用 ES6 npm 加载可以通过 import React from 'react' 引入，如果使用 ES5 npm 加载可以通过 var React = require('react') 引入</p>
       <p>React组件 可以将 UI分割成独立的、可重用的部分，并单独考虑每一件。React组件可以通过子类  React.Component 或 React.PureComponent 进行定义。如果不使用 ES6，可以使用 create-react-class 模块代替</p>
       <p>推荐使用 JSX 来描述 UI 界面，每一个  JSX 元素都是调用 React.createElement() 语法糖，这样就不必直接使用 createElement() createFactory() 方法</p>
     </Descriptions.Item>
     <Descriptions.Item label="声明" key="1" span={3}>
     <div style={{color:'red'}}>
        文章有所借鉴 
        原文地址：https://blog.csdn.net/chenshun123/article/details/78999223
     </div>
     </Descriptions.Item>
      
    </Descriptions>
  );
};