import React from "react";

import Child from './child'

export default class Life extends React.Component {
  constructor(props) {
    super(props);
    //state第一种写法
    this.state = {
      count: 0
    };
  }
  //state第二种写法
  // state = {
  //     count:0
  // }

  //定义函数方法一
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  //定义函数方法二
  handleClick() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    var style = {
      padding: 50,
      margin: "0 auto"
    };

    return (
      <div style={style}>
        <h3>React</h3>
        <button onClick={this.handleAdd}>递增</button>
        <button onClick={this.handleClick.bind(this)}>递减</button>
        <p>This is react life</p>
        <p>{this.state.count}</p>
        <Child name='XiaoFu' sex='man' count={this.state.count}></Child>
      </div>
    );
  }
}
