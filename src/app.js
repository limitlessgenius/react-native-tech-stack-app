
import React from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'react'
import reducers from './reducers'

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
			<View>
				<Text> REACT NATIVE </Text>
			</View> 
		</Provider>
	)
}

export default App

//connects react app to redux state / store 
//creates react store out of all redux app state
//connects to redux state on the react end
//wraps react app, and sets store to connect to the whole redux app state.





