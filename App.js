import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, ScrollView, YellowBox } from 'react-native';
import Header from './src/components/Header';
import Task from './src/components/Task';
import TaskModal from './src/components/TaskModal';

const defaultIp = 'projeto-todolist.herokuapp.com';
const width = Dimensions.get('screen').width;

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class App extends Component {
	state = {
		modalVisible: false,
		tasks: [],
	};

	componentDidMount() {
		this.fetchTask();
  }
  
  fetchTask = async () => {
    const tasks = await fetch(`https://${defaultIp}/tasks`)
    const res = await tasks.json();
    this.setState({
      tasks: res.map(task => {
        return {
          id: task._id,
          author: task.author,
          description: task.description
        };
      }),
    })    
  }

	addTask = (inputAuthor, inputDescription) => {
		fetch(`https://${defaultIp}/tasks`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},

			body: JSON.stringify({
				author: inputAuthor,
				description: inputDescription,
			}),
		})
			.then(res => {
				if (res.ok) {
					let tasksAntigas = this.state.tasks;

					this.setState({
						tasks: [
							...tasksAntigas,
							{
								author: inputAuthor,
								description: inputDescription,
							},
						],
					});
				}
			})
			.catch(erro => console.warn(erro));
	};

	deleteTask = id => {
		fetch(`https://${defaultIp}/tasks/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json',
			},
		})
			.then(res => {
				if (res.ok) {
					let novasTasks = this.state.tasks.filter(task => {
						return task.id !== id;
					});

					this.setState({
						tasks: [...novasTasks],
					});
				}
			})
			.catch(erro => console.warn(erro));
	};

	handleModal = () => {
		this.setState({ modalVisible: !this.state.modalVisible });
	};

	render() {
		return (
			<View style={styles.container}>
				<Header toggleModal={this.handleModal} />

				<ScrollView contentContainerStyle={styles.containerList}>
					{this.state.tasks.map(task => <Task key={task.author} data={task} onDelete={this.deleteTask} />)}
				</ScrollView>

				<TaskModal
					onCancel={this.handleModal}
					onAdd={this.addTask}
					handleModal={this.handleModal}
					visible={this.state.modalVisible}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333',
	},

	containerList: {
		padding: 20,
	},
});
