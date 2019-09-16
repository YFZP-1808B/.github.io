import React from 'react';

export default () => {
  //这里是防止用户通过手机手动输入地址栏非法访问。
  if (!sessionStorage.getItem('userLogin')) {
    alert('您没有登陆不能进来');
    window.location.hash = 'Login';
  }
  return (
    <div>
      <h1>我是首页</h1>
    </div>
  );
};