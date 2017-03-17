import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View} from "react-vr";
import Ingest from "./components/ingest";
import Analytics from "./components/analytics";
import OPAT from "./components/opat";
import TCPI_Web_App from "./components/tcpi_web_app";

class DEF_REACT_VR1 extends React.Component {
  render() {
    return (
        <View>
          <Pano source={asset('desert.jpg')}/>
          <Text
              style={{
                //backgroundColor: '#777879',
                fontSize: 0.8,
                layoutOrigin: [0.5, 0.5],
                paddingLeft: 0.2,
                paddingRight: 0.2,
                textAlign: 'center',
                textAlignVertical: 'center',
                transform: [{translate: [0, 0, -3]}],
              }}>
            TCPI Dev Team
          </Text>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            layoutOrigin: [0.6, 0.3]
          }}>
            <Ingest/>
            <OPAT/>
            <Analytics/>
            <TCPI_Web_App/>
          </View>
        </View>
    );
  }
}


AppRegistry.registerComponent('DEF_REACT_VR1', () => DEF_REACT_VR1);
