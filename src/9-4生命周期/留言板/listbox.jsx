import React from 'react'
// 展示的地方
export default (props)=>{
    return(
       <ul>
            <li>当前信息条数:{props.list.length}</li>             
           {
               props.list.map((item,index)=>{
                   return <li key = {index}>
                       {item}
                   </li>
               }) 
           }
        
       </ul>
    )
}