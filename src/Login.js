import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import I18n from 'react-native-i18n';

export default class Login extends Component {
  static styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
    input: {
      borderColor: 'grey',
      borderWidth: 1,
      height: 40,
      width: 120,
    },
  });

  componentDidMount() { console.log(`✅ ${this.constructor.name}`); }
  componentWillUnmount() { console.log(`❌ ${this.constructor.name}`); }

  render() {
    const { styles } = this.constructor;

    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Login" name="login" />
        <TextInput style={styles.input} placeholder="Password" name="password" secureTextEntry />
        <Button title={I18n.t('screen.login')} onPress={this.props.login} />
      </View>
    );
  }
}
