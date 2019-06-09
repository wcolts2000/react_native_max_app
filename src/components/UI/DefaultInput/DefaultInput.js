import React from "react";
import { TextInput, StyleSheet } from "react-native";

const DefaultInput = props => {
  return (
    <TextInput
      underlineColorAndroid="transparent"
      {...props}
      style={[
        styles.input,
        props.style,
        !props.valid && props.touched ? styles.inValid : null
      ]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    marginVertical: 8
  },
  inValid: {
    backgroundColor: "#f9c0c0",
    borderColor: "red"
  }
});

export default DefaultInput;
