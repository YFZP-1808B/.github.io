import React from "react";
// 引入描述列表组件
import { Descriptions } from "antd";
export default props => {
  return (
      <Descriptions title="组件区别">
 
       <Descriptions.Item label="class组件" key="1" span={3}>
        <p>有状态组件的区别是它属于一个class类,</p>
        <p>有继承</p>
        <p>可以通过this来接收状态和属性</p>
        <p>如果你想用react的生命周期</p>
        <p>想对一些数据进行增删改查的话就要用到有状态组件</p>
      </Descriptions.Item>
      <Descriptions.Item label="无状态组件" key="2" span={3}>
        <p>无状态组件是属于一个函数,</p>
        <p>没有继承功能;</p>
        <p>也没有生命周期,</p>
        <p>他的动态数据都是通过父组件传值子组件通过props接收渲染,</p>
        <p>针对一些简单的逻辑判断等等,选 用无状态组件</p>
      </Descriptions.Item>
      <Descriptions.Item label="注意" key="3" span={3}>
      <div style={{color:'red'}}>大部分建议使用无状态组件,因为如果大量用有状态的组件容易触发生命周期和钩子函数,页面会出面加载慢等问题,

什么时候用有状态组件?

在不确定或者确定要用到数据增删改查模块就可以 

在需要管理状态,或者需要使用生命周期时再用
 原文章地址：https://blog.csdn.net/qq_40190624/article/details/88782811
</div>
      </Descriptions.Item>
     
    </Descriptions>

    
  );
};