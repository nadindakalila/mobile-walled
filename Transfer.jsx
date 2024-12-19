import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity, SafeAreaView, TextInput, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from './context/AuthContext';
import { fetchUser } from './api/restApi';
import { createTransaction } from './api/restApi';

export default function Transfer() {
  const type = 'd'
  const [from_to, setFromTo] = useState('347201')
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const auth = useAuth()

  useEffect(() => {
        const getUser = async () => {
            try {
                const data = await fetchUser();
                setUser(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getUser();
    }, [])

  const handleSubmitTransfer = () => {
    if (!type || !from_to || !amount) {
      alert('Validation Error', 'Amount are required');
      return;
    }
    handleTransfer(type, from_to, amount, description);
  };

  const handleTransfer = async (type, from_to, amount, description) => {
    try {
      const response = await createTransaction(type, from_to, amount, description);
      alert('Success', 'Transaction successful');
    } catch (error) {
      alert('Error', error.message);
    }
  };

   if (loading) {
              return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
            } // kondisi ketika proses memuat response dari backend belum selesai
          
      if (error) {
      return (
          <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          </View>
      );
      } // ketika mendapatkan response error backend

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>

    <View style={{padding: 15, backgroundColor: '#19918F'}}>
              <Text style={{color: 'white'}}>To: {user.account_no}</Text>
            </View>

    <View style={{margin: 15}}>
        <Text style={styles.label}>Amount</Text>
        <TextInput style={styles.input} onChangeText={(text) => setAmount(text)}/>
    </View>

    <View style={styles.box}>
        <Text style={styles.textBox}>Balance</Text>
        <Text style={[styles.textBox, styles.textBoxSemiBold]}>Rp. {user.balance}</Text>
    </View>


    <View style={{margin: 15}}>
        <Text style={styles.label}>Notes</Text>
        <TextInput style={styles.input} onChangeText={(text) => setDescription(text)}/>
    </View>

    <View style={[styles.button, styles.primary]}>
          <Button 
          title='Transfer' 
          color='white' 
          onPress={handleSubmitTransfer}
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
    marginTop: 15
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
    marginBottom: 5,
    marginTop: 10
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'whitesmoke',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginTop: 10
  },
  box: {
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textBox: {
    fontSize: 14,
    color: 'darkgrey',
  }, 
  textBoxSemiBold: {
    color: '#19918F'
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
