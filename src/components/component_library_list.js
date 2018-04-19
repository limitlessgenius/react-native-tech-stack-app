
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

	renderDescription(itemID, itemDescription) {
		if(itemID===this.props.selectedLibraryID) {
			return(
				<CardSection>
					<Text style={styles.textDescriptionStyle}>{itemDescription}</Text>
				</CardSection>
			)
		}
	}

	libraryItem({item}) {

		const { title, id, description } = item

		return (
			<TouchableWithoutFeedback
				onPress={()=>{
					this.props.selectLibrary(id)
				}}
			>
				<View>
					<CardSection>
						<Text style={styles.textTitleStyle}>{title}</Text>
					</CardSection>
					{this.renderDescription(id, description)}
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

const mapStateToProps = (state) => {
	//pending: externalize pre-processing logic for expanded
	return { 
		libraries: state.libraries, 
		selectedLibraryID: state.selectedLibraryID, 

	}
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

