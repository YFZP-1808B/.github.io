import React, { Component } from 'react';
import Mylayout from './Layout/index';
// 引入react基础概述
import ReactBase from './ReacrtBase/index';
// react组件分类
import ComponentType from './componentType/index';
// 全局安装脚手架
import Install from './Install/index';
//cass使用
import Cass from './Cass-Z/index';
//生命周期
import LifeCycle from './LifeCycle-Z/';
//props怎么控制组件的显示内容
import Classdiff from './Classdiff/Classdiff';
//组件的区别
import Rendering from './Rendering/Rendering';
//渲染原理
import Toplevelapi from './Toplevelapi/Toplevelapi'
//顶级API
import PropsContent from './PropsContent-Z/';
//事件的写法与跨域的使用
import Blog from './blog/index';
//jsconfig.json
import Route from './route/index';
//antd框架
import Frame from './frame/frames'

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      isCom: window.location.hash.slice(1) || 'ReactBase'
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
    let Dom = '';
    switch (this.state.isCom) {
      case 'ReactBase':
        Dom = <ReactBase />;
        break;
      case 'ComponentType':
        Dom = <ComponentType />;
        break;
      case 'Install':
        Dom = <Install />;
        break;
      case 'Cass':
        Dom = <Cass />;
        break;
      case 'LifeCycle':
        Dom = <LifeCycle />;
        break;
      case 'PropsContent':
        Dom = <PropsContent />;
        case 'Classdiff':
            Dom = <Classdiff/>;
            break;
            case 'Toplevelapi':
            Dom = <Toplevelapi/>;
              break;
          case 'Rendering':
            Dom = <Rendering/>;
            break;
            case 'Blog':
            Dom = <Blog/>;
              break;
              case 'Route':
              Dom = <Route/>;
                break;
                case 'Frame':
                Dom = <Frame/>;
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
