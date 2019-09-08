import React, { Component } from 'react'
import InputBox from './inputbox'
import  Listbox from './listbox.jsx';
export default class Index extends Component {
    constructor(){
        super();
        this.state = {
            serach:'',
            input:'',//输入的内容
            list:['erefgrg'] //留言数据的集合
        }
    }
        // 查询input值改变 
       changeSearch = event=>{
           this.setState({
               serach:event.target.value
           })
       }
       
    // 改变state里的input值
    changeInput = event =>{
        // 在react里数据永远都是单向的,自上而下的数据流
      this.setState({
          input:event.target.value
      })
    }
    // 添加一条数据到state的list中去
    addItemToList =()=>{
        // state定义:修改的时候注意  state只能通过setState去修改 不能直接对他进行修改
       // 错误的写法:this.state.list.push(this.state.input)
    //    es5传统
    //    var newList =this.state.list;
    //    newList.push(this.state.list)
    // es6:...this.state.list,this.state.input
    // 获取时分
    var date = new Date()

    if(this.state.input.trim()){
        this.setState({
            list:[...this.state.list,this.state.input+date.getHours()+":"+date.getMinutes()+date.getSeconds()],
            input:''
        })
    }
    }
    render() {
        return (
            <div>
                {/* 输入部分 */}
                <InputBox 
                input={this.state.input} 
                change = {this.changeInput}
                click={this.addItemToList}/>
                {/* 筛选 */}
                <div>
                <input type="text"
                value={this.state.serach}
                onChange={this.changeSearch}
                />
                <button >筛选</button>
                </div>
               
                {/* 展示部分 */}
                <Listbox list={this.state.list}/>
             
            </div>
        )
    }
}
