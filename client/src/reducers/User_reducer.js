import {LOGIN_USER} from '../actions/Types'

export default (state={}, action) => {
  switch(action.type){
    case LOGIN_USER:
      return {...state, loginSuccess: action.payload}
    default:
      return state
  }
}