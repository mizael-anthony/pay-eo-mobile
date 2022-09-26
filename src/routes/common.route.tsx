import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Common/Home/home.component';

const CommonStack = createNativeStackNavigator();

function Common() {
    return (
        <CommonStack.Navigator>
            <CommonStack.Screen name="Home" component={Home} />
        </CommonStack.Navigator>
    );
}

export default Common;