import React, { useRef } from "react";
import { Animated, View, StyleSheet, Pressable, Text } from "react-native";
import { Slot, useRouter, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function MainLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets(); // ✅ add this

  const tabs = [
    { name: "Home", route: "/", icon: "home-outline" },
    { name: "Play", route: "/play", icon: "game-controller-outline" },
  ] as const;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Slot />
      </View>

      {/* ✅ Add safe area padding to bottom nav */}
      <View style={[styles.nav, { paddingBottom: insets.bottom }]}>
        {tabs.map((tab, index) => {
          const scale = useRef(new Animated.Value(1)).current;
          const isActive = pathname === tab.route;

          const handlePressIn = () => {
            Animated.spring(scale, {
              toValue: 1.15,
              useNativeDriver: true,
              friction: 5,
            }).start();
          };

          const handlePressOut = () => {
            Animated.spring(scale, {
              toValue: 1,
              useNativeDriver: true,
              friction: 5,
            }).start();
            router.navigate(tab.route);
          };
          return (
            <Pressable
              key={tab.route}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              style={styles.tab}
            >
              <Animated.View
                style={[styles.iconWrapper, { transform: [{ scale }] }]}
              >
                <Ionicons
                  name={tab.icon}
                  size={isActive ? 28 : 24}
                  color={isActive ? "#8ee000" : "#cfcfcf"}
                />
                <Text
                  style={[
                    styles.label,
                    isActive && styles.activeLabel,
                    isActive && styles.activeLabelSize,
                  ]}
                >
                  {tab.name}
                </Text>
              </Animated.View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center", // ✅ ensure children are vertically centered
    paddingVertical: 12,
    paddingBottom: 12, // use a default first
    paddingTop: 6,
    borderTopWidth: 3,
    borderTopColor: "#cfcfcf",
    backgroundColor: "#f0f0f0",
    minHeight: 80, // ✅ fix or control nav bar height
  },
  tab: {
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    fontFamily: "SpecialGothic",
    color: "#cfcfcf",
    fontWeight: "600",
  },
  activeLabel: {
    color: "#8ee000",
  },
  activeLabelSize: {
    fontSize: 14,
  },
  iconWrapper: {
    alignItems: "center", // ✅ horizontal center of icon + text
    justifyContent: "center", // ✅ vertical centering
  },
});
