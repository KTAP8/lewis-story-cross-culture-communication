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

const styleExamples = {
  linear: [
    { name: "Bill Gates", country: "🇺🇸 USA", role: "Tech Founder, Microsoft" },
    {
      name: "Marie Curie",
      country: "🇵🇱 Poland",
      role: "Scientist & Nobel Laureate",
    },
    { name: "Satya Nadella", country: "🇮🇳 India", role: "CEO, Microsoft" },
  ],
  multi: [
    {
      name: "Oprah Winfrey",
      country: "🇺🇸 USA",
      role: "Talk Show Host & Entrepreneur",
    },
    { name: "Shakira", country: "🇨🇴 Colombia", role: "Singer & Humanitarian" },
    { name: "Jamie Oliver", country: "🇬🇧 UK", role: "Celebrity Chef" },
  ],
  reactive: [
    {
      name: "Hayao Miyazaki",
      country: "🇯🇵 Japan",
      role: "Film Director, Studio Ghibli",
    },
    {
      name: "Yo-Yo Ma",
      country: "🇺🇸 USA",
      role: "Cellist & Cultural Ambassador",
    },
    {
      name: "Steve Wozniak",
      country: "🇺🇸 USA",
      role: "Co-Founder, Apple Inc.",
    },
  ],
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
      {!showResult && (
        <View style={styles.scoreContainerSmall}>
          <Text style={styles.textScore}>Your score</Text>
          <Bar label="🧠 Linear" value={scores.linear} color="#faa918" />
          <Bar label="🔥 Multi-Active" value={scores.multi} color="#e53838" />
          <Bar label="🌊 Reactive" value={scores.reactive} color="#1cb0f6" />
        </View>
      )}
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
  const example =
    styleExamples[topStyle][
      Math.floor(Math.random() * styleExamples[topStyle].length)
    ];

  return (
    <View style={styles.resultCard}>
      <Text style={styles.resultTitle}>🎯 Your Cultural Style</Text>
      <Text style={styles.resultText}>{messages[topStyle]}</Text>

      <View style={styles.scoreContainer}>
        <Bar label="🧠 Linear-Active" value={scores.linear} color="#faa918" />
        <Bar label="🔥 Multi-Active" value={scores.multi} color="#e53838" />
        <Bar label="🌊 Reactive" value={scores.reactive} color="#1cb0f6" />
      </View>

      <View style={styles.figureSection}>
        <Text style={styles.figureTitle}>You're like:</Text>
        <Text style={styles.figureText}>
          {example.country} {example.name} – {example.role}
        </Text>
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
    paddingHorizontal: 16,
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
  figureSection: {
    marginTop: 12,
    alignItems: "center",
    marginBottom: 24,
  },
  figureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
    fontFamily: "Nunito_700Bold",
  },
  figureText: {
    fontSize: 16,
    marginBottom: 4,
    color: "#444",
    fontFamily: "Nunito_400Regular",
  },
  scoreContainerSmall: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 16,
    gap: 8,
    width: "100%",
    borderBottomColor: "#cfcfcf",
    borderBottomWidth: 2,
  },
  textScore: {
    fontFamily: "SpecialGothic",
    color: "#7ac70c",
  },
  playContainer: {
    alignItems: "center",
    gap: 12,
  },
});
