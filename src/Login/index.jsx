import React, { Component } from 'react';
import Register from './register';
import Login from './login';
import Home from '../components/home';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      isCom: 'Register'
    };
  }
  //获取饭hi组件的状态
  getstatus = data => {
    this.setState({
      isCom: data.typename
    });
  };
  render() {
    let Dom = '';
    switch (this.state.isCom) {
      case 'Register':
        Dom = <Register getstatus={this.getstatus} />;
        break;
      case 'Login':
        Dom = <Login getstatus={this.getstatus} />;
        break;
      case 'Home':
        Dom = <Home />;
        break;
    }
    return <div>{Dom}</div>;
  }
}
export default Index