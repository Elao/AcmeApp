import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Config from 'react-native-config';

export default class App extends Component {
  static styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff'
    },
    infos: {
      textAlign: 'center',
      color: '#333333',
    },
  });

  render() {
    const { styles } = App;
    const { APP_ENV, APP_VERSION, APP_BUILD } = Config;
    const { OS } = Platform;

    return (
      <View style={styles.container}>
        <Text style={styles.infos}>
          AcmeApp v{APP_VERSION} build {APP_BUILD}
        </Text>
        <Text style={styles.infos}>
          [{APP_ENV}] on {OS}
        </Text>
      </View>
    );
  }
}
