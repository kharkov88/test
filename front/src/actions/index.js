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
    .then(json => console.log(json))
    .then(() => dispatch(fetchData))
    .then(() => dispatch(receiveDel()))
}

export const createItem = newItem => dispatch => {
  dispatch(requestCreate())
  return fetch('http://localhost:3000/employer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    body: JSON.stringify(newItem)
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .then(() => dispatch(receiveCreate()))
    .then(() => dispatch(fetchData))
}
