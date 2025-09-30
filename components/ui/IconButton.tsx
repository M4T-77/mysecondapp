import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
interface IconButtonProps{
  presionar?: () => void;
  iconName: String;
  color?: string;//Color del icono (OPCIONAL {?})
}
const IconButton = ({presionar, iconName, color}: IconButtonProps) => {
 return (
   <Pressable onPress={presionar} className="bg-white rounded-xl shadow-lg border-gray-200 p-4">
     <Ionicons name = {iconName as any} size={28} color={color} />
   </Pressable>
 )
}

export default IconButton