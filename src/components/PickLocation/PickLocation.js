import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const PickLocation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.placeholder}>
        <Text>Map</Text>
      </View>
      <View style={styles.button}>
        <Button title="Locate Me" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center"
  },
  button: {
    margin: 8
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  }
});

export default PickLocation;
