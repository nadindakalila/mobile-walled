import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, SafeAreaView, Switch } from 'react-native';
import React, {useState} from 'react';
import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'


import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
      /> 
      <Stack.Screen name="Login" component={LoginScreen} 
        options={{
          headerShown: false // menghilangkan header
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};
