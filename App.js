import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, SafeAreaView, Switch } from 'react-native';
import Box from './components/Box';
import Form from './components/Form';
import React, {useState} from 'react';



export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <Form></Form>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
