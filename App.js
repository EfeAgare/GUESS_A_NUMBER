import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/component/Header';
import StartGameScreen from './src/screen/StartGameScreen';
import GameScreen from './src/screen/GameScreen';
export default function App() {

  const [userNumber, setUserNumber] = useState()


  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }
  let content =  <StartGameScreen  onStartGame={startGameHandler}/>

  if (userNumber) {
    content = <GameScreen userChoice={userNumber}/>
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
