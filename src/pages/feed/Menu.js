import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import Home from '../navigator/Home';
import Explorar from '../navigator/Explorar';
import Create from '../navigator/Create';
import Shop from '../navigator/Shop';
import Perfil from '../navigator/Perfil';

import { View, StyleSheet, Image } from 'react-native';
import { CgHomeAlt, CgSearch, CgAddR, CgShoppingBag } from 'react-icons/cg';
import Estilo from '../../estilos/EstiloFeed';

const Navigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
          tabBarIcon: ({tintColor}) => <CgHomeAlt size={30} color="black" />,
          labeled: false,
      },
    },
    Explorar: {
      screen: Explorar,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <CgSearch size={28} color="black" />,
            labeled: false
        },
    },
    Create: {
      screen: Create,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <CgAddR size={30} color="black" />,
            labeled: false
        },
    },
      Shop: {
          screen: Shop,
          navigationOptions: {
              tabBarIcon: ({tintColor}) => <CgShoppingBag size={30} color="black" />,
              labeled: false
          },
      },
    Perfil: {
      screen: Perfil,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Image style={Estilo.fotomenu} source={require('images/eu.jpg')} />,
            labeled: false
        },
    },
  },
  {
      shifting: true,
      initialRouteName: 'Home',
      activeColor: '#000',
      inactiveColor: '#999',
      
      tabBarOptions: {
          activeTintColor: '#e91e63',
      },
        barStyle: {backgroundColor: '#fff', paddingBottom: 30},
  },
);

export default createAppContainer(Navigator);

