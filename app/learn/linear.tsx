import { View, ScrollView, StyleSheet } from "react-native";
import Text from "@/components/DefaultText"; // assuming this uses Nunito

export default function LinearPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🧠 Linear-Active Style</Text>
        <Text style={styles.content}>
          People with a Linear-Active communication style are:
          {"\n\n"}• Task-oriented
          {"\n"}• Punctual and schedule-focused
          {"\n"}• Prefer logic and facts over emotion
          {"\n"}• Speak in turn and respect order
          {"\n"}• Like planning ahead and sticking to it
          {"\n\n"}🌍 Common in: Germany, USA, Switzerland, UK, Scandinavia
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#F2FDFB",
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
