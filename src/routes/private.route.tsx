import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../components/private/dashboard/dashboard.component';

const PrivateStack = createNativeStackNavigator();

function Private() {
  return (
      <PrivateStack.Navigator>
        <PrivateStack.Screen name="home" component={Dashboard} />
      </PrivateStack.Navigator>
  );
}

export default Private;