import { Tabs } from "expo-router";
import {
  Home,
  HomeIcon,
  Code,
  PlusCircle,
  SquarePlus,
  ScrollText,
} from "lucide-react-native";
import React from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => <ScrollText color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Add",
          tabBarIcon: ({ color, focused }) => <SquarePlus color={color} />,
        }}
      />
    </Tabs>
  );
}
