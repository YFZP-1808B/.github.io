import jsonp from 'jsonp'
const jsonpAjax = (url,param)=>{
  return  new Promise((resolve,reject)=>{
    // 这里是同步的
        jsonp(
         url||"http://suggestion.baidu.com/su?wd="+param,{
                param :'cb'
            },
          (err,res)  =>{
              if(err){
                  // 异步的
                reject('您的接口错误')
              }else{
                resolve(res)
              }
          }
        )
    })
}
export default jsonpAjax