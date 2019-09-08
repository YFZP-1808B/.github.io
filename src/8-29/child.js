import React from 'react'
export default (props)=>{
    return(
        React.createElement(
            'p',
            {...props},
           props.children || '我是一个标签'
        )
    )
}