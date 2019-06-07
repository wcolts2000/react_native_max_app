import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import PlaceInput from "../../components/PlaceInput/PlaceInput";
import { addPlace } from "../../store/actions";

class SharePlace extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  render() {
    console.log("ypo");
    return (
      <View style={{ padding: 22 }}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SharePlace);
