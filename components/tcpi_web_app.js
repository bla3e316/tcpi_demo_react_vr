import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Image} from "react-vr";

export default class TCPI_Web_App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gazeEnabled: false
    };
  }

  render() {
    return (
        <View style={{
          width: 5,
          height: 8,
          transform: [
            {translate: [-2, 0, -1]}, {scale: 1},
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

          {this.state.gazeEnabled ?
              <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Image
                    style={{width: 2, height: 2}}
                    source={require('../static_assets/tcpi_web_app.png')}
                />
              </View>

              : null}

        </View>
    )
  }
}