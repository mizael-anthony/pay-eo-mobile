import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/public/home/home.component';

const PublicStack = createNativeStackNavigator();

function Public() {
  return (
      <PublicStack.Navigator>
        <PublicStack.Screen name="home" component={Home} />
      </PublicStack.Navigator>
  );
}

export default Public;