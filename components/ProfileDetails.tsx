import React from 'react'
import { Image, View } from 'react-native'
import CustomText from './ui/CustomText'
import IconButton from './ui/IconButton'

const ProfileDetails = () => {
  return (
    <View className="items-center mt-6">
      <Image 
        source={require("../assets/images/donpollo.png")}
        className="w-32 h-32 rounded-full"
      />
      <CustomText variant='title' value='Don Pollo'/>
      <CustomText variant='subtitle' value='King of OHIO 💀🔥'/>

      <IconButton iconName='logo-instagram'></IconButton>
      <IconButton iconName='logo-facebook'></IconButton>
      <IconButton iconName='logo-tiktok'></IconButton>
      <IconButton iconName='logo-linkedin'></IconButton>
      
    </View>
  )
}

export default ProfileDetails