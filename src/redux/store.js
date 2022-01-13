import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import makananReducers from './reducers/reducer.makanan'
import modalReducer from './reducers/reducer.modal'
import trackingReducer from './reducers/reducer.tracking'
import allmakananReducer from './reducers/reducer.allmakanan'


const reducers = combineReducers({
  makananReducers: makananReducers,
  modalReducer: modalReducer,
  trackingReducer: trackingReducer,
  allmakananReducer: allmakananReducer
})

export const store = createStore(reducers, {}, applyMiddleware(thunk))