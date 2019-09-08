import React, { Component } from "react";
import Mylayout from "./components/Layout/";
// 引入react基础概述
import ReactBase from "./components/ReacrtBase/";
// react组件分类
import ComponentType from "./components/componentType/";
// 全局安装脚手架
import Install from './components/Install'
export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      isCom: window.location.hash.slice(1) || "ReactBase"
    };

    window.onhashchange = () => {
      this.setState({
        isCom: window.location.hash.slice(1)
      });
    };
  }
  // 收听子组件传递数据
  getSouData = id => {
    window.location.hash = id;
  };
  // 渲染函数
  render() {
    let Dom = "";
    switch (this.state.isCom) {
      case "ReactBase":
        Dom = <ReactBase />;
        break;
      case "ComponentType":
        Dom = <ComponentType />;
        break;
        case "Install":
          Dom = <Install/>
    }
    return (
      <React.Fragment>
 <Mylayout getsoudata={this.getSouData}>
        {
          Dom
          // this.state.isCom === 'ReactBase' ? <ReactBase/> :
          // this.state.isCom === 'ComponentType' ? <ComponentType/>
       
        }
        
      </Mylayout>
    
      </React.Fragment>
     
    );
  }
}
