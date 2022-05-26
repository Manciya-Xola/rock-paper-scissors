import React, { useState } from 'react'
import { Text, View } from 'react-native';
import style from './style';
import GameButton from '../GameButton';
import { playRound } from '../../game/game';

function GameView({GameWinner}) {
  const [winner, setWinner] = useState()
  function handleButtonClick(move) {
    // console.log("The winner if : ", playRound(move).winner)
    GameWinner(playRound(move));
  }
  return (
    <View style={style.buttonsContainer}>
      <GameButton type="rock" onPress={()=>handleButtonClick('rock')} />
      <GameButton type="paper" onPress={()=>handleButtonClick('paper')} />
      <GameButton type="scissors" onPress={()=>handleButtonClick('scissors')} />
    </View>
  )
}

export default GameView