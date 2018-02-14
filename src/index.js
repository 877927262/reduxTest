import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 将createStore引入
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

// 通过 reducer 建立 store
// 根据老的 state 和 action 生成新的 state
function counter(state=0, action){
  switch(action.type){
    case '加机关枪':
      return state+1
    case '减机关枪':
      return state-1
    default :
      return 10
  }
}
// 使用reducer新建store
const store = createStore(counter);

const init = store.getState();
console.log(init);
//
function listener(){
  const current = store.getState();
  console.log(`现在有机枪${current}把`);
}
// 监听 State 的变化，state变化之后执行下面的语句
store.subscribe(listener);

// 分发事件 传递 action
store.dispatch({type:'加机关枪'})
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
