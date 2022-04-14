import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as TYPES_SCREEN from './types';
import Screens from '../screens';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      headerMode="float"
      initialRouteName={TYPES_SCREEN.FEED_NEWS_SCREEN}>
      <RootStack.Screen
        name={TYPES_SCREEN.FEED_NEWS_SCREEN}
        options={{headerShown: true}}
        component={Screens.NewsFeed}
      />
      <RootStack.Screen
        name={TYPES_SCREEN.NEWS_SCREEN}
        options={{headerShown: true}}
        component={Screens.NewsFeed}
      />
    </RootStack.Navigator>
  );
};
const Root = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Root;
