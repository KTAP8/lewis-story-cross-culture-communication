import { View, Text, ScrollView } from "react-native";

export default function MultiPage() {
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        🔥 Multi-Active Style
      </Text>
      <Text style={{ fontSize: 16, lineHeight: 24 }}>
        People with a Multi-Active communication style are:
        {"\n\n"}• Relationship-focused and expressive
        {"\n"}• Prefer emotional, spontaneous conversations
        {"\n"}• Often interrupt or speak simultaneously
        {"\n"}• Comfortable multitasking
        {"\n"}• Less concerned with schedules
        {"\n\n"}🌍 Common in: Italy, Latin America, Spain, Middle East
      </Text>
    </ScrollView>
  );
}
