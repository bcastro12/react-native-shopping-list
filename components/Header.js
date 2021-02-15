import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';

const Header = () => {
  return(
    <View style={styles.header}>
      <Text style={styles.text}>Shopping List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        padding: 15,
        height: 60,
        backgroundColor: 'darkslateblue'
    },
    text: {
        color: 'white',
        fontSize: 23,
        textAlign: 'center'
    }
})

export default Header;