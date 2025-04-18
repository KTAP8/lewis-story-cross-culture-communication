import { ScrollView, StyleSheet, View } from "react-native";
import Text from "@/components/DefaultText"; // assume this uses Nunito

export default function ReactivePage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🌊 Reactive Style</Text>
        <Text style={styles.content}>
          People with a Reactive communication style are:
          {"\n\n"}• Listeners who rarely interrupt
          {"\n"}• Highly respectful and polite
          {"\n"}• Avoid direct confrontation
          {"\n"}• Consider harmony more important than speed
          {"\n"}• Often respond indirectly or with silence
          {"\n\n"}🌍 Common in: Japan, Thailand, China, Vietnam, Korea
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#F2FDFB", // same soft background
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
