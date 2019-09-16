import React from 'react';
import { Descriptions } from 'antd';

export default props => {
  return (
    <Descriptions title="边界错误">
      <Descriptions.Item label="" key="1" span={3}>
        <div>
          <h2>定义：</h2>
          <div>
          使用私有钩子函数，捕获子组件的错误，并且优雅的使用备用ui来替代错误提示。
   凡是导致页面无法渲染的错误
          </div>
        </div>
        <div className="careful">
          <h2>注意：</h2>
<h3>错误边界无法捕获以下场景中产生的错误：</h3>
          <div>
            <ul>
              <li>1.接口错误</li>
              <li>2.事件里的错误</li>
              <li>3.服务端错误</li>
              <li>4.非子组件的错误</li>
            </ul>
            </div>
        </div>
        <div>
          <h2> 使用：</h2>
          <div> 在本地开发环境中,还是会有错误提示的，但是打包代码上线后，给用户展示的就不会再有错误提示了。</div>
        </div>
        
      </Descriptions.Item>
    </Descriptions>
  );
};
