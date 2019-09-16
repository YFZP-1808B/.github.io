import React, {Component} from "react";
import Mylayout from "./Layout/index";

//受控组件和非受控组价
import ComponentType from "./componentType/index";
//条件渲染
import Install from "./Install/index";
//表单的使用
import Cass from "./Cass-Z/index";
//边界错误
import LifeCycle from "./LifeCycle-Z";
//React中的列表和diff
import PropsContent   from "./PropsContent-Z/index";
//event事件对象
import Classdiff from "./Classdiff/Classdiff";


export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      isCom: window.location.hash.slice(1) || 'componentType'
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
      case "ComponentType":
        Dom = <ComponentType />;
        break;
      case "Install":
        Dom = <Install />;
        break;
      case "Cass":
        Dom = <Cass />;
        break;
      case "LifeCycle":
        Dom = <LifeCycle />;
        break;
      case "Classdiff":
        Dom = <Classdiff />;
        break;
      case "PropsContent":
        Dom = <PropsContent />;
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
