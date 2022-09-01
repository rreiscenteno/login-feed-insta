import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Story from './Story';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function (props) {
  let [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../../fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ScrollView
      style={{ flex: 1 }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <Story nome="Seu Storie" foto={require('images/eu.jpg')}></Story>
      <Story nome="bt0" foto={require('images/bt.jpg')}></Story>
      <Story nome="Lima" foto={require('images/limas.jpg')}></Story>
      <Story nome="Gaulês" foto={require('images/gau.jpg')}></Story>
      <Story nome="MchAGG" foto={require('images/mch.jpg')}></Story>
      <Story nome="Mini G" foto={require('images/minig.jpeg')}></Story>
      <Story nome="Velho Vamp" foto={require('images/vamp.jpg')}></Story>
    </ScrollView>
  );
}
