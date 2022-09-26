import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PublicLayout from '../components/public/PublicLayout/PublicLayout.component';

const PublicStack = createNativeStackNavigator();

function Public() {
    return (
        <PublicStack.Navigator>
            <PublicStack.Screen name="Home" component={PublicLayout} />
        </PublicStack.Navigator>
    );
}

export default Public;