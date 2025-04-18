import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { useRouter } from "expo-router";

export default function Learn() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>📘 Learn About Lewis Model</Text>

        <View style={styles.cardList}>
          <Pressable
            onPress={() => router.push("/learn/linear")}
            style={[styles.card, styles.linear]}
          >
            <Text style={styles.emoji}>🧠</Text>
            <Text style={styles.cardText}>Learn Linear-Active</Text>
          </Pressable>

          <Pressable
            onPress={() => router.push("/learn/multi")}
            style={[styles.card, styles.multi]}
          >
            <Text style={styles.emoji}>🔥</Text>
            <Text style={styles.cardText}>Learn Multi-Active</Text>
          </Pressable>

          <Pressable
            onPress={() => router.push("/learn/reactive")}
            style={[styles.card, styles.reactive]}
          >
            <Text style={styles.emoji}>🌊</Text>
            <Text style={styles.cardText}>Learn Reactive</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2FDFB",
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
    fontFamily: "Nunito_700Bold",
    color: "#1A1A1A",
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
    color: "#1A1A1A",
    fontFamily: "Nunito_600SemiBold",
  },
  linear: {
    backgroundColor: "#FDF7E3",
  },
  multi: {
    backgroundColor: "#FFE8E5",
  },
  reactive: {
    backgroundColor: "#E6F3FF",
  },
});
