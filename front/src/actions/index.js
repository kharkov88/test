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
  return fetch('http://localhost:3000/employers', {
    headers: {
      Authorization: "Bearer " + localStorage.token
    }
  })
    .then(response => response.json())
    .then(json => dispatch(receiveData(json)))
}

export const deleteItem = id => dispatch => {
  dispatch(requestDel())
  let {token} = localStorage
  return fetch('http://localhost:3000/employer/' + id, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      Authorization: "Bearer " + token
    }
  })
    .then(response => response.status===200 && response.json())
    .then(() => dispatch(fetchData))
    .then(() => dispatch(receiveDel()))
    .catch(err => console.log('bad request'))
}

export const createItem = newItem => dispatch => {
  dispatch(requestCreate())
  return fetch('http://localhost:3000/employer', {
    method: "POST",
    mode: "cors", 
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Bearer " + localStorage.token
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
  dispatch(requestLogin())
  return fetch('http://localhost:3000/login', {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(obj)
  })
    .then(response => response.json())
    //.then(json => console.log(json))
    .then(json => {
      localStorage.token = json.token
      dispatch(receiveLogin(json))
    })
}