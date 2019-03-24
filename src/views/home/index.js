import React from 'react'


export default class Home extends React.Component {

    state = {
        msg:'xiaofu'
    }

    handleClick = () =>{
        this.setState({
            msg:'XiaoFu'
        })
    }

    render(){
        return (
            <div onClick={this.handleClick}>
                home {this.state.msg}
            </div>
        )
    }
    
}