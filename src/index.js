import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { counter } from './index.redux'
// 1.通过 reducer 创建一个 store
const store = createStore(counter)

function render(){
  // 将 store 传递给 app 组件
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
}

render()
// 当状态改变时，重新渲染组件
store.subscribe(render);
registerServiceWorker();
