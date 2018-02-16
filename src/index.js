import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { counter } from './index.redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { BrowserRouter, Route, Link } from 'react-router-dom'


const store = createStore(counter,applyMiddleware(thunk))

function Erying(){
  return <h2>二营</h2>
}

function Qibinglian(){
  return <h2>骑兵连</h2>
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to='/'>一营</Link>
          </li>
          <li>
            <Link to='/erying'>二营</Link>
          </li>
          <li>
            <Link to='/qibinglian'>骑兵连</Link>
          </li>
        </ul>
        {/*使用 exact 进行路由的完全匹配*/} 
        <Route path='/' exact component={App}></Route>
        <Route path='/erying' component={Erying}></Route>
        <Route path='/qibinglian' component={Qibinglian}></Route>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
