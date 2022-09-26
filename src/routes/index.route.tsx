import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Private from './private.route';
import Public from './public.route';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Common from './common.route';

const MainStack = createNativeStackNavigator()

function RouteIndex() {
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen name="common" component={Common} />
                <MainStack.Screen name="public" component={Public} />
                <MainStack.Screen name="private" component={Private} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

export default RouteIndex;