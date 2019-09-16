import React, { Component } from 'react';
import axios from 'axios';
import './style/index.scss'
export default class Login extends Component {
  constructor() {
    super();
    this.userInfo = JSON.parse(sessionStorage.getItem('userRegister'));
    this.state = {
      username: (this.user && this.user.name) || '',
      password: ''
    };
  }
  //改变input值
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };
  //提交
  onSubmit = () => {
    const { username, password } = this.state;
    //1.前端验证
    if (!username.trim()) {
      return alert('用户名不能为空');
    } else if (!password.trim()) {
      return alert('密码不能为空');
    }
    //2.走接口
    axios
      .get('/api/register.json', {
        username,
        password
      })
      .then(res => {
        //3.本地测试：前端需要做后端接口的逻辑对比，一般是后端来做测试
        //假设：这里的数据就是接口获取的
        const login = { username, password };
        //假设：这里的数据是从数据库读出来的
        const userInfo = this.userInfo;
        //使用接口的数据跟数据库的数据对比，如果一致，说明登陆成功
        if (!userInfo) {
          return alert('该账号不存在，请理解注册');
        } else if (userInfo.username !== login.username) {
          return alert('用户名不对');
        } else if (userInfo.password !== login.password) {
          return alert('密码错误');
        }
        axios.get('/api/login.json', { username, password }).then(res => {
          if (res.status === 200) {
            sessionStorage.setItem(
              'userLogin',
              JSON.stringify({ username, password })
            );
            this.props.getstatus({ ...res.data, typename: 'Home' });
          } else {
            alert('网络出错，稍后重试');
          }
        });
      });
  };
  render() {
    const { username, password } = this.state;
    return (
      <form className="ysb-form-002">
        <label >
          <input
            autoComplete="off"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            placeholder="用户名"
             className="ysb-input-003"
          />
        </label>
        <label>
          <input
            autoComplete="off"
            type="password"
            value={password}
            name="password"
            onChange={this.handleChange}
            placeholder="密码"
            className="ysb-input-004"
          />
        </label>
        <label>
          <button type="button" 
          onClick={this.onSubmit}
          className="ysb-login"
          >
          
           Login...
          </button>
        </label>
      </form>
    );
  }
}
