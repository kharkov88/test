import React from 'react'
import { connect } from 'react-redux'
import {Router, Route} from 'react-router-dom'
import { fetchData, deleteItem, createItem } from '../actions'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

class App extends React.Component {
  constructor(props) {
    super(props)
    this.renderMain = this.renderMain.bind(this)
  }
  componentDidMount () {
    this.props.dispatch(fetchData)
  }
  render () {
    return (
      <Router history={history}>
        <div>
          <Route exact path='/' component={this.renderMain}/>
          <Route path='/login' component={LoginPage}/>
        </div>
      </Router>
    )
  }
  renderMain () {
    let { data, isFetching, dispatch } = this.props
    return (
      <HomePage
        data={data}
        loading={isFetching}
        deleteItem={id => dispatch(deleteItem(id))}
        createItem={newItem => dispatch(createItem(newItem))}
      />
    )
  }
}

const mapStateToProps = state => {
  let { data, isFetching } = state
  return {
    data,
    isFetching
  }
}

export default connect(mapStateToProps)(App)
