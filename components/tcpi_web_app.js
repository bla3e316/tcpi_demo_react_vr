import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View} from "react-vr";

export default class TCPI_Web_App extends React.Component {
  render() {
    return (
        <View style={{
          flex: 1,
          width:5,
          flexDirection: 'column',
          //layoutOrigin: [1.5, 0.3],
          transform: [
            {translate: [0, 0, -3]}, {scale: 1},
            {rotateY: 0}, {rotateX: 0}
          ],
          paddingLeft: 0.3,
          paddingRight: 0.3,
        }}>
          <Text
              style={{
                backgroundColor: '#777879',
                fontSize: 0.6,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}>
            TCPI Web App
          </Text>
          <Text
              style={{
                fontSize: 0.3,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}>
            Django | React
          </Text>
        </View>
    )
  }
}