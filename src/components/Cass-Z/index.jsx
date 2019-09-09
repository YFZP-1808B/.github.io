import React from 'react';
import { Descriptions } from 'antd';

export default props => {
  return (
    <Descriptions title="cass使用">
      <Descriptions.Item label="" key="1" span={3}>
        <div>
          <h2>1.在已有项目下安装node-sass</h2>
          <p>1:全局安装:npm i -D node-sass </p>
        </div>
        <div>
          <h2>2.可以愉快地用了</h2>
          <p>若要使用SASS MODULE，则需要将*.scss文件改为*.module.scss。</p>
        </div>
        <div>
          <h1>
            React提供的脚手架create-react-app创建的工程文件不像vue那种暴露出webpack来，所以添加依赖需要拐个弯。
          </h1>
          <h1>安装 sass-loader和node-sass依赖</h1>
          <p>npm install sass-loader 和 node-sass --save-dev</p>
        </div>
        <div>
          <h2>打开react的webpack配置</h2>
          <p>node_modules/react-scripts/config/webpack.config.dev.js</p>
          <p> 找到module下的rules，然后找到最后一个配置，修改成如下的样子</p>
        </div>
      </Descriptions.Item>
    </Descriptions>
  );
};
