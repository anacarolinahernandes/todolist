import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Task extends Component {
    render() {
        return (
            <View style={styles.task}>
                <View style={styles.taskInfo}>
                    <Text style={styles.taskTitle}>{this.props.data.description}</Text>
                    <Text style={styles.taskAuthor}>Autor: {this.props.data.author}</Text>
                </View>

                <Button style={styles.deleteButton} title="X" onPress={() => this.props.onDelete(this.props.data.id)} />
            </View>
        )
    };
}

const styles = StyleSheet.create({
    task: {
        padding: 20,
        backgroundColor: '#FFF',
        marginBottom: 20,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    taskImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    taskInfo: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,

    },

    taskTitle: {
        fontWeight: 'bold',
        color: '#333',
    },

    taskAuthor: {
        fontSize: 12,
        color: '#999',
    },

    deleteButton: {
        fontSize: 24,
        fontWeight: 'bold',
        borderRadius: 5,
        backgroundColor: '#E25F5F',
    },
});