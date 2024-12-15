import { StyleSheet, SafeAreaView, TextInput, Button, Text } from 'react-native';
import React, {useState} from 'react';

export default function Form() {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');
  const [errors, setErrors] = useState({}); // untuk mengatur error masing2 form
  const validate = () => { // function validasi untk mengatur jika user tidak mengisi input
    let errors = {};
    if (!text) {
      errors.text = 'Text is required';
    }
    if (!number) {
      errors.number = 'Number is required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => { // mengatur kondisi jika semuanya berhasil
    if (validate()) {
      alert('Form submitted successfully!');
    }
  };
  return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        {errors.text && 
          <Text style={styles.errorText}>
            {errors.text}
          </Text>
          // menampilkan error jika user tidak mengisi input
        } 
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
        <Button title="Submit" onPress={handleSubmit} />
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
  }
});
