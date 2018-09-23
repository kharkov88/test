import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Container, Form, Dimmer, Loader} from "semantic-ui-react"
import {connect} from 'react-redux'
import {fetchLogin} from '../actions'


class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      password: null
    }
    this.handleChangeLogin = this.handleChangeLogin.bind(this)
    this.handleChangePass = this.handleChangePass.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeLogin(e) {
    this.setState({
      user: e.target.value
    })
  }

  handleChangePass(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit() {
    let {dispatch} = this.props
    let newObj = {
      user: this.state.user,
      password: this.state.password
    }
    dispatch(fetchLogin(newObj))
  }

  render() {
    let {isFetching} = this.props
    return (
      <Container id='wrapper'>
        <Link to="/">home</Link>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Username</label>
            <input type='text' placeholder='Username' onChange={this.handleChangeLogin}/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type='password' placeholder='Password' onChange={this.handleChangePass}/>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
        <Dimmer active={isFetching} inverted>
          <Loader inverted content='Loading' />
        </Dimmer>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  let {isFetching} = state
  return {
    isFetching
  }
}

export default connect(mapStateToProps)(LoginPage)