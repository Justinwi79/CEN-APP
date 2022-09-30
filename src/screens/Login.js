import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import {
  ImageBackground, 
  Image, 
  StyleSheet, 
  Text, 
  View, 
  Pressable,
  TextInput, 
  Button,
  TouchableOpacity, 
  ProgressViewIOSComponent
} from 'react-native';

import { withSafeAreaInsets } from 'react-native-safe-area-context';
const image1 = { uri: "https://cdn.discordapp.com/attachments/1011816280740876391/1021582027524427858/Home_Screen.jpg" };
const image2 = { uri: "https://cdn.discordapp.com/attachments/1011816280740876391/1021582027142725632/logo.png"}

const Stack = createNativeStackNavigator(); 
const Login = ({navigation}) => (
    
    <View style={styles.container}>
      <ImageBackground source={image1} style={{width: '100%', height: '100%'}}>
        <Image source={image2} style={styles.image2}></Image>
        <Text style={styles.text1}>FSU GEEK</Text>
        <TextInput
            placeholder="Email"
             style={styles.inputEmail}>EMAIL
        </TextInput>
        <TextInput style={styles.inputPassword}>PASSWORD</TextInput>
        
        <TextInput style={styles.signIn}>SIGN IN</TextInput>
            
       
            <Pressable>
                <Text style={styles.text2}>Forgot Password?</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('CreateAccount')}>
                <Text style={styles.text3}>Don't have an account? Sign up</Text>
            </Pressable>
      </ImageBackground>
    </View>
    
  );
 
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }


const styles = StyleSheet.create({
  container: {
   
  },
  image1: {
    justifyContent: "center"
  },
  image2: {
    position: 'absolute',
    top: 80,
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  text1: {
    color: "white",
  
    fontSize: 50,
    position: 'absolute',
    top: 320,
    left: 50,
    right: 50,
    textAlign: 'center',
    fontFamily: 'imprintMTS',
  },
  text2: {
    color: 'white',
    fontSize: 16,
    top: 345,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  text3: {
    color: 'white',
    fontSize: 16,
    top: 350,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  inputEmail: {
    color: 'white', 
    backgroundColor: 'grey',
    top: 400,
    height: 40,
    margin: 24,
    borderRadius: 20,
    padding: 10,
    textAlign: 'center',
  },
  inputPassword: {
    color: 'white', 
    backgroundColor: 'grey',
    top: 380,
    height: 40,
    margin: 24,
    borderRadius: 20,
    padding: 10,
    textAlign: 'center',
  },
  signIn: {
    color: 'white', 
    backgroundColor: 'grey', 
    top: 360, 
    height: 40,
    margin: 24,
    borderRadius: 20,
    padding: 10,
    textAlign: 'center',
  }

});

export default Login;