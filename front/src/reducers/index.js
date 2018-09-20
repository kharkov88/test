import {
  REQUEST_DATA,
  RECEIVE_DATA,
  REQUEST_DEL,
  RECEIVE_DEL, REQUEST_CREATE, RECEIVE_CREATE
} from '../constants/ActionTypes'

const initialState = {
  data: [],
  isFetching: false
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      })
    case REQUEST_DEL:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_DEL:
      return Object.assign({}, state, {
        isFetching: false
      })
    case REQUEST_CREATE:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_CREATE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default: return state
  }
}

export default reducer
