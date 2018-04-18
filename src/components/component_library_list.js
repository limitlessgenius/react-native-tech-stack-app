

import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

import { connect } from 'react-redux'

import { Card, CardSection } from './common'

class LibraryList extends Component {

	libraryList() {
		return this.props.libraries.map((library) => {
			return library
		})
	}

	libraryItem({item}) {
		return (

			<Card>

				<CardSection>
					<Text>{item.title}</Text>
				</CardSection>

				<CardSection>
					<Text>{item.description}</Text>
				</CardSection>
				
			</Card>
		)
	}

	render() {
		return (
			<View>
				<FlatList 
					data={this.libraryList()}
					renderItem={this.libraryItem}
				/>
			</View>
		)	
	}
}

const mapStateToProps = state => {
	// console.log('STATE', state)
	return { libraries: state.libraries }
}



//Why item requires to be in {} even when data is a plain array?

export default connect (mapStateToProps)(LibraryList)
//second () calls the return func of the first

