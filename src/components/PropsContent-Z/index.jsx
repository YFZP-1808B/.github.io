import React from 'react';
import { Descriptions } from 'antd';

export default props => {
  return (
    <Descriptions title="">
      <Descriptions.Item label="" key="1" span={3}>
        <h2>props使用</h2>
        <div></div>
        <div>
          <h1>props：</h1>
          <span>
            在react里面叫属性，父组件传递给子组件上所有的属性都会在props里面拿到
          </span>
          <h1>props类型是对象</h1>
          <div>
            state 和 props 主要的区别在于 props 是不可变的，而 state
            可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state
            来更新和修改数据。 而子组件只能通过 props 来传递数据。
          </div>
        </div>
        <div>
          <h1>props只能由父组件去修改，子组件时无法修改父组件传递进来的属性</h1>
          <h1>props更新后也会触发子组件的更新阶段</h1>
        </div>
      </Descriptions.Item>
    </Descriptions>
  );
};
