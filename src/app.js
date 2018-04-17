
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

//provider connects store to react




