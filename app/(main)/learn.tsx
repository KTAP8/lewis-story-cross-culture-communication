import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
import StoryCard from "@/components/StoryCard";
import { story, StyleType } from "@/data/storyData";

const initialScores = {
  linear: 0,
  multi: 0,
  reactive: 0,
};

export default function App() {
  const [currentKey, setCurrentKey] = useState<string>("start");
  const [scores, setScores] = useState(initialScores);
  const [showResult, setShowResult] = useState(false);

  const handleOptionPress = (nextKey: string, style?: StyleType) => {
    if (style) {
      setScores((prev) => ({
        ...prev,
        [style]: prev[style] + 1,
      }));
    }

    if (nextKey === "result") {
      setShowResult(true);
    } else {
      setCurrentKey(nextKey);
    }
  };

  const handleRestart = () => {
    setCurrentKey("start");
    setScores(initialScores);
    setShowResult(false);
  };

  const getTopStyle = () => {
    const entries = Object.entries(scores) as [StyleType, number][];
    const sorted = entries.sort((a, b) => b[1] - a[1]);
    return sorted[0][0];
  };

  return (
    <SafeAreaView style={styles.container}>
      {showResult ? (
        <ResultScreen topStyle={getTopStyle()} onRestart={handleRestart} />
      ) : (
        <StoryCard
          storyNode={story[currentKey]}
          onOptionPress={handleOptionPress}
        />
      )}
    </SafeAreaView>
  );
}

const ResultScreen = ({
  topStyle,
  onRestart,
}: {
  topStyle: StyleType;
  onRestart: () => void;
}) => {
  const messages = {
    linear:
      "You lean toward Linear-Active behavior: structured, direct, and task-focused.",
    multi:
      "You lean toward Multi-Active behavior: warm, expressive, and people-oriented.",
    reactive:
      "You lean toward Reactive behavior: calm, respectful, and harmony-driven.",
  };

  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        Your Cultural Style:
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 40 }}>
        {messages[topStyle]}
      </Text>
      <Button title="Restart the Adventure" onPress={onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
