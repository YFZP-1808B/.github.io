import React from 'react'
import './index.scss'
export default ()=>{
    return <header>
        <div className="header-top flex flex-between">
            <p>欢迎光临,预测赢家</p>
            <div>
                <strong>电话:0312-66666</strong>
                <button>登录</button>
                <button>注册</button>
            </div>
        </div>
        {/* 一级导航 */}
        <nav className="flex flex-between header-nav">
            <div>
                <img src="http://www.yuceyingjia.cn/imgs/index/logo.png" alt="LOGO"/>
            </div>
            <ul className="flex">
                <li>首页</li>
                <li>关于我们</li>
                <li>联系我们</li>
                <li>产品</li>
            </ul>
        </nav>
    </header>
}