import React from "react";
// 引入描述列表组件
import { Descriptions } from "antd";
export default props => {
  return (
    <Descriptions title="组件分类">
      <Descriptions.Item label="无状态组件" key="1" span={3}>
        <p>定义：(箭头函数/函数)组件 不需要实例化 没有this只接收一个props</p>
        <p>语法：export default props=>{}</p>
        <p>优点：加载快,渲染快 不会产生额外的内存占用</p>
        <p>缺点：功能单一,没有react其他特性 只有一个props可用</p>
      </Descriptions.Item>
      <Descriptions.Item label="class组件" key="2" span={3}>
      <p>定义：会被实例化,拥有this指向拥有react一切特性</p>
        <p>语法：export default class Html extends React.Component</p>
        <p>优点：功能强大,功能丰富,可扩展性强</p>
        <p>缺点：渲染比无状态组件要慢,容易代码臃肿</p>
      </Descriptions.Item>
      <Descriptions.Item label="高阶组件" key="3" span={3}>
      <p>定义：高阶组件(HOC)是react中用于复用组件逻辑的一种高级技巧 不是API 是一种模式</p>
        <p>语法：一个函数接收一个组件并返回一个class组件</p>
        <p>使用:函数调用传入一个组件</p>
      </Descriptions.Item>
    </Descriptions>
  );
};