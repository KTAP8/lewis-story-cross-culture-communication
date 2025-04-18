import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { StoryNode, StyleType } from "@/data/storyData";

type Props = {
  storyNode: StoryNode;
  onOptionPress: (nextKey: string, style?: StyleType) => void;
};

const StoryCard: React.FC<Props> = ({ storyNode, onOptionPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{storyNode.text}</Text>
      {storyNode.options.map((option, index) => (
        <View key={index} style={styles.button}>
          <Button
            title={option.text}
            onPress={() => onOptionPress(option.next, option.style)}
          />
        </View>
      ))}
    </View>
  );
};

export default StoryCard;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 100,
  },
  text: {
    fontSize: 20,
    marginBottom: 24,
  },
  button: {
    marginVertical: 8,
  },
});
