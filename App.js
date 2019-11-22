import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'


import Header from './src/component/Header';
import StartGameScreen from './src/screen/StartGameScreen';
import GameScreen from './src/screen/GameScreen';
import GameOverScreen from './src/screen/GameOverScreen';




const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require('./assets/fonts/OpenSans-Regular.ttf'),
    "open-sans-bold": require('./assets/fonts/OpenSans-Bold.ttf')
  })
}
export default function App() {

  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)
  const [dataLoading, setDataLoading] = useState(false)

  if (!dataLoading) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoading(true)} onError={(err) => console.log(err)}/>
  }
  const configureNewGameHandler = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }


  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds)
  }
  let content =  <StartGameScreen  onStartGame={startGameHandler}/>

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  } else if (guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>
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
