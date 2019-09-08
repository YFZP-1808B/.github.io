import React from 'react'
import Child from './child'
// class组件:会被实例化拥有this指向,拥有react一切特性  比如说生命周期,状态,边界错误 用于容器组件 承载逻辑与接口 又叫做功能组件
// 优点:功能强大  功能丰富 可扩展性强    缺点:渲染比无状态组件要慢 容易代码臃肿
// 无状态组件:(箭头函数/函数)组件,不需要实例化,没有this只接受一个props[属性]   用于UI组件 展示组件  专门写dom的组件
// 优点:加载快  渲染快  不会产生额外的内存占用   缺点:功能单一 没有react其他特性  只有一个props属性可用
export default  class Shengmingzhouqi extends React.Component{
     //挂载阶段
     constructor(){
         super()
         console.log('1.挂载前');
        //  状态是当前组件自己的存数据的
        // 状态必须是对象类型
        this. state ={name:"ysb",isShow:true}
             }   
            //  改变state状态值
            changeName = ()=>{
                // 使用setState改变state
                this.setState({
                    name:'123456'
                })
            }
            // 控制子组件显示与销毁
            showHide=()=>{
            // state只要被修改就会触发组件的更新阶段
            this.setState({
                isShow:!this.state.isShow
            });
            };
              render(){
                  console.log('2.render渲染')
                  
                  return <div>
                      <h1>{this.state.name}</h1>
                      <button onClick={this.changeName}>改变name</button>
                     {this.state.isShow && <Child/>}
                      <button onClick={this.showHide}>显示与销毁</button>
                      <button onClick={this.update}>强制更新的使用</button>
                  </div>
              }
            //   强制更新方法
            update =()=>{
                this.forceUpdate();
            }
              componentDidMount(){
                //   接口请求都会在阶段完成之后的钩子函数里面
                  console.log('3.挂载成功')
              }
            //   更新阶段
            componentDidUpdate(){
                // 触发更新阶段:props被修改   state状态被修改  forceupdate强制更新
                console.log('4.更新完成')
            }
            // 
}


