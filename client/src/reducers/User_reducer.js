import {LOGIN_USER, REGISTER_USER} from '../actions/Types'

export default (state={}, action) => {
  switch(action.type){
    case LOGIN_USER:
      return {...state, loginSuccess: action.payload}
    case REGISTER_USER:
      return {...state, register: action.payload}
    default:
      return state
  }
}