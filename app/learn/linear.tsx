import React, { useState } from "react";
import {
  LayoutAnimation,
  Platform,
  UIManager,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Pressable,
} from "react-native";
import Text from "@/components/DefaultText";

export default function LinearPage() {
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
            source={require("@/assets/images/learn/linear.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </Pressable>
      ) : (
        <View style={styles.card}>
          <Text style={styles.title}>🧠 Linear-Active Style</Text>
          <Text style={styles.content}>
            People with a Linear-Active communication style are:
            {"\n\n"}• Highly task-oriented and focused on goals
            {"\n"}• Punctual and value strict time management
            {"\n"}• Prefer logic, facts, and data over emotional persuasion
            {"\n"}• Speak in turn and respect structured conversations
            {"\n"}• Like to plan ahead and follow a set agenda
            {"\n"}• Tend to work methodically — one thing at a time
            {"\n\n"}✅ Strengths:
            {"\n"}• Excellent at following structured processes and timelines
            {"\n"}• Reliable in meeting deadlines and long-term goals
            {"\n"}• Clear and logical communication style reduces ambiguity
            {"\n\n"}⚠️ Common Challenges:
            {"\n"}• May appear rigid or inflexible in fast-changing situations
            {"\n"}• Can struggle in cultures that value spontaneity or emotion
            {"\n"}• May unintentionally interrupt relational communication
            styles
            {"\n\n"}💡 Best Fit For:
            {"\n"}• Projects requiring planning and clear timelines
            {"\n"}• Formal negotiations or data-driven presentations
            {"\n\n"}🌍 Common in: Germany, USA, Switzerland, UK, Scandinavia
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
