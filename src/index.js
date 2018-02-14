import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//使用 applyMiddleware 支持异步
// 1. 引入 applyMiddleware
import { createStore, applyMiddleware } from 'redux';
import { counter, addGun, removeGun, addGunAsync} from './index.redux'
import thunk from 'redux-thunk'
// 通过 reducer 创建一个 store , 2.并且使用异步中间件
const store = createStore(counter,applyMiddleware(thunk))

function render(){
  // 将 store 传递给 app 组件
  ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync}/>, document.getElementById('root'));
}

render()
// 当状态改变时，重新渲染组件
store.subscribe(render);
registerServiceWorker();
