import React, { Component } from 'react'
import FormBox from "./formbox";
import  TabelBox from   './tableBox'
export default class Index extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            age:'',
            sex:'',
            list:[
                { name:'小明',age:15,sex:'男'}
            ]
        }
    }
    // 改变input值
    changeInput =(key,value)=>{
        // console.log(key,value)
        var obj = {};
        obj[key]=value;
        this.setState(obj)
    }
    // 添加一条
    additemtolist=()=>{
        const { list,name,age,sex} = this.state;
        if(name.trim()&&age.trim()&&sex.trim()){
            this.setState({
                list:[...list,{ name,age,sex}],
                name:'',
                age:'',
                sex:''
            })
        }
       
    //    { name,age,sex} ==={name:name,age:age,sex:sex}
    }
    render() {
        const {name,age,sex,list}=this.state
        return (
            <div>
               {/* 信息录入 */}
               <FormBox name={name} age={age} sex={sex} additemtolist={this.additemtolist}changeinput={this.changeInput}/>
               {/* 数据展示 */}
               <TabelBox list={list}  removeitem={this.removeitem}/>
            </div>
        )
    }
    // 从list中删除一条
    removeitem=index=>{
        const list =[...this.state.list]
        list.splice(index,1)
        // 数组.splice()会改变原数组,有返回值,返回值就是被删掉的元素
        this.setState({
            list:list
        })
    }
}
