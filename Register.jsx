import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity, SafeAreaView, FlatListm, SafeAreaProvider, TextInput} from 'react-native';
import React from 'react';
import Form from './components/Form';
import Checkbox from './components/Checkbox';
import { useNavigation } from '@react-navigation/native';


export default function Register() {
    const navigation = useNavigation();
 
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>

        <View style={{alignItems: 'center', marginTop: 150, marginBottom: 50}}>
            <Image source={require("./Vector.png")} style={{width: '233', height: '57'}}/>
        </View>
    
        <View>
            <Form state='register'></Form>
        </View>

        <View style={{paddingHorizontal: 15, marginBottom: 20}}>
            <Checkbox></Checkbox>
        </View>

        {/* <View style={[styles.button, styles.primary]}>
            <Button title='Register' color='white'  onPress={() => navigation.navigate('Login')}/>
        </View> */}

        <View style={{paddingHorizontal: 20}}>
            <Text>Have an account? <Text style={{color: '#19918F'}} onPress={() => navigation.navigate('Login')}>Login here</Text></Text>
        </View>

    </ScrollView>
  );
}

// const styles = StyleSheet.create({
//     button: { 
//       textAlign: 'center', 
//       fontSize: 20, 
//       paddingVertical: 5, 
//       borderRadius: 10, 
//       marginHorizontal: 15, 
//     },
//     primary: {
//       backgroundColor: '#19918F', 
//       marginVertical: 15
//     },
  
//   });
  