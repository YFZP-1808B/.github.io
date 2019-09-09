import React from "react";


export default props => {
  return (
    <div>
      <div>
        <b>事件的写法:</b>
        <p>1.直接用bind（）方法绑定</p>
        <p>2.用箭头函数绑定</p>
        <p>3.构造器内声明，优点为仅需要一次绑定，不需要每次调用去执行绑定。</p>
      </div>
      <div></div>

      <div>
        <p>通过proxy解决跨域问题，可以直接在package.json下配置:</p>
        <p>
          <b>1."proxy": "http://api.xxxx.com"</b>{" "}
        </p>
        <div>
          <p>
            实际开发中，打包后上传到同域名路径就ok了，不需要设置webpack代理的，这时候我们在打包的时候就需要在package.json配置中关闭刚才设置的proxy，挺麻烦的，难免打包的时候忘记屏蔽掉。
          </p>
          <br />
          <b>
            <i>解决方法：</i>
          </b>
          <br />
          1.你也可以使用 create-react-app 提供的 yarn run eject
          命令将所有内建的配置暴露出来
          <br />
          2.修改webpackDevServer.config.js文件添加 注意：yarn run
          eject可能导致项目跑不起来，这时候执行yarn 或者 npm install即可{" "}
        </div>
      </div>
    </div>
  );
};
