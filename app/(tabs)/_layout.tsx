import React from 'react';
import { Tabs } from 'expo-router';
import { AntDesign } from "@expo/vector-icons"
import { useTabBarVisibility } from '@/hooks/useTabBarVisibility';
import { View } from 'react-native';

export default function TabLayout() {
  const { shouldHideTabBar } = useTabBarVisibility();
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#93c5fd",
          tabBarStyle: {
            height: 60,
            borderRadius: 50,
            backgroundColor: '#818cf8',
            display: shouldHideTabBar ? 'none' : 'flex',
          },
          headerShown: false,
        }}>
        <Tabs.Screen
          name="dashboard"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <AntDesign name="home" size={28} color={focused ? "#4f46e5" : "white"} style={{ marginLeft: 10 }} />
            ),
          }}
        />
        <Tabs.Screen
          name="health"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <AntDesign name="hearto" size={28} color={focused ? "#4f46e5" : "white"} style={{ marginLeft: 10 }} />
            ),
          }
          }
        />
        <Tabs.Screen
          name="qr"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <View style={{
                  position: 'absolute',
                  top: -30,
                  borderRadius: 30,
                  backgroundColor: "#4f46e5",
                  padding: 12,
                }}>
                  <AntDesign
                    name="qrcode"
                    size={36}
                    color="white"
                  />
                </View>
              );
            },
          }
          }
        />
        <Tabs.Screen
          name="calendar"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <AntDesign name="calendar" size={28} color={focused ? "#4f46e5" : "white"} style={{ marginRight: 10 }} />
            ),
          }
          }
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <AntDesign name="user" size={28} color={focused ? "#4f46e5" : "white"} style={{ marginRight: 10 }} />
            ),
          }
          }
        />
      </Tabs>
    </>
  );
}