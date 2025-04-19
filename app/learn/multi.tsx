import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Image, Pressable } from "react-native";
import Text from "@/components/DefaultText";

const multiImage = require("@/assets/images/learn/multi.png"); // replace with your actual path

export default function MultiPage() {
  const [showText, setShowText] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!showText ? (
        <Pressable
          onPress={() => {
            setShowText(true);
          }}
          style={styles.imageCard}
        >
          <Image
            source={require("@/assets/images/learn/multi.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </Pressable>
      ) : (
        <View style={styles.card}>
          <Text style={styles.title}>🔥 Multi-Active Style</Text>
          <Text style={styles.content}>
            People with a Multi-Active communication style are:
            {"\n\n"}• Highly relationship-focused and emotionally expressive
            {"\n"}• Enjoy spontaneous, passionate conversations
            {"\n"}• Comfortable speaking over one another or interrupting — it’s
            a sign of engagement!
            {"\n"}• Prefer flexibility over strict schedules
            {"\n"}• Often multitask and jump between topics
            {"\n"}• Rely on personal connections and intuition to make decisions
            {"\n\n"}✅ Strengths:
            {"\n"}• Great at building rapport and energizing a room
            {"\n"}• Adapt quickly in dynamic social situations
            {"\n"}• Natural storytellers and persuasive communicators
            {"\n"}• Thrive in face-to-face or group settings
            {"\n\n"}⚠️ Common Challenges:
            {"\n"}• May struggle with rigid timelines or overly structured
            environments
            {"\n"}• Can appear chaotic or disorganized to linear-active types
            {"\n"}• Emotions might outweigh logic in professional contexts
            {"\n\n"}💡 Best Fit For:
            {"\n"}• Team brainstorming sessions and creative industries
            {"\n"}• Negotiations that depend on trust and personal connection
            {"\n"}• Cultures or teams that value enthusiasm and flexibility
            {"\n\n"}🌍 Common in: Italy, Latin America, Spain, Greece, Middle
            East
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#F2FDFB",
  },
  imageCard: {
    borderRadius: 20,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  image: {
    width: "100%",
    height: 600,
    borderRadius: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 24,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Nunito_700Bold",
    marginBottom: 16,
    color: "#1A1A1A",
  },
  content: {
    fontSize: 16,
    lineHeight: 26,
    color: "#333",
    fontFamily: "Nunito_400Regular",
  },
});
