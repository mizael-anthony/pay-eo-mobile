import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Private from './private.route';
import Public from './public.route';

function RouteIndex() {
  return (
    <NavigationContainer>
        <Public/>
        <Private/>
    </NavigationContainer>
  );
}

export default RouteIndex;