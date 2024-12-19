import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity, SafeAreaView, TextInput, ActivityIndicator} from 'react-native';
import { createTransaction } from './api/restApi';
import { useAuth } from './context/AuthContext';

export default function TopUp() {
    const type = 'c'
    const [from_to, setFromTo] = useState('347201')
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')
    const auth = useAuth();

    const data = [
        { label: 'BYOND', value: 'BYOND' },
        { label: 'Wondr', value: 'Wondr' },
        { label: 'Livin', value: 'Livin' },
        { label: 'MyBCA', value: 'MyBCA' },
      ];

    const handleSubmitTopUp = () => {
      console.log("masuk submit")
      if (!type || !from_to || !amount) {
        alert('Validation Error', 'Amount are required');
        return;
      }
      handleTopUp(type, from_to, amount, description);
    };

     const handleTopUp = async (type, from_to, amount, description) => {
      console.log("masuk handle")
      console.log(type, from_to, amount, description)
        try {
          const response = await createTransaction(type, from_to, amount, description);
          alert('Success', 'Transaction successful');
        } catch (error) {
          alert('Error', error.message);
        }
      };

    return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>

    <View style={{margin: 15}}>
        <Text style={styles.label}>Amount</Text>
        <TextInput style={styles.input} onChangeText={(text) => setAmount(text)}/>
    </View>

    <View style={{margin: 15}}>
        <Text style={styles.label}>Notes</Text>
        <TextInput style={styles.input} onChangeText={(text) => setDescription(text)}/>
    </View>

    <View style={[styles.button, styles.primary]}>
              <Button 
              title='TopUp' 
              color='white' 
              onPress={handleSubmitTopUp}
              />
        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 15,
  },
  containerHead: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 15
  },
  shadow: {
    shadowColor: 'gray', 
    shadowOpacity: 0.25, 
    shadowOffset: {width: 0, height: 2}, 
    shadowRadius: 6
  },
  button: { 
    textAlign: 'center', 
    fontSize: 20, 
    paddingVertical: 5, 
    borderRadius: 10, 
    marginHorizontal: 15, 
  },
  primary: {
    backgroundColor: '#19918F', 
    marginVertical: 15
  },
  label: {
    fontSize: 16,
    color: 'darkgrey',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'whitesmoke',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  dropdown: {
    height: 50,
    marginHorizontal: 15,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },

});
