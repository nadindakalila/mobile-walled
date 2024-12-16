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
    <Stack.Navigator initialRouteName='Home'
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          // headerShown: false // menghilangkan header,
          headerStyle: {
            backgroundColor: 'purple'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerRight: () => (
            <Button
              onPress={() => alert('Button Pressed!')}
              title="Info"
              color="#000"
            />
          ),
        }}
      /> 
      <Stack.Screen name="Login" component={LoginScreen} 
        options={{
          // headerShown: false // menghilangkan header,
          title: 'Ini Header Custom',
          headerStyle: {
            backgroundColor: 'purple'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerRight: () => {
            // <Button 
            //   title='Menu'
            //   onPress={() => alert('Menu shown')}
            //   color='white'
            // />
            <Text>Menu</Text>
          }
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};
