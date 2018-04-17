
import { combineReducers } from 'redux'
import libraryReducer from './library_reducer'

export default combineReducers({
	libraries: libraryReducer
})

//why arrow func instead of empty arr?
//because a recuer is a func that returns a piece of state 
//and in arr func return is implicit


