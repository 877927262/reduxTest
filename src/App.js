import React, { Component } from 'react';
// 1.将 connect 从 react-redux 中引入
import { connect } from 'react-redux'
import './App.css';
import { addGun, removeGun, addGunAsync } from './index.redux'
//使用装饰器
@connect(
  //你要state什么属性放到 props 里
  state =>({num:state.counter}),
  //你要什么方法，放到props里，自动 dispatch
  { addGun, removeGun, addGunAsync }
)

class App extends Component {
  render() {
    return (
      // 3.在代码里就能使用 this.props 了
      <div>
        <h1>现在有机枪{this.props.num}把</h1>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.removeGun}>上交武器</button>
        <button onClick={this.props.addGunAsync}>拖两天再给</button>
      </div>
    );
  }
}

export default App;
