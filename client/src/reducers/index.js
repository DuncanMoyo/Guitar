import {combineReducers} from 'redux'
import user from './User_reducer'
import products from './Products_reducer'

const rootReducer = combineReducers({
  user,
  products
})

export default rootReducer