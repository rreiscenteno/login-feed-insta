import React, { Component } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

import Titulo from './Titulo';
import Stories from './Stories';
import Foto from './Foto';
import Menu from './Menu';

export default class Feed extends Component {
  render() {
    return (
      <View>
        <Titulo></Titulo>
        <Stories></Stories>
        <Foto></Foto>
        <Menu></Menu>
      </View>
    );
  }
}
