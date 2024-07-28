import { Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import icons from "../../constants/Icons";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

export default function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="flex w-full items-center mt-6">
        <Text className="text-xl">Hey there,</Text>
        <Text className="font-bold text-2xl">Create an Account</Text>
      </View>

      <View className="w-full min-h-[55vh] px-6 my-3">
        <FormField
          title="First Name"
          icon={icons.profile}
          value={form.firstName}
          handleChangeText={(e: string) => setForm({ ...form, firstName: e })}
          otherStyles="mt-7"
          placeholder="First Name"
        />
        <FormField
          title="Last Name"
          icon={icons.profile}
          value={form.lastName}
          handleChangeText={(e: string) => setForm({ ...form, lastName: e })}
          otherStyles="mt-7"
          placeholder="Last Name"
        />
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
      </View>
      <CustomButton
        title="Register"
        containerStyles="bg-indigo-400 mx-6 rounded-full"
        textStyles="text-white"
        handlePress={() => { router.push("signup-2") }}
      />
      <View className="h-8"></View>
      <View className="flex flex-row gap-2 w-full justify-center">
        <Text>Already have an account?</Text>
        <Pressable onPress={() => { router.replace("login") }}>
          <Text className="text-indigo-400 underline">Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
