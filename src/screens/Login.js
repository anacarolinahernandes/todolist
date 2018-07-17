import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    Alert,
    Dimensions,
} from 'react-native';

const width = Dimensions.get('screen').width;

const btnResetSenha = () => {
    Alert.alert('Informe email para envio de nova senha...');
}

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../resources/agenda.png')} />

                <View>
                    <TextInput style={styles.entrada} underlineColorAndroid={'transparent'} placeholder="login" />
                </View>

                <View>
                <TextInput secureTextEntry={true} style={styles.entrada} underlineColorAndroid={'transparent'} placeholder="senha" />
                </View>

                <View style={{marginTop: 20}}>
                    <Button style={styles.botao} title="Entrar" onPress={this.props.navegarTelas} />
                    <TouchableOpacity onPress={btnResetSenha} style={styles.botaoSenha}>
                        <Text>Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFF",
    },

    entrada: {
        width: 300,
        height: 40,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderWidth: 1,
        marginTop: 10,
    },

    logo: {
        width: 200,
        height: 200,
        margin: 20
    },

    botao: {
        marginTop: 10,
        backgroundColor: 'teal',
        
    },

    botaoSenha: {
        marginTop: 20,
        backgroundColor: 'transparent',
        paddingRight: 15
    }
});