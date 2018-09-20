import React from 'react'
import { connect } from 'react-redux'
import { fetchData, deleteItem, createItem } from '../actions'
import Main from './Main'

class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchData)
  }
  render () {
    let { data, isFetching, dispatch } = this.props
    return (
      <Main
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
