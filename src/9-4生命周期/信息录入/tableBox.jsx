 import React from 'react'
export default props=>{
    return(
        <table border="1">
            <thead>
      <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
          <th>操作</th>
      </tr>
            </thead>
            <tbody>
                {
                    props.list.map((item,index)=>{
                        return  (<tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.sex}</td>
                            <td>{item.age}</td>
                            <td><button type="button" onClick={
                                ()=>props.removeitem(index)
                            }>删</button></td>
                        </tr>
                        )
                    })
                }
               
            </tbody>
        </table>
    )
}