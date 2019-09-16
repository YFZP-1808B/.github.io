import React, { Component } from 'react';
import './index.scss';
const myState = {
  text: '',
  password: '',
  selest: '',
  checkbox: [false, false],
  radio: '1',
  textarea: '',
  sex:'',
  hobby:''
};

export default class Index extends Component {

    
  //表单提交事件
  handonSubmit = event => {
    const { target } = event;
    event.preventDefault(); //取消默认事件s
    console.log(target.querySelectorAll('input[name=text]')[0].value);
  };

  fn=()=>{
    return (
            <div>
                <p style={{textAlign:'center',fontSize:'20px' ,color:'white'}}>这是你的个人资料</p>
                <br/>
                姓名:{this.state.text}<br/>
                身高：{this.state.password}<br/>
                性别：{this.state.sex}<br/>
                个人爱好：{this.state.hobby}<br/>
                所在城市：{this.state.selest}<br/>
                个人简介{this.state.textarea}<br/>
            </div>
            )
}


  //重置表单事件
  reSetFrom = () => {
    // console.log(myState);
    this.setState(myState);
  };
  //改变state的值
  handChange = ({ target }) => {
    if (target.name === 'checkbox') {
      const newCheckbox = [...this.state.checkbox];
      newCheckbox[target.value] = target.checked;
      console.log(([...this.state.checkbox][target.value] = target.checked));
      return this.setState({
        [target.name]: newCheckbox
      });
    }
    this.setState({
      [target.name]: target.value
    });
  };
  constructor() {
    super();
    this.state = myState;
  }
  ooo=(e)=>{
      console.log(e.target.getAttribute('sex'))
      this.setState({
          sex:e.target.getAttribute('sex')
      })
  }
  eee=(e)=>{
    console.log(e.target.getAttribute('hobby'))
    this.setState({
        hobby:e.target.getAttribute('hobby')
    })
}
  //渲染函数
  render() {
    const { text, password, selest, checkbox, radio, textarea } = this.state;
    return (
        <div className='t-box'>
        <form
        onSubmit={this.handonSubmit}
        onReset={this.reSetFrom}
        autoComplete="off">
        <label>
          用户名：
          <input  type="text" value={text}  onChange={this.handChange}  name="text" className='shuru'/>
        </label>
        <label>
          身高：
          <input type="text" value={password} onChange={this.handChange} name="password" className='shuru'/>
        </label>
        <label>
          所在城市：
          <select name="selest"  onChange={this.handChange}>
            <option value="北京">北京</option>
            <option value="安徽">安徽</option>
            <option value="河北">河北</option>
          </select>
        </label>
        <label>
          个人爱好：
         足球：<input type="checkbox" checked={checkbox[0]} value="0" name="checkbox" hobby='足球'onClick={this.eee}   onChange={this.handChange}/>
         篮球： <input type="checkbox"  checked={checkbox[1]} value="1" name="checkbox" hobby='篮球'onClick={this.eee}  onChange={this.handChange}/>
        </label>
        <label>
          性别：

         男 <input type="radio" name="radio" checked={radio === '1'} value="1" sex='男' onClick={this.ooo} onChange={this.handChange}/>
          女<input type="radio" name="radio" checked={radio === '2'} value="2" sex='女' onClick={this.ooo} onChange={this.handChange}/>
        </label>
        <label>
          个人简介：
          <textarea name="textarea" value={textarea} onChange={this.handChange}></textarea>
        </label>
        <label>
          <button type="button" onClick={this.register}>
            提交
          </button>
          {/* <button type="submit">表单提交</button> */}
          <button type="reset">重新输入</button>
        </label>
      </form>
      {this.fn.call(this)}
      </div>
    );
  }
  register = () => {
    //前端验证，验证通过以后
    // 2.调用接口，接口返回的数据存到全局里面
    // 3.控制跳转到登陆页面
          console.log(this.state.selest)
          console.log(this.state.text)
          console.log(this.state.password)
          console.log(this.state.checkbox)
          console.log(this.state.textarea)
          console.log(this.state.sex)
           // 1.前端验证，验证通过以后
    const { text, password } = this.state
    if (!text) {
      return alert('姓名不能为空')
    } else if (!password) {
      return alert('身高不能为空')
    }
    
  };
}


