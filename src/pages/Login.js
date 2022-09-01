import React, {Component} from 'react';
import {Text, View, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import EstiloLogin from '../estilos/EstiloLogin'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      usuario: "",
      senha: "",
      mensagem: ""
    }
  }

  entrar() {
    this.props.navigation.navigate("Feed");
  } 

  render() {
    return <View style={EstiloLogin.container}>
      <Text style={EstiloLogin.lingua}> Português (Brasil)  
      <Icon style={EstiloLogin.margemSeta} name="angle-down" />
      </Text>

      <Image style={EstiloLogin.logo} source={require("images/instagram_logo.png")}/>

      <TextInput  style={EstiloLogin.input} value={this.state.usuario}
      onChangeText={(usuario)=>this.setState({usuario})} placeholder=" Telefone, E-mail ou Nome do Usuário"/>

      <TextInput  style={EstiloLogin.input} value={this.state.senha}
      onChangeText={(senha)=>this.setState({senha})} placeholder="Senha"/>

      <View style={EstiloLogin.forgotContainer}>
        <TouchableOpacity>
          <Text style={EstiloLogin.forgotText}> Esqueceu sua senha? </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={EstiloLogin.loginbutton}> 
        <Text style={EstiloLogin.loginText} onPress={this.entrar.bind(this)}> Entrar </Text>
      </TouchableOpacity>
    </View>
  }


}