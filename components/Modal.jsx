import React, {useState} from 'react';
import {Modal, StyleSheet, Text, Button, View, SafeAreaView, ScrollView} from 'react-native';

export default function  ModalComp() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.centeredView}>
        {/* <Button title="Show Modal" onPress={() => setModalVisible(true)} /> */}

        <Text style={{fontSize: 13}}>I have read and agree to the <Text style={{color: '#19918F'}} onPress={() => setModalVisible(true)}>Terms and Conditions</Text><Text style={{color: 'red'}}> *</Text></Text>
        <Modal 
        onRequestClose={() => setModalVisible(false)} //perintah menutup modal
        visible={modalVisible} // mengatur modal muncul
        presentationStyle='pageSheet' // untuk mengatur tampilan modal (untuk ios aza)
        animationType="slide" // untuk mengatur animasi modal
        transparent={true} // untuk mengatur transparansi modal
        >
        <View style={styles.modalView}>
            <ScrollView>
              <View style={styles.containerHead}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>Terms and Conditions</Text>
              </View>
              <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </ScrollView>
          <Button title="Close Modal" color='black' onPress={() => setModalVisible(false)} />
        </View>
        </Modal>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    marginTop: 50,
    marginBottom: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  containerHead: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
    alignItems: 'center',
    marginBottom: 10
  },
  text: {
      margin: 8, 
      fontSize: 16,
      textAlign: 'justify'
  },
});
