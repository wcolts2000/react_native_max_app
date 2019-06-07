import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleSheet
} from "react-native";

const ButtonWithBackground = props => {
  const content = (
    <View style={[styles.button, { backgroundColor: props.color }]}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
  // We make this to combat IoS background default button styling
  // by spreading props and styles in an array, we can pass it custom styles to override or add to these base styles when we use this component
  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
        {content}
      </TouchableNativeFeedback>
    );
  }
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
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
