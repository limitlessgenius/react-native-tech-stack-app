
import React from 'react'
import { View, Text } from 'react-native'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { connect } from 'react-redux';
import reducers from './reducers/index'

import { Header } from './components/common'
import LibraryList from './components/component_library_list'

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
			<View>
				<Header headerTitle="Tech Stack"/>
				<LibraryList />
			</View>	
		</Provider>
	)
}

export default App

//probably we can't hook overall app to store but the nested containers
//since App is exported to index for rendering
//and this serves as the store part of redux and react redux without
//dealing with any paticular data / only nesting integration of components and creation of store

//Provider connects (linker library) created redux store that integrates all pieces of state4
//To our react app. 
//Our state is created by the unification of all the pieces of state (reducers)
//Never mutate state but whole complete recreation each type triggered by the
//Direction of our actions



