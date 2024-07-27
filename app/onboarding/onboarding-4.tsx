import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import NextButton from '@/components/navigation/NextButton';
import icons from '@/constants/Icons';

export default function App() {
    const { height, width } = Dimensions.get('window');
    return (
        <SafeAreaView className='flex-1'>
            <View>
                <StatusBar translucent={true} backgroundColor="transparent" />
                <Image
                    source={require('@/assets/images/onboarding-4.png')}
                    style={{
                        width: width,
                        height: height / 2,
                        resizeMode: "cover",
                        marginTop: -40
                    }}
                />
            </View>
            <Text className='text-3xl m-5 mt-12 font-semibold'>Improve Quality Sleep</Text>
            <Text className='px-5 text-slate-400 w-full'>Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning</Text>
            <NextButton
                handlePress={() => { router.push("signup-1") }}
                icon={icons.next4}
            />
        </SafeAreaView>
    )
}