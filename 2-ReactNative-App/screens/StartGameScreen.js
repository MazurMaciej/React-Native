import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

import Colors from '../constants/colors';
import Card from '../components/Card';

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <View style={styles.btn}><Button title='Reset' color={Colors.secondary} onPress={() => { }} /></View>
          <View style={styles.btn}><Button title='Confirm' color={Colors.primary} onPress={() => { }} /></View>
        </View>
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  btn: {
    width: '40%',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
})

export default StartGameScreen;