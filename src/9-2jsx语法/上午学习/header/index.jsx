// 在组件中使用jsx语法  其底层依旧是调用的React.createElement,所以必须引入react
import React from 'react'
import './index.scss'
// props属性
export default(props)=>{
    return(
        <header className="header">
             {/* 渲染父组件传进来的子组件 */}
             {props.children}
            <nav>
                <ul>
                 <li>首页</li>
                 <li>新闻</li>
                 <li>关于</li>
                </ul>
               
            </nav>
           
        </header>
    )
}