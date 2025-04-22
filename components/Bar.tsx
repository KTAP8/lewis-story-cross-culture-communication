import { View, Text, StyleSheet } from "react-native";
const Bar = ({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) => {
  const max = 5; // or use Math.max(...) dynamically if you want
  const percentage = (value / max) * 100;

  return (
    <View style={styles.barWrapper}>
      <Text style={styles.barLabel}>{label}</Text>
      <View style={styles.barTrack}>
        <View
          style={[
            styles.barFill,
            { width: `${percentage}%`, backgroundColor: color },
          ]}
        />
      </View>
    </View>
  );
};

export default Bar;

const styles = StyleSheet.create({
  barWrapper: {
    flexDirection: "column",
  },

  barLabel: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    color: "#4c4c4c",
    fontFamily: "SpecialGothic",
  },

  barTrack: {
    height: 16,
    backgroundColor: "#eee",
    borderRadius: 12,
    overflow: "hidden",
  },

  barFill: {
    height: "100%",
    borderRadius: 12,
  },
});
