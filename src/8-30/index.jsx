import React from 'react'
import Child from './components/child'
import './style/index.css'
/*
 * class组件:容器组件,功能组件
 *  详解:class关键字声明、<组件名称>、extends继承谁、 React.Component基础类
 *   class说明:在class里的继承必须是class,只有class才能继承class
 */
export default class Html extends React.Component{
    // 在class组件中dom元素必须是在render方法中的和无状态组件有直接的区别
    // render 渲染
    render(){
        // 一个函数执行之后想要获取他内部的东西,就必须使用return进行返回
      return (
    React.createElement(
        'div',
        {},
        // React.Fragment是一个占位组件  作用是:在react定义中,所有组件都必须在一个根组件中,在我们不想拥有多层父级的时候 使用React.Fragment做占位既可以解决根组件的问题,又保证页面上不会出现多余的dom元素
        // React.Fragment他不会生成任何dom元素,并且有根容器的特性
     <React.Fragment>
         {/*
            注意:在dom元素内的{}不是单纯意义的对象,他表示js表达式,及js执行环境,只有在dom内写注释,或者运行js的时候才需要用到{}
            自定义属性:我们在dom元素上自定义的属性必须是全小写 只有react内置的如className是驼峰的以及forHtml
        
        */}
         <Child classname='header' text='我是头部'/>
         <Child classname='left'>我是左侧</Child>
         <Child classname="right">{React.createElement(
          'img',
        //   如果加载的资源是来自于public文件夹里的,不需要使用require直接用/来表示,脚手架会自动去加载 但是资源是在src目录里的需要使用require进行加载
             {src:require("../asets/logo192.png")}
         )}</Child>
     </React.Fragment>
    )
      )
    }
}