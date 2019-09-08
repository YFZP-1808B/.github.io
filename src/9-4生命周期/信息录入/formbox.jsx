import React from 'react'
import './index.scss'
export default props=>{
    const{name,age,sex,changeinput,additemtolist}=props;
    const changeInput = changeinput
    return(
        <form >
           <label htmlFor="">
               姓名:<input type="text"  value={name} onChange={(event)=>{
                   changeInput('name',event.target.value)
               }}/>
           </label>
           <label htmlFor="">
               性别:<input  type="text" value={sex} onChange={(event)=>{
                   changeInput('sex',event.target.value)
               }}/>
           </label>
           <label htmlFor="">
               年龄:<input type="text"  value={age} onChange={(event)=>{
                   changeInput('age',event.target.value)
               }}/>
           </label>
           <label htmlFor="">
            <button type='button' onClick={additemtolist}>提交</button>
           </label>
        </form>
    )
}