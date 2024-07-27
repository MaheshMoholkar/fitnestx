import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="login"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="signup-1"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="signup-2"
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack>
      <StatusBar style="dark"/>
    </>
  );
};

export default AuthLayout;
