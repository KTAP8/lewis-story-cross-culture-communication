import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function LearnLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#F2FDFB",
        },
        headerTitleStyle: {
          fontFamily: "Nunito_700Bold",
        },
        headerTintColor: "#58CC02", // back button color
        contentStyle: {
          backgroundColor: "#F2FDFB", // ✅ background of screen itself
        },
      }}
    />
  );
}
