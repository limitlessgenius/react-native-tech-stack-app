

import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { connect } from 'react-redux'


class LibraryList extends Component {
	render() {
		console.log(this.props.libraries)
		return (
			<View>
				<Text> LIBRARY LIST </Text>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return { libraries: state.libraries}
}

export default connect (mapStateToProps)(LibraryList)


