import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Estilo from '../../estilos/EstiloFeed';
import { LinearGradient } from 'expo-linear-gradient';

export default function (props) {
  return (
    <View style={{marginLeft: '8px'}}>
      <LinearGradient
        colors={['#F0B264', '#DE69E2']}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={{
          height: 52,
          width: 52,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
        }}>
        <Image style={Estilo.fotoStory} source={props.foto} />
      </LinearGradient>

      <Text style={Estilo.conteudostorie}>{props.nome}</Text>
    </View>
  );
}
