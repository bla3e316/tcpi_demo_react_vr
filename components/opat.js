import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View, Image} from "react-vr";

export default class OPAT extends React.Component {
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
          height: 8,
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

          {this.state.gazeEnabled ?
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Image
                    style={{width: 3, height: 2}}
                    source={{uri: 'http://daviseford.com/tcpi-react-vr/static_assets/opat1.png'}}
                />
                <Image
                    style={{width: 3, height: 2,}}
                    source={{uri: 'http://daviseford.com/tcpi-react-vr/static_assets/opat2.png'}}
                />
              </View>

              : null}

        </View>
    )
  }
}