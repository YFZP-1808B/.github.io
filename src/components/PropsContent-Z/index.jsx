import React from "react";
import {Descriptions} from "antd";

export default props => {
  return (
    <Descriptions title="列表和diff">
      <Descriptions.Item label="" key="1" span={3}>
        <ul>
          <li> 1、key 概念利用 diff 算法</li>
          <li>2、元素的 key 只有在它和它的兄弟节点对比时才有意义。</li>
          <li>3、 上下文对象是 this(一个空间的作用域)</li>
        </ul>

        <div className="box">
          <h4> key:为的是给diff算法进行优化，降低js执行次数，优化渲染。</h4>
         <h4>key必须在数组上下文环境的兄弟元素之间添加，并且每一个key都是唯一的【不能重复】</h4>
          <h4>key:在循环体或数组环境中.万不得已时使用index【下标】.一般在项目开发中，我们使用id</h4>
          <h3>
          diff算法：计算虚拟dom的算法:
  其执行原理是: 同级对比,层层匹配，发现不一致时直接用新的替换旧的
          </h3>
          
        </div>
        <div className="box-bottom">
        <h2>注意：</h2>
        <h3>1、最好不用index下标 因为index是可变的不确定的当数据增加或删除时 一旦发生改变 索引会重新排列 重新渲染 没有起到diff算法优化性能的作用</h3>
        <h3>2、key不要用时间戳 和 随机数 因为它在每次都在改变每次都要重新排列 </h3>
        </div>
        
      </Descriptions.Item>
    </Descriptions>
  );
};
