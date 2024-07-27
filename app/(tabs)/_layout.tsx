import React from 'react';
import { Tabs } from 'expo-router';
import { AntDesign } from "@expo/vector-icons"
import { useTabBarVisibility } from '@/hooks/useTabBarVisibility';

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
            backgroundColor: '#a5b4fc',
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
                <AntDesign
                  style={{
                    position: 'absolute',
                    top: -30,
                    backgroundColor: "#4f46e5",
                    textAlign: "center",
                    borderRadius: 30,
                    padding: 12,
                  }}
                  name="qrcode"
                  size={36}
                  color="white"
                />
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