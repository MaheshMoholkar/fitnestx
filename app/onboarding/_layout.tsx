import React from 'react'
import { Stack } from 'expo-router'

export default function App() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="onboarding-1"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="onboarding-2"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="onboarding-3"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="onboarding-4"
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack>
    </>
  )
}