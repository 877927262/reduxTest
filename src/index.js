import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//使用 applyMiddleware 支持异步
// 引入 applyMiddleware
import { createStore, applyMiddleware } from 'redux';
import { counter } from './index.redux'
//1.从 react-redux 中引入 Provider
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// 通过 reducer 创建一个 store , 2.并且使用异步中间件
const store = createStore(counter,applyMiddleware(thunk))

ReactDOM.render(
  // 2.使用 Provider 包裹 app 组件，并且将 store 传递给 provider
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
