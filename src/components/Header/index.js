import React from 'react'
import { Row, Col } from 'antd'

import { connect } from 'react-redux'

import Util from '@/utils/utils'
import './index.less'

class Header extends React.Component {

    state = {}

    componentWillMount() {
        this.setState({
            username: '小小狐仙'
        })
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000)

    }

    render() {
        return (
            <div className='header'>
                <Row className='header-top'>
                    <Col span={24}>
                        <span>欢迎，{this.state.username}</span>
                        <a href='#'>退出</a>
                    </Col>
                </Row>
                <Row className='breadcrumb'>
                    <Col span={4} className='breadcrumb-title'>
                        {this.props.menuName || '首页'}
                    </Col>
                    <Col span={20} className='breadcrumb-weather'>
                        <span> {this.state.sysTime}  </span>
                        <span>🌤</span>
                    </Col>
                </Row>
            </div>
        )
    }




}

const mapStateToProps = state => {
    return {
        menuName: state.menuName
    }
};
export default connect(mapStateToProps)(Header)