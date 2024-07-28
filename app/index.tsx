import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'

export default function App() {
  const route = "onboarding/onboarding-1";
  const login = "login";
  const dashboard = "dashboard";
  return (
    <SafeAreaView>
      <View className='flex justify-center items-center h-full'>
        <Text className='font-bold text-3xl'>Fitnest<Text className='text-indigo-300 text-4xl'>X</Text></Text>
        <Text className='text-slate-400'>Everbody Can Train</Text>
        <CustomButton
          title="Get Started"
          handlePress={() => { router.push(route) }}
          containerStyles="px-28 rounded-full absolute bottom-44 bg-indigo-400"
          textStyles='text-white'
        />
        <CustomButton
          title="Dashboard"
          handlePress={() => { router.push(dashboard) }}
          containerStyles="px-28 rounded-full absolute bottom-4 bg-indigo-400"
          textStyles='text-white'
        />
        <CustomButton
          title="Login"
          handlePress={() => { router.push(login) }}
          containerStyles="px-28 rounded-full absolute bottom-24 bg-indigo-400"
          textStyles='text-white'
        />
      </View>
    </SafeAreaView>
  )
}

