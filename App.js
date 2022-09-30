import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Menu from './Screens/Menu';
import Login from './Screens/Login';
import CreateAccount from './Screens/CreateAccount';
import Career from './Screens/Career';
import Advising from './Screens/Advising';
import Scholarships from './Screens/Scholarships';
import AMC from './Screens/AMC';
import Discord from './Screens/Discord';
import { isLoading, useFonts } from 'expo-font';
import { Apploading } from 'expo';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'imprintMTS': require('./assets/fonts/Imprint_MT_Shadow.ttf'),
    //'MontserratM': require('./assets/fonts/Montserrat-Medium.ttf'),
    //'MontserratB': require('./assets/fonts/Montserrat-Bold.ttf')
  });
  if(!fontsLoaded){
    return (<Apploading/>);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Menu" component={Menu} />
        <Stack.Screen options={{ headerShown: true }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: true }} name="CreateAccount" component={CreateAccount} />
        <Stack.Screen options={{ headerShown: true }} name="Career" component={Career} />
        <Stack.Screen options={{ headerShown: true }} name="Advising" component={Advising} />
        <Stack.Screen options={{ headerShown: true }} name="Scholarships" component={Scholarships} />
        <Stack.Screen options={{ headerShown: true }} name="AMC" component={AMC} />
        <Stack.Screen options={{ headerShown: true }} name="Discord" component={Discord} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});