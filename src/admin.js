import React from 'react'
import {Row,Col} from 'antd'
import {Header, Footer} from './components'
import './styles/common.less';

export default class Admin extends React.Component{



    render(){
        return(
          
                <Row className='container'>
                    <Col  span={3}  className='nav-left'>left</Col>
                    <Col  span={21} className='main'>
                        <Header>header</Header>
                        <Row className='content'>
                            {/* {this.props.children} */}

                        </Row>
                        <Footer>footer</Footer>
                    
                    </Col>
                </Row>

          
        )
    }




}
