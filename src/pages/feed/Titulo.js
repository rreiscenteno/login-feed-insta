import React from 'react';
import { Image, View } from 'react-native';
import EstiloLogin from '../../estilos/EstiloLogin';
import { BiNavigation } from 'react-icons/bi';



export default function (props) {
  return (
    <View style={{marginBottom: '-3%', flex: 1, flexDirection: "row"}}>
      <Image style={EstiloLogin.titulo} source={require('images/instagram_logo.png')} />
      <BiNavigation style={{marginTop: 18, marginLeft: 200}} size={28} color="black" />
    </View>
  );
}
