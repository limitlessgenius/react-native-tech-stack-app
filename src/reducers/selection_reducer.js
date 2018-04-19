

//if undefined return null
export default (state = null, action) => {

	switch(action.type){
		case 'SELECT_LIBRARY': 
			return action.payload
		default: 
			return state
			//last time state
	}
}

// design action creator
// where to use it

