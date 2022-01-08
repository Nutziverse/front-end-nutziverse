import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import makananReducers from './reducers/reducer.makanan'
import modalReducer from './reducers/reducer.modal'

const reducers = combineReducers({
  makananReducers: makananReducers,
  modalReducer: modalReducer
})

export const store = createStore(reducers, {}, applyMiddleware(thunk))