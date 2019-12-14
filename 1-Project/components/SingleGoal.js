import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SingleGoal = props => (
  <TouchableOpacity activeOpacity={.3} onPress={props.onDelete}>
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})

export default SingleGoal;

