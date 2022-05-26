import React from 'react'
import { Pressable, Text, View } from 'react-native';
import style from './style';
function GameButton({type='rock', onPress}) {

  let icon = "✊"
  if (type==="paper") {
    icon = "✋"
  }
  else if (type== "scissors") {
    icon = "✌️"
  }
  return (
    <View>
      <Pressable onPress={onPress} style={style.outerContainer}>
        <View style={style.innerContainer}>
          <Text style={style.text}>{icon}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default GameButton