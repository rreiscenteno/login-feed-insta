import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './src/pages/Login';
import Feed from './src/pages/feed/Feed';

const app = createStackNavigator(
  {
    Login,
    Feed,
  },
  {
    headerMode: 'none',
  }
);
export default createAppContainer(app);
