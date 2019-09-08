import React from 'react';
import './css/index.css';
// ./相对路径  指当前所在位置    /指的是绝对路径 指从根目录查找
// http://baidu.com/public/123.png   这也是绝对路径
//  ../上级目录      ../../多级上层目录
const childs=[
  [
    React.createElement(
      'p',
      {key:'p1',className:'color-blue font-size-60',onClick:()=>{alert(1)}},
      '我是一个p标签'
    ),
    React.createElement(
      'p',
      {key:'p2'},
      '我是第二个p标签,我默认使用父元素的属性样式'
    )
  ]
]
function App() {
  return (
    React.createElement(
      'div',
      {
        // 在react中,所有的dom元素都是js生成的虚拟dom 在js中class是保留关键字 所以我们在使用如class类名的时候需要遵守react定义的className  
        // 除了class类名 还有label标签上的for属性 需要使用forHtml表示
        className:'color-red'
      },
     React.createElement(
       'div',
       null,
      childs
     )
      )
  );
}
export default App;
