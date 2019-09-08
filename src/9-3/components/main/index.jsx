import React from 'react'
import Search from '../common/search'
// 引入高阶函数
import hoc from '../hoc'
export default ()=>{
    // 1:使用高阶组件,他不再是用标签的形式去写,另外不要在render或return里使用
    // 当有很多组件的逻辑事件相同的时候,高阶组件就是为了复用相同逻辑的
    高阶组件是参数为组件,返回值为新组件的函数
    const MyCom =hoc( function(props){
        return(
            <div>
                原组件默认内容{props.children}
            </div>
        )
    });
    return(
        <mian>
            <Search className = "icon"></Search>
            <mark>高阶组件</mark>
            <pre>
                定义:高阶组件(HOC)是react中用于复用组件逻辑的一种高级技巧   他不是api 他是一种模式 高阶组件又叫HOC
                语法:一个函数接收一个组件  并返回一个class组件
                使用:函数调用传入一个组件
            </pre>
            {/* 最终使用高阶组件 */}
            <MyCom/>
        </mian>
    )
    
}