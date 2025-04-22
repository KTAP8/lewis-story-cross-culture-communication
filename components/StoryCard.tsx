import React from "react";
import { View, Pressable, StyleSheet, Image } from "react-native";
import { StoryNode, StyleType } from "@/data/storyData";
import Text from "@/components/DefaultText";

type Props = {
  storyNode: StoryNode;
  onOptionPress: (nextKey: string, style?: StyleType) => void;
};

const StoryCard: React.FC<Props> = ({ storyNode, onOptionPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {storyNode.image && (
          <Image
            source={storyNode.image}
            style={styles.image}
            resizeMode="cover"
          />
        )}
      </View>

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
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    marginHorizontal: 16,
  },
  storyText: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 24,
    color: "#4c4c4c",
    fontFamily: "SpecialGothic",
    lineHeight: 20,
    textAlign: "center",
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
    fontWeight: "400",
    color: "#6f6f6f",
    fontFamily: "Arimo",
  },
  image: {
    width: 300,
    height: 230,
    borderRadius: 16,
    marginBottom: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
