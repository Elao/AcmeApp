import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import I18n from 'react-native-i18n';

export default class Home extends Component {
  static navigationOptions = ({ navigation, props }) => {
    const { navigate } = navigation;

    return {
      title: I18n.t('screen.home'),
      headerLeft: <Button title={I18n.t('screen.profile')} onPress={() => navigate('DrawerOpen')} />,
    };
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
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.infos}>{I18n.t('common.hello')}</Text>
        <Button title={I18n.t('screen.info')} onPress={() => navigate('Info')} />
      </View>
    );
  }
}
