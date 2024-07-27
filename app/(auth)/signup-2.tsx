import { View, Text, Image, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router';
import FormField from '@/components/FormField';
import icons from "../../constants/Icons";
import CustomButton from '@/components/CustomButton';

export default function App() {
    const { height, width } = Dimensions.get('window');
    const [form, setForm] = useState({
        gender: "",
        birthdate: "",
        weight: "",
        height: "",
    });
    return (
        <SafeAreaView className='bg-white h-full'>
            <ScrollView>
                <View>
                    <Image
                        source={require('@/assets/images/signup-1.png')}
                        style={{
                            width: width,
                            height: height / 2,
                            resizeMode: "contain",
                            marginTop: -75
                        }}
                    />
                </View>
                <Text className='text-2xl m-2 mt-3 font-semibold self-center'>Let's complete your profile</Text>
                <Text className='text-slate-400 self-center mb-3'>It will help us to know more about you!</Text>
                <View className="w-full px-6">
                    <FormField
                        title="Gender"
                        icon={icons.gender}
                        value={form.gender}
                        handleChangeText={(e: string) => setForm({ ...form, gender: e })}
                        otherStyles="mt-3"
                        placeholder="Choose Gender"
                    />
                    <FormField
                        title="DOB"
                        icon={icons.calendar}
                        value={form.birthdate}
                        handleChangeText={(e: string) => setForm({ ...form, birthdate: e })}
                        otherStyles="mt-3"
                        placeholder="Date of Birth"
                    />
                    <View className='flex flex-row justify-between'>
                        <FormField
                            title="Weight"
                            icon={icons.weight}
                            value={form.weight}
                            handleChangeText={(e: string) => setForm({ ...form, weight: e })}
                            otherStyles="mt-3 w-56"
                            placeholder="Weight"
                        />
                        <View className='rounded-2xl justify-center items-center h-14 px-4 mt-3 bg-purple-400'>
                            <Text className='flex text-white font-bold px-1'>KG</Text>
                        </View>
                    </View>
                    <View className='flex flex-row justify-between'>
                        <FormField
                            title="Height"
                            icon={icons.height}
                            value={form.height}
                            handleChangeText={(e: string) => setForm({ ...form, height: e })}
                            otherStyles="mt-3 mb-6 w-56"
                            placeholder="Height"
                        />
                        <View className='rounded-2xl justify-center items-center h-14 px-4 mt-3 bg-purple-400'>
                            <Text className='flex text-white font-bold px-1'>CM</Text>
                        </View>
                    </View>
                </View>
                <CustomButton
                    title="Next   >"
                    containerStyles="bg-indigo-400 mx-6 rounded-full"
                    textStyles="text-white"
                    handlePress={() => { router.push("signup-3") }}
                />
            </ScrollView>
        </SafeAreaView>
    )
}