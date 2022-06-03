import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList,Alert} from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Header from './android/components/Header';
import ListItem from './android/components/ListItem';
import AddItem from './android/components/AddItem';

export default function App() {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Eggs'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Juice'},
  ]);

  const deleteItem = id => {
    setItems(prevItem => {
      return prevItem.filter(item => item.id != id);
    });
  };
  // console.log(uuidv4())

  const addItem = text => {
    if(!text){
      Alert.alert("Error", "Please enter an item", [{ text: "OK" }])
    }else{
      setItems(prevItem => {
        return [{id: uuidv4(), text: text}, ...prevItem];
      });
    }
    
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem}></AddItem>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
