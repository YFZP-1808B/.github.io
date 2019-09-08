import React from 'react'
class Child extends React.Component{
    render(){
        // this.props他是class组件的属性 区别于无状态组件多了一个this,因为class组件在被使用的时候会实例化也就是new,因此在使用他内部的属性或者方法的时候都需要用this去点出来
        return(
            React.createElement(
                'p',
                {className:this.props.classname},
              this.props.text ||this.props.children ||  '我是一个p标签'
            )
        )
    }
}
export default Child;