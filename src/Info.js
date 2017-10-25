import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import Config from 'react-native-config';
import I18n from 'react-native-i18n';

export default class Infos extends Component {
  static navigationOptions = {
    title: I18n.t('screen.info'),
  };

  static styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    infos: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });

  componentDidMount() { console.log(`✅ ${this.constructor.name}`); }
  componentWillUnmount() { console.log(`❌ ${this.constructor.name}`); }

  render() {
    const { styles } = this.constructor;
    const { back } = this.props.navigation;
    const { APP_ID, APP_ENV, APP_VERSION, APP_BUILD } = Config;
    const { OS } = Platform;

    return (
      <View style={styles.container}>
        <Text style={styles.infos}>
          AcmeApp ({APP_ID})
        </Text>
        <Text style={styles.infos}>
          v{APP_VERSION} build {APP_BUILD}
        </Text>
        <Text style={styles.infos}>
          [{APP_ENV}] on {OS}
        </Text>
        <Button title={I18n.t('screen.logout')} onPress={() => this.props.navigation.goBack() } />
      </View>
    );
  }
}
