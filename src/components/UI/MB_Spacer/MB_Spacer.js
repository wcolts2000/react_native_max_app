import React from "react";
import { View, StyleSheet } from "react-native";

const MB_Spacer = props => {
  // by spreading props and styles in an array, we can pass it custom styles to override or add to these base styles when we use this component
  return (
    <View {...props} style={[styles.marginBottomView, { ...props.style }]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  marginBottomView: {
    marginBottom: 30
  }
});

export default MB_Spacer;
