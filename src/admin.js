import React from 'react'
import {Row,Col} from 'antd'
import {Header, Footer,NavLeft} from './components'
import './styles/common.less';

export default class Admin extends React.Component{



    render(){
        return(
          
                <Row className='container'>
                    <Col  span={4}  className='nav-left'>
                      <NavLeft></NavLeft>
                    </Col>
                    <Col  span={20} className='main'>
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
