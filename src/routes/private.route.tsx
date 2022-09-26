import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from '../components/private'
import { NavigationContainer } from '@react-navigation/native';

const PrivateStack = createNativeStackNavigator();

function Private() {
  return (
    <PrivateStack.Navigator>
      <PrivateStack.Screen name="Dashboard" component={Dashboard} />
    </PrivateStack.Navigator>
  );
}

export default Private;