import React from "react";
// 引入描述列表组件
import { Descriptions } from "antd";
export default props => {
  return (
    <Descriptions title="顶级API">
    <Descriptions.Item label="定义" key="1" span={3}>
      凡是挂载到React和ReactDom上的方法和属性都叫做顶级API
      React.createElement：创建的虚拟DOM，接受三个参数
    </Descriptions.Item>
    <Descriptions.Item label="顶级API" key="1" span={3}>
       <p>React.creatElement</p>
       <p>React.cloneElement</p>
       <p>React.child</p>
    </Descriptions.Item>   
      
    </Descriptions>
  );
};