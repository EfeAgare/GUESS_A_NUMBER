import React, {useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import {Ionicons} from "@expo/vector-icons"

import NumberContainer from '../component/NumberContainer';
import Card from '../component/Card';
import MainButton from '../component/MainButton';


const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max)
  const rndNum = Math.floor(Math.random() * ( max - min)) + min
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else{
    return rndNum
  }
}
const GameScreen = (props) => {
  const [currentGuess, setCurrentGuest] = useState(generateRandomBetween(1, 100, props.userChoice))
  const [rounds, setRounds] = useState(0)

  const currentLow = useRef(1);
  const currentHigh = useRef(100)

  const {onGameOver, userChoice} = props
  // runs after the GameScreen has rendered
  useEffect(() => {

    if (currentGuess === userChoice){
      onGameOver(rounds)
    }

  }, [currentGuess, userChoice, onGameOver])
  const nextGuessHandler = direction => {
    if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
      Alert.alert("Don\'t lie", "You know this is wrong.....", [{text: "Sorry!", style: "cancel"}])
      return
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess
    } else{
      currentLow.current = currentGuess
    }

   const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
   setCurrentGuest(nextNumber)
   setRounds(currRounds => currRounds + 1)
  }

  return (
    <View style={styles.screen}>
      <Text>
        Opponent's Guess
      </Text>
  <NumberContainer>{currentGuess}</NumberContainer>
  <Card style={styles.buttonContainer}>
    <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
    <Ionicons name="md-remove" size={24} color="white" />
    </MainButton>
    
    <MainButton onPress={nextGuessHandler.bind(this, 'greater')}> <Ionicons name="md-add" size={24} color="white" /></MainButton>
  </Card>
    </View>
  )
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
  padding: 10,
  alignItems: "center"
  }, 
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop:20,
    width:300,
    maxWidth: "80%"
  }
})
export default GameScreen
 
