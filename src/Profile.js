import React, { Component } from 'react';
import { View, Button } from 'react-native';
import I18n from 'react-native-i18n';
import { NavigationActions } from 'react-navigation';

export default class Profile extends Component {
  static navigationOptions = {
    title: I18n.t('screen.profile'),
  };

  componentDidMount() { console.log(`✅ ${this.constructor.name}`); }
  componentWillUnmount() { console.log(`❌ ${this.constructor.name}`); }

  render() {
    return (
      <View>
        <Button title={I18n.t('screen.logout')} onPress={this.props.screenProps.logout} />
      </View>
    );
  }
}
