import React from 'react'
import Header from '../components/header'
import Banner from '../components/banner'
import FunctionBox from'../components/functionBox'
import  '../style/index.css'
import Gsjs from './gsjs';
// 功能介绍模块的数据包
const functionImg=[
    {
        width:"33%",  src: require("../img/gongneng01.png")
    },
    {
        width:"33%",  src: require("../img/gongneng02.png")
    },
    {
        width:"33%",  src: require("../img/gongneng03.png")
    }
]
// 产品介绍模块数据包
const chanpinImgs =[
    {
        width:'24%',src: require('../img/cp01.png')
    },
    {
        width:'24%',src: require('../img/cp02.png')
    },
    {
        width:'24%',src: require('../img/cp03.png')
    },
    {
        width:'24%',src: require('../img/cp04.png')
    }
]
export default class Html extends React.Component{
    render(){
      
        // return React.createElement(
        //     'div',
        //     null,
        //     <React.Fragment>
        //         <Header/>
        //     </React.Fragment>
        // )
        return (
            <React.Fragment>
                <Header/>
                <Banner/>
                <FunctionBox title="功能介绍" imgs={functionImg}/>
                <FunctionBox title="产品展示" imgs={chanpinImgs}/>
                <Gsjs/>
                </React.Fragment>
        )
    }
      
    
}