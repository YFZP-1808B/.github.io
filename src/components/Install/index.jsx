import React from "react";
// 引入描述列表组件
import {Descriptions} from "antd";
export default props => {
  return (
    <Descriptions title="条件渲染的几种方式：">
      <Descriptions.Item key="1" span={3}>
        <ul>
          <ol> 1、if </ol>
          <ol>2、switch</ol>
          <ol>3、||</ol>
          <ol>4、&&</ol>
          <ol>5、！</ol>
          <ol>6、 三目运算符</ol>
        </ul>
        <h2>三目写法和&&的对比：</h2>
        <p> 1.三目还是if的执行逻辑.及只要有一个条件成立，则后面的不再判断</p>
       
        <p>
          <span>缺点：</span>{" "}
          三目的语法不利于阅读，代码过长，还必须有一个没用的else
        </p>
        <p>
          2.&&. 在代码阅读起来直观，但是，每一行都会进行比较，造成了不必要的浪费
        </p>
      </Descriptions.Item>
    </Descriptions>
  );
};
