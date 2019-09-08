import React, {Component}  from 'react'
import Header from './components/header'
import Main  from './components/main'
import Foot from './components/foot'
export default class Html extends Component{
  render(){
    //   一般模板容器组件为class组件 ui展示组件为无状态组件
      return(
          <div>
             {/* 该写法是插槽写法 */}
              <Header>
              <h3>欢迎来到jsx</h3>
              </Header>
              <Main/>
              <Foot/>
          </div>
      )
  }
}