import React from 'react'
import './index.scss'
export default(props)=>{
    return(
        <div className='common-search'>
            <label>
                <input type="text" placeholder="请输入内容"/>
                <button>搜索</button>
            </label>
        </div>
    )
}