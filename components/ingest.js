import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View} from "react-vr";

export default class Ingest extends React.Component {
  render() {
    return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          width: 6,
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
            Data-Hub-Ingest
          </Text>
          <Text
              style={{
                fontSize: 0.3,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}>
            JavaScript | Node.js
          </Text>
        </View>
    )
  }
}