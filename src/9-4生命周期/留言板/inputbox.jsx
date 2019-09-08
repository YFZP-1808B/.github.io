import React from 'react'
// 输入的地方-留言板
 export default (props)=>{
     return(
         <div>
             <input type="text" value={props.input} onChange={props.change}/>
             <button onClick={props.click}>留言</button>
         </div>
     )
 }