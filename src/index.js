import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Auth from './auth'
import Dashbord from './Dashboard'

const store = createStore(reducers,applyMiddleware(thunk))

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
