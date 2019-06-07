import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ButtonWithBackground = props => {
  // We make this to combat IoS background default button styling
  // by spreading props and styles in an array, we can pass it custom styles to override or add to these base styles when we use this component
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.button, { backgroundColor: props.color }]}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "cyan"
  },
  text: {
    color: "white"
  }
});

export default ButtonWithBackground;
