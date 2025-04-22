import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  Dimensions,
} from "react-native";
import StoryCard from "@/components/StoryCard";
import { story, StyleType } from "@/data/storyData";
import Text from "@/components/DefaultText";
import Bar from "@/components/Bar";

const initialScores = {
  linear: 0,
  multi: 0,
  reactive: 0,
};

export default function Play() {
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
      <View style={styles.inner}>
        {showResult ? (
          <ResultScreen
            topStyle={getTopStyle()}
            onRestart={handleRestart}
            scores={scores}
          />
        ) : (
          <StoryCard
            storyNode={story[currentKey]}
            onOptionPress={handleOptionPress}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const ResultScreen = ({
  topStyle,
  onRestart,
  scores,
}: {
  topStyle: StyleType;
  onRestart: () => void;
  scores: Record<StyleType, number>;
}) => {
  const messages = {
    linear:
      "🧠 You lean toward Linear-Active behavior: structured, direct, and task-focused.",
    multi:
      "🔥 You lean toward Multi-Active behavior: warm, expressive, and people-oriented.",
    reactive:
      "🌊 You lean toward Reactive behavior: calm, respectful, and harmony-driven.",
  };

  return (
    <View style={styles.resultCard}>
      <Text style={styles.resultTitle}>🎯 Your Cultural Style</Text>
      <Text style={styles.resultText}>{messages[topStyle]}</Text>

      <View style={styles.scoreContainer}>
        <Bar label="🧠 Linear-Active" value={scores.linear} color="#faa918" />
        <Bar label="🔥 Multi-Active" value={scores.multi} color="#e53838" />
        <Bar label="🌊 Reactive" value={scores.reactive} color="#1cb0f6" />
      </View>

      <Pressable style={styles.button} onPress={onRestart}>
        <Text style={styles.buttonText}>🔁 Restart Adventure</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0", // pastel green background
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  resultCard: {
    backgroundColor: "#FFFFFF",
    padding: 32,
    borderRadius: 10,
    width: Dimensions.get("window").width * 0.9,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },
  resultTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 20,
    fontFamily: "SpecialGothic",
  },
  resultText: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    marginBottom: 32,
    fontFamily: "Arimo",
  },
  button: {
    backgroundColor: "#7ac70c", // Duolingo green
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 999,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 15,
    fontFamily: "SpecialGothic",
  },
  scoreContainer: {
    width: "100%",
    marginTop: 16,
    marginBottom: 24,
    gap: 12,
  },
});
