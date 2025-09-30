import { View, Text, Linking } from 'react-native'
import React from 'react'
import IconButton from './ui/IconButton'
import CustomText from './ui/CustomText'

const ExtraDetails = () => {
    return (
      <View className='bg-gray-900 rounded-t-3xl p-10 w-screen h-1/2 gap-7'>
        <CustomText variant='normall' value='Skill'></CustomText>
        <View className='flex-row justify-center gap-4'>
            <IconButton iconName='logo-tiktok' color='black' presionar={() => Linking.openURL('https://www.tiktok.com')}></IconButton>
            <IconButton iconName='logo-youtube' color='red' presionar={() => Linking.openURL('https://www.youtube.com')}></IconButton>
            <IconButton iconName='logo-instagram' color='pink' presionar={() => Linking.openURL('https://www.instagram.com')}></IconButton>
            <IconButton iconName='logo-twitch' color='purple' presionar={() => Linking.openURL('https://www.twitch.tv')}></IconButton>
        </View>
        <CustomText variant='normall' value='Profession'/>
        <View className='flex-row  justify-center bg-cyan-50 rounded-xl p-4'>
            <CustomText variant='normalll' value='Tiktoker / Youtuber / Sigma a tiempo completo'/>
        </View>
        <CustomText variant='normall' value='Experience'/>
        <View className='flex-row justify-center bg-cyan-50 rounded-xl p-4 w-3/4 ml-80'>
            <CustomText variant='normalll' value='Content creator, fomous un the Spanish community'/>
        </View>
       </View>
    )
  }

export default ExtraDetails