import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type TabRoute = {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: "/" | "/play";
};

export default function BottomNavBar() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs: TabRoute[] = [
    {
      name: "Home",
      icon: "book-outline",
      route: "/",
    },
    {
      name: "Play",
      icon: "game-controller-outline",
      route: "/play",
    },
  ];

  return (
    <View style={styles.nav}>
      {tabs.map((tab, i) => {
        const isActive = pathname === tab.route;
        return (
          <Pressable
            key={i}
            onPress={() => router.navigate(tab.route)}
            style={styles.tab}
          >
            <Ionicons
              name={tab.icon}
              size={24}
              color={isActive ? "#58CC02" : "#B0B0B0"}
            />
            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {tab.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
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
    color: "#B0B0B0",
    fontWeight: "600",
  },
  activeLabel: {
    color: "#58CC02",
  },
});
