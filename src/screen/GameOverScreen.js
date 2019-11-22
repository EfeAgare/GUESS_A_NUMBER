import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

const GameOverScreen = (props) => {

  const {roundsNumber, userNumber, onRestart} = props
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Image 
      source={require('../../assets/success.png')} 
      source={{uri: ""}}  // from the web
      style={styles.image}/>
  <Text>Number of rounds: {roundsNumber}</Text>
  <Text>Number was: {userNumber}</Text>
  <Button title="Restart Game" onPress={onRestart}/>
    </View>
  )
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center"
  }, 
  image: {
    width: '100%',
    height: "100%"
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3, 
    width: 300,
    height: 300,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  }
})
export default GameOverScreen
