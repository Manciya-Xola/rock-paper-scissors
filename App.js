import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GameView from './views/GameView';
import React, { useState } from 'react'
import Result from './views/Result';

export default function App() {
  const [winner, setWinner] = useState({})
  function GameWinner(params) {
    setWinner(params);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headingContainer}>
        Rock Paper Scissors
      </Text>
      <View style={styles.chooseHeading}>
        <Text style={styles.headingContainer}>
          CHOOSE AN OPTION
        </Text>
        <GameView GameWinner={GameWinner}/>
        {winner.winner!==null && <Result result={winner}/>}
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headingContainer: {
    fontSize:30,
  },
  chooseHeading: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
