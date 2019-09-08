import React, { Component } from 'react'

export default class Child extends Component {
    // 挂载成功
    componentDidMount(){
        // setTimeout返回一个id id是一个数字
      this.time =   setInterval(()=>{
            console.log('子组件的定时器')
        },1000)
    }
    // 卸载前
    componentWillMount(){
        // 该函数用来处理常驻内存的变量或事件
        clearInterval(this.time)
        console.log('卸载前')
    }
    render() {
        return (
            <div>
                <div>子组件</div>
            </div>
        )
    }
}
