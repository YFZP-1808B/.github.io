import React from "react";
import { Descriptions } from 'antd';


export default props => {
  return (
    <Descriptions title="受控组件和非受控组件">
     <Descriptions.Item label="" key="1" span={3}>
        <div>
          <h2>受控组件</h2>
          <div>
          如果一个 input 表单元素的值是有 React 控制，就会成为受控组件。
          </div>
        </div>
        <div>
          <h2>非受控组件 </h2>
          <div>非受控意味着我可以不需要设置它的state属性，而通过ref来操作真实的DOM。</div>
        </div>
        
      </Descriptions.Item>
  </Descriptions>
  );
};