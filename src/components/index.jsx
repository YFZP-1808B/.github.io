import React, {Component} from "react";
import Mylayout from "./Layout/index";
// 引入react基础概述
import ReactBase from "./ReacrtBase/index";
// react组件分类
import ComponentType from "./componentType/index";
// 全局安装脚手架
import Install from "./Install/index";
// 事件的写法与跨域的使用
import Blog from "./blog/index";
//jsconfig.json 
import Route from "./route/index";
//antd框架
import Frames from "./frame/frames";


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
        Dom = <Install />;
        break;
      case "Blog":
        Dom = <Blog />;
        break;
        case "Route":
        Dom = <Route />;
        break;
      case "Frames":
        Dom = <Frames />;
        break;
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
