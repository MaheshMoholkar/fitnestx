import { View, Text, Image, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router';
import CustomButton from '@/components/CustomButton';

export default function App() {
    const { height, width } = Dimensions.get('window');

    return (
        <SafeAreaView className='bg-white h-full'>
            <View>
                <Image
                    source={require('@/assets/images/setup.png')}
                    className='self-center'
                    style={{
                        width: width * 2 / 3,
                        height: height / 2,
                        resizeMode: "contain",
                        // marginTop: -75
                    }}
                />
            </View>
            <Text className='text-3xl m-2 font-semibold self-center'>Welcome, Jane</Text>
            <Text className='text-slate-500 self-center mb-3 flex-wrap w-2/3 text-center'>You are all set now, let's reach your goals together with us</Text>
            <CustomButton
                title="Go To Home"
                handlePress={() => { router.push("dashboard") }}
                containerStyles="px-28 rounded-full absolute bottom-4 bg-indigo-400 self-center"
                textStyles='text-white'
            />
        </SafeAreaView>
    )
}