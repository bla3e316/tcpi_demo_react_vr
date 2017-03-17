import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View} from "react-vr";
import Project_Container from "./components/project_container";
import Team from "./components/team";

class DEF_REACT_VR1 extends React.Component {
  render() {
    return (
        <View>
          <Pano source={asset('desert.jpg')}/>

          <Project_Container/>
          <Team/>
        </View>
    );
  }
}


AppRegistry.registerComponent('DEF_REACT_VR1', () => DEF_REACT_VR1);
