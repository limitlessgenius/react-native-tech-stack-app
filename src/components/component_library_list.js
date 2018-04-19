
import React, { Component } from 'react'
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native'
import { Card, CardSection } from './common'
import { connect } from 'react-redux'
import * as actions from '../actions'

class LibraryList extends Component {

	constructor(props) {
		super(props)
	}

	libraryList() {
		return this.props.libraries.map((library) => {
			return library
		})
	}

	libraryItem({item}) {

		const { title, id, description } = item

		const { textTitleStyle } = styles

		return (
			<TouchableWithoutFeedback
				onPress={()=>{
					this.props.selectLibrary(id)
				}}
			>
				<View>
					<CardSection>
						<Text style={textTitleStyle}>{title}</Text>
					</CardSection>
				</View>

			</TouchableWithoutFeedback>
		)
	}

	render() {
		return (
			<View>
				<FlatList 
					data={this.libraryList()}
					renderItem={this.libraryItem.bind(this)}
				/>
			</View>
		)	
	}
} //WHY in renderItem DO I, and in generall, have to BIND THIS

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
	},
}

//Why item requires to be in {} even when data is a plain array?
export default connect (mapStateToProps, actions)(LibraryList)
//second () calls the return func of the first

