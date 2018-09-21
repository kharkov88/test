import * as types from '../constants/ActionTypes'

const requestData = () => ({ type: types.REQUEST_DATA })

const receiveData = json => ({
  type: types.RECEIVE_DATA,
  data: json
})

const requestDel = () => ({ type: types.REQUEST_DEL })

const receiveDel = json => ({
  type: types.RECEIVE_DEL,
  data: json
})

const requestLogin = () => ({ type: types.REQUEST_LOGIN })

const receiveLogin = json => ({
  type: types.RECEIVE_LOGIN,
  data: json
})

const requestCreate = () => ({ type: types.REQUEST_CREATE })
const receiveCreate = () => ({ type: types.RECEIVE_CREATE })


export const fetchData = dispatch => {
  dispatch(requestData())
  return fetch('http://localhost:3000/employers')
    .then(response => response.json())
    .then(json => dispatch(receiveData(json)))
}

export const deleteItem = id => dispatch => {
  dispatch(requestDel())
  return fetch('http://localhost:3000/employer/' + id, {
    method: 'DELETE',
    mode: 'cors'
  })
    .then(response => response.json())
    .then(() => dispatch(fetchData))
    .then(() => dispatch(receiveDel()))
}

export const createItem = newItem => dispatch => {
  dispatch(requestCreate())
  return fetch('http://localhost:3000/employer', {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(newItem)
  })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      dispatch(receiveCreate())
    })
    .then(() => dispatch(fetchData))
}

export const fetchLogin = obj => dispatch => {
  console.log(obj)
  dispatch(requestDel())
  return fetch('http://localhost:3000/login', {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(obj)
  })
    .then(() => dispatch(receiveDel()))
}