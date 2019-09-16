import React from "react";
// 引入描述列表组件
import { List} from 'antd';

const data = [
    ' 2.合理地使用表单元素：使用label去包裹input及其它表单的元素',
    '3.在from表单里button按钮类型必须指定，否则会触发表单的默认事件',
    ' 4.具体使用：',
    '④.①：使用input的时候需要添加name属性，该属性是react内置的，添加其它自定义属性无效：name的值一定是和该input绑定的value变量名一致',
    '④.②：修改值的时候，使用元素的name属性去做键名',
  ];
export default props => {
  return (
   <div>
        <h2 style={{ margin: '16px 0' }}>表单的使用：</h2>
    <List
      size="large"
      header={<div>
          <h2>1.表单里的元素：</h2>
          <ul>
              <li>1、input</li>
              <li>2、textarea</li>
              <li>3、select>option</li>
              <li>4、button</li>
              <li>5、label</li>
          </ul>
      </div>}
      
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
   </div>
  );
};
 