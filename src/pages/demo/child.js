import React from "react";

export default class Child extends React.Component {
  constructor(props) {
    super(props);
  }
// 生命周期
  componentWillMount() {
    console.log("will mount");
  }
  componentDidMount() {
    console.log("did mount");
  }
  componentWillReceiveProps(newProps) {
    console.log("will props" + newProps);
  }
  shouldComponentUpdate() {
    console.log("should will upadate");
    return true;
  }
  componentWillUpdate() {
    console.log("will upadate");
  }
  componentDidUpdate() {
    console.log("did upadate");
  }
  componentWillUnmount() {
    console.log("will unmount");
  }

  render() {
    return (
      <div>
        <p>这是子组件-生命周期</p>
        <p>
          姓名:
          <span style={{ padding: 10, color: "#ff9795" }}>
            {this.props.name}
          </span>
        </p>
        性别：
        <span style={{ padding: 10, color: "#ff9795" }}>{this.props.sex}</span>
        <p>{this.props.count}</p>
      </div>
    );
  }
}
