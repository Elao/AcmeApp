import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

export default class Icon extends Component {
  /**
   * Liste les pictograme disponibles en faisant correspondre un nom à chaque code UTF8
   */
  static icons = {
    'elao': '\u{e900}',
    'home': '\u{e902}',
    'pencil': '\u{e905}',
    'camera': '\u{e90f}',
  };

  /**
   * On créer un style de base pour les icon qui utilise notre police personalisée
   */
  static styles = StyleSheet.create({
    icon: {
      fontFamily: 'acmeIcon',
    },
  });

  static propTypes = () => ({
    // On déclare une propType "icon" qui servira à selectionner le pictogramme
    icon: PropTypes.oneOf(Object.keys(Icon.icons)).isRequired,
    // On reprends la propType "style" du composant Text
    style: Text.propTypes.style,
  });

  /**
   * Certaine propriété CSS font bugger l'affichage des polices personalisées sur Android.
   * Nous preferons donc les exclures des styles à appliquer au pictogramme.
   */
  safeIconStyle(styles) {
    const style = StyleSheet.flatten(styles);

    delete style.fontWeight;

    return style;
  }

  /**
   * On rends un composant Text contenant le pictogramme demandé
   */
  render() {
    const { icons, styles } = this.constructor;
    const { icon, style } = this.props;

    return <Text style={this.safeIconStyle([styles.icon, style])}>{icons[icon]}</Text>;
  }
}
