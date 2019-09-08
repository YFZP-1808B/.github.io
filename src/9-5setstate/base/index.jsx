import React, { Component } from 'react'
import axios from 'axios'
import jsonp from 'jsonp'

// axios里只有get方式的参数需要params包装,其他类型不需要
        // axios本身不可以跨域
import '9-5setstate/index.scss'
export default class Index extends Component {  
    constructor(){
        super()
        this.state = {
            input :'',
            list:[]
        }
      this.changeInput=({target})=>{
            this.setState({
                input:target.value
            })
        }
        
    };
    // 改变input值
    // cnpm i -S jsonp
    // 用百度接口去搜索
    onSearch=()=>{
        jsonp(
            "http://suggestion.baidu.com/su?wd="+this.state.input,{
                param :'cb'    
            },
          (err,res)  =>{
                if(err){
               alert('接口出错!')
                }else{
                    this.setState({
                        list:res.s
                    })
                }
                console.log(res)
                }
        )
        // setState是异步的,调用它不会立即去修改state值,同一时间多次使用setState会自动合并成一个
        // 处理异步的setState的方法:传入一个函数
        // this.setState(()=>{
        //     return{
        //         count:100
        //     }
        //     });
            // 由于setState是异步的,在调用它之后立即获取值,是拿不到最新值得,所以setState方法接受两个回调函数,第一个函数是设置值,第二个函数是获取被修改后state最新的值
            // 第一个函数接收一个state参数,该参数就是this.state的映射,第二个函数没有参数
            // this.setState(state=>{
            //     return{
            //       count:++state.count
            //     }
            //     });
            //     this.setState(state=>{
            //         return{
            //             count:++state.count
            //         }
            //         },()=>{
            //             console.log(this.state.count)
            //         });
    //     const getData=res=>{
    //         this.setState({
    //             list:res.s
    //         })
    //     }
    //     axios.get('su?wd='+this.state.input,{
    //         // 回调函数
    //            params:{cb:'getData'}
    //          }).then(res=>{
    //              console.log(getData)
    //         eval(res.data)
    //          })
    //     axios.get('web.json').then(res=>{
    //         // console.log(res.data)
    //         this.setState({
    //             list:res.data.list
    //         })
    //     })
     }
    render() {
        const { input, list } = this.state;
        return (
            <div>
                <div>
                <input type="text" value={input} onChange={this.changeInput}/>
                <button onClick={this.onSearch}>搜索</button>
                </div>
                <ul>
                    {
                          list.map((item,index)=>{
                              return <li key={index}>{item}</li>
                          })
                    }
                </ul>
            </div>
        )
    }
}
