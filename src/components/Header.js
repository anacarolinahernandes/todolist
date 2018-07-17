import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native';

export default class Header extends Component {
	render() {
		return (
			<View style={styles.header}>
				<Text style={styles.headerText}>To Do List</Text>
				<TouchableOpacity onPress={this.props.toggleModal}>
					<Text style={styles.headerButton}>+</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		height: Platform.OS === 'ios' ? 70 : 50,
		paddingTop: Platform.OS === 'ios' ? 30 : 20,
		padding: 20,
		backgroundColor: '#FFF',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 10,
		flexDirection: 'row',
		paddingHorizontal: 20,
	},

	headerText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#000',
	},

	headerButton: {
		fontSize: 24,
		fontWeight: 'bold',
	},
});
