import React, { Component } from "react";
import { Button, Image, View, StyleSheet } from "react-native";

export default class PickImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image
            source={require("../../assets/beautiful-place.jpg")}
            style={styles.previewImage}
          />
        </View>
        <View style={styles.button}>
          <Button title="Pick Image" onPress={() => {}} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center"
  },
  previewImage: {
    width: "100%",
    height: "100%"
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
