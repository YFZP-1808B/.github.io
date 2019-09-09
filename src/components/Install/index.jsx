import React from 'react';
// 引入描述列表组件
import { Descriptions } from 'antd';
export default props => {
  return (
    <Descriptions title="脚手架安装与配置">
      <Descriptions.Item label="安装" key="1" span={3}>
        <p>1:全局安装:npm install -g ceate-react-app</p>
        <p>2:初始项目:create-react-app 项目名</p>
        <p>
          3:进入项目:npm start 直接运行开发环境 不需要我们在手动安装
          node-module依赖,脚手架已经为我们安装好了
        </p>
        <p>npm run eject 可以解决哪些问题</p>
        <p>
          本地项目里的依赖和全局依赖包版本不一致导致的bug 可以使用此命令解决
        </p>
        <p>
          注意:如果咱们的项目初始化的时候就是在git仓库里面的,那么我们在使用此命令的时候就会失败,控制台就会提示我们应该先储存代码到本地git仓库
        </p>
        <p>解决办法:要么删掉git本地仓库,要么提交到仓库才能正常使用此命令</p>
      </Descriptions.Item>
    </Descriptions>
  );
};
