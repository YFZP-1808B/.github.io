import React from 'react'
import Child from './child'
import Web from './web'
export default ()=>{
    return(
        React.createElement(
            'div',
            null,
            // 该写法叫做插槽写法
            <Web>
                <Child/>
                <Child/>
                <Child/>
            </Web>
        )
    )
}