import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 1.将createStore引入
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

// 2.编写 reducer 函数
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
// 3.使用reducer新建store
const store = createStore(counter);
//打印初始的state
const init = store.getState();
console.log(init);

function listener(){
  const current = store.getState();
  console.log(`现在有机枪${current}把`);
}
// 5.监听 State 的变化，state变化之后执行下面的语句
store.subscribe(listener);

// 4.分发事件 传递 action (通过 action 来改变 state)
store.dispatch({type:'加机关枪'})
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
