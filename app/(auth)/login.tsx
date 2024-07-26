import { Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="bg-white">
      <ScrollView className="h-full">
        <Text className="mt-7">login</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
