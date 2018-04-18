

import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

// import { List, ListItem } from "react-native-elements";

import { connect } from 'react-redux'

import LibraryDetail from './component_library_detail'


class LibraryList extends Component {

	libraryList() {
		return this.props.libraries.map((library) => {
			return library
		})
	}

	render() {

		return (
			<View style={styles.libraryStyle}>
				<FlatList 
					data={this.libraryList()}
					renderItem={
						({item}) => <Text>{item.title}</Text>
				}
				/>
			</View>
		)	
	}
}

const mapStateToProps = (state) => {
	return { libraries: state.libraries}
}

//Why item requires to be in {} even when data is a plain array?

const styles = {
	libraryStyle: {
		height: 100,
		width: 100, 
	}, 
	item: {
	    padding: 10,
	    fontSize: 18,
	    height: 44,
  	}
}

export default connect (mapStateToProps)(LibraryList)
//second () calls the return func of the first

