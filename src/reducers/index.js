import { combineReducers } from 'redux'
import appReducer          from './app'
import counterReducer      from './counter'
import payReducer    	   from './pay'

export default combineReducers({
  app:     appReducer,
  counter: counterReducer,
  pay:     payReducer
})
