import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
interface IconButtonProps{
  presionar?: () => void;
  iconName: String;
  color?: String;//Color del icono (OPCIONAL {?})
}
const IconButton = ({presionar, iconName}: IconButtonProps) => {
  return (
    <Pressable onPress={presionar}>
      <Ionicons name = {iconName as any} size={24} color="black" />
    </Pressable>
  )
}

export default IconButton