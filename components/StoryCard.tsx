import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { StoryNode, StyleType } from "@/data/storyData";
import Text from "@/components/DefaultText";

type Props = {
  storyNode: StoryNode;
  onOptionPress: (nextKey: string, style?: StyleType) => void;
};

const StoryCard: React.FC<Props> = ({ storyNode, onOptionPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.storyText}>{storyNode.text}</Text>

      {storyNode.options.map((option, index) => (
        <Pressable
          key={index}
          onPress={() => onOptionPress(option.next, option.style)}
          style={({ pressed }) => [
            styles.optionButton,
            pressed && styles.optionButtonPressed,
          ]}
        >
          <Text style={styles.optionText}>{option.text}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default StoryCard;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 60,
    backgroundColor: "#F2FDFB",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    marginHorizontal: 16,
  },
  storyText: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 24,
    color: "#1A1A1A",
    fontFamily: "Nunito_600SemiBold",
    lineHeight: 28,
  },
  optionButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: "#E2E2E2",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 5,
    elevation: 2,
  },
  optionButtonPressed: {
    backgroundColor: "#E6F4E5",
    borderColor: "#58CC02",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    fontFamily: "Nunito_600SemiBold",
  },
});
