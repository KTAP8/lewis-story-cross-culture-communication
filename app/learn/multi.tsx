import { View, ScrollView, StyleSheet } from "react-native";
import Text from "@/components/DefaultText"; // using Nunito with default styles

export default function MultiPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🔥 Multi-Active Style</Text>
        <Text style={styles.content}>
          People with a Multi-Active communication style are:
          {"\n\n"}• Relationship-focused and expressive
          {"\n"}• Prefer emotional, spontaneous conversations
          {"\n"}• Often interrupt or speak simultaneously
          {"\n"}• Comfortable multitasking
          {"\n"}• Less concerned with schedules
          {"\n\n"}🌍 Common in: Italy, Latin America, Spain, Middle East
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#F2FDFB", // consistent with layout background
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
