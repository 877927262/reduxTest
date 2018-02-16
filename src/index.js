import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { counter } from './index.redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'

import Auth from './auth'
import Dashbord from './Dashboard'

const store = createStore(counter,applyMiddleware(thunk))



class Test extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return <h1>测试组件</h1>
  }
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact component={Auth}></Route>
        <Route path='/dashbord' component={Dashbord}></Route>
        <Redirect to='/dashbord'></Redirect>
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
