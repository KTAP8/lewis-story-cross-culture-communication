import { View, Text, ScrollView } from "react-native";

export default function ReactivePage() {
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        🌊 Reactive Style
      </Text>
      <Text style={{ fontSize: 16, lineHeight: 24 }}>
        People with a Reactive communication style are:
        {"\n\n"}• Listeners who rarely interrupt
        {"\n"}• Highly respectful and polite
        {"\n"}• Avoid direct confrontation
        {"\n"}• Consider harmony more important than speed
        {"\n"}• Often respond indirectly or with silence
        {"\n\n"}🌍 Common in: Japan, Thailand, China, Vietnam, Korea
      </Text>
    </ScrollView>
  );
}
