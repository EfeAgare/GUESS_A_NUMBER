import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';

// export default class Card extends Component {
//   render() {
//     return (
//       <View style={styles.inputContainer}>
//       <Text>Select a Number</Text>
//       <TextInput />
//       <View style={{...styles.buttonContainer}}>
//         <Button title="Reset" onPress={() => {}} />
//         <Button title="Confirm" onPress={() => {}} />
//       </View>
//     </View>
//     )
//   }
// }

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 10, // make the shadow to be working,
    padding: 20,
    borderRadius: 10
  }
});

export default Card;
