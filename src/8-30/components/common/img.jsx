import React from 'react'
// 这是一个公共的复用的图片组件
export default class Img extends React.Component{
    render(){
        return React.createElement(
            'img',
            {src:this.props.src,width:this.props.width,height:this.props.height,textAlign:this.props.textAlign}
        )
    }
}