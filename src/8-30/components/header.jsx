import React from 'react'
import Img from './common/img'
export default class Header extends React.Component{
    // constructor构造函数 是我们class组件生命周期的初始函数
    constructor(props){
        // super在constructor中必须是函数调用 并且一定是在构造函数的最顶层使用
        // 什么时候使用super  当前类是作为子类,继承了其他类的时候,必须在constructor里面用super进行实例化,只有这样才能拥有子类自己的this指向
        // console.log(this)
        super(props)
        console.log(this)
    }
    render(){
        return(
            React.createElement(
                'header',
                {className:'flex'},
             <React.Fragment>
            <Img src={require('../img/logo.png')}/>
            {React.createElement('p',{style:{color:'red',fontSize:'20px'}},'机智软件')}
            {React.createElement('p',{style:{color:'red',fontSize:'20px'}},'jz5158.com')}
             </React.Fragment>
            )
        )
    }
}