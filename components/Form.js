import { StyleSheet, SafeAreaView, TextInput, Button, Text } from 'react-native';
import React, {useState} from 'react';

export default function Form() {
  const [text, onChangeText] = useState('Useless Text');
  const [number, onChangeNumber] = useState('');

  return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber} // Menangkap perubahan dari inputan user secara real time
          value={number} // Untuk mengatur nilai inputan
          placeholder="useless placeholder" // Menampilkan teks sementara yang memberi petunjuk kepada pengguna tentang input yang diharapkan
          keyboardType="numeric" // Untuk menentukan tipe keyboard.
          secureTextEntry // Digunakan untuk menyembunyikan input (misalnya untuk password)
        />
        <Button title="Submit" />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  }
});
