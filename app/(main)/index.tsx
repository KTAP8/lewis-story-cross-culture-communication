import { View, Button } from "react-native";
import { Link } from "expo-router";

export default function LearnPage() {
  return (
    <View style={{ padding: 24 }}>
      <Link href="/learn/linear" asChild>
        <Button title="🧠 Learn Linear-Active" />
      </Link>
      <Link href="/learn/multi" asChild>
        <Button title="🔥 Learn Multi-Active" />
      </Link>
      <Link href="/learn/reactive" asChild>
        <Button title="🌊 Learn Reactive" />
      </Link>
    </View>
  );
}
