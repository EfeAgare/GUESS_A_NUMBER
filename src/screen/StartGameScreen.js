import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Card from '../component/Card';
import Colors from '../../constants/colors';
import Input from '../component/Input';
const StartGameScreen = props => {
  const [enteredValue, setEnteredvalue] = useState('');

  const numberInputHandler = inputText => {
    setEnteredvalue(inputText.replace(/[^0-9]/g, ''));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}> Game a New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            maxLenght={2}
            onChangeText={numberInputHandler}
            keyboardType="numeric"
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonWidth}>
              <Button title="Reset" onPress={() => {}} color={Colors.accent} />
            </View>
            <View style={styles.buttonWidth}>
              <Button
                title="Confirm"
                onPress={() => {}}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  buttonWidth: {
    width: 100
  },
  input: {
    width: 100,
    textAlign: 'center'
  }
});

export default StartGameScreen;
