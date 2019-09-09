import React from "react";
// 引入描述列表组件
import { Descriptions } from "antd";
export default props => {
  return (
    <Descriptions title="antd框架:">
    <Descriptions.Item label="" key="1" span={3}>
    <div>
      <h3>网址： https://ant.design/index-cn</h3>
      <h2>antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。</h2> </div><br/>
    <b>特性：</b>
<p>1:提炼自企业级中后台产品的交互语言和视觉风格。</p>
<p>2:开箱即用的高质量 React 组件</p>
<p>3:使用 TypeScript 构建，提供完整的类型定义文件</p>
<p>4：全链路开发和设计工具体系。</p><br/>
<b>支持环境</b> 
  <p> 现代浏览器和 IE9 及以上（需要 polyfills）。</p>
  <p>支持服务端渲染。</p> 
   <p>Electron</p> 
</Descriptions.Item>
      
    </Descriptions>
  );
};