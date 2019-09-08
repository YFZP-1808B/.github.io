// import { } from 'module'; 解构 --对象解构 数组解构
import  React,{Component,createElement,Fragment} from 'react';
// var {cloneElement}
import Img from './common/img'
export default class FunctionBox extends Component{
   render(){
    
    //    将props从this对象中解构出来
    const {props} = this;
       return (
           createElement(
               'div',
               null,
               <Fragment>
                   {createElement('h3',{style:{ textAlign:'center'}}, props.title)},
               {
                   props.imgs&&props.imgs.map((item,index)=>{
                       return <Img  key={index}width={item.width} src={item.src}/>
                   })
               }
                  
               </Fragment>
           )
       )
   }
}