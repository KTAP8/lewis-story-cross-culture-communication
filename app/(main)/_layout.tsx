import { View, StyleSheet } from "react-native";
import { Slot, useRouter, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";
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
        {tabs.map((tab) => {
          const isActive = pathname === tab.route;
          return (
            <Pressable
              key={tab.route}
              onPress={() => router.navigate(tab.route)}
              style={styles.tab}
            >
              <Ionicons
                name={tab.icon}
                size={24}
                color={isActive ? "#58CC02" : "#B0B0B0"}
              />
              <Text
                style={[
                  styles.label,
                  isActive ? styles.activeLabel : undefined,
                ]}
              >
                {tab.name}
              </Text>
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
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
  },
  tab: {
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    fontFamily: "Nunito_600SemiBold",
    color: "#B0B0B0",
    fontWeight: "600",
  },
  activeLabel: {
    color: "#58CC02",
  },
});
