import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, SafeAreaView, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { listUser } from '../services/api';

import logo from '../assets/tindev.png';  
import like from '../assets/like.png';  
import dislike from '../assets/dislike.png';  


const Main = ({ navigation }) => {
        
    const id = navigation.getParam('user');
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        function loadUser(){
            listUser(id).then(res => {     
                if(res.status != 200){  
                    console.log("Error" + res.json())
                    throw new Error("Não foram econtrados usuários");
                }
                return res.json();   
      
            }).then(body => {     
                setUsers(body)       

            }).catch(e => {
                alert("Error: " + e.message);   
                console.log("Error: " + e.message);
            })  
        }
  
        loadUser()
           
    }, [id]) 

    


    return(
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />

            <View style={styles.cardsContainer}>
              {
                users.length === 0
                ? <Text style={styles.empty}>Acabou</Text>
                : (
                    users.map((user, index) => (
                        <View  key={user._id} style={ [styles.card, {zIndex:users.length - index} ]} >     
                            <Image style={styles.avatar} source={{uri : user.avatar}}/> 
                            <View style={styles.footer}>   
                                <Text style={styles.name}>{ user.name }</Text>
                                <Text style={styles.bio}>{ user.bio }</Text>
                            </View> 
                        </View>
                    ))
                )
              }
                
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image style={styles.icon} source={dislike}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Image style={styles.icon} source={like}/>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#f5f5f5" ,
        alignItems: "center",
        justifyContent: "space-between"
    },
    logo:{
        marginTop: 100,
    },
    empty:{
        alignSelf: "center",
        color: "#999",
        fontSize: 24,
        fontWeight: 'bold'
    },  
    cardsContainer: {  
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: "center",
        maxHeight: 500
    },
    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        margin: 20,
        overflow: 'hidden',
        position: "absolute",
        top:0,
        right:0,
        left: 0,
        bottom:0
    },
    avatar:{
        flex:1,
        height: 300
    },
    footer: {
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    name:{
        fontSize: 16,
        fontWeight: 'bold',
        color: "#333"
    },
    bio: {
        fontSize: 14
    },
    buttonsContainer:{
        flexDirection: 'row', //deixa elementos lada a lado
        marginBottom: 30,  
        
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,  
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.05 , 
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        },
     },
     icon: {
         width: 25,
         height: 25 
     }  
})
export default Main;