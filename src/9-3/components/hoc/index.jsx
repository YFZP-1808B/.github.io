// 高阶组件
import React from 'react'
// 1.一个函数 接收一个组件MyConponent
export default(MyComponent)=>{
    // 2.返回一个class组件
    return class Hoc extends React.Component{
        render(){
            // 3.在渲染方法里 我们使用传入的组件
            return <MyComponent>我是用高阶组件生成的</MyComponent>
        }
    }
}