import React from 'react'
// 在react中严格遵照w3c标准 比如p标签里不可以嵌套div或者其他块级元素
export default(props)=>{
    return (
        React.Children.map(props.children, function(item, index) {
            const Item = React.cloneElement(
                item,
                index !== 0 ? { style: {color: 'red'} } : null,
                null
            )
            return Item;
        })
    )
    return(
       // 在props里默认是没有children的 只有当该组件被调用的时候且插入了一些子组件的时候,才会在props里有一个children,他的类型是数组
    //    props.children
       //props.children  类型是数组   如果单纯的调用它  叫做隐式渲染      
    //    我们可以使用react提供的方法对children里的每一项做处理,这样的使用我们叫做显示渲染
    // 顶级api概念  凡是挂载到react和reactDOM下面的api都是顶级的,在全局里面可以访问到
    // 比如 reactElement cloneElement  children
    // 在react发展中往往有三个api是经常配合使用的,他们就是 React.Children+React.cloneElement+props.children 
    React.Children.map(props.children,(item,index)=>{
        const newitem=React.cloneElement(item,
            {style:{color:'red'}},
            index
        )
    return newitem;
    })
    )
}
// 顶级api   React.Children他的作用是处理组件里面的props.children的  他下面有很多方法  我们常用的就是map遍历
// 顶级api   React.cloneElement他的作用是克隆组件里面的children的每一项子元素 并返回一个新的react元素 该方法有三个函数和createElement几乎一致,1:元素2:属性3:内容或者子元素