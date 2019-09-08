import  React ,{Component,Fragment} from 'react'
import Header from './compoments/header'
import Footer from './compoments/foot'
import Main from './compoments/mian'
export default class Html extends Component{
    render(){
        return(
            <Fragment>
                {/* 头部 */}
            <Header></Header>
            {/* 中间部 */}
            <Main/>
             {/* 底部 */}
             <Footer/>
            </Fragment>
        
        )
    }
}