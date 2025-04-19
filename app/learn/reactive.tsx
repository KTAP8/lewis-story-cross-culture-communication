import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Image, Pressable } from "react-native";
import Text from "@/components/DefaultText";

const reactiveImage = require("@/assets/images/learn/reactive.png");

export default function ReactivePage() {
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
            source={require("@/assets/images/learn/reactive.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </Pressable>
      ) : (
        <View style={styles.card}>
          <Text style={styles.title}>🌊 Reactive Style</Text>
          <Text style={styles.content}>
            People with a Reactive communication style are:
            {"\n\n"}• Careful listeners who rarely interrupt
            {"\n"}• Respectful and soft-spoken in conversation
            {"\n"}• Value harmony over directness or speed
            {"\n"}• Often pause or use silence to reflect before responding
            {"\n"}• Indirect in giving feedback, to avoid causing offense
            {"\n"}• Prefer building relationships slowly, based on trust and
            observation
            {"\n\n"}✅ Strengths:
            {"\n"}• Excellent at diffusing tension and maintaining group
            cohesion
            {"\n"}• Reliable in environments where discretion and thoughtfulness
            are valued
            {"\n"}• Naturally adapt to group needs and non-verbal communication
            {"\n"}• Effective mediators and loyal team players
            {"\n\n"}⚠️ Common Challenges:
            {"\n"}• May appear passive or indecisive to more direct
            communicators
            {"\n"}• Can feel uncomfortable in high-pressure or fast-paced
            settings
            {"\n"}• Risk being overlooked in competitive or assertive
            environments
            {"\n\n"}💡 Best Fit For:
            {"\n"}• Situations requiring diplomacy and subtle negotiation
            {"\n"}• Roles involving client care, international relations, or
            group facilitation
            {"\n"}• Cultures or teams that prioritize harmony and respect over
            confrontation
            {"\n\n"}🌍 Common in: Japan, Thailand, China, Vietnam, South Korea,
            Indonesia
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
