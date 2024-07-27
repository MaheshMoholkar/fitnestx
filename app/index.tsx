import { View, Text} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'

export default function App() {
  return (
    <SafeAreaView className="bg-white">
      <View className='flex justify-center items-center h-full'>
          <Text className='font-bold text-3xl'>Fitnest<Text className='text-indigo-300 text-4xl'>X</Text></Text>
          <Text className='text-slate-400'>Everbody Can Train</Text>
          <CustomButton
            title="Get Started"
            handlePress={() => {router.push("signup-1")}}
            containerStyles="px-28 rounded-full absolute bottom-4 bg-indigo-400"
            textStyles='text-white'
          />
        </View>
    </SafeAreaView>
  )
}

