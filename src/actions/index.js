

export const selectLibrary = (libraryID) => {
	console.log(libraryID)
	return {
		type: 'SELECT_LIBRARY', 
		payload: libraryID
	}
}
