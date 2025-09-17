import IconButton from "@/components/IconButton"
import React from 'react'
import { Image, Text, View } from 'react-native'

const ProfileDetails = () => {
  return (
    <View className="items-center mt-6">
      <Image 
        source={require("../assets/images/donpollo.png")}
        className="w-32 h-32 rounded-full"
      />
      <Text className="text-black text-2xl font-bold">Don Pollo</Text>
      <Text className="text-black text-2xl font-bold">King of Ohio 🔥☠️</Text>
      <IconButton></IconButton>
    </View>
  )
}

export default ProfileDetails