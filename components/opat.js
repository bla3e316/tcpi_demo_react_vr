import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Image} from "react-vr";

export default class OPAT extends React.Component {
  render() {
    return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          width: 5,
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
            OPAT
          </Text>
          <Text
              style={{
                fontSize: 0.3,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}>
            JavaScript | React | Electron
          </Text>

          {/*TODO: Make this drop down on gaze*/}
          {/*<Image*/}
              {/*style={{width: 2, height: 2}}*/}
              {/*source={require('../static_assets/opat1.png')}*/}
          {/*/>*/}

        </View>
    )
  }
}