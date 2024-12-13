import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, SafeAreaView } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <View style={{flexDirection: 'row', elevation: 3, paddingHorizontal: 20, display: 'flex', alignItems: 'center', height: 80, width: '100%'}}>
        <Image source={require('./assets/icon.png')} style={{width: 46, height: 46}}></Image>
        <View style={{ marginLeft: 20}}>
          <Text style={{color: 'red', fontWeight: 700}}>Andika</Text>
          <Text >Personal Account</Text>
        </View>
        <View style={{flex: 1}}>

        </View>
        <Image source={require('./assets/splash-icon.png')} style={{width: 46, height: 46}}></Image>
      </View>
    </View>
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
