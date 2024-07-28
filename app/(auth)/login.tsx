import { Pressable, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import icons from "../../constants/Icons";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

export default function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="flex w-full items-center mt-6">
        <Text className="text-xl">Hey there,</Text>
        <Text className="font-bold text-2xl">Welcome Back</Text>
      </View>
      <View className="w-full min-h-[55vh] px-6 my-3">
        <FormField
          title="Email"
          icon={icons.email}
          value={form.email}
          handleChangeText={(e: string) => setForm({ ...form, email: e })}
          otherStyles="mt-7"
          placeholder="Email"
        />
        <FormField
          title="Password"
          icon={icons.lock}
          value={form.password}
          handleChangeText={(e: string) => setForm({ ...form, password: e })}
          otherStyles="mt-7"
          placeholder="Password"
        />
        <Text className="text-zinc-400 underline text-center mt-6">Forgot your password?</Text>
      </View>
      <CustomButton
        title="Login"
        // icon={icons.login}
        containerStyles="bg-indigo-400 mx-6 rounded-full"
        textStyles="text-white"
        handlePress={() => { router.push("dashboard") }}
      />
      <View className="h-8"></View>
      <View className="flex flex-row gap-2 w-full justify-center">
        <Text>Don't have an account yet?</Text>
        <Pressable onPress={() => { router.replace("signup-1") }}>
          <Text className="text-indigo-400 underline">Register</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
