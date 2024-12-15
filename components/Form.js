import { StyleSheet, SafeAreaView, TextInput, Button, CheckBox } from 'react-native';
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
          autoCorrect={false} // Untuk menonaktifkan koreksi otomatis
          autoCapitalize="none" // Untuk menonaktifkan kapitalisasi otomatis
        />
        <TextInput
        style={[styles.input, styles.multiline]}
        placeholder='Komentar'
        multiline // Untuk mengaktifkan multiline
        numberOfLines={4} // Menentukan jumlah baris yang ditampilkan
        >
        </TextInput>
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
    width: 200,
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
  },
  multiline: {
    height: 100,
  },
});
