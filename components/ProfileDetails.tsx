import React from 'react'
import { Image, Text, View } from 'react-native'
import IconButton from './ui/IconButton'

const ProfileDetails = () => {
  return (
    <View className="items-center mt-6">
      <Image 
        source={require("../assets/images/donpollo.png")}
        className="w-32 h-32 rounded-full"
      />
      <Text className="text-black text-2xl font-bold">Don Pollo</Text>
      <Text className="text-black text-2xl font-bold">King of Ohio 🔥☠️</Text>

      <IconButton iconName='logo-instagram'></IconButton>
      <IconButton iconName='logo-facebook'></IconButton>
      <IconButton iconName='logo-tiktok'></IconButton>
      <IconButton iconName='logo-linkedin'></IconButton>
      
    </View>
  )
}

export default ProfileDetails