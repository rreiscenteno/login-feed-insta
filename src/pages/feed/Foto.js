import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Estilo from '../../estilos/EstiloFeed';
import {
  BiHeart,
  BiMessageRounded,
  BiPaperPlane,
  BiBookmark,
  BiDotsVerticalRounded,
} from 'react-icons/bi';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function (props) {
  let [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../../fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../../fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View>
      <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
        <Image style={Estilo.fotomenu} source={require('images/gau.jpg')} />
        <Text style={{ fontFamily: 'Roboto-Bold', marginTop: 7}}> Gaulês</Text>
        <BiDotsVerticalRounded
          style={{ paddingLeft: 230 }}
          size={25}
          color="black"
        />
      </View>

      <Image style={styles.ft} source={require('images/gau.jpg')} />

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: 5,
          marginTop: 4,
        }}>
        <BiHeart size={27} color="black" />
        <BiMessageRounded size={27} color="black" />
        <BiPaperPlane size={27} color="black" />
        <BiBookmark style={{ paddingLeft: 230 }} size={27} color="black" />
      </View>

      <Text
        style={{
          fontFamily: 'Roboto-Bold',
          paddingHorizontal: 7,
          marginTop: 4,
        }}>
        777 curtidas
      </Text>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          paddingHorizontal: 5,
        }}>
        <Text style={{ fontFamily: 'Roboto-Bold' }}> Gaulês </Text>
        <Text style={{ fontFamily: 'Roboto-Regular' }}> Jame Day!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ft: {
    width: '350px',
    height: '350px',
    marginTop: 10,
  },
});
