import React from 'react'
import { Image, View, Linking } from 'react-native'
import CustomText from './ui/CustomText'
import IconButton from './ui/IconButton'

const ProfileDetails = () => {
  return (
    <View className="items-center gap-5 mt-20">
      <Image 
        source={require("../assets/images/donpollo.png")}
        className="w-32 h-32 rounded-full"
      />
      <CustomText variant='title' value='Don Pollo'/>
      <CustomText variant='subtitle' value='King of OHIO 💀🔥'/>
      <View className="flex-row gap-4 mt-4">
        <IconButton iconName='logo-instagram' color='pink' presionar={() => Linking.openURL('https://www.instagram.com')}></IconButton>
        <IconButton iconName='logo-facebook' color='cyan' presionar={() => Linking.openURL('https://www.facebook.com')}></IconButton>
        <IconButton iconName='logo-github' color='black' presionar={() => Linking.openURL('https://github.com')}></IconButton>
        <IconButton iconName='logo-linkedin' color='blue' presionar={() => Linking.openURL('https://www.linkedin.com')}></IconButton>
      </View>
      
    </View>
  )
}

export default ProfileDetails