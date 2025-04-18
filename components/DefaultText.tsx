import React from "react";
import { Text, TextProps } from "react-native";

export default function DefaultText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[{ fontFamily: "Nunito_400Regular" }, props.style]}
    />
  );
}
