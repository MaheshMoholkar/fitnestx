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
                <Image
                    source={require('@/assets/images/onboarding-1.png')}
                    style={{
                        width: width,
                        height: height / 2,
                        resizeMode: "cover",
                        marginTop: -40
                    }}
                />
            </View>
            <Text className='text-3xl m-5 mt-12 font-semibold'>Track Your Goal</Text>
            <Text className='px-5 text-slate-400 w-full'>Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals </Text>

            <NextButton
                handlePress={() => { router.push("onboarding/onboarding-2") }}
                icon={icons.next1}
            />
        </SafeAreaView>
    )
}