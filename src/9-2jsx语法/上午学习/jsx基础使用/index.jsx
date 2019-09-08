import React,{Component} from 'react'
import './index.css'
export default class  Html extends  Component{
    // 在class类中表示构造函数在React组件中 是挂载阶段的第一个函数
    constructor(){
       super()
    }
 
    // 渲染函数在生命周期里挂载和更新阶段都有它
    render(){
        // jsx是一种看上去很像html标签的语法,但是他的底层还是js  React会将jsx语法转换为React.createElement()去执行,所以,jsx被称作react.createElement的语法糖
        const boxStyle={
            color:'yellow'
        }
        return(
            // React.createElement('div',{className:'box'},React.createElement('h1'))
            // 在虚拟dom中使用js的变量或者函数之类的,都需要放在一个{}js表达式,理解为js需要执行的环境
            <div className="box" style={boxStyle}>
                <h1>今天开始上手jsx语法</h1>       
            </div>
        )
    }
}