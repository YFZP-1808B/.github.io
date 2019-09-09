import React from "react";
// 引入描述列表组件
import { List, Typography } from 'antd';

const data = [
    '①.通过在项目的根目录中配置jsconfig.json或tsconfig.json文件来完成。如果你在项目中使用TypeScript，则你将拥有一个tsconfig.json文件。',
    '②.如果你使用的是TypeScript，则可以在项目文件中配置baseUrl设置。compilerOptionstsconfig.json',
    '③.如果你使用的是TypeScript，则可以在项目文件中配置baseUrl设置。compilerOptionstsconfig.json',
    '④现在您已将项目配置为支持绝对导入，如果要导入位于的模块src/components/Button.js，可以像这样导入模块：',
    '④.①引入：import Button from components/Button;',
  ];
export default props => {
  return (
   <div>
        <h3 style={{ margin: '16px 0' }}>jsconfig.json:配置组件引入时使用绝对路径</h3>
    <List
      size="large"
      header={<div>
          <h2>好处:</h2>
          <ul>
              <li>1.输入路径更加容易, 不再需要 ../../../../地狱模式</li>
              <li>2.你可以复制/粘贴代码包括导入到其他文件中，而不需要修改引用路径</li>
              <li>3.你可以移动文件而不需要更新引用路径(假如你的IDE没有帮你这么做)</li>
              <li>4.简洁</li>
          </ul>
      </div>}
      
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
   </div>
  );
};
 