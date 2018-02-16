import React from 'react'
import { connect } from 'react-redux'
import { login } from './Auth.redux'

// 两个 reducer 每个 reducers 都有一个 state
@connect(
  state=>state
)
class Auth extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return <h2>Auth Page</h2>
  }
}

export default Auth
