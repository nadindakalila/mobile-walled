import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity, SafeAreaView, FlatListm, SafeAreaProvider, TextInput} from 'react-native';
import React, {useState} from 'react';
import Form from './components/Form';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
 
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>

        <View style={{alignItems: 'center', marginTop: 150, marginBottom: 50}}>
            <Image source={require("./Vector.png")} style={{width: '233', height: '57'}}/>
        </View>

        <View>
            <Form></Form>
        </View>

        <View style={{paddingHorizontal: 20}}>
            <Text>Don't have account? <Text style={{color: '#19918F'}} onPress={() => navigation.navigate('Register')}>Register Here</Text></Text>
        </View>

    </ScrollView>
  );
}

  