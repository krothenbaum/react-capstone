import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-users'

console.dir(UserReducer)
const allReducers = combineReducers ({
	users:UserReducer,
      	activeUser: ActiveUserReducer
})

console.log('allReducers')
console.log(allReducers)

export default allReducers

