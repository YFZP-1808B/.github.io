import React from 'react'
// props:在react里面叫属性 父组件传递给子组件上所有的属性都会在props里拿到
// props类型是对象
export default (props)=>{
    console.log(props)
    return (
        React.createElement(
            'p',
            null,
            // 在js里表示false的有0,空字符串,null undefined
           props.text|| '我是一个p标签'
        )
    )
}