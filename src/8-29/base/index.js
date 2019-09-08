// 1.引入react依赖
import React from 'react'
// 3.引入自定义无状态组件
import Child from './child1'
// 2.创建无状态组件
export default ()=>{
    return(
        React.createElement(
            'div',
            null,
            // Child({name:'我的名字叫xx',text:'我是父亲给的内容'})
          [
            <Child key='1' text='我是父亲给的内容'/>,
            <Child key='2'/>
          ]
        )
    )
}