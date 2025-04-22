import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
} from "react-native";
import { Link } from "expo-router";
import { useRouter } from "expo-router";

export default function Learn() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Image
          style={styles.image}
          source={require("@/assets/images/mascot.png")}
        ></Image>
        <Text style={styles.title}>Learn Lewis Model</Text>

        <View style={styles.cardList}>
          <Pressable
            onPress={() => router.push("/learn/linear")}
            style={[styles.card, styles.linear]}
          >
            <Text style={styles.emoji}>🧠</Text>
            <Text style={styles.cardText}>What Is Linear-Active?</Text>
          </Pressable>

          <Pressable
            onPress={() => router.push("/learn/multi")}
            style={[styles.card, styles.multi]}
          >
            <Text style={styles.emoji}>🔥</Text>
            <Text style={styles.cardText}>What Is Multi-Active?</Text>
          </Pressable>

          <Pressable
            onPress={() => router.push("/learn/reactive")}
            style={[styles.card, styles.reactive]}
          >
            <Text style={styles.emoji}>🌊</Text>
            <Text style={styles.cardText}>What Is Reactive?</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    fontFamily: "Nunito_400Regular",
  },
  inner: {
    flex: 1,
    justifyContent: "center", // ✅ center vertically
    alignItems: "center", // ✅ center horizontally
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "SpecialGothic",
    color: "#4c4c4c",
    marginBottom: 32,
    textAlign: "center",
  },
  cardList: {
    gap: 16,
    width: "100%",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  emoji: {
    fontSize: 28,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    // fontFamily: "Nunito_600SemiBold",
    fontFamily: "Arimo",
  },
  linear: {
    backgroundColor: "#faa918",
  },
  multi: {
    backgroundColor: "#e53838",
  },
  reactive: {
    backgroundColor: "#1cb0f6",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 16,
    marginBottom: 20,
  },
});
