import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View} from "react-vr";

export default class Ingest extends React.Component {
  constructor() {
    super();
    this.state = {
      gazeEnabled: false
    };
  }

  render() {
    return (
        <View style={{
          width: 5,
          height: 3,
          transform: [
            {translate: [2, 0, -1]}, {scale: 1},
            {rotateY: 0}, {rotateX: 0}
          ],
        }}
              onEnter={() => this.setState({gazeEnabled: true})}
              onExit={() => this.setState({gazeEnabled: false})}
        >
          <Text
              style={{
                backgroundColor: this.state.gazeEnabled ? 'red' : '#777879',
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