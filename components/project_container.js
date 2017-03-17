import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View} from "react-vr";
import Ingest from "./ingest";
import Analytics from "./analytics";
import OPAT from "./opat";
import TCPI_Web_App from "./tcpi_web_app";
import Team from "./team";

export default class Project_Container extends React.Component {
  render() {
    return (
        <View style={{
          flex: 1,
          flexDirection: 'row',
          layoutOrigin: [0.5, 0.3],
          transform: [
            {translate: [0, 0, -3]},
            {rotateY: 20}, {rotateX: 0}
          ],
        }}>
          <View style={{
            flex: 1,
            width: 10,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{rotateY: 30}],
          }}>
            <Ingest/>
            <OPAT/>
          </View>

          <Team/>


          <View style={{
            flex: 1,
            width: 10,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{rotateY: -30}],
          }}>
            <Analytics/>
            <TCPI_Web_App/>
          </View>
        </View>
    );
  }
}