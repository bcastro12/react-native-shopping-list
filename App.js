import React, { useState } from 'react';
import {View,Text,StyleSheet,FlatList, Alert} from 'react-native';
import Header from './components/Header';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {

  const [items,setItems] = useState([
    {id:uuid(), text:'Milk'},
    {id:uuid(), text:'Eggs'},
    {id:uuid(), text:'Bread'},
    {id:uuid(), text:'Juice'},
  ]);

  const addItem = (text) => {
    if(!text.trim()){
      Alert.alert('Error', 'Please enter an item', {text:'Ok'})
    }else{
      setItems([...items, {id:uuid(), text}]);
    }
  }

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id)
    });
  }

  return(
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item})=><ListItem item={item} deleteItem={deleteItem} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  }
})

export default App;