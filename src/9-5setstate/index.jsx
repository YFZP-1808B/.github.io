import React, { Component } from 'react'
import jsonpAjax from '9-5setstate/api'
import {Button, Input} from 'antd'
export default class Index extends Component {
    constructor(){
        super()
        this.state={
            input:'',
            list:[]
        }
    }
    // 改变input
    changeInput = ({target})=>{
        this.setState({
            input:target.value
        })
    }
    // 搜索
    onSearch=()=>{
        const query = this.state.input
        if(!query) return false;
        jsonpAjax(null,this.state.input).then(res=>{
            this.setState({
                list:res.s
            })
        })
    }
    render() {
        return (
            <div>
                <Input
                placeholder="请输入内容"
                onChange={this.changeInput}
                value={this.state.input}
                />
              <button onClick={this.onSearch}>搜索</button>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return<li key={index}>
                            {` ${index+1}、${item}`}
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
