import React, { Component } from 'react';
import { StackActions, NavigationActions, createStackNavigator } from 'react-navigation';
import App from './App';
import Login from './src/screens/Login';

class LoginScreen extends Component {
    entrarNaAgenda = () => {
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        return (
            <Login navegarTelas={this.entrarNaAgenda} />
        )
    };
}

class AppScreen extends Component {
    render() {
        return (
            <App />
        )
    };
}

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'AppScreen' })],
});

const RootStack = createStackNavigator({
    AppScreen: {
        screen: AppScreen,
        navigationOptions: {
            header: null
        }
    },
    LoginScreen: LoginScreen
},

    {
        initialRouteName: 'LoginScreen'
    })

export default RootStack;