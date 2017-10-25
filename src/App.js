import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import I18n from './I18n';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';
import Info from './Info';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      authenticated: false,
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({ authenticated: true });
  }

  logout() {
    this.setState({ authenticated: false });
  }

  render() {
    if (!this.state.authenticated) {
        return <Login login={this.login} />;
    }

    const Navigator = StackNavigator({
      Home: { screen: DrawerNavigator(
        { Home: { screen: Home } },
        { contentComponent: Profile }
      )},
      Info: { screen: Info },
    });

    return <Navigator screenProps={{ logout: this.logout }} />;
  }
}
