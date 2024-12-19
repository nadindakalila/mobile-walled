import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({ navigation }) {
    return (
    <SafeAreaView>
        <StatusBar backgroundColor='white'/>
        <View style={[styles.containerHead, styles.shadow]}>
            <View style={{flexDirection: 'row', display: 'flex', alignItems: 'center', height: 80, width: '100%'}}>
                <Image source={require('../foto.png')} style={{width: 46, height: 46, borderRadius:50, borderWidth:2, borderColor:'teal'}}></Image>
                <View style={{ marginLeft: 10}}>
                <Text style={{fontWeight: 'bold'}}>Nadinda Kalila</Text>
                <Text >Personal Account</Text>
                </View>
                <View style={{flex: 1}}>

                </View>
                <Icon name="sunny" color={'orange'} size={30}/>
                <TouchableOpacity style={{marginLeft: 5}} onPress={() => navigation.navigate('Login')}>
                <Icon name="login" color={'black'} size={30}/>
                </TouchableOpacity>

            </View>
        </View>
    </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    containerHead: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 15,
    },
    shadow: {
      shadowColor: 'gray', 
      shadowOpacity: 0.25, 
      shadowOffset: {width: 0, height: 2}, 
      shadowRadius: 6
    },
})