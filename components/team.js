import React from "react";
import {AppRegistry, asset, StyleSheet, Pano, Text, View} from "react-vr";

export default class Team extends React.Component {
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
          height: 6,
          transform: [{translate: [0, 0, -3]}, {scale: 1},],
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
            TCPI Dev Team
          </Text>

          {this.state.gazeEnabled ?
              <View>
                <TeamMember name="Diandra Ryan-Mas"/>
                <TeamMember name="Chris Wetterman"/>
                <TeamMember name="Davis Ford"/>
                <TeamMember name="Andrew Mshar"/>
                <TeamMember name="Tiffany Hamilton"/>
                <TeamMember name="Melvin Dunn"/>
              </View>
              : null}
        </View>

    )
  }
}

class TeamMember extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired
  };

  render() {
    return (
        <Text
            style={{
              fontSize: 0.3,
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
          {this.props.name}
        </Text>
    )
  }
}
