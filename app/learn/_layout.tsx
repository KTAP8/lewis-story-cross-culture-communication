import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function LearnLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#f0f0f0",
        },
        headerTitleStyle: {
          fontFamily: "SpecialGothic",
        },
        headerTintColor: "#7ac70c", // back button color
        contentStyle: {
          backgroundColor: "#f0f0f0", // ✅ background of screen itself
        },
      }}
    />
  );
}
