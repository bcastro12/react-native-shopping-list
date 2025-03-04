import React, {useState} from 'react';
import {View,Text,StyleSheet,TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const addItem = ({addItem}) => {

    const [text,setText] = useState('');

    const ref = React.createRef();

    const handleClick = () => {
        addItem(text);
        clearInput();
    }

    const clearInput = () => {
        setText('');
        ref.current.clear();
    }

    return(
    <View>
        <TextInput placeholder='Add Item...' 
            style={styles.input} 
            onChangeText={(value)=>setText(value)} 
            ref={ref}
        />
        <TouchableOpacity style={styles.btn} onPress={()=>handleClick()}>
            <Text style={styles.btn}><Icon name="plus" size={20} /> Add Item</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default addItem;