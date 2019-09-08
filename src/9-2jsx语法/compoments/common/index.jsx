// 公共的组件  使用点组件的写法
import React from 'react'
// 使用脚手架配置的css-moudle模式写css样式,解决了样式冲突
import style  from './index.moudle.css'
// 关于对象的使用两种方法,一种是用对象.属性出来的属性值  一种是对象['属性名']
export default (props)=>{
    // 如果父组件没有传入标签的类型,我们给一个默认的类型,并且该变量首字母大写
    const Tag = props.type ||"p"
    const content =props.children ||'我是一个点组件'
    return<Tag className={props.classname||'style.default'}>
       {content}
    </Tag>
}