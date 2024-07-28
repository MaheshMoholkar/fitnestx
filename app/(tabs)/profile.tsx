import CustomButton from '@/components/CustomButton';
import icons from '@/constants/Icons';
import React from 'react';
import { Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className="flex h-full w-full mt-3">
      <Text className='font-bold text-2xl text-center mb-5'>Profile</Text>
      <View className='flex flex-row justify-between mx-5 mb-5'>
        <View className='flex flex-row items-center gap-4'>
          <View className='rounded-full bg-indigo-100 p-5'>
            <Image
              source={icons.profile}
              style={{ height: 24, width: 24 }}
              resizeMode='contain'
            />
          </View>
          <View>
            <Text className='font-semibold text-lg'>Jane Smith</Text>
            <Text className='text-zinc-400'>Normal Program</Text>
          </View>
        </View>
        <View className='justify-center'>
          <TouchableOpacity
            className='bg-indigo-400 mx-3 w-20 h-8 items-center justify-center rounded-full'
            onPress={() => { }}
          >
            <Text className='text-white font-semibold'>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text className='ml-8 mb-5 font-semibold text-lg'>Personal Details</Text>
      <View className='mx-6 flex flex-row justify-between mb-5'>
        <View className='bg-white p-3 rounded-3xl shadow-slate-800 flex-1 items-center'>
          <Text className='text-indigo-300 font-semibold text-lg'>160cm</Text>
          <Text className='text-zinc-400 mt-1'>Height</Text>
        </View>
        <View className='bg-white p-3 rounded-3xl shadow-slate-800 flex-1 items-center mx-4'>
          <Text className='text-indigo-300 font-semibold text-lg'>65kg</Text>
          <Text className='text-zinc-400 mt-1'>Weight</Text>
        </View>
        <View className='bg-white p-3 rounded-3xl shadow-slate-800 flex-1 items-center'>
          <Text className='text-indigo-300 font-semibold text-lg'>22yo</Text>
          <Text className='text-zinc-400 mt-1'>Age</Text>
        </View>
      </View>
      <Text className='ml-8 mb-5 font-semibold text-lg'>Preferences</Text>
      <View className='flex flex-col justify-evenly mx-6 h-64 bg-indigo-100 rounded-3xl'>
        <View className='mx-4 p-4 bg-white rounded-2xl flex-row justify-between'>
          <View>
            <Text className='text-zinc-500'>Membership</Text>
            <Text className='text-indigo-400 font-semibold'>Normal</Text>
          </View>
          <TouchableOpacity className='bg-indigo-400 mx-1 w-20 h-8 items-center justify-center rounded-full' onPress={() => { }}><Text className='text-white font-semibold'>Upgrade</Text></TouchableOpacity>
        </View>
        <View className='mx-4 p-4 bg-white rounded-2xl flex-row justify-between'>
          <View>
            <Text className='text-zinc-500'>Schedule</Text>
            <Text className='text-indigo-400 font-semibold'>Evening</Text>
          </View>
          <TouchableOpacity className='bg-indigo-400 mx-1 w-20 h-8 items-center justify-center rounded-full' onPress={() => { }}><Text className='text-white font-semibold'>Change</Text></TouchableOpacity>
        </View>
        <View className='mx-4 p-4 bg-white rounded-2xl flex-row justify-between'>
          <View>
            <Text className='text-zinc-500'>Contact Us</Text>
            <Text className='text-indigo-400 font-semibold'>7517069209</Text>
          </View>
          <TouchableOpacity className='bg-indigo-400 mx-1 w-20 h-8 items-center justify-center rounded-full' onPress={() => { }}><Text className='text-white font-semibold'>Call</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}