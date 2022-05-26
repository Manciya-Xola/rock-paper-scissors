import React from 'react'
import { Text, View } from 'react-native'
import style from './style'


function Result({result}) {
  return (
    <View style={style.results}>
      {result.winner === 'computer'? 
      <Text style={style.logic}>{result.computerChoice} beats {result.move}</Text>:
      <Text style={style.logic}>{result.computerChoice} beats {result.move}</Text>}
      <Text style={style.winner}>{result.winner}</Text>
    </View>
  )
}

export default Result