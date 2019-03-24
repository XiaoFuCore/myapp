import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd';

import { connect } from 'react-redux'
import { switchMenu } from '@/redux/action'

import MenuConfig from '@/config/menuConfig'
import './index.less'

const SubMenu = Menu.SubMenu;


class NavLeft extends React.Component {

    state = {
        currentKey: ''
    }

    handelClick = ({item,key}) => {
        // 事件派发，自动调用reducer，通过reducer保存到store对象中
        const {
            dispatch
        } = this.props;
        dispatch(switchMenu(item.props.title));
    
        this.setState({
            currentKey: key
        })
    }

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        let currentKey = window.location.hash.replace(/#|\?.*$/g, '');
        this.setState({
            menuTreeNode,
            currentKey
        })
    }

    //菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}> {item.title} </NavLink>
            </Menu.Item >
        })
    }

    render() {
        return (
            <div className='nav-left'>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="ant" className='App-logo' />
                    <h1>BrightCore</h1>
                </div>
                <Menu
                    onClick={this.handelClick}
                    theme='dark'
                    selectedKeys={[this.state.currentKey]}
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}

//redux与组件链接
export default connect()(NavLeft); 