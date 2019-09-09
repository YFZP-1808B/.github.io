import React from 'react';
import { Descriptions } from 'antd';

export default props => {
  return (
    <Descriptions title="生命周期">
      <Descriptions.Item label="" key="1" span={3}>
        <div>
          <h2>1.挂载阶段</h2>
          <div>
            constructor【初始挂载】 render【渲染呈现】 componentDidMount
            【渲染完成】
          </div>
        </div>
        <div>
          <h2>2.更新阶段 </h2>
          <div>render【渲染】 componentDidUpdate【更新完成】</div>
        </div>
        <div>
          <h2>3.销毁阶段</h2>
          <div>componentWillUnmount【准备卸载】</div>
        </div>
        <div>
          <h2>触发更新阶段有那些途径：</h2>
          <p>1.改变props值</p>
          <p>2.state修改</p>
          <p>3.强制更新：forceUpdate</p>
        </div>
      </Descriptions.Item>
    </Descriptions>
  );
};
