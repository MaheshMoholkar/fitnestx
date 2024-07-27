import { Text, ScrollView, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="bg-white">
      <View className="flex w-full justify-center">
        <Text>Hey there,</Text>
        <Text>Create an Account</Text>
      </View>
      
    </SafeAreaView>
  );
}
