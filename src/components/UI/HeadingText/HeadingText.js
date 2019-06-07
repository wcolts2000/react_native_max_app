import React from "react";
import { Text, StyleSheet } from "react-native";

// by spreading props and styles in an array, we can pass it custom styles to override or add to these base styles when we use this component
const HeadingText = props => (
  <Text {...props} style={[styles.textHeading, { ...props.style }]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 28,
    fontWeight: "bold"
  }
});

export default HeadingText;
