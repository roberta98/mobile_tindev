import React, { useState } from 'react';
import {KeyboardAvoidingView, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

import api from '../services/api';

import logo from '../assets/tindev.png';

const Login = ({ navigation }) => {

    const [user, setUser] = useState('');

    async function handleLogin(){
        //const response = await api.post('/devs', { username : user });

        api({ username : user })  

        // const _id = response.data;  
        // navigation.navigate('Main', { _id });
        alert(user) 
    }  

    return(
        <KeyboardAvoidingView    
            behavior='padding'
            enabled={Platform === 'ios'}
            style={styles.container}
        > 
            <Image source={logo} /> 

            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                placeholder="Digite seu usuário no Github"  
                style={styles.input}
                placeholderTextColor='#999'
                value={user}
                onChangeText={setUser}
            />
            <TouchableOpacity onPress={handleLogin} style={styles.button}> 
                <Text style={styles.textButton}>Enviar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
} 

export default Login;

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    }, 
    input : {
        height:46,
        alignSelf: 'stretch',
        backgroundColor : '#FFF',
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 30,
        paddingHorizontal: 15,
    }, 
    button: {
         height: 46,
         alignSelf: 'stretch',
         backgroundColor: '#df4723',
         borderRadius: 4,
         marginTop: 10,
         justifyContent: 'center',
         alignItems: 'center'
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16 
    }
    
     
})