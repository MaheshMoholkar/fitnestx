import { View, Text, Image, Dimensions} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import NextButton from '@/components/navigation/NextButton';

export default function App() {
    const { height, width } = Dimensions.get('window');
    return (
        <SafeAreaView className='flex-1'>
            <View>
                <StatusBar translucent={true} backgroundColor="transparent" />
                <Image
                    source={require('@/assets/images/onboarding-2.png')}
                    style={{
                        width: width,
                        height: height / 2,
                        resizeMode: "cover",
                        marginTop: -40
                    }}
                />
            </View>
            <Text className='text-3xl m-5 mt-12 font-semibold'>Get Burn</Text>
            <Text className='px-5 font-light w-full'>Let’s keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever</Text>
            <NextButton 
                handlePress={() => { router.push("onboarding/onboarding-3") }} 
                imagePath={require("@/assets/images/next-2.png")} 
            />
        </SafeAreaView>
    )
}