import React from 'react'
import Img from './common/img'
export default class Banner extends React.Component{
    render(){
        return(
            <>
            <Img width="100%"   src = {require('../img/banner.png')}/>
            <Img width="100%"   src ={require('../img/hot.png')}/>
            </>
        )
    }
}