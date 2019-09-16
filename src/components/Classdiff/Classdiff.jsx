import React from 'react'
import { List, Typography } from 'antd';

const data = [
 
  '1、event.target:被触发的具体的元素.这个是不确定的',
  '2、event.currentTarget:事件被绑定到的具体元素',
  '3、event.nativeEvent:原生事件对象',
  '4、event.preventDefault() 清除默认事件',
  '5、event.stopPropagation() 清除冒泡    清除冒泡写在要清除的子级上,因为冒泡是从内向外的(从子向父) ',
];

export default props =>{
  return(
    <div>
       <h3 style={{ margin: '16px 0' }}>event事件对象</h3>
  <List
    size="small"
    header={<div>
      <b>event：事件对象--- react中叫做合成的事件对象【react封装的事件对象】</b>
      <h1 className="top"> <b>event事件对象包含的通用属性:</b> </h1>
    </div>}
    footer={<div>
      <h2>event.persist()</h2>
       <h3>event.persist()将event对象的属性值强制保留</h3>
    <h1>解决的问题：</h1>
    event对象在异步方法里丢失属性值的问题。
    </div>}
    bordered
    dataSource={data}
    renderItem={item => <List.Item>{item}</List.Item>}
  />
    </div>
    
  )
 
}