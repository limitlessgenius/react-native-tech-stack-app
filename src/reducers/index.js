
import { combineReducers } from 'redux'
import libraryReducer from './library_reducer'
import selectionReducer from './selection_reducer'

export default combineReducers({
	libraries: libraryReducer, 
	selectedLibraryID: selectionReducer, 
})

//why arrow func instead of empty arr?
//because a recuer is a func that returns a piece of state 
//and in arr func return is implicit



