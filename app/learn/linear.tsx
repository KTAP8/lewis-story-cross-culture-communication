import { View, Text, ScrollView } from "react-native";

export default function LinearPage() {
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        🧠 Linear-Active Style
      </Text>
      <Text style={{ fontSize: 16, lineHeight: 24 }}>
        People with a Linear-Active communication style are:
        {"\n\n"}• Task-oriented
        {"\n"}• Punctual and schedule-focused
        {"\n"}• Prefer logic and facts over emotion
        {"\n"}• Speak in turn and respect order
        {"\n"}• Like planning ahead and sticking to it
        {"\n\n"}🌍 Common in: Germany, USA, Switzerland, UK, Scandinavia
      </Text>
    </ScrollView>
  );
}
