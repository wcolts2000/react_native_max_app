import React, { Component } from "react";
import { View, ImageBackground, Button, StyleSheet } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import MB_Spacer from "../../components/UI/MB_Spacer/MB_Spacer";
import backgroundImage from "../../assets/background.jpg";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.image}>
        <View style={styles.container}>
          <MB_Spacer>
            <MainText>
              <HeadingText>Please Log In</HeadingText>
            </MainText>
          </MB_Spacer>
          <ButtonWithBackground
            color="#29aaf4"
            onPress={() => alert("pressed")}
          >
            Switch to Login
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="You're E-mail Address"
              style={styles.input}
            />
            <DefaultInput
              placeholder="You're Password"
              style={[styles.input, { borderColor: "red" }]}
            />
            <DefaultInput placeholder="Confirm Password" style={styles.input} />
          </View>
          <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>
            Submit
          </ButtonWithBackground>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    flex: 1
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#bbb"
  }
});

export default AuthScreen;
