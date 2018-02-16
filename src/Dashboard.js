import React from 'react'
import { Link, Route } from 'react-router-dom';
import App from './App';

function Erying(){
  return <h2>二营</h2>
}

function Qibinglian(){
  return <h2>骑兵连</h2>
}

class Dashbord extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div>
        <ul>
          <li>
            <Link to="/dashbord">一营</Link>
          </li>
          <li>
            <Link to="/dashbord/erying">二营</Link>
          </li>
          <li>
            <Link to="/dashbord/qibinglian">骑兵连</Link>
          </li>
        </ul>
        <Route path='/dashbord' exact component={App}></Route>
        <Route path='/dashbord/erying' component={Erying}></Route>
        <Route path='/dashbord/qibinglian' component={Qibinglian}></Route>
      </div>
    )
  }
}

export default Dashbord
