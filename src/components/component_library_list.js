

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

		const { textTitleStyle, textDescriptionStyle } = styles
		return (

			<View>

				<CardSection>
					<Text style={textTitleStyle}>{item.title}</Text>
				</CardSection>

				<CardSection>
					<Text style={textDescriptionStyle}>{item.description}</Text>
				</CardSection>
				
			</View>
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

const styles = {
	textTitleStyle: {
		fontSize: 18, 
		paddingLeft: 15, 
	}, 
	textDescriptionStyle: {
		paddingLeft: 15, 
	}
}



//Why item requires to be in {} even when data is a plain array?

export default connect (mapStateToProps)(LibraryList)
//second () calls the return func of the first

