import React from 'react'
import './index.scss'
import Search from '../common/search/index '
export default ()=>{
    <React.Fragment>
        <div className = 'flex flex-between header-ysb-001'>
            <ul className="flex">
                <li>欢迎来到天猫</li>
                <li>请登录</li>
                <li>请注册</li>
            </ul>
            <ul className="flex">
                <li>购物车</li>
                <li>订单</li>
                <li>退出登录</li>
            </ul>
        </div>
        <div className="header-search-ysb-001">
            <div><img src="https://img.alicdn.com/tfs/TB11ojWRXXXXXafaFXXXXXXXXXX-190-27.png"  alt="LOGO" width="100px" height="20px"
            /></div>
            {/* 二级类名前缀使用父级类名缩写,这样既有关联性又有可查性 */}
            <div className="hss0-inner">
                {/* 搜索组件 */}
                <input type="text" />
                {/* 分类 */}
                <ul className="flex">
                    <li>组装机</li>
                    <li>电脑</li>
                    <li>笔记本</li>
                </ul>
            </div>
            <div><img src="https://img.alicdn.com/tfs/TB1vg2XbQL0gK0jSZFxXXXWHVXa-380-160.png"  width="100px" alt="天猫二维码"/></div>
        </div>
    </React.Fragment>
}