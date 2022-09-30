import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Checkbox, Image, Alert, StyleSheet, Text, View, TextInput, Button,TouchableOpacity, Pressable } from 'react-native';

const image1 = { uri: "https://cdn.discordapp.com/attachments/1011816280740876391/1021582027524427858/Home_Screen.jpg" };
const CreateAccount = () => (
    <View style={styles.container}>
      <ImageBackground source={image1} style={{width: '100%', height: '100%'}}>
        <Text style={styles.text1}>Create Account</Text>
        <TextInput style={styles.input}>EMAIL</TextInput>
      
        <TextInput style={styles.input}>Password</TextInput>
        <TextInput style={styles.input}>Re-enter Password</TextInput>
        
        <Text style={styles.text2}>I accept the Terms of Use</Text>

        <View>

        <TouchableOpacity
                //onPress={handleLogin}
                style ={styles.createButton}>
                  
            <Button 
            title="CREATE ACCOUNT"
            color='white'
            onPress={() => Alert.alert('pressed')}        
            
            
          /> 
        <Text style = {styles.buttonText}>CREATE ACCOUNT</Text>

          </TouchableOpacity> 
        </View>
      </ImageBackground>
    </View>
    
  );
  

const styles = StyleSheet.create({
  container: {
   
  },
  checkbox: {
    alignself: 'center'
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
    top: 80,
    left: 30,
    right: 30,
    textAlign: 'center',
  },
  text2: {
    color: 'white',
    fontSize: 16,
    top: 200,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  input: {
    color: 'white', 
    backgroundColor: 'grey', 
    top: 200, 
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
  },
  createButton: {
    title: "MENU",
    color: 'white',
    height: 40,
    top: 200,
    margin: 24,
    borderRadius:20,
    backgroundColor : "grey",
    padding: 10,
    fontWeight: '700',
    textAlign: 'center',
  },
  buttonText: {
    color: 'white', 
    fontWeight: '700',
    fontSize: 16,
    top: 0, 
    height: 40,
    //margin: 24,
    //borderRadius: 20,
    //padding: 10,
    textAlign: 'center',
  }

});

export default CreateAccount;