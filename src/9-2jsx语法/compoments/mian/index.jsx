import React from 'react'
import Child from '../common/index'
export default ()=>{
    return (
        <main style={{height:"1000px"}}>            
                <h1>我是中间部分</h1>
                <p className="default">
                    css样式在react中是没有作用域的,只有一处有及全局都会影响
                </p>
                <Child type='div' classname="color-red"/>

                <Child type='span'/>

                <Child type='mark'>我是一个标记我代替了默认值</Child>

                {/* 
                 <Child/>===jsx语法  等价于createElement
                 写在<Child>内容</Child>相当于creatElement方法里的第三个参数,即表示内容或者子元素
                 这里的内容或者子元素在该组件内部的props中的children存储
                */}
                <Child>
                    我们现在使用的是点组件,他不是react中的api 而是一种组合模式,该默认已经初步具有了高阶组件的特性
                </Child>
                {/* 
                react 元素中非dom属性:
                dangerouslySetInnerHTML将字符串dom渲染呈真实的dom
                ref key
                
                */}
             <div dangerouslySetInnerHTML={{__html:'<h1>我是使用非dom属性渲染出来的</h1>'}}></div>
        </main>
    )
}