import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Modal from './Modal';
// import CheckBox from '@react-native-community/checkbox';
// import { Checkbox } from 'react-native-paper';


export default function CheckboxComp({state}) {
    const [isSelected, setSelection] = useState(false);

    return (
        <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setSelection(!isSelected)}
        >
            <View style={[styles.checkbox, isSelected && styles.checkedCheckbbox]}/>
            <Modal></Modal>
        </TouchableOpacity>
    //     <View style={styles.checkboxContainer}>
    //     <Checkbox
    //         status={checked ? 'checked' : 'unchecked'}
    //         onPress={() => setChecked(!checked)}
    //         color="#19918F"
    //     />
    //     <Text style={styles.label}>
    //         {checked ? 'Checked' : 'Unchecked'}
    //     </Text>
    //   </View>
    )
}

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
    },
    checkbox: {
        height: 20,
        width: 20,
        borderWidth: 2,
        borderRadius: 3,
        borderColor: 'darkgrey',
    },
    checkedCheckbbox: {
        backgroundColor: '#19918F',
        borderColor: '#19918F'
    }
})